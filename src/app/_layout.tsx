/** @format */

import { Box } from "@/components/ui/box";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	useFonts,
} from "@expo-google-fonts/inter";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "gluestack",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
	const [loaded, error] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	React.useEffect(() => {
		if (error) throw error;
	}, [error]);
	React.useEffect(() => {
		if (loaded) {
			void SplashScreen.hideAsync();
		}
	}, [loaded]);

	// useLayoutEffect(() => {
	//   setStyleLoaded(true);
	// }, [styleLoaded]);

	// if (!loaded || !styleLoaded) {
	//   return null;
	// }

	return <RootLayoutNav />;
}
function RootLayoutNav() {
	const colorScheme = useColorScheme();
	const themeMode = colorScheme === "dark" ? "dark" : "light";

	return (
		<GluestackUIProvider mode={themeMode}>
			<ThemeProvider
				value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<SafeAreaView className="flex-1">
					<StatusBar style={themeMode} />
					<Box className="flex-1 bg-background-500">
						<Slot />
					</Box>
				</SafeAreaView>
			</ThemeProvider>
		</GluestackUIProvider>
	);
}
