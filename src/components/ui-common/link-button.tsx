/** @format */

import { Link, useFocusEffect, type LinkProps } from "expo-router";
import React from "react";
import Animated, {
	cancelAnimation,
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
} from "react-native-reanimated";
import { Button, type ButtonProps } from "../ui-extended/button";
import { cn } from "@/lib/utils";

export type LinkButtonProps = Prettify<
	SafeOmit<Merge<ButtonProps, LinkProps>, "asChild">
>;

const usePulseAnimation = ({
	minOpacity = 0.7,
	duration = 2000,
	shouldAnimate = false,
} = {}) => {
	const opacity = useSharedValue(1);

	React.useEffect(() => {
		if (shouldAnimate) {
			opacity.value = withRepeat(
				withTiming(minOpacity, {
					duration: duration / 2,
					easing: Easing.inOut(Easing.ease),
				}),
				-1, // -1 for infinite repeat
				true, // Reverse the animation on each loop
			);
			return;
		}

		cancelAnimation(opacity);
		opacity.value = withTiming(1, {
			duration: 300,
			easing: Easing.inOut(Easing.ease),
		});
	}, [duration, minOpacity, opacity, shouldAnimate]);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
		};
	});

	return { animatedStyle };
};

/**
 * Wraps the {@link Button} component with {@link Link} from expo router.
 *
 * Compose with the Button compound components.
 */
export const LinkButton: React.FC<LinkButtonProps> = ({
	onPress,
	disabled,
	className,
	accessibilityState = {},
	accessibilityLabel,
	...props
}) => {
	const [isNavigating, setIsNavigating] = React.useState(false);

	useFocusEffect(
		React.useCallback(() => {
			return () => {
				setIsNavigating(false);
			};
		}, []),
	);

	const { animatedStyle } = usePulseAnimation({
		shouldAnimate: isNavigating,
	});

	const isDisabled = isNavigating || disabled;

	return (
		<Animated.View
			style={animatedStyle} // didn't use tailwind "animate-pulse" cause it was jarring
		>
			<Link
				{...props}
				onPress={(e) => {
					setIsNavigating(true);
					onPress?.(e);
				}}
				className={cn(className, {
					"!opacity-100": isNavigating, // let animatedStyle control overall opacity
				})}
				disabled={isDisabled}
				accessibilityState={
					isNavigating
						? {
								...accessibilityState,
								disabled: isDisabled,
								busy: isNavigating,
							}
						: accessibilityState
				}
				accessibilityLabel={
					isNavigating
						? "Navigating to new screen"
						: accessibilityLabel
				}
				asChild>
				<Button {...(props as ButtonProps)} />
			</Link>
		</Animated.View>
	);
};
