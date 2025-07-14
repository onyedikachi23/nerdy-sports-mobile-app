/** @format */

import { BASE_URL } from "@/constants";
import {
	type AuthRequestConfig,
	type DiscoveryDocument,
	makeRedirectUri,
	useAuthRequest,
} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { GOOGLE_AUTH_AUTHORIZE_PATH } from "../api/constants";

WebBrowser.maybeCompleteAuthSession();

/**
 * @see {@link https://developers.google.com/identity#google-sign-in}
 */
type GoogleSigninScope = "openid" | "profile" | "email";
interface GoogleAuthRequestConfig extends AuthRequestConfig {
	scopes: GoogleSigninScope[];
}

const config = {
	clientId: "google", // actual client id will be provided on the authorize api route
	scopes: ["openid", "profile", "email"],
	redirectUri: makeRedirectUri(),
} satisfies GoogleAuthRequestConfig;

const discovery = {
	authorizationEndpoint: BASE_URL + GOOGLE_AUTH_AUTHORIZE_PATH,
	tokenEndpoint: `${BASE_URL}/api/auth/token`, // TODO: Replace with actual backend api
} satisfies DiscoveryDocument;

export const useGoogleSignin = () => {
	const [request, response, promptAsync] = useAuthRequest(config, discovery);

	React.useEffect(() => {
		if (response) {
			alert(`google sign in ${response.type} response received`);
		}
	}, [response]);

	const signIn = React.useCallback(async () => {
		try {
			await promptAsync();
		} catch (err) {
			const errorObj: Error = Error.isError(err)
				? err
				: new Error(typeof err === "string" ? err : "Unknown error");
			return Promise.reject(errorObj);
		}
	}, [promptAsync]);

	return { signIn };
};
