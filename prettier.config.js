/**
 * @format
 * @type {import("prettier").Config}
 */

const config = {
	plugins: ["prettier-plugin-tailwindcss"],
	useTabs: true,
	tabWidth: 4,
	endOfLine: "auto",
	bracketSameLine: true,
	htmlWhitespaceSensitivity: "strict",
	insertPragma: true,
};

export default config;
