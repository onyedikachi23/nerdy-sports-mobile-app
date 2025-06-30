/** @format */

"use client";
import { vars } from "nativewind";

const lightThemeMap = {
	// Primary - Lime shades
	"--color-primary-0": "247 254 231", // lime-50 #F7FEE7
	"--color-primary-50": "236 252 203", // lime-100 #ECFBCC
	"--color-primary-100": "217 249 157", // lime-200 #D9F99D
	"--color-primary-200": "190 242 100", // lime-300 #BEF264
	"--color-primary-300": "163 230 53", // lime-400 #A3E635
	"--color-primary-400": "132 204 22", // lime-500 #84CC16
	"--color-primary-500": "101 163 13", // lime-600 #65A30D
	"--color-primary-600": "77 124 15", // lime-700 #4D7C0F
	"--color-primary-700": "63 98 18", // lime-800 #3F6212
	"--color-primary-800": "54 83 20", // lime-900 #365314
	"--color-primary-900": "26 46 5", // lime-950 #1A2E05
	"--color-primary-950": "20 35 4", // lime-950 #142304

	// Secondary - Blue shades
	"--color-secondary-0": "239 246 255", // blue-50 #EFF6FF
	"--color-secondary-50": "219 234 254", // blue-100 #DBEAFE
	"--color-secondary-100": "191 219 254", // blue-200 #BFDBFE
	"--color-secondary-200": "147 197 253", // blue-300 #93C5FD
	"--color-secondary-300": "96 165 250", // blue-400 #60A5FA
	"--color-secondary-400": "59 130 246", // blue-500 #3B82F6
	"--color-secondary-500": "37 99 235", // blue-600 #2563EB
	"--color-secondary-600": "29 78 216", // blue-700 #1D4ED8
	"--color-secondary-700": "30 64 175", // blue-800 #1E40AF
	"--color-secondary-800": "30 58 138", // blue-900 #1E3A8A
	"--color-secondary-900": "23 37 84", // blue-950 #172554
	"--color-secondary-950": "15 23 42", // blue-950 #0F172A

	/* Tertiary - Orange/Brown shades */
	"--color-tertiary-0": "255 250 245", // orange-50 #FFFAP5
	"--color-tertiary-50": "255 242 229", // orange-100 #FFF2E5
	"--color-tertiary-100": "255 233 213", // orange-200 #FFE9D5
	"--color-tertiary-200": "254 209 170", // orange-300 #FED1AA
	"--color-tertiary-300": "253 180 116", // orange-400 #FDB474
	"--color-tertiary-400": "251 157 75", // orange-500 #FB9D4B
	"--color-tertiary-500": "231 129 40", // orange-600 #E78128
	"--color-tertiary-600": "215 117 31", // orange-700 #D7751F
	"--color-tertiary-700": "180 98 26", // orange-800 #B4621A
	"--color-tertiary-800": "130 73 23", // orange-900 #824917
	"--color-tertiary-900": "108 61 19", // orange-950 #6C3D13
	"--color-tertiary-950": "84 49 18", // orange-950 #543112

	/* Error - Red shades */
	"--color-error-0": "254 233 233", // red-50 #FEE9E9
	"--color-error-50": "254 226 226", // red-100 #FEE2E2
	"--color-error-100": "254 202 202", // red-200 #FECACA
	"--color-error-200": "252 165 165", // red-300 #FCA5A5
	"--color-error-300": "248 113 113", // red-400 #F87171
	"--color-error-400": "239 68 68", // red-500 #EF4444
	"--color-error-500": "230 53 53", // red-600 #E63535
	"--color-error-600": "220 38 38", // red-700 #DC2626
	"--color-error-700": "185 28 28", // red-800 #B91C1C
	"--color-error-800": "153 27 27", // red-900 #991B1B
	"--color-error-900": "127 29 29", // red-950 #7F1D1D
	"--color-error-950": "83 19 19", // red-950 #531313

	/* Success - Green shades */
	"--color-success-0": "228 255 244", // green-50 #E4FFF4
	"--color-success-50": "202 255 232", // green-100 #CAFFE8
	"--color-success-100": "162 241 192", // green-200 #A2F1C0
	"--color-success-200": "132 211 162", // green-300 #84D3A2
	"--color-success-300": "102 181 132", // green-400 #66B584
	"--color-success-400": "72 151 102", // green-500 #489766
	"--color-success-500": "52 131 82", // green-600 #348352
	"--color-success-600": "42 121 72", // green-700 #2A7948
	"--color-success-700": "32 111 62", // green-800 #206F3E
	"--color-success-800": "22 101 52", // green-900 #166534
	"--color-success-900": "20 83 45", // green-950 #14532D
	"--color-success-950": "27 50 36", // green-950 #1B3224

	/* Warning - Yellow/Orange shades */
	"--color-warning-0": "255 249 245", // amber-50 #FFF9F5
	"--color-warning-50": "255 244 236", // amber-100 #FFF4EC
	"--color-warning-100": "255 231 213", // amber-200 #FFE7D5
	"--color-warning-200": "254 205 170", // amber-300 #FECDAA
	"--color-warning-300": "253 173 116", // amber-400 #FDB474
	"--color-warning-400": "251 149 75", // amber-500 #FB954B
	"--color-warning-500": "231 120 40", // amber-600 #E77828
	"--color-warning-600": "215 108 31", // amber-700 #D76C1F
	"--color-warning-700": "180 90 26", // amber-800 #B45A1A
	"--color-warning-800": "130 68 23", // amber-900 #824417
	"--color-warning-900": "108 56 19", // amber-950 #6C3D13
	"--color-warning-950": "84 45 18", // amber-950 #542D12

	/* Info - Cyan/Blue shades */
	"--color-info-0": "236 248 254", // cyan-50 #ECF8FE
	"--color-info-50": "199 235 252", // cyan-100 #C7EBFC
	"--color-info-100": "162 221 250", // cyan-200 #A2DDFE
	"--color-info-200": "124 207 248", // cyan-300 #7CCFF8
	"--color-info-300": "87 194 246", // cyan-400 #57C2F6
	"--color-info-400": "50 180 244", // cyan-500 #32B4F4
	"--color-info-500": "13 166 242", // cyan-600 #0DA6F2
	"--color-info-600": "11 141 205", // cyan-700 #0B8DCD
	"--color-info-700": "9 115 168", // cyan-800 #0973A8
	"--color-info-800": "7 90 131", // cyan-900 #075A83
	"--color-info-900": "5 64 93", // cyan-950 #05405D
	"--color-info-950": "3 38 56", // cyan-950 #032638

	/* Typography - Grayscale for text */
	"--color-typography-0": "254 254 255", // gray-0 #FEFEFF
	"--color-typography-50": "245 245 245", // gray-50 #F5F5F5
	"--color-typography-100": "229 229 229", // gray-100 #E5E5E5
	"--color-typography-200": "219 219 220", // gray-200 #DBDBDC
	"--color-typography-300": "212 212 212", // gray-300 #D4D4D4
	"--color-typography-400": "163 163 163", // gray-400 #A3A3A3
	"--color-typography-500": "140 140 140", // gray-500 #8C8C8C
	"--color-typography-600": "115 115 115", // gray-600 #737373
	"--color-typography-700": "82 82 82", // gray-700 #525252
	"--color-typography-800": "64 64 64", // gray-800 #404040
	"--color-typography-900": "38 38 39", // gray-900 #262627
	"--color-typography-950": "23 23 23", // gray-950 #171717

	/* Outline - Grayscale for borders/dividers */
	"--color-outline-0": "253 254 254", // gray-0 #FDFEFE
	"--color-outline-50": "243 243 243", // gray-50 #F3F3F3
	"--color-outline-100": "230 230 230", // gray-100 #E6E6E6
	"--color-outline-200": "221 220 219", // gray-200 #DDDCDB
	"--color-outline-300": "211 211 211", // gray-300 #D3D3D3
	"--color-outline-400": "165 163 163", // gray-400 #A5A3A3
	"--color-outline-500": "140 141 141", // gray-500 #8C8D8D
	"--color-outline-600": "115 116 116", // gray-600 #737474
	"--color-outline-700": "83 82 82", // gray-700 #535252
	"--color-outline-800": "65 65 65", // gray-800 #414141
	"--color-outline-900": "39 38 36", // gray-900 #272624
	"--color-outline-950": "26 23 23", // gray-950 #1A1717

	/* Background - Grayscale/Light shades */
	"--color-background-0": "255 255 255", // gray-0 #FFFFFF
	"--color-background-50": "246 246 246", // gray-50 #F6F6F6
	"--color-background-100": "242 241 241", // gray-100 #F2F1F1
	"--color-background-200": "220 219 219", // gray-200 #DCDBDB
	"--color-background-300": "213 212 212", // gray-300 #D5D4D4
	"--color-background-400": "162 163 163", // gray-400 #A2A3A3
	"--color-background-500": "142 142 142", // gray-500 #8E8E8E
	"--color-background-600": "116 116 116", // gray-600 #747474
	"--color-background-700": "83 82 82", // gray-700 #535252
	"--color-background-800": "65 64 64", // gray-800 #414040
	"--color-background-900": "39 38 37", // gray-900 #272625
	"--color-background-950": "18 18 18", // gray-950 #121212

	/* Background Special - Light muted shades for specific areas */
	"--color-background-error": "254 241 241", // bg-error #FEF1F1
	"--color-background-warning": "255 243 234", // bg-warning #FFF3EA
	"--color-background-success": "237 252 242", // bg-success #EDFCF2
	"--color-background-muted": "247 248 247", // bg-muted #F7F8F7
	"--color-background-info": "235 248 254", // bg-info #EBF8FE

	/* Focus Ring Indicator - Highlight colors for focus states */
	"--color-indicator-primary": "55 55 55", // indicator-primary #373737
	"--color-indicator-info": "83 153 236", // indicator-info #5399EC
	"--color-indicator-error": "185 28 28", // indicator-error #B91C1C
} as const satisfies ColorMap;

