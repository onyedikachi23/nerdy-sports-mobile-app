/** @format */

import type React from "react";
import {
	Image as ExpoImage,
	type ImageProps as ExpoImageProps,
} from "expo-image";
import { cssInterop } from "nativewind";

// translate Tailwind classes applied to Expo Image
cssInterop(ExpoImage, { className: "style" });

type ImageProps = Prettify<
	RequireKeys<
		SafeOmit<ExpoImageProps, "accessibilityLabel">, // alt is an alias for this
		"source" | "alt"
	>
>;

const Image: React.FC<ImageProps> = ({
	role = "img",
	transition = 1000,
	alt,
	...props
}) => {
	return (
		<ExpoImage
			{...props}
			aria-label={props["aria-label"] ?? alt}
			role={role}
		/>
	);
};

export { Image };
export type { ImageProps };
