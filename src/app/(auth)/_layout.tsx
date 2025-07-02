/** @format */

/** @format */

import {
	AuthButton,
	type AuthButtonProps,
} from "@/components/app/auth/auth-button";
import { BOX_SCREEN_PADDING, BoxScreen } from "@/components/ui-extended/box";
import { Box } from "@/components/ui/box";
import { cn } from "@/lib/utils";
import {
	TabList,
	Tabs,
	TabSlot,
	TabTrigger,
	type TabTriggerProps,
} from "expo-router/ui";
import type React from "react";

type TabButtonProps = Merge<
	SafeOmit<TabTriggerProps, "name" | "href">,
	AuthButtonProps
>;

const TabButton: React.FC<TabButtonProps> = ({
	authAction,
	children,
	...props
}) => (
	<TabTrigger {...props} name={authAction} href={`/${authAction}`} asChild>
		<AuthButton
			className={cn(
				"aspect-[5/2] h-auto flex-1 transform-gpu text-center shadow-2xl active:-translate-y-1 active:scale-[0.98] active:shadow-xl",
				{
					"shadow-brand-primary": authAction === "login",
					"shadow-brand-secondary": authAction === "signup",
				},
			)}
			authAction={authAction}>
			{children}
		</AuthButton>
	</TabTrigger>
);

export default function AuthTabsLayout() {
	return (
		<BoxScreen asChild>
			<Tabs className="relative !pr-0">
				<Box className="flex-1 pb-24">
					<TabSlot />
				</Box>

				<TabList
					className="absolute justify-between gap-6 !pr-0"
					style={{
						bottom: BOX_SCREEN_PADDING,
						left: BOX_SCREEN_PADDING,
					}}>
					<TabButton authAction="signup">Sign up</TabButton>
					<TabButton authAction="login">Log in</TabButton>

					{/* 
                TODO: As this is debug workaround for the issue - TabTrigger not
                working when wrapped in a custom component (TabButton), remove this when the reported GitHub issue on Expo repo is fixed.
                For now, I'll remove this when I'm done with this component.
                 */}
					<TabTrigger name="signup" href={"/signup"} />
					<TabTrigger name="login" href={"/login"} />
				</TabList>
			</Tabs>
		</BoxScreen>
	);
}
