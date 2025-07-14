/** @format */

import {
	AuthButtonGroup,
	AuthCard,
	AuthCardDescription,
	AuthCardHeading,
	AuthFormButton,
	AuthGoogleButton,
	AuthLinkButton,
} from "@/app-colocation/auth/components/auth-card";
import {
	FormField,
	type FormFieldBuilder,
} from "@/app-colocation/auth/components/form-field";
import { useGoogleSignin } from "@/app-colocation/auth/use-google-sign-in";
import { Form } from "@/components/ui-extended/form";
import { Text } from "@/components/ui/text";
import { useForm } from "@tanstack/react-form";
import { Mail, UserRound } from "lucide-react-native";
import React from "react";
import { z } from "zod/v4";

const StrongPasswordSchema = z
	.string()
	.min(8, "At least 8 characters long")
	.regex(/[a-z]/, "At least one lowercase letter")
	.regex(/[A-Z]/, "At least one uppercase letter")
	.regex(/\d/, "At least one number")
	.regex(/[^a-zA-Z0-9\s]/, "At least one special character");
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

const fieldsBuilder = [
	{
		name: "name",
		label: "Full name",
		icon: UserRound,
		placeholder: "Enter full name",
	},
	{
		name: "email",
		label: "Email",
		icon: Mail,
		placeholder: "Enter email address",
	},
	{
		name: "password",
		label: "Password",
		type: "password",
		placeholder: "Enter password",
	},
	{
		name: "confirmPassword",
		label: "Confirm password",
		type: "password",
		placeholder: "Enter password again",
	},
] satisfies FormFieldBuilder<SignupForm>[];

export default function SignupRoute() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		} as SignupForm,
		validators: {
			onSubmit: formSchema,
		},
		onSubmit: ({ value }) => {
			alert(JSON.stringify(value, null, 2));
		},
	});

	const { signIn: googleSignup, isPending } = useGoogleSignin();

	return (
		<AuthCard>
			<AuthCardHeading>Sign up</AuthCardHeading>
			<AuthCardDescription>
				Sign up to club,{" "}
				<Text bold className="text-primary-300">
					NerdySports
				</Text>
				.
			</AuthCardDescription>

			<Form>
				{fieldsBuilder.map(({ name, ...props }) => (
					<form.Field key={name} name={name}>
						{(field) => <FormField {...props} field={field} />}
					</form.Field>
				))}

				<AuthButtonGroup>
					<AuthFormButton
						form={form}
						isSubmitting={false} // TODO: Replace with actual mutation state
					>
						Sign up
					</AuthFormButton>

					<AuthGoogleButton
						disabled={isPending}
						onPress={() => {
							void googleSignup();
						}}>
						Google Sign up
					</AuthGoogleButton>
				</AuthButtonGroup>

				<AuthLinkButton href={"/login"}>
					Already have an account?
				</AuthLinkButton>
			</Form>
		</AuthCard>
	);
}
