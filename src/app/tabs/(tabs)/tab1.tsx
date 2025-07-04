/** @format */

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Center } from "@/src/components/ui/center";
import { Divider } from "@/src/components/ui/divider";
import { Heading } from "@/src/components/ui/heading";
import { Text } from "@/src/components/ui/text";

export default function Tab2() {
	return (
		<Center className="flex-1">
			<Heading className="font-bold text-2xl">Expo V3 - Tab 1</Heading>
			<Divider className="my-[30px] w-[80%]" />
			<Text className="p-4">
				Example below to use gluestack-ui components.
			</Text>
			<EditScreenInfo path="app/(app)/(tabs)/tab1.tsx" />
		</Center>
	);
}
