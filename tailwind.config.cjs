const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require("daisyui")],
	daisyui: {
		themes: [{
			black: {
				"primary": "#1d4ed8",
				"secondary": "#D926AA",
				"accent": "#FFFFFF",
				"neutral": "#000000",
				"base-100": "#000000",
				"info": "#3ABFF8",
				"success": "#36D399",
				"warning": "#FBBD23",
				"error": "#F87272",
			},
		},
	  ],
	},
};

module.exports = config;
