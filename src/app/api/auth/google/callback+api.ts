/** @format */

import { APP_SCHEME } from "@/constants";
import type { Href } from "expo-router";

interface GoogleAuthReturnValues {
	code: string;
	state: string;
}

export function GET(request: Request) {
	const incomingParams = new URLSearchParams(request.url.split("?")[1]);
	const state = incomingParams.get("state");
	if (!state) {
		return Response.json({ error: "Invalid state" }, { status: 400 });
	}
	const code = incomingParams.get("code");
	if (!code) {
		return Response.json({ error: "Invalid code" }, { status: 400 });
	}

	const outgoingParams = new URLSearchParams({
		code,
		state,
	} satisfies GoogleAuthReturnValues);

	const SIGNUP_PATH = "/signup" satisfies Href;

	return Response.redirect(
		APP_SCHEME + SIGNUP_PATH + "?" + outgoingParams.toString(),
	);
}
