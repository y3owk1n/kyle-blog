const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...fontFamily.sans],
			},
			colors: {
				"accent-1": "#FAFAFA",
				"accent-2": "#EAEAEA",
				"accent-7": "#333",
				success: "#0070f3",
				cyan: "#79FFE1",
			},
			spacing: {
				28: "7rem",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"7xl": "4.5rem",
				"8xl": "6.25rem",
			},
			boxShadow: {
				sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
				md: "0 8px 30px rgba(0, 0, 0, 0.12)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
