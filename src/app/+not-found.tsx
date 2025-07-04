/** @format */

import { Link, Stack } from "expo-router";

import { Center } from "@/src/components/ui/center";
import { Text } from "@/src/components/ui/text";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<Center className="flex-1">
				<Text className="text-secondary-200">
					This screen doesn't exist.
				</Text>

				<Link href="/" style={{ marginTop: 10 }}>
					<Text className="text-primary-500">Go to home screen!</Text>
				</Link>
			</Center>
		</>
	);
}
