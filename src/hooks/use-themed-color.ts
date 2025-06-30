/** @format */

import {
	darkThemeMap,
	lightThemeMap,
	type ThemeColorKey,
	type ColorValue,
} from "@/components/ui/gluestack-ui-provider/config";
import { useAppColorScheme } from "./use-color-scheme";

const rgbToHex = (r: number, g: number, b: number) => {
	const HEX_RADIX = 16;
	const HEX_PREFIX = "#";
	const toHex = (c: number) => {
		const hex = Math.round(c).toString(HEX_RADIX);
		return hex.length === 1 ? `0${hex}` : hex;
	};
	return `${HEX_PREFIX}${toHex(r)}${toHex(g)}${toHex(b)}` as const;
};

type StripColorPrefix<T extends string> =
	T extends `--color-${infer Catergory}-${infer Shade}`
		? `${Catergory}-${Shade}`
		: never;

type RGBArray<T extends ColorValue = ColorValue> =
	T extends `${infer R extends number} ${infer G extends number} ${infer B extends number}`
		? [R, G, B]
		: never;

const checkIsValidRGBArray = (array: unknown): array is RGBArray =>
	Array.isArray(array) &&
	array.length === 3 &&
	array.every((val) => typeof val === "number");

export const useThemedColor = () => {
	const { colorScheme } = useAppColorScheme();

	const colorConfig = colorScheme === "dark" ? darkThemeMap : lightThemeMap;

	const getHexColor = (
		colorName: StripColorPrefix<ThemeColorKey>,
	): string => {
		const colorKey = `--color-${colorName}` satisfies ThemeColorKey;
		const rgbArray = colorConfig[colorKey].split(" ").map(parseFloat); // parseInt gives weird results

		if (!checkIsValidRGBArray(rgbArray)) {
			throw new Error(
				`Unable to parse RGB values from specified colorName: "${colorName}"`,
			);
		}
		return rgbToHex(...rgbArray);
	};

	return { getHexColor };
};
