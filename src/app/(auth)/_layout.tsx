/** @format */

import { BlurredGradientBg } from "@/components/app/auth/blurred-gradient-bg";
import { AppLogoWithText } from "@/components/ui-common/app-logo";
import {
	BOX_SCREEN_PADDING,
	BoxScreen,
	Box,
} from "@/components/ui-extended/box";
import { Image } from "@/components/ui-extended/image";
import { Slot } from "expo-router";
import type React from "react";

// was not imported from react-native because scrolling on touch gesture won't
// work (maybe because of the complex positioning.)
import { ScrollView } from "react-native-gesture-handler";

export default function AuthLayout() {
	return (
		<BoxScreen
			className="relative items-center justify-center gap-12"
			style={{
				paddingBottom: BOX_SCREEN_PADDING * 2,
			}}>
			{/* background image */}
			<Box className="absolute inset-0">
				<Image
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					source={require("@/assets/images/auth-bg.webp")}
					alt="minimalist 3d render dark background"
					className="absolute inset-0 object-cover"
				/>
			</Box>

			<AppLogoWithText />

			<Box className="relative z-50 max-h-[80%] w-full">
				<BlurredGradientBg />
				<ScrollView>
					<Slot />
				</ScrollView>
			</Box>
		</BoxScreen>
	);
}
