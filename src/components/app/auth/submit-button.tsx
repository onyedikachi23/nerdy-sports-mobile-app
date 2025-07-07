/** @format */

/** @format */

import { Button, ButtonText } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import type { FormApiWithDefaults } from "./types";

export interface SubmitButtonProps extends React.ComponentProps<typeof Button> {
	form: FormApiWithDefaults;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
	className,
	size = "xl",
	children,
	form,
	...props
}) => {
	return (
		<form.Subscribe
			selector={({ isSubmitting, canSubmit }) => ({
				isSubmitting,
				canSubmit,
			})}>
			{({ isSubmitting, canSubmit }) => {
				const isDisabled = isSubmitting || !canSubmit;

				return (
					<Button
						{...props}
						isDisabled={isDisabled}
						onPress={() => void form.handleSubmit()}
						className={cn("h-16 rounded-2xl", className)}
						size={size}>
						{(state) => (
							<ButtonText>
								{typeof children === "function"
									? children(state)
									: children}
							</ButtonText>
						)}
					</Button>
				);
			}}
		</form.Subscribe>
	);
};
