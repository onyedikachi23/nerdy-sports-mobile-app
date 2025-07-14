/** @format */

/** @format */

import { ButtonGroup, ButtonText } from "@/components/ui-extended/button";

/** @format */

import { Text } from "@/components/ui/text";

/** @format */

import { Heading } from "@/components/ui/heading";

import { Box } from "@/components/ui/box";

import { Image } from "@/components/ui-extended/image";

import { LinkButton } from "@/components/ui-common/link-button";
import { BoxScreen } from "@/components/ui-extended/box";
import { ThemedLinearGradient } from "@/components/ui-extended/linear-gradient";
import type React from "react";
import { cn } from "@/lib/utils";

interface AuthButtonProps {
	authAction: "signup" | "login";
	children: string;
	className?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
	authAction,
	children,
	className,
}) => (
	<LinkButton
		href={`/${authAction}`}
		action={authAction === "signup" ? "secondary" : "primary"}
		variant={"solid"}
		size={"xl"}
		className={cn("rounded-full", className)}>
		<ButtonText className="flex-1 text-center">{children}</ButtonText>
	</LinkButton>
);

export default function HomeScreen() {
	return (
		<BoxScreen className="relative bg-transparent" asChild>
			<ThemedLinearGradient
				colors={["primary-600", "primary-700", "primary-900"]}>
				<Image
					className="size-full rounded-2xl object-cover"
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					source={require("@/assets/images/footballers-on-field.webp")}
					alt="Hero banner"
				/>

				<Box className="relative">
					<Box className="absolute bottom-4 left-0 p-2">
						<Box className="gap-8 rounded-2xl bg-background-900/50 p-4">
							{/* Hero section */}
							<Box className="gap-6">
								<Box className="gap-3">
									<Text size="2xl">Welcome to</Text>
									<Heading
										size="4xl"
										className="text-secondary-300">
										Nerdy Sports.
									</Heading>
								</Box>

								<Text size="sm">
									Grow your sports career with us, and also
									keep the bond with your supporters!
								</Text>
							</Box>

							{/* Action buttons */}
							<ButtonGroup>
								<AuthButton authAction="signup">
									Join now!
								</AuthButton>
								<AuthButton
									authAction="login"
									className="border">
									Log in
								</AuthButton>
							</ButtonGroup>
						</Box>
					</Box>
				</Box>
			</ThemedLinearGradient>
		</BoxScreen>
	);
}
