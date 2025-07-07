/** @format */

import { BlurredGradientBg } from "@/components/app/auth/blurred-gradient-bg";
import {
	FormControl,
	FormControlError,
	FormControlErrorIcon,
	FormControlErrorText,
	FormControlHelper,
	FormControlHelperText,
	FormControlLabel,
	FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { isObject, type PlainObject } from "@/lib/utils/type-guards";
import type { DeepKeys } from "@tanstack/react-form";
import {
	AlertCircleIcon,
	Eye,
	EyeOff,
	type LucideIcon,
} from "lucide-react-native";
import React from "react";
import type z from "zod/v4";
import type { FieldApiWithDefaults } from "./types";

type InputFieldProps = React.ComponentProps<typeof InputField>;

interface BaseInputWithIconProps
	extends Pick<InputFieldProps, "type" | "onChangeText"> {
	icon?: LucideIcon;
	placeholder: string;
	value?: string;
}

interface PasswordInputProps extends BaseInputWithIconProps {
	icon?: never;
	type: "password";
}

interface NotPasswordInputProps extends BaseInputWithIconProps {
	icon: LucideIcon;
	type?: "text";
}

type InputWithIconProps = PasswordInputProps | NotPasswordInputProps;

const InputWithIcon: React.FC<InputWithIconProps> = ({
	icon: iconFromProps,
	placeholder,
	onChangeText,
	value,
	type: typeFromProps,
}) => {
	const [isPasswordShown, setIsPasswordShown] = React.useState(false);

	const isPasswordInput = typeFromProps === "password";

	const icon = (
		isPasswordInput ? (isPasswordShown ? EyeOff : Eye) : iconFromProps
	) satisfies InputWithIconProps["icon"];

	const type = (
		isPasswordInput
			? isPasswordShown
				? "text"
				: "password"
			: typeFromProps
	) satisfies InputWithIconProps["type"];

	return (
		<Input
			variant="rounded"
			className="h-auto rounded-2xl bg-background-900 px-4 py-2">
			<InputField
				placeholder={placeholder}
				onChangeText={onChangeText}
				value={value}
				type={type}
				returnKeyType="next"
			/>
			<InputSlot
				onPress={() =>
					isPasswordInput && setIsPasswordShown((prev) => !prev)
				}
				focusOnPress={!isPasswordInput}
				className="relative p-2">
				<BlurredGradientBg className="rounded-lg" />
				<InputIcon as={icon} />
			</InputSlot>
		</Input>
	);
};

interface BaseFormFieldProps
	extends SafeOmit<
		React.ComponentProps<typeof FormControl>,
		"isInvalid" | "children"
	> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	field: FieldApiWithDefaults<any, any, string>;
	label: React.ReactNode;
	helperText?: React.ReactNode;
}

type FormFieldProps = BaseFormFieldProps &
	SafePick<
		InputWithIconProps,
		"onChangeText" | "placeholder" | "icon" | "type"
	>;

export type FormFieldBuilder<TForm extends PlainObject> = SafeOmit<
	FormFieldProps,
	"field"
> & {
	name: DeepKeys<TForm>;
};

type ZodErrorObj = Pick<z.ZodError["issues"][number], "path" | "message">;

const isZodErrorObj = (error: unknown): error is ZodErrorObj => {
	const PATH = "path" satisfies keyof ZodErrorObj;
	const MESSAGE = "message" satisfies keyof ZodErrorObj;

	return (
		isObject(error) &&
		PATH in error &&
		MESSAGE in error &&
		Array.isArray(error[PATH]) &&
		typeof error[MESSAGE] === "string"
	);
};

export const FormField: React.FC<FormFieldProps> = ({
	label,
	helperText,
	placeholder,
	field,
	icon,
	type,
}) => {
	const { state, handleChange, name } = field;
	const isValid = state.meta.isValid;

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const errorToDisplay = state.meta.errors[0]; // we display one error at a time.

	// when this field has an error, the error must be
	// from zod
	if (errorToDisplay && !isZodErrorObj(errorToDisplay)) {
		throw new Error(
			`[FormField - ${name}]: field error from "state.meta.errors[0]" must be an error returned from zod. Make sure your validator is a zod schema`,
		);
	}

	return (
		<FormControl
			isInvalid={!isValid}
			size="md"
			isDisabled={false}
			isReadOnly={false}
			isRequired={true}>
			<FormControlLabel>
				<FormControlLabelText className="capitalize">
					{label}
				</FormControlLabelText>
			</FormControlLabel>

			<InputWithIcon
				{...({ icon, type, placeholder } as InputWithIconProps)}
				onChangeText={handleChange}
				value={state.value}
			/>
			{helperText && (
				<FormControlHelper>
					<FormControlHelperText>{helperText}</FormControlHelperText>
				</FormControlHelper>
			)}

			<FormControlError className="items-start">
				<FormControlErrorIcon as={AlertCircleIcon} />
				<FormControlErrorText>
					{isZodErrorObj(errorToDisplay) && errorToDisplay.message}
				</FormControlErrorText>
			</FormControlError>
		</FormControl>
	);
};
