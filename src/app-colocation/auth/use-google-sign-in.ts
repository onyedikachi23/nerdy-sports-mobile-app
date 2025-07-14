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

const config = {
	clientId: "google", // actual client id will be provided on the authorize api route
	redirectUri: makeRedirectUri(),
} satisfies AuthRequestConfig;

const discovery = {
	authorizationEndpoint: BASE_URL + GOOGLE_AUTH_AUTHORIZE_PATH,
	tokenEndpoint: `${BASE_URL}/api/auth/token`, // TODO: Replace with actual backend api
} satisfies DiscoveryDocument;

export const useGoogleSignin = () => {
	const [_, response, promptAsync] = useAuthRequest(config, discovery);

	React.useEffect(() => {
		if (response) {
			alert(`google sign in ${response.type} response received`);
		}
	}, [response]);

	const [isPending, setIsPending] = React.useState(false);
	const signIn = React.useCallback(async () => {
		try {
			setIsPending(true);
			await promptAsync();
		} catch (err) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			const errorObj: Error = Error.isError(err)
				? err
				: new Error(typeof err === "string" ? err : "Unknown error");
			throw errorObj;
		} finally {
			setIsPending(false);
		}
	}, [promptAsync]);

	return { signIn, isPending };
};
