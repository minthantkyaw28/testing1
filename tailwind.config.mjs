/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js","./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {
			backgroundImage: {
			  'hero-img': "url('./src/images/heroImg.png')",
			}
		  }
	},
	plugins: [require("daisyui"),require('flowbite/plugin'),require("tw-elements/dist/plugin.cjs"),
	function ({ addUtilities }) {
		const newUtilities = {
		".no-scrollbar::-webkit-scrollbar": {
		display: "none"
		},
		".no-scrollbar": {
			"-ms-overflow-style": "none",
		"scrollbar-width": "none",
		}
		
		};
		
		addUtilities (newUtilities);
		},],
}
