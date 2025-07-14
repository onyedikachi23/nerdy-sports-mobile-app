/** @format */

import type { ReadableProps } from "@/types";
import {
	Button as GSButton,
	ButtonText,
	ButtonSpinner,
	ButtonIcon,
	ButtonGroup,
} from "../ui/button";
import type React from "react";
import type { Pressable } from "react-native";

type GSButtonProps = ReadableProps<typeof GSButton>;
interface ButtonProps extends SafeOmit<GSButtonProps, "isDisabled" | "ref"> {
	ref?: React.Ref<typeof Pressable>;
}

const Button: React.FC<ButtonProps> = ({ disabled, ref, ...props }) => {
	return (
		<GSButton
			{...props}
			ref={ref as GSButtonProps["ref"]}
			disabled={disabled}
			isDisabled={disabled ? true : false}
		/>
	);
};

export { Button, ButtonText, ButtonSpinner, ButtonIcon, ButtonGroup };

type ButtonTextProps = ReadableProps<typeof ButtonText>;
type ButtonSpinnerProps = ReadableProps<typeof ButtonSpinner>;
type ButtonIconProps = ReadableProps<typeof ButtonIcon>;
type ButtonGroupProps = ReadableProps<typeof ButtonGroup>;

export type {
	ButtonProps,
	ButtonTextProps,
	ButtonSpinnerProps,
	ButtonIconProps,
	ButtonGroupProps,
};
