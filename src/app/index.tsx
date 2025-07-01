/** @format */

import { Button, ButtonText } from "@/components/ui/button";

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

import { BoxScreen } from "@/components/ui-extended/box";
import { LinearGradient } from "@/components/ui/linear-gradient";
import { useThemedColor } from "@/hooks/use-themed-color";
import type React from "react";

export default function HomeScreen() {
	const { getHexColor } = useThemedColor();
	return (
		<LinearGradient
			colors={[
				getHexColor("primary-600"),
				getHexColor("primary-700"),
				getHexColor("primary-900"),
			]}
			start={[0.5, 0]} // Top-center
			end={[0.5, 1]} // Bottom-center
			className="flex-1">
			<BoxScreen className="relative bg-transparent">
				<Image
					size="full"
					className="rounded-2xl object-cover"
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					source={require("@/assets/images/footballers-on-field.webp")}
					alt="Hero banner"
				/>

				<Box className="relative">
					<Box className="absolute bottom-4 left-0 p-2">
						<Box className="gap-8 rounded-2xl bg-background-600/50 p-4">
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

								<Text size="xs">
									Grow your sports career with us, and also
									keep the bond with your supporters!
								</Text>
							</Box>

							{/* Action buttons */}
							<Box className="gap-4">
								<Button
									action={"secondary"}
									variant={"solid"}
									size={"xl"}
									className="rounded-full">
									<ButtonText>Join now!</ButtonText>
								</Button>
								<Button
									action={"primary"}
									variant={"solid"}
									size={"xl"}
									className="rounded-full">
									<ButtonText action="secondary">
										Log in
									</ButtonText>
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</BoxScreen>
		</LinearGradient>
	);
}
