/** @format */

import { Text } from "@/components/ui/text";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";

export default function Home() {
	return (
		<Center className="flex-1">
			<Heading className="text-2xl font-bold">Expo V3</Heading>
			<Divider className="my-[30px] w-[80%]" />
			<Text className="p-4">
				Example below to use gluestack-ui components.
			</Text>
			<EditScreenInfo path="app/(app)/(tabs)/index.tsx" />
		</Center>
	);
}
