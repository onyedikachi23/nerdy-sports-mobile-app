/** @format */

import type React from "react";
import { Box } from "../ui/box";
import { Image, type ImageProps } from "../ui-extended/image";
import { cn } from "@/lib/utils";
import type { ViewProps } from "react-native";
import { Text } from "../ui/text";
import { BRAND_NAME } from "@/constants";

interface AppLogoProps
	extends OptionalKeys<SafeOmit<ImageProps, "source">, "alt"> {
	containerStyle?: ViewProps["style"];

	containerClassName?: ViewProps["className"];
	/**
	 * **NOTE**: This applies styles to the inner `<Image>` component. Use `props.containerClassName`
	 * for the container.
	 */
	className?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({
	className,
	containerClassName,
	containerStyle,
	alt = "app logo",
	...imageProps
}) => (
	<Box
		className={cn("relative aspect-square h-28 w-auto", containerClassName)}
		style={containerStyle}>
		<Image
			{...imageProps}
			alt={alt}
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			source={require("@/assets/images/logo.svg")}
			className={cn("absolute inset-0", className)}
		/>
	</Box>
);

interface AppLogoWithTextProps {
	classNames?: {
		box?: string;
		logo?: string;
		text?: string;
	};
}

const AppLogoWithText: React.FC<AppLogoWithTextProps> = ({ classNames }) => (
	<Box className={cn("h-fit flex-row items-center gap-4", classNames?.box)}>
		<AppLogo
			containerClassName={cn("h-10 object-contain", classNames?.logo)}
		/>
		<Text className={cn("font-semibold", classNames?.text)}>
			{BRAND_NAME}
		</Text>
	</Box>
);

export { AppLogo, AppLogoWithText };
export type { AppLogoProps, AppLogoWithTextProps };
