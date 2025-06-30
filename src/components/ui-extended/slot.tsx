/** @format */

import { cn } from "@/lib/utils";
import { checkIsObject } from "@/lib/utils/type-guards";
import React from "react";
import { StyleSheet } from "react-native";

interface PropSlotProps extends Record<string, unknown> {
	children?: React.ReactNode;
}

const checkHasClassNameProp = (
	value: unknown,
): value is { className?: string } =>
	checkIsObject(value) && "className" in value;

const PropSlot: React.FC<PropSlotProps> = ({ children, ...slotProps }) => {
	const singleChild = React.Children.only(children);

	if (!React.isValidElement(singleChild)) {
		throw new Error(
			"[Slot]: props.children must be a valid React Element.",
		);
	}

	const childProps = checkIsObject(singleChild.props)
		? singleChild.props
		: {};

	const childStyle =
		"style" in childProps && checkIsObject(childProps.style)
			? childProps.style
			: undefined;
	const childClassName = checkHasClassNameProp(childProps)
		? childProps.className
		: undefined;

	const slotStyle =
		"style" in slotProps && checkIsObject(slotProps.style)
			? slotProps.style
			: undefined;
	const slotClassName = checkHasClassNameProp(slotProps)
		? slotProps.className
		: undefined;

	const mergedStyle = StyleSheet.flatten([
		childStyle, // Child's style (lower precedence)
		slotStyle, // Slot's style (higher precedence)
	]);
	const mergedClassName = cn(childClassName, slotClassName); // order matters

	const mergedProps = {
		...childProps, // Child's props (lower precedence)
		...slotProps, // Slot's props (higher precedence)
		style: mergedStyle,
		className: mergedClassName,
	};

	return React.cloneElement(singleChild, mergedProps);
};

type AsChildProps<TProps> =
	| (TProps & { asChild?: false })
	| (TProps & {
			asChild: true;
			children: React.ReactElement;
	  });

export { PropSlot };
export type { AsChildProps, PropSlotProps };
