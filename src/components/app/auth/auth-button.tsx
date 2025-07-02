/** @format */

/** @format */

import { Button, ButtonText } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type React from "react";

interface AuthButtonProps
	extends SafeOmit<React.ComponentProps<typeof Button>, "action"> {
	authAction: "signup" | "login";
	children: string;
	className?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
	authAction,
	children,
	variant = "solid",
	size = "xl",
	className,
	...props
}) => (
	<Button
		{...props}
		action={authAction === "signup" ? "secondary" : "primary"}
		variant={variant}
		size={size}
		className={cn(
			"rounded-full",
			authAction === "login" && "border",
			className,
		)}>
		<ButtonText className="flex-1 text-center">{children}</ButtonText>
	</Button>
);

export { AuthButton };
export type { AuthButtonProps };
