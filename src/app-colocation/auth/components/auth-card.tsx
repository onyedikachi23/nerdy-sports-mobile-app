/** @format */

import {
	LinkButton,
	type LinkButtonProps,
} from "@/components/ui-common/link-button";
import {
	Button,
	ButtonGroup,
	ButtonText,
	type ButtonGroupProps,
	type ButtonProps,
} from "@/components/ui-extended/button";
import { Image } from "@/components/ui-extended/image";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { FormApiWithDefaults } from "@/types/tanstack-form";
import type React from "react";

interface AuthCompProps {
	children: React.ReactNode;
	className?: string;
}

export const AuthCard: React.FC<AuthCompProps> = ({ className, children }) => (
	<Card variant="ghost" className={cn("gap-4", className)}>
		{children}
	</Card>
);

export const AuthCardHeading: React.FC<AuthCompProps> = ({
	className,
	children,
}) => (
	<Heading size="2xl" className={cn("text-center capitalize", className)}>
		{children}
	</Heading>
);

export const AuthCardDescription: React.FC<AuthCompProps> = ({
	className,
	children,
}) => (
	<Text size="sm" className={cn("text-center", className)}>
		{children}
	</Text>
);

interface AuthButtonGroupProps extends AuthCompProps {
	children: ButtonGroupProps["children"];
}
export const AuthButtonGroup: React.FC<AuthButtonGroupProps> = ({
	className,
	children,
}) => <ButtonGroup className={cn("my-4", className)}>{children}</ButtonGroup>;

interface AuthButtonProps extends ButtonProps {
	children: React.ReactNode;
}
export const AuthButton: React.FC<AuthButtonProps> = ({
	className,
	children,
	action = "secondary",
	size = "xl",
	...props
}) => (
	<Button
		{...props}
		className={cn("h-16 rounded-2xl", className)}
		{...{ action, size }}>
		{children}
	</Button>
);

interface AuthFormButtonProps extends SafeOmit<AuthButtonProps, "onPress"> {
	form: FormApiWithDefaults;
	/**Will be from the mutation state not the form state */
	isSubmitting: boolean;
}
export const AuthFormButton: React.FC<AuthFormButtonProps> = ({
	form,
	className,
	children,
	disabled,
	isSubmitting,
	...props
}) => (
	<form.Subscribe
		selector={({ canSubmit }) => ({
			canSubmit,
		})}>
		{({ canSubmit }) => {
			const isDisabled = !canSubmit || isSubmitting || disabled; // order matters
			return (
				<AuthButton
					{...props}
					onPress={() => void form.handleSubmit()}
					className={className}
					disabled={isDisabled}>
					<ButtonText>{children}</ButtonText>
				</AuthButton>
			);
		}}
	</form.Subscribe>
);

type AuthGoogleButtonProps = RequireKeys<
	AuthButtonProps,
	"disabled" | "onPress"
>;
export const AuthGoogleButton: React.FC<AuthGoogleButtonProps> = ({
	className,
	children,
	...props
}) => (
	<AuthButton
		{...props}
		className={cn(
			"flex justify-center gap-4 bg-background-900 data-[active=true]:bg-background-700",
			className,
		)}>
		<Image
			source={{
				uri: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
			}}
			alt="Google logo"
			className="size-8"
		/>
		<ButtonText className="capitalize text-typography-900 data-[active=true]:text-typography-700">
			{children}
		</ButtonText>
	</AuthButton>
);

type AuthLinkButtonProps = AuthCompProps & Pick<LinkButtonProps, "href">;
export const AuthLinkButton: React.FC<AuthLinkButtonProps> = ({
	className,
	children,
	href,
}) => (
	<LinkButton href={href} variant="link" size="sm" className={cn(className)}>
		<ButtonText className="text-primary-300 data-[active=true]:text-primary-500">
			{children}
		</ButtonText>
	</LinkButton>
);
