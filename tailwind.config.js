/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	theme: {
		extend: {
			container: {
				center: 'true'
			},
			colors: {
				orange: '#FF7420',
				dark: '#191A19'
			},
			fontFamily: {
				poppins: ['Poppins'],
				brush: ['Comforter Brush']
			}
		}
	},
	plugins: []
};
