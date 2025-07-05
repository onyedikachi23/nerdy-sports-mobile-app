/** @format */

import type React from "react";
import { Box } from "../ui/box";
import { cn } from "@/lib/utils";
import { type AsChildProps, PropSlot } from "./slot";
import { StyleSheet } from "react-native";

type BoxProps = React.ComponentProps<typeof Box>;

const BoxSlot = PropSlot as React.FC<BoxProps>;

/**The padding value used in `style.padding` for {@link BoxScreen} */
const BOX_SCREEN_PADDING = 28;

type BoxScreenProps = AsChildProps<BoxProps>;

const BoxScreen: React.FC<BoxScreenProps> = ({
	className,
	style,
	asChild,
	...props
}) => {
	const Comp = asChild ? BoxSlot : Box;
	return (
		<Comp
			{...props}
			style={StyleSheet.flatten([
				{
					padding: BOX_SCREEN_PADDING,
				},
				style,
			])}
			className={cn("flex-1 gap-4 bg-brand-background p-8", className)}
		/>
	);
};

export { Box, BoxSlot, BoxScreen, BOX_SCREEN_PADDING };
export type { BoxScreenProps };
