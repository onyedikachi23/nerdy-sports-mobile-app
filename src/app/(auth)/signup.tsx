/** @format */

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

/** @format */

import { BlurredGradientBg } from "@/components/app/auth/blurred-gradient-bg";
import { Image } from "@/components/ui-extended/image";
import { Button, ButtonGroup, ButtonText } from "@/components/ui/button";
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
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import {
	AlertCircleIcon,
	EyeOff,
	Mail,
	UserRound,
	type LucideIcon,
} from "lucide-react-native";
import React from "react";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { z } from "zod/v4";
import { cn } from "@/lib/utils";

interface InputWithIconProps {
	icon: LucideIcon;
	placeholder: string;
	onChange?: (text: string) => void;
	value?: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
	icon,
	placeholder,
	onChange,
	value,
}) => {
	return (
		<Input
			variant="rounded"
			className="h-auto rounded-2xl bg-background-900 px-4 py-2">
			<InputField
				placeholder={placeholder}
				onChangeText={onChange}
				value={value}
			/>
			<InputSlot className="relative p-2">
				<BlurredGradientBg className="rounded-lg" />
				<InputIcon as={icon} />
			</InputSlot>
		</Input>
	);
};

interface FormFieldProps
	extends SafeOmit<
		Merge<
			React.ComponentProps<typeof FormControl>,
			RequireKeys<InputWithIconProps, "onChange" | "value">
		>,
		"isInvalid"
	> {
	label: React.ReactNode;
	helperText?: React.ReactNode;
	isValid: boolean;
	errorText: string | undefined;
}

const FormField: React.FC<FormFieldProps> = ({
	icon,
	label,
	helperText,
	errorText,
	placeholder,
	onChange,
	value,
	isValid,
}) => (
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
			icon={icon}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
		{helperText && (
			<FormControlHelper>
				<FormControlHelperText>{helperText}</FormControlHelperText>
			</FormControlHelper>
		)}

		<FormControlError className="items-start">
			<FormControlErrorIcon as={AlertCircleIcon} />
			<FormControlErrorText>{errorText}</FormControlErrorText>
		</FormControlError>
	</FormControl>
);

interface SubmitButtonProps
	extends SafeOmit<React.ComponentProps<typeof Button>, "children"> {
	label: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
	className,
	size = "xl",
	label,
	...props
}) => (
	<Button
		{...props}
		className={cn("h-16 rounded-2xl", className)}
		size={size}>
		<ButtonText>{label}</ButtonText>
	</Button>
);

const { fieldContext, formContext } = createFormHookContexts();

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
const { useAppForm } = createFormHook({
	fieldComponents: {
		FormField,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
});

const StrongPasswordSchema = z
	.string()
	.regex(/[a-z]/, "At least one lowercase letter")
	.regex(/[A-Z]/, "At least one uppercase letter")
	.regex(/\d/, "At least one number")
	.regex(/[^a-zA-Z0-9\s]/, "At least one special character")
	.min(8, "At least 8 characters long");

const formSchema = z
	.object({
		name: z.string().min(3, "Should be more than 3 characters long"),
		email: z.email("Enter a valid email address"),
		password: StrongPasswordSchema,
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

type SignupForm = z.infer<typeof formSchema>;

export default function SignupRoute() {
	const form = useAppForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		} as SignupForm,
		validators: {
			// Pass a schema or function to validate
			onChange: formSchema,
		},
		onSubmit: ({ value }) => {
			// Do something with form data
			alert(JSON.stringify(value, null, 2));
		},
	});

	return (
		<Card variant={"ghost"} className="gap-4">
			<Heading size="2xl" className="text-center capitalize">
				Sign up
			</Heading>
			<Text size="sm" className="text-center">
				Sign up to club,{" "}
				<Text bold className="text-primary-300">
					NerdySports
				</Text>
				.
			</Text>

			<VStack space="xl">
				<form.AppField name="name">
					{({ FormField, handleChange, state }) => (
						<FormField
							isValid={state.meta.isValid}
							errorText={state.meta.errors[0]?.message}
							value={state.value}
							onChange={handleChange}
							label="full name"
							icon={UserRound}
							placeholder="Enter full name"
						/>
					)}
				</form.AppField>

				<form.AppField name="email">
					{({ FormField, handleChange, state }) => (
						<FormField
							isValid={state.meta.isValid}
							errorText={state.meta.errors[0]?.message}
							value={state.value}
							onChange={handleChange}
							label="email"
							icon={Mail}
							placeholder="Enter email address"
						/>
					)}
				</form.AppField>

				<form.AppField name="password">
					{({ FormField, handleChange, state }) => (
						<FormField
							isValid={state.meta.isValid}
							errorText={state.meta.errors[0]?.message}
							value={state.value}
							onChange={handleChange}
							label="password"
							icon={EyeOff}
							placeholder="Enter password"
						/>
					)}
				</form.AppField>

				<form.AppField name="confirmPassword">
					{({ FormField, handleChange, state }) => (
						<FormField
							isValid={state.meta.isValid}
							errorText={state.meta.errors[0]?.message}
							value={state.value}
							onChange={handleChange}
							label="confirm password"
							icon={EyeOff}
							placeholder="Enter password again"
						/>
					)}
				</form.AppField>

				<ButtonGroup className="my-4">
					<Button
						action="secondary"
						className="h-16 rounded-2xl"
						size="xl">
						<ButtonText>Sign up</ButtonText>
					</Button>
					<Button
						className="flex h-16 justify-center rounded-2xl bg-background-900 data-[active=true]:bg-background-700"
						size="xl">
						<Image
							source={{
								uri: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
							}}
							alt="Google logo"
							className="size-8"
						/>
						<ButtonText className="capitalize text-typography-900 data-[active=true]:text-typography-700">
							Google Sign up
						</ButtonText>
					</Button>
				</ButtonGroup>

				<Link href={"/login"} asChild>
					<Button variant="link" size="sm">
						<ButtonText className="text-primary-300 data-[active=true]:text-primary-500">
							Already have an account?
						</ButtonText>
					</Button>
				</Link>
			</VStack>
		</Card>
	);
}
