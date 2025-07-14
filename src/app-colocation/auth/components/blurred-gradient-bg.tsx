/** @format */

import { ThemedLinearGradient } from "@/components/ui-extended/linear-gradient";
import { cn } from "@/lib/utils";
import { BlurView } from "expo-blur";

interface BlurredGradientBgProps {
	className?: string;
}

export const BlurredGradientBg: React.FC<BlurredGradientBgProps> = ({
	className,
}) => (
	<ThemedLinearGradient
		colors={["secondary-600/60", "secondary-400/10", "secondary-600/60"]}
		start={[1, 0]} // Bottom-left corner
		end={[0, 1]} // Top-right corner
		className={cn(
			"absolute inset-0 overflow-hidden rounded-3xl shadow-xl shadow-secondary-800",
			className,
		)}>
		<BlurView
			tint="dark"
			intensity={50}
			experimentalBlurMethod="dimezisBlurView"
			className="absolute inset-0"
		/>
	</ThemedLinearGradient>
);
