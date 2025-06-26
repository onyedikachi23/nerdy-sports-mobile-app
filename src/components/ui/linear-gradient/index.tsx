/** @format */

"use client";
import React from "react";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { cssInterop } from "nativewind";

cssInterop(ExpoLinearGradient, {
	className: "style",
});

const linearGradientStyle = tva({
	base: "",
});

interface LinearGradientProps
	extends React.ComponentProps<typeof ExpoLinearGradient> {
	ref?: React.Ref<ExpoLinearGradient>;
}

const LinearGradient: React.FC<LinearGradientProps> = ({
	className,
	ref,
	...props
}) => {
	return (
		<ExpoLinearGradient
			{...props}
			ref={ref}
			className={linearGradientStyle({ class: className })}
		/>
	);
};

export { LinearGradient };
export type { LinearGradientProps };
