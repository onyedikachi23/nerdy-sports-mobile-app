/** @format */

import type React from "react";
import { Box } from "../ui/box";
import { cn } from "@/lib/utils";
import { type AsChildProps, PropSlot } from "./slot";

type BoxScreenProps = AsChildProps<React.ComponentProps<typeof Box>>;

const BoxScreen: React.FC<BoxScreenProps> = ({
	className,
	asChild,
	...props
}) => {
	const Comp = asChild ? PropSlot : Box;
	return (
		<Comp
			{...props}
			className={cn(
				"flex-1 bg-brand-background px-8 pb-10 pt-5",
				className,
			)}
		/>
	);
};

export { BoxScreen };
export type { BoxScreenProps };
