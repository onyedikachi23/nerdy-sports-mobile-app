/** @format */

/** @format */

import { ButtonGroup } from "@/components/ui/button";

/** @format */

import { Text } from "@/components/ui/text";

/** @format */

import { Heading } from "@/components/ui/heading";

/** @format */

import { Box } from "@/components/ui/box";

/** @format */

/** @format */

import { Image } from "@/components/ui/image";

/** @format */

import { AuthButton as ExternalAuthButton } from "@/components/app/auth/auth-button";
import { BoxScreen } from "@/components/ui-extended/box";
import { ThemedLinearGradient } from "@/components/ui-extended/linear-gradient";
import { Link } from "expo-router";
import type React from "react";

const AuthButton: typeof ExternalAuthButton = ({
	authAction,
	children,
	...props
}) => (
	<Link href={`/${authAction}`} asChild>
		<ExternalAuthButton {...props} authAction={authAction}>
			{children}
		</ExternalAuthButton>
	</Link>
);

export default function HomeScreen() {
	return (
		<BoxScreen className="relative bg-transparent" asChild>
			<ThemedLinearGradient
				colors={["primary-600", "primary-700", "primary-900"]}>
				<Image
					size="full"
					className="rounded-2xl object-cover"
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
								<AuthButton authAction="login">
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