type ColorKey = `--color-${string}-${string}`;
type ColorValue = `${number} ${number} ${number}`;
type ColorMap = Record<ColorKey, ColorValue>;

type ThemeColorKey = keyof typeof lightThemeMap;
type ThemeColorMap = Record<ThemeColorKey, ColorValue>;

const darkThemeMap = {
	// Primary - Blue shades
	"--color-primary-0": "239 246 255", // blue-50 #EFF6FF
	"--color-primary-50": "219 234 254", // blue-100 #DBEAFE
	"--color-primary-100": "191 219 254", // blue-200 #BFDBFE
	"--color-primary-200": "147 197 253", // blue-300 #93C5FD
	"--color-primary-300": "96 165 250", // blue-400 #60A5FA
	"--color-primary-400": "59 130 246", // blue-500 #3B82F6
	"--color-primary-500": "37 99 235", // blue-600 #2563EB
	"--color-primary-600": "29 78 216", // blue-700 #1D4ED8
	"--color-primary-700": "30 64 175", // blue-800 #1E40AF
	"--color-primary-800": "30 58 138", // blue-900 #1E3A8A
	"--color-primary-900": "23 37 84", // blue-950 #172554
	"--color-primary-950": "23 37 84", // blue-950 #172554

	// Secondary - Lime shades
	"--color-secondary-0": "247 254 231", // lime-50 #F7FEE7
	"--color-secondary-50": "236 252 203", // lime-100 #ECFBCC
	"--color-secondary-100": "217 249 157", // lime-200 #D9F99D
	"--color-secondary-200": "190 242 100", // lime-300 #BEF264
	"--color-secondary-300": "163 230 53", // lime-400 #A3E635
	"--color-secondary-400": "132 204 22", // lime-500 #84CC16
	"--color-secondary-500": "101 163 13", // lime-600 #65A30D
	"--color-secondary-600": "77 124 15", // lime-700 #4D7C0F
	"--color-secondary-700": "63 98 18", // lime-800 #3F6212
	"--color-secondary-800": "54 83 20", // lime-900 #365314
	"--color-secondary-900": "26 46 5", // lime-950 #1A2E05
	"--color-secondary-950": "26 46 5", // lime-950 #1A2E05

	/* Tertiary - Orange/Brown shades */
	"--color-tertiary-0": "120 70 30", // orange-0 #78461E
	"--color-tertiary-50": "140 85 45", // orange-50 #8C552D
	"--color-tertiary-100": "160 100 60", // orange-100 #A0643C
	"--color-tertiary-200": "180 115 75", // orange-200 #B4734B
	"--color-tertiary-300": "200 130 90", // orange-300 #C8825A
	"--color-tertiary-400": "220 145 105", // orange-400 #DC9169
	"--color-tertiary-500": "240 160 120", // orange-500 #F0A078
	"--color-tertiary-600": "250 175 135", // orange-600 #FAAF87
	"--color-tertiary-700": "255 190 150", // orange-700 #FFBE96
	"--color-tertiary-800": "255 205 170", // orange-800 #FFCDAA
	"--color-tertiary-900": "255 220 190", // orange-900 #FFDCBE
	"--color-tertiary-950": "255 235 210", // orange-950 #FFEBDB

	/* Error - Red shades */
	"--color-error-0": "120 40 40", // red-0 #782828
	"--color-error-50": "140 50 50", // red-50 #8C3232
	"--color-error-100": "160 60 60", // red-100 #A03C3C
	"--color-error-200": "180 70 70", // red-200 #B44646
	"--color-error-300": "200 80 80", // red-300 #C85050
	"--color-error-400": "220 90 90", // red-400 #DC5A5A
	"--color-error-500": "230 100 100", // red-500 #E66464
	"--color-error-600": "240 110 110", // red-600 #F06E6E
	"--color-error-700": "250 120 120", // red-700 #FA7878
	"--color-error-800": "255 130 130", // red-800 #FF8282
	"--color-error-900": "255 140 140", // red-900 #FF8C8C
	"--color-error-950": "255 150 150", // red-950 #FF9696

	/* Success - Green shades */
	"--color-success-0": "60 90 70", // green-0 #3C5A46
	"--color-success-50": "70 110 80", // green-50 #466E50
	"--color-success-100": "80 130 90", // green-100 #50825A
	"--color-success-200": "90 150 100", // green-200 #5A9664
	"--color-success-300": "100 170 110", // green-300 #64AA6E
	"--color-success-400": "110 190 120", // green-400 #6EB178
	"--color-success-500": "120 210 130", // green-500 #78D282
	"--color-success-600": "130 220 140", // green-600 #82DC8C
	"--color-success-700": "140 230 150", // green-700 #8CE696
	"--color-success-800": "150 240 160", // green-800 #96F0A0
	"--color-success-900": "160 250 170", // green-900 #A0FAAA
	"--color-success-950": "170 255 180", // green-950 #AFFFF4

	/* Warning - Yellow/Orange shades */
	"--color-warning-0": "120 70 30", // amber-0 #78461E
	"--color-warning-50": "140 85 45", // amber-50 #8C552D
	"--color-warning-100": "160 100 60", // amber-100 #A0643C
	"--color-warning-200": "180 115 75", // amber-200 #B4734B
	"--color-warning-300": "200 130 90", // amber-300 #C8825A
	"--color-warning-400": "220 145 105", // amber-400 #DC9169
	"--color-warning-500": "240 160 120", // amber-500 #F0A078
	"--color-warning-600": "250 175 135", // amber-600 #FAAF87
	"--color-warning-700": "255 190 150", // amber-700 #FFBE96
	"--color-warning-800": "255 205 170", // amber-800 #FFCDAA
	"--color-warning-900": "255 220 190", // amber-900 #FFDCBE
	"--color-warning-950": "255 235 210", // amber-950 #FFEBDB

	/* Info - Cyan/Blue shades */
	"--color-info-0": "30 70 100", // cyan-0 #1E4664
	"--color-info-50": "40 90 120", // cyan-50 #285A78
	"--color-info-100": "50 110 140", // cyan-100 #326E8C
	"--color-info-200": "60 130 160", // cyan-200 #3C82A0
	"--color-info-300": "70 150 180", // cyan-300 #4696B4
	"--color-info-400": "80 170 200", // cyan-400 #50AAB9
	"--color-info-500": "90 190 220", // cyan-500 #5ABEC8
	"--color-info-600": "100 200 230", // cyan-600 #64C8E6
	"--color-info-700": "110 210 240", // cyan-700 #6ED2F0
	"--color-info-800": "120 220 250", // cyan-800 #78DCFA
	"--color-info-900": "130 230 255", // cyan-900 #82E6FF
	"--color-info-950": "140 240 255", // cyan-950 #8CFAFF

	/* Typography - Grayscale for text */
	"--color-typography-0": "23 23 23", // gray-0 #171717
	"--color-typography-50": "38 38 39", // gray-50 #262627
	"--color-typography-100": "64 64 64", // gray-100 #404040
	"--color-typography-200": "82 82 82", // gray-200 #525252
	"--color-typography-300": "115 115 115", // gray-300 #737373
	"--color-typography-400": "140 140 140", // gray-400 #8C8C8C
	"--color-typography-500": "163 163 163", // gray-500 #A3A3A3
	"--color-typography-600": "212 212 212", // gray-600 #D4D4D4
	"--color-typography-700": "219 219 220", // gray-700 #DBDBDC
	"--color-typography-800": "229 229 229", // gray-800 #E5E5E5
	"--color-typography-900": "245 245 245", // gray-900 #F5F5F5
	"--color-typography-950": "254 254 255", // gray-950 #FEFEFF

	/* Outline - Grayscale for borders/dividers */
	"--color-outline-0": "26 23 23", // gray-0 #1A1717
	"--color-outline-50": "39 38 36", // gray-50 #272624
	"--color-outline-100": "65 65 65", // gray-100 #414141
	"--color-outline-200": "83 82 82", // gray-200 #535252
	"--color-outline-300": "115 116 116", // gray-300 #737474
	"--color-outline-400": "140 141 141", // gray-400 #8C8D8D
	"--color-outline-500": "165 163 163", // gray-500 #A5A3A3
	"--color-outline-600": "211 211 211", // gray-600 #D3D3D3
	"--color-outline-700": "221 220 219", // gray-700 #DDDCDB
	"--color-outline-800": "230 230 230", // gray-800 #E6E6E6
	"--color-outline-900": "243 243 243", // gray-900 #F3F3F3
	"--color-outline-950": "253 254 254", // gray-950 #FDFEFE

	/* Background - Blue-black shades */
	"--color-background-0": "237 242 248", // deep-blue-0 #EDF2F8
	"--color-background-50": "218 226 237", // deep-blue-50 #DAE2ED
	"--color-background-100": "188 200 216", // deep-blue-100 #BCC8D8
	"--color-background-200": "150 163 185", // deep-blue-200 #96A3B9
	"--color-background-300": "115 127 150", // deep-blue-300 #737F96
	"--color-background-400": "85 96 115", // deep-blue-400 #556073
	"--color-background-500": "61 70 87", // deep-blue-500 #3D4657
	"--color-background-600": "42 49 62", // deep-blue-600 #2A313E
	"--color-background-700": "28 34 44", // deep-blue-700 #1C222C
	"--color-background-800": "18 22 29", // deep-blue-800 #12161D
	"--color-background-900": "10 13 17", // deep-blue-900 #0A0D11
	"--color-background-950": "3 5 8", // deep-blue-950 #030508

	/* Background Special - Muted shades for specific dark areas */
	"--color-background-error": "90 75 75", // bg-error #5A4B4B
	"--color-background-warning": "90 85 75", // bg-warning #5A554B
	"--color-background-success": "75 90 75", // bg-success #4B5A4B
	"--color-background-muted": "70 70 75", // bg-muted #46464B
	"--color-background-info": "75 85 90", // bg-info #4B555A

	/* Focus Ring Indicator - Highlight colors for focus states */
	"--color-indicator-primary": "247 247 247", // indicator-primary #F7F7F7
	"--color-indicator-info": "161 199 245", // indicator-info #A1C7F5
	"--color-indicator-error": "232 70 69", // indicator-error #E84645
} as const satisfies ThemeColorMap;

const config = {
	light: vars(lightThemeMap),
	dark: vars(darkThemeMap),
};
export { config, lightThemeMap, darkThemeMap };
export type {
	ThemeColorMap,
	ThemeColorKey,
	ColorValue as ThemeColorValue,
	ColorKey,
	ColorValue,
};
