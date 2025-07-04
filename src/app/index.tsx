/** @format */

import DocumentData from "@/src/assets/Icons/DocumentData";
import Gradient from "@/src/assets/Icons/Gradient";
import LightBulbPerson from "@/src/assets/Icons/LightbulbPerson";
import Logo from "@/src/assets/Icons/Logo";
import Rocket from "@/src/assets/Icons/Rocket";
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";
import React from "react";
import { ScrollView } from "react-native";

import { Href, Link } from "expo-router";

const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
	return (
		<Box
			className="flex-column border border-w-1 border-outline-700 md:flex-1 m-2 p-4 rounded"
			key={name}>
			<Box className="items-center flex flex-row">
				<Text>
					<IconSvg />
				</Text>
				<Text className="text-typography-white font-medium ml-2 text-xl">
					{name}
				</Text>
			</Box>
			<Text className="text-typography-400 mt-2">{desc}</Text>
		</Box>
	);
};

export default function Home() {
	return (
		<Box className="flex-1 bg-black h-[100vh]">
			<ScrollView
				style={{ height: "100%" }}
				contentContainerStyle={{ flexGrow: 1 }}>
				<Box className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]">
					<Gradient />
				</Box>
				<Box className="flex flex-1 items-center my-16 mx-5 lg:my-24 lg:mx-32">
					<Box className="gap-10 base:flex-col sm:flex-row justify-between sm:w-[80%] md:flex-1">
						<Box className="bg-background-template py-2 px-6 rounded-full items-center flex-column md:flex-row md:self-start">
							<Text className="text-typography-white font-normal">
								Get started by editing
							</Text>
							<Text className="text-typography-white font-medium ml-2">
								./App.tsx
							</Text>
						</Box>
						<Link href={"/tabs/" as Href}>
							<Box className="bg-background-template py-2 px-6 rounded-full items-center flex-column sm:flex-row md:self-start">
								<Text className="text-typography-white font-normal text-xs">
									Explore Tab Navigation did i cook react 19
									sdk 53
								</Text>
							</Box>
						</Link>
					</Box>
					<Box className="flex-1 justify-center items-center h-[20px] w-[300px] lg:h-[160px] lg:w-[400px]">
						<Logo />
					</Box>

					<Box className="flex-column md:flex-row">
						<FeatureCard
							iconSvg={DocumentData}
							name="Docs"
							desc="Find in-depth information about gluestack features and API."
						/>
						<FeatureCard
							iconSvg={LightBulbPerson}
							name="Learn"
							desc="Learn about gluestack in an interactive course with quizzes!"
						/>
						<FeatureCard
							iconSvg={Rocket}
							name="Deploy"
							desc="Instantly drop your gluestack site to a shareable URL with vercel."
						/>
					</Box>
				</Box>
			</ScrollView>
		</Box>
	);
}
