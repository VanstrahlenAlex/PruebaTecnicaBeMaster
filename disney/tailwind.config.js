/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		colors: {
        brand: {
			50: "#f5f9fe",
			100: "#e7f0fd",
			200: "#cfe0f9",
			300: "#b7d0f5",
			400: "#a0c0f0",
			500: "#73a8e6",
			600: "#4689dd",
			700: "#2f69c7",
			800: "#184a9e",
			900: "#092b75",
			},
		},
	},
  },
  plugins: [
	require('tailwindcss-no-scrollbar')
  ],
}

