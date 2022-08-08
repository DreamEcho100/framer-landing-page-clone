/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'img-special-1':
					'linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%)',
			},
			backgroundColor: {
				'gray-300-alpha-1/2': 'rgba(209, 213, 219, 0.4)',
			},
			// height: {
			// 	'main-nav-page': 'var(--nav-height)',
			// 	'full-content-page': 'calc(100vh - var(--nav-height))',
			// },
			// maxHeight: {
			// 	'full-content-page': 'calc(100vh - var(--nav-height))',
			// },
			// spacing: {
			// 	'content-page': 'calc(var(--nav-height))',
			// },
		},
	},
	plugins: [],
};
