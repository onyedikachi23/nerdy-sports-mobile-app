/** @format */

import {
	Button,
	ButtonText,
	ButtonSpinner,
	ButtonIcon,
} from "@/components/ui/button";

/** @format */

import { Bell, Search, TrendingUp, Users } from "lucide-react-native";
import type React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen: React.FC = () => {
	return (
		<SafeAreaView className="flex-1 bg-background-0">
			<View className="flex-1 px-6 pt-8">
				{/* Header */}
				<View className="mb-8 flex flex-row items-center justify-between">
					<View>
						<Text className="flex text-lg text-primary-500">
							NerdySports
						</Text>
						<Text className="mt-1 text-error-500">
							Welcome back!
						</Text>
					</View>
					<View className="relative">
						<Bell size={24} color="rgb(163 163 163)" />
						<View className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-success-500" />
					</View>
				</View>

				{/* Search */}
				<View className="mb-8 flex-row items-center rounded-xl bg-secondary-100 px-4 py-3">
					<Search size={20} color="rgb(140 140 140)" />
					<Text className="ml-3 flex-1 text-typography-400">
						Search players, teams...
					</Text>
				</View>

				{/* Stats Cards */}
				<View className="mb-8 flex-row justify-between">
					<View className="mr-3 flex-1 rounded-xl bg-secondary-500 p-4 text-sm shadow-sm">
						<View className="flex-row items-center justify-between">
							<View>
								<Text className="text-2xl font-bold text-typography-950">
									2.8K
								</Text>
								<Text className="text-sm text-typography-500">
									Players
								</Text>
							</View>
							<View className="rounded-lg bg-info-500 p-2">
								<Users size={20} color="white" />
							</View>
						</View>
					</View>

					<View className="ml-3 flex-1 rounded-xl bg-secondary-100 p-4">
						<View className="flex-row items-center justify-between">
							<View>
								<Text className="text-2xl font-bold text-typography-950">
									156
								</Text>
								<Text className="text-blue-400">Scouts</Text>
							</View>
							<View className="rounded-lg bg-success-500 p-2">
								<TrendingUp size={20} color="white" />
							</View>
						</View>
					</View>
				</View>

				{/* Quick Actions */}
				<View className="space-y-4">
					<Text>Maybe</Text>
					<TouchableOpacity className="rounded-xl bg-white px-6 py-4">
						<Text className="bg-white text-center text-3xl font-semibold text-typography-0">
							Scout New Talent
						</Text>
					</TouchableOpacity>

					<TouchableOpacity className="rounded-xl border border-outline-300 bg-secondary-100 px-6 py-4">
						<Text className="text-center text-4xl font-semibold text-typography-950">
							Browse Teams
						</Text>
					</TouchableOpacity>

					<TouchableOpacity className="rounded-xl border border-outline-300 bg-secondary-100 px-6 py-4">
						<Text className="text-center text-lg font-semibold text-typography-950">
							View Live Games
						</Text>
					</TouchableOpacity>
				</View>

				<Button
					action={"primary"}
					variant={"solid"}
					size={"lg"}
					isDisabled={false}>
					<ButtonText>Hello World</ButtonText>
				</Button>
			</View>
		</SafeAreaView>
	);
};
export default HomeScreen;
