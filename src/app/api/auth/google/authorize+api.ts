/** @format */

import { GOOGLE_AUTH_CALLBACK_PATH } from "@/app-colocation/api/constants";
import { BASE_URL, GOOGLE_AUTH_URL, GOOGLE_CLIENT_ID } from "@/constants";
import type { Prompt } from "expo-auth-session";

/**@see {@link https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest} */
interface OpenIDAuthRequestConfig {
	client_id: string;
	redirect_uri: string;
	response_type: "code";
	/**
	 * @see {@link https://developers.google.com/identity/protocols/oauth2/scopes#google-sign-in}
	 */
	scope: "openid profile email";
	state: string;
	prompt: `${Prompt}`;
}

export function GET(request: Request) {
	const url = new URL(request.url);

	const state = url.searchParams.get("state");
	if (!state) {
		return Response.json({ error: "Invalid state" }, { status: 400 });
	}

	const params = new URLSearchParams({
		client_id: GOOGLE_CLIENT_ID,
		redirect_uri: BASE_URL + GOOGLE_AUTH_CALLBACK_PATH,
		response_type: "code",
		scope: "openid profile email",
		state,
		prompt: "select_account",
	} satisfies OpenIDAuthRequestConfig);

	return Response.redirect(GOOGLE_AUTH_URL + "?" + params.toString());
}
