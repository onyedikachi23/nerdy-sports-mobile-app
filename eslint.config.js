/** @format */

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import pluginQuery from "@tanstack/eslint-plugin-query";
import reactQueryKeys from "eslint-plugin-react-query-keys";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import expoConfig from "eslint-config-expo/flat.js";

export default tseslint.config(
    {
        ignores: ["dist", "node_modules", ".expo", "src/components/ui/**/*"],
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
        },
        
    }  
);