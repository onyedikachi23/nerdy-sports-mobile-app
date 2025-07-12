/** @format */

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

/** @format */

import {
	FormField,
	type FormFieldBuilder,
} from "@/components/app/auth/form-field";
import { SubmitButton } from "@/components/app/auth/submit-button";
import { Form } from "@/components/ui-extended/form";
import { Image } from "@/components/ui-extended/image";
import { Button, ButtonGroup, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useForm } from "@tanstack/react-form";
import { Link } from "expo-router";
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

			<Form space="xl">
				{fieldsBuilder.map(({ name, ...props }) => (
					<form.Field key={name} name={name}>
						{(field) => <FormField {...props} field={field} />}
					</form.Field>
				))}

				<ButtonGroup className="my-4">
					<SubmitButton
						form={form}
						action="secondary"
						className="h-16 rounded-2xl"
						size="xl">
						Sign up
					</SubmitButton>

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
			</Form>
		</Card>
	);
}
