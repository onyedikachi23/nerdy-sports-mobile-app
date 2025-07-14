/** @format */

import { Link, type LinkProps } from "expo-router";
import type React from "react";
import { Button, type ButtonProps } from "../ui-extended/button";

export type LinkButtonProps = Prettify<
	SafeOmit<Merge<ButtonProps, LinkProps>, "asChild">
>;

/**
 * Wraps the {@link Button} component with {@link Link} from expo router.
 *
 * Compose with the Button compound components.
 */
export const LinkButton: React.FC<LinkButtonProps> = (props) => (
	<Link {...props} asChild>
		<Button {...(props as ButtonProps)} />
	</Link>
);
