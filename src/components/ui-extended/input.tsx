/** @format */

import type { ReadableProps } from "@/types";
import React from "react";
import { TextInput as RNTextInput } from "react-native";
import {
	Input as GSInput,
	InputField as GSInputField,
	InputIcon as GSInputIcon,
	InputSlot as GSInputSlot,
} from "../ui/input";

type GSInputFieldProps = ReadableProps<typeof GSInputField>;

type InputFieldProps = SafeOmit<GSInputFieldProps, "ref"> & {
	ref?: React.Ref<RNTextInput>; // ref type from gluestack InputField was incorrectly set to be React.Ref<RNTextInputProps | null>
};

const InputField: React.FC<InputFieldProps> = ({ ref, ...props }) => {
	return <GSInputField {...props} ref={ref as GSInputFieldProps["ref"]} />;
};

type InputProps = ReadableProps<typeof GSInput>;
type InputSlotProps = ReadableProps<typeof GSInputSlot>;
type InputIconProps = ReadableProps<typeof GSInputIcon>;

const Input = GSInput as React.FC<InputProps>;
const InputSlot = GSInputSlot as React.FC<InputSlotProps>;
const InputIcon = GSInputIcon as React.FC<InputIconProps>;

export { Input, InputField, InputIcon, InputSlot };

export type { InputFieldProps, InputIconProps, InputProps, InputSlotProps };
