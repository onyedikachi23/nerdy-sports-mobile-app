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
import { useForm } from "@tanstack/react-form";
import { Mail } from "lucide-react-native";
import React from "react";
import { z } from "zod";

const formSchema = z.object({
	email: z.email("Enter a valid email address"),
	password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof formSchema>;

const fieldsBuilder = [
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
] satisfies FormFieldBuilder<LoginForm>[];

export default function LoginRoute() {
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		} satisfies LoginForm,
		validators: {
			onChange: formSchema,
		},
		onSubmit: ({ value }) => {
			alert(JSON.stringify(value, null, 2));
		},
	});

	const { signIn: googleSignup, isPending } = useGoogleSignin("login");

	return (
		<AuthCard>
			<AuthCardHeading>Log in</AuthCardHeading>
			<AuthCardDescription>Log in to your account.</AuthCardDescription>

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
						Log in
					</AuthFormButton>

					<AuthGoogleButton
						disabled={isPending}
						onPress={() => {
							void googleSignup();
						}}>
						Google Log in
					</AuthGoogleButton>
				</AuthButtonGroup>

				<AuthLinkButton href={"/signup"}>
					Don&apos;t have an account?
				</AuthLinkButton>
			</Form>
		</AuthCard>
	);
}
