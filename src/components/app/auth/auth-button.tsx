/** @format */

/** @format */

import { Button, ButtonText } from "@/components/ui/button";

import type React from "react";

interface AuthButtonProps {
	authAction: "signup" | "login";
	children: string;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
	authAction,
	children,
}) => (
	<Button
		action={authAction === "signup" ? "secondary" : "primary"}
		variant={"solid"}
		size={"xl"}
		className="rounded-full">
		<ButtonText>{children}</ButtonText>
	</Button>
);
