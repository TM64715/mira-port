const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
            borderWidth: {
                '1t': '.1px',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            }
        },
	},
	plugins: [
        require('@tailwindcss/line-clamp'),
    ],
};  
