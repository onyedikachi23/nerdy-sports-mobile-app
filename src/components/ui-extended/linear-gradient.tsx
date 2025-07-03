/** @format */

import { useThemedColor, type ThemeColorName } from "@/hooks/use-themed-color";
import React from "react";
import {
	LinearGradient,
	type LinearGradientProps,
} from "../ui/linear-gradient";

type ThemedLinearGradientColors = readonly [
	ThemeColorName,
	ThemeColorName,
	...ThemeColorName[],
];

type ThemedLinearGradientLocations<
	T extends ThemedLinearGradientColors = ThemedLinearGradientColors,
> = readonly number[] & { length: T["length"] };

interface ThemedLinearGradientProps<
	TColors extends ThemedLinearGradientColors = ThemedLinearGradientColors,
> extends SafeOmit<LinearGradientProps, "locations"> {
	colors: TColors;
	locations?: ThemedLinearGradientLocations<TColors>;
}

const ThemedLinearGradient = <
	const TColors extends ThemedLinearGradientColors,
>({
	colors,
	locations,
	start = [0.5, 0], // Top-center
	end = [0.5, 1], // Bottom-center
	...props
}: ThemedLinearGradientProps<TColors>) => {
	const { getHexColor } = useThemedColor();
	const parsedColors = React.useMemo(() => {
		const parsedColors = colors.map(getHexColor);

		const isValidColorValues = (
			colors: unknown,
		): colors is LinearGradientProps["colors"] =>
			Array.isArray(colors) &&
			colors.length >= 2 &&
			colors.every((color) => typeof color === "string");

		if (!isValidColorValues(parsedColors)) {
			throw new Error(
				`[ThemedLinearGradient]: Invalid array specified for props.colors.`,
			);
		}

		return parsedColors;
	}, [colors, getHexColor]);

	return (
		<LinearGradient
			{...props}
			colors={parsedColors}
			locations={locations as LinearGradientProps["locations"]}
			start={start}
			end={end}
		/>
	);
};

export { ThemedLinearGradient };
export type {
	ThemedLinearGradientProps,
	ThemedLinearGradientColors,
	ThemedLinearGradientLocations,
};
