/** @format */

module.exports = function (api) {
	api.cache(true);

	return {
		presets: [
			[
				"babel-preset-expo",
				{
					jsxImportSource: "nativewind",
				},
			],
			"nativewind/babel",
		],

		plugins: [
			[
				"module-resolver",
				{
					root: ["./"],

					alias: {
						"@": "./src",
						"tailwind.config": "./tailwind.config.js",
					},
				},
				"react-native-reanimated/plugin",
			],
		],
	};
};
