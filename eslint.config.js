/** @format */

import js from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import expoConfig from "eslint-config-expo/flat.js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactQueryKeys from "eslint-plugin-react-query-keys";
import reactRefresh from "eslint-plugin-react-refresh";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		ignores: ["dist", "node_modules", ".expo"],
	},
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommendedTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
			reactYouMightNotNeedAnEffect.configs.recommended,
			expoConfig,
		],
		languageOptions: {
			ecmaVersion: "latest",
			globals: {
				...globals.reactNative,
			},
			parserOptions: {
				project: ["./tsconfig.json"],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		settings: {
			react: { version: "detect" },
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			react,
			"@tanstack/query": pluginQuery,
			"react-query-keys": reactQueryKeys,
		},
		rules: {
			...pluginQuery.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			...react.configs.recommended.rules,
			...react.configs["jsx-runtime"].rules,
			"react/prop-types": "off",
			"react-query-keys/no-plain-query-keys": "warn",
			"no-restricted-imports": [
				"error",
				{
					paths: [
						{
							name: "zod",
							message: `Please use 'zod/v4' instead of the base 'zod' import. Versioning with subpaths ("zod/v4"): https://github.com/colinhacks/zod/issues/4371`,
						},
						{
							name: "zod/v4-mini",
							message: `Please use 'zod/v4' instead of the 'zod/v4-mini' import. Versioning with subpaths ("zod/v4"): https://github.com/colinhacks/zod/issues/4371`,
						},
					],
				},
			],
		},
	},
);
