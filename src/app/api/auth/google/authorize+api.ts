/** @format */

import { GOOGLE_AUTH_CALLBACK_PATH } from "@/app-colocation/api/constants";
import { BASE_URL, GOOGLE_AUTH_URL, GOOGLE_CLIENT_ID } from "@/constants";
import type { Prompt } from "expo-auth-session";
import z from "zod";
import type { StateContextString } from "./callback+api";

/**@see {@link https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest OpenID Auth Request Config} */
interface OpenIDAuthRequestConfig {
	client_id: string;
	redirect_uri: string;
	response_type: "code";
	/**
	 * @see {@link https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in}
	 */
	scope: "openid profile email";
	state: string;
	prompt?: `${Prompt}`;
}

const incomingClientParamsSchema = z.object({
	auth_path: z.templateLiteral(["/", z.string()]),
	redirect_uri: z.string(),
	state: z.string(),
});
type IncomingClientParams = z.infer<typeof incomingClientParamsSchema>;

export function GET(request: Request) {
	const incomingSearchParams = new URL(request.url).searchParams;

	const clientRedirectUri = incomingSearchParams.get("redirect_uri");
	// auth_path is added from AuthRequestConfig["extraParams"] in the client.
	const clientAuthPath = incomingSearchParams.get("auth_path");
	const stateFromClient = incomingSearchParams.get("state");

	const incomingParams = {
		auth_path: clientAuthPath,
		redirect_uri: clientRedirectUri,
		state: stateFromClient,
	} satisfies HasKeysOf<IncomingClientParams>;

	const validationResult =
		incomingClientParamsSchema.safeParse(incomingParams);
	if (!validationResult.success) {
		return Response.json(
			{
				error: "Invalid search params received",
				details: validationResult.error.issues,
			},
			{ status: 400 },
		);
	}

	const validatedParams = validationResult.data;

	const fullClientRedirectUri =
		validatedParams.redirect_uri + validatedParams.auth_path;
	const stateContextString =
		`state=${validatedParams.state}|redirect_uri=${fullClientRedirectUri}` satisfies StateContextString;

	const outgoingSearchParams = new URLSearchParams({
		client_id: GOOGLE_CLIENT_ID,
		redirect_uri: BASE_URL + GOOGLE_AUTH_CALLBACK_PATH,
		response_type: "code",
		scope: "openid profile email",
		state: stateContextString,
		prompt: "select_account",
	} satisfies OpenIDAuthRequestConfig);

	return Response.redirect(
		GOOGLE_AUTH_URL + "?" + outgoingSearchParams.toString(),
	);
}
