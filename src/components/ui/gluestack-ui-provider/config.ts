/** @format */

"use client";
import { vars } from "nativewind";

export const config = {
	light: vars({
		// Primary - Lime theme for light mode
		"--color-primary-0": "247 254 231", // lime-50
		"--color-primary-50": "236 252 203", // lime-100
		"--color-primary-100": "217 249 157", // lime-200
		"--color-primary-200": "190 242 100", // lime-300
		"--color-primary-300": "163 230 53", // lime-400 - main brand color
		"--color-primary-400": "132 204 22", // lime-500
		"--color-primary-500": "101 163 13", // lime-600
		"--color-primary-600": "77 124 15", // lime-700
		"--color-primary-700": "63 98 18", // lime-800
		"--color-primary-800": "54 83 20", // lime-900
		"--color-primary-900": "26 46 5", // lime-950
		"--color-primary-950": "20 35 4",

		// Secondary - Blue theme for light mode
		"--color-secondary-0": "239 246 255", // blue-50
		"--color-secondary-50": "219 234 254", // blue-100
		"--color-secondary-100": "191 219 254", // blue-200
		"--color-secondary-200": "147 197 253", // blue-300
		"--color-secondary-300": "96 165 250", // blue-400
		"--color-secondary-400": "59 130 246", // blue-500
		"--color-secondary-500": "37 99 235", // blue-600
		"--color-secondary-600": "29 78 216", // blue-700 - secondary brand color
		"--color-secondary-700": "30 64 175", // blue-800
		"--color-secondary-800": "30 58 138", // blue-900
		"--color-secondary-900": "23 37 84", // blue-950
		"--color-secondary-950": "15 23 42",

		/* Tertiary */
		"--color-tertiary-0": "255 250 245",
		"--color-tertiary-50": "255 242 229",
		"--color-tertiary-100": "255 233 213",
		"--color-tertiary-200": "254 209 170",
		"--color-tertiary-300": "253 180 116",
		"--color-tertiary-400": "251 157 75",
		"--color-tertiary-500": "231 129 40",
		"--color-tertiary-600": "215 117 31",
		"--color-tertiary-700": "180 98 26",
		"--color-tertiary-800": "130 73 23",
		"--color-tertiary-900": "108 61 19",
		"--color-tertiary-950": "84 49 18",

		/* Error */
		"--color-error-0": "254 233 233",
		"--color-error-50": "254 226 226",
		"--color-error-100": "254 202 202",
		"--color-error-200": "252 165 165",
		"--color-error-300": "248 113 113",
		"--color-error-400": "239 68 68",
		"--color-error-500": "230 53 53",
		"--color-error-600": "220 38 38",
		"--color-error-700": "185 28 28",
		"--color-error-800": "153 27 27",
		"--color-error-900": "127 29 29",
		"--color-error-950": "83 19 19",

		/* Success */
		"--color-success-0": "228 255 244",
		"--color-success-50": "202 255 232",
		"--color-success-100": "162 241 192",
		"--color-success-200": "132 211 162",
		"--color-success-300": "102 181 132",
		"--color-success-400": "72 151 102",
		"--color-success-500": "52 131 82",
		"--color-success-600": "42 121 72",
		"--color-success-700": "32 111 62",
		"--color-success-800": "22 101 52",
		"--color-success-900": "20 83 45",
		"--color-success-950": "27 50 36",

		/* Warning */
		"--color-warning-0": "255 249 245",
		"--color-warning-50": "255 244 236",
		"--color-warning-100": "255 231 213",
		"--color-warning-200": "254 205 170",
		"--color-warning-300": "253 173 116",
		"--color-warning-400": "251 149 75",
		"--color-warning-500": "231 120 40",
		"--color-warning-600": "215 108 31",
		"--color-warning-700": "180 90 26",
		"--color-warning-800": "130 68 23",
		"--color-warning-900": "108 56 19",
		"--color-warning-950": "84 45 18",

		/* Info */
		"--color-info-0": "236 248 254",
		"--color-info-50": "199 235 252",
		"--color-info-100": "162 221 250",
		"--color-info-200": "124 207 248",
		"--color-info-300": "87 194 246",
		"--color-info-400": "50 180 244",
		"--color-info-500": "13 166 242",
		"--color-info-600": "11 141 205",
		"--color-info-700": "9 115 168",
		"--color-info-800": "7 90 131",
		"--color-info-900": "5 64 93",
		"--color-info-950": "3 38 56",

		/* Typography */
		"--color-typography-0": "254 254 255",
		"--color-typography-50": "245 245 245",
		"--color-typography-100": "229 229 229",
		"--color-typography-200": "219 219 220",
		"--color-typography-300": "212 212 212",
		"--color-typography-400": "163 163 163",
		"--color-typography-500": "140 140 140",
		"--color-typography-600": "115 115 115",
		"--color-typography-700": "82 82 82",
		"--color-typography-800": "64 64 64",
		"--color-typography-900": "38 38 39",
		"--color-typography-950": "23 23 23",

		/* Outline */
		"--color-outline-0": "253 254 254",
		"--color-outline-50": "243 243 243",
		"--color-outline-100": "230 230 230",
		"--color-outline-200": "221 220 219",
		"--color-outline-300": "211 211 211",
		"--color-outline-400": "165 163 163",
		"--color-outline-500": "140 141 141",
		"--color-outline-600": "115 116 116",
		"--color-outline-700": "83 82 82",
		"--color-outline-800": "65 65 65",
		"--color-outline-900": "39 38 36",
		"--color-outline-950": "26 23 23",

		/* Background */
		"--color-background-0": "255 255 255",
		"--color-background-50": "246 246 246",
		"--color-background-100": "242 241 241",
		"--color-background-200": "220 219 219",
		"--color-background-300": "213 212 212",
		"--color-background-400": "162 163 163",
		"--color-background-500": "142 142 142",
		"--color-background-600": "116 116 116",
		"--color-background-700": "83 82 82",
		"--color-background-800": "65 64 64",
		"--color-background-900": "39 38 37",
		"--color-background-950": "18 18 18",

		/* Background Special */
		"--color-background-error": "254 241 241",
		"--color-background-warning": "255 243 234",
		"--color-background-success": "237 252 242",
		"--color-background-muted": "247 248 247",
		"--color-background-info": "235 248 254",

		/* Focus Ring Indicator  */
		"--color-indicator-primary": "55 55 55",
		"--color-indicator-info": "83 153 236",
		"--color-indicator-error": "185 28 28",
	}),
	dark: vars({
		// Primary - Dark lime theme (darker, muted greens)
		"--color-primary-0": "20 35 4", // darkest
		"--color-primary-50": "26 46 5",
		"--color-primary-100": "54 83 20",
		"--color-primary-200": "63 98 18",
		"--color-primary-300": "77 124 15",
		"--color-primary-400": "101 163 13",
		"--color-primary-500": "132 204 22", // main accent in dark mode
		"--color-primary-600": "163 230 53",
		"--color-primary-700": "190 242 100",
		"--color-primary-800": "217 249 157",
		"--color-primary-900": "236 252 203",
		"--color-primary-950": "247 254 231", // lightest

		// Secondary - Dark blue theme (lighter blues for contrast)
		"--color-secondary-0": "15 23 42", // darkest
		"--color-secondary-50": "23 37 84",
		"--color-secondary-100": "30 58 138",
		"--color-secondary-200": "30 64 175",
		"--color-secondary-300": "29 78 216",
		"--color-secondary-400": "37 99 235",
		"--color-secondary-500": "59 130 246", // main secondary in dark mode
		"--color-secondary-600": "96 165 250",
		"--color-secondary-700": "147 197 253",
		"--color-secondary-800": "191 219 254",
		"--color-secondary-900": "219 234 254",
		"--color-secondary-950": "239 246 255", // lightest

		/* Tertiary */
		"--color-tertiary-0": "84 49 18",
		"--color-tertiary-50": "108 61 19",
		"--color-tertiary-100": "130 73 23",
		"--color-tertiary-200": "180 98 26",
		"--color-tertiary-300": "215 117 31",
		"--color-tertiary-400": "231 129 40",
		"--color-tertiary-500": "251 149 75",
		"--color-tertiary-600": "253 180 116",
		"--color-tertiary-700": "254 209 170",
		"--color-tertiary-800": "255 233 213",
		"--color-tertiary-900": "255 242 229",
		"--color-tertiary-950": "255 250 245",

		/* Error */
		"--color-error-0": "83 19 19",
		"--color-error-50": "127 29 29",
		"--color-error-100": "153 27 27",
		"--color-error-200": "185 28 28",
		"--color-error-300": "220 38 38",
		"--color-error-400": "230 53 53",
		"--color-error-500": "239 68 68",
		"--color-error-600": "249 97 96",
		"--color-error-700": "229 91 90",
		"--color-error-800": "254 202 202",
		"--color-error-900": "254 226 226",
		"--color-error-950": "254 233 233",

		/* Success */
		"--color-success-0": "27 50 36",
		"--color-success-50": "20 83 45",
		"--color-success-100": "22 101 52",
		"--color-success-200": "32 111 62",
		"--color-success-300": "42 121 72",
		"--color-success-400": "52 131 82",
		"--color-success-500": "72 151 102",
		"--color-success-600": "102 181 132",
		"--color-success-700": "132 211 162",
		"--color-success-800": "162 241 192",
		"--color-success-900": "202 255 232",
		"--color-success-950": "228 255 244",

		/* Warning */
		"--color-warning-0": "84 45 18",
		"--color-warning-50": "108 56 19",
		"--color-warning-100": "130 68 23",
		"--color-warning-200": "180 90 26",
		"--color-warning-300": "215 108 31",
		"--color-warning-400": "231 120 40",
		"--color-warning-500": "251 149 75",
		"--color-warning-600": "253 173 116",
		"--color-warning-700": "254 205 170",
		"--color-warning-800": "255 231 213",
		"--color-warning-900": "255 244 237",
		"--color-warning-950": "255 249 245",

		/* Info */
		"--color-info-0": "3 38 56",
		"--color-info-50": "5 64 93",
		"--color-info-100": "7 90 131",
		"--color-info-200": "9 115 168",
		"--color-info-300": "11 141 205",
		"--color-info-400": "13 166 242",
		"--color-info-500": "50 180 244",
		"--color-info-600": "87 194 246",
		"--color-info-700": "124 207 248",
		"--color-info-800": "162 221 250",
		"--color-info-900": "199 235 252",
		"--color-info-950": "236 248 254",

		/* Typography */
		"--color-typography-0": "23 23 23",
		"--color-typography-50": "38 38 39",
		"--color-typography-100": "64 64 64",
		"--color-typography-200": "82 82 82",
		"--color-typography-300": "115 115 115",
		"--color-typography-400": "140 140 140",
		"--color-typography-500": "163 163 163",
		"--color-typography-600": "212 212 212",
		"--color-typography-700": "219 219 220",
		"--color-typography-800": "229 229 229",
		"--color-typography-900": "245 245 245",
		"--color-typography-950": "254 254 255",

		/* Outline */
		"--color-outline-0": "26 23 23",
		"--color-outline-50": "39 38 36",
		"--color-outline-100": "65 65 65",
		"--color-outline-200": "83 82 82",
		"--color-outline-300": "115 116 116",
		"--color-outline-400": "140 141 141",
		"--color-outline-500": "165 163 163",
		"--color-outline-600": "211 211 211",
		"--color-outline-700": "221 220 219",
		"--color-outline-800": "230 230 230",
		"--color-outline-900": "243 243 243",
		"--color-outline-950": "253 254 254",

		/* Background */
		"--color-background-0": "18 18 18",
		"--color-background-50": "39 38 37",
		"--color-background-100": "65 64 64",
		"--color-background-200": "83 82 82",
		"--color-background-300": "116 116 116",
		"--color-background-400": "142 142 142",
		"--color-background-500": "162 163 163",
		"--color-background-600": "213 212 212",
		"--color-background-700": "229 228 228",
		"--color-background-800": "242 241 241",
		"--color-background-900": "246 246 246",
		"--color-background-950": "255 255 255",

		/* Background Special */
		"--color-background-error": "66 43 43",
		"--color-background-warning": "65 47 35",
		"--color-background-success": "28 43 33",
		"--color-background-muted": "51 51 51",
		"--color-background-info": "26 40 46",

		/* Focus Ring Indicator  */
		"--color-indicator-primary": "247 247 247",
		"--color-indicator-info": "161 199 245",
		"--color-indicator-error": "232 70 69",
	}),
};
