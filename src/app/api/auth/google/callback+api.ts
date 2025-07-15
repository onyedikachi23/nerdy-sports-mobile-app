/** @format */

import z from "zod";

const CLIENT_STATE_KEY = "state=";
const CLIENT_REDIRECT_URI_KEY = "redirect_uri=";
const STATE_CONTEXT_SEPERATOR = "|";

export const StateContextStringSchema = z.templateLiteral([
	CLIENT_STATE_KEY,
	z.string(),
	STATE_CONTEXT_SEPERATOR,
	CLIENT_REDIRECT_URI_KEY,
	z.string(),
]);
export type StateContextString = z.infer<typeof StateContextStringSchema>;

const IncomingAuthParamsSchema = z.object({
	code: z.string(), // one-time code returned by Google.
	state: StateContextStringSchema, // state from authorize api that Google returned back to us.
});
type IncomingAuthParams = z.infer<typeof IncomingAuthParamsSchema>;

/**
 * Auth params to return back to client.
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2 OpenID Authorization Response}
 */
interface OpenIDAuthResponseParams {
	code: string;
	/**Original state from the client-side */
	state: string;
}

export function GET(request: Request) {
	const incomingSearchParams = new URL(request.url).searchParams;

	const code = incomingSearchParams.get("code");
	const stateContextString = incomingSearchParams.get("state");
	const incomingParams = {
		code,
		state: stateContextString,
	} satisfies HasKeysOf<IncomingAuthParams>;

	const validationResult = IncomingAuthParamsSchema.safeParse(incomingParams);
	if (!validationResult.success) {
		return Response.json(
			{
				error: "Invalid response params received from Google",
				details: validationResult.error.issues,
			},
			{ status: 400 },
		);
	}
	const validatedParams = validationResult.data;

	const stateContextParts = validatedParams.state.split(
		STATE_CONTEXT_SEPERATOR,
	);
	const clientStatePart = stateContextParts[0]!;
	const redirectUriPart = stateContextParts[1]!;

	const clientState = clientStatePart.split(CLIENT_STATE_KEY)[1]!;
	const clientRedirectUri = redirectUriPart.split(
		CLIENT_REDIRECT_URI_KEY,
	)[1]!;

	const outgoingSearchParams = new URLSearchParams({
		code: validatedParams.code,
		state: clientState,
	} satisfies OpenIDAuthResponseParams);

	return Response.redirect(
		clientRedirectUri + "?" + outgoingSearchParams.toString(),
	);
}
