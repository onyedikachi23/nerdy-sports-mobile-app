/** @format */

import React from "react";
import { VStack } from "../ui/vstack";
import { PropSlot, type AsChildProps } from "./slot";

import type { ReadableProps } from "@/types";
import {
	FormControl,
	FormControlError,
	FormControlErrorIcon,
	FormControlErrorText,
	FormControlHelper,
	FormControlHelperText,
	FormControlLabel,
	FormControlLabelAstrick as FormControlLabelAsterisk,
	FormControlLabelText,
} from "../ui/form-control";

type VStackProps = Prettify<React.ComponentProps<typeof VStack>>;
type FormProps = AsChildProps<VStackProps>;

const FormSlot = PropSlot as React.FC<VStackProps>;

/**
 * Manages autofocus across form inputs and signals the last input.
 */
const Form: React.FC<FormProps> = ({ asChild, space = "xl", ...props }) => {
	const Comp = asChild ? FormSlot : VStack;

	return <Comp {...props} space={space} />;
};

export {
	Form,
	FormControl,
	FormControlError,
	FormControlErrorIcon,
	FormControlErrorText,
	FormControlHelper,
	FormControlHelperText,
	FormControlLabel,
	FormControlLabelAsterisk,
	FormControlLabelText,
	FormSlot,
};

type FormControlProps = ReadableProps<typeof FormControl>;
type FormControlErrorProps = ReadableProps<typeof FormControlError>;
type FormControlErrorTextProps = ReadableProps<typeof FormControlErrorText>;
type FormControlErrorIconProps = ReadableProps<typeof FormControlErrorIcon>;
type FormControlLabelProps = ReadableProps<typeof FormControlLabel>;
type FormControlLabelTextProps = ReadableProps<typeof FormControlLabelText>;
type FormControlLabelAsteriskProps = ReadableProps<
	typeof FormControlLabelAsterisk
>;
type FormControlHelperProps = ReadableProps<typeof FormControlHelper>;
type FormControlHelperTextProps = ReadableProps<typeof FormControlHelperText>;

export type {
	FormControlErrorIconProps,
	FormControlErrorProps,
	FormControlErrorTextProps,
	FormControlHelperProps,
	FormControlHelperTextProps,
	FormControlLabelAsteriskProps,
	FormControlLabelProps,
	FormControlLabelTextProps,
	FormControlProps,
	FormProps,
};
