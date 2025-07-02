/** @format */

import type React from "react";
import { Box } from "../ui/box";
import { cn } from "@/lib/utils";
import { type AsChildProps, PropSlot } from "./slot";
import { StyleSheet } from "react-native";

type BoxScreenProps = AsChildProps<React.ComponentProps<typeof Box>>;

/**The padding value used in `style.padding` for {@link BoxScreen} */
const BOX_SCREEN_PADDING = 28;

const BoxScreen: React.FC<BoxScreenProps> = ({
	className,
	style,
	asChild,
	...props
}) => {
	const Comp = asChild ? PropSlot : Box;
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

export { BoxScreen, BOX_SCREEN_PADDING };
export type { BoxScreenProps };
