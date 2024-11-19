import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		colors: {
			transparent: 'transparent',
			primary: {
				10: '#ECEDFD',
				20: '#DADBFA',
				30: '#B4B7F5',
				40: '#6970EC',
				50: '#444CE7',
				60: '#363DB9',
				70: '#292E8C',
				80: '#1B1E5E',
				90: '#0E0F31',
				100: '#07081A',
			},
			secondary: {
				10: '#FFF5E7',
				20: '#FFEBD0',
				30: '#FFD8A1',
				40: '#FFB143',
				50: '#FF9D14',
				60: '#CC7E10',
				70: '#995E0C',
				80: '#663F08',
				90: '#331F04',
				100: '#1A1002',
			},
			white: '#FFFFFF',
			border: '#F0F0F0',
			neutral: {
				10: '#F0F0F0',
				20: '#ECECEC',
				30: '#DADADA',
				40: '#C7C7C7',
				50: '#B5B5B5',
				60: '#A2A2A2',
				70: '#767676',
				80: '#494949',
				90: '#1D1D1D',
				100: '#0E0E0E',
			},
			black: {
				10: '#F0EEEB',
				60: '#666666',
				100: '#272727',
			},
			success: {
				10: '#E7FAF1',
				20: '#B8EFD5',
				40: '#71E0AB',
				70: '#13CB73',
				100: '#0FA25C'
			},
			warning: {
				10: '#FFF5E7',
				20: '#FFD8A1',
				40: '#FFB143',
				70: '#FF9D14',
				100: '#CC7E10'
			},
			error: {
				10: '#FEECEB',
				20: '#FBC7C3',
				40: '#F68F88',
				70: '#F04438',
				100: '#C0362D'
			},
			purple: {
				10: '#F7EDF9',
				40: '#DDB6E6',
				70: '#AB49C0',
				100: '#893A9A'
			},
			violet: {
				10: '#EBD8F3',
				40: '#C59BD8',
				70: '#7B1FA2',
				100: '#621982'
			},
			grey: {
				10: '#F1F4F5',
				40: '#C9D3D8',
				70: '#77919D',
				100: '#5F747E'
			},
			ash: {
				10: '#D4DCDE',
				40: '#A4B1B6',
				70: '#445B64',
				100: '#364950'
			},
			red: {
				10: '#FDECF2',
				40: '#F7B3CA',
				70: '#EC417A',
				100: '#BE3462'
			},
			rose: {
				10: '#F9E8EF',
				40: '#E6A2BE',
				70: '#C1175C',
				100: '#9A124A'
			},
			green: {
				10: '#A1F3E9',
				40: '#6BD0C4',
				70: '#008A79',
				100: '#006E61'
			},
			yellow: {
				10: '#FDF4DA',
				40: '#F7E397',
				70: '#F2D051',
				100: '#C7AA41'
			},
			normal: {
				10: '#ECEDFD',
				20: '#B4B7F5',
				40: '#6970EC',
				70: '#444CE7',
				100: '#363DB9'
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'Montserrat', ...defaultTheme.fontFamily.sans],
				museo: ['Museo', 'sans-serif'],
			},
			zIndex: {
				40: '40',
				99: '99',
				100: '100',
				9999: '9999',
				9998: '9998',
			},
			fontSize: {
				13: ['0.8125rem', '0.94rem'],
			},
		}
	},

	plugins: []
} satisfies Config;
