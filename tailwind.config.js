/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'rgb(var(--border))',
				input: 'rgb(var(--input))',
				ring: 'rgb(var(--ring))',
				background: 'rgb(var(--background))',
				foreground: 'rgb(var(--foreground))',
				primary: {
					DEFAULT: 'rgb(var(--primary))',
					hover: 'rgb(var(--primary-hover))',
					focus: 'rgb(var(--primary-focus))',
					foreground: 'rgb(var(--primary-foreground))'
				},
				accent: {
					DEFAULT: 'rgb(var(--accent))',
					foreground: 'rgb(var(--accent-foreground))'
				},
				secondary: {
					DEFAULT: 'rgb(var(--secondary))',
					hover: 'rgb(var(--secondary-hover))',
					focus: 'rgb(var(--secondary-focus))',
					foreground: 'rgb(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'rgb(var(--destructive))',
					hover: 'rgb(var(--destructive-hover))',
					focus: 'rgb(var(--destructive-focus))',
					foreground: 'rgb(var(--destructive-foreground))'
				},
				link: {
					DEFAULT: 'rgb(var(--link))'
				},
				muted: {
					DEFAULT: 'rgb(var(--muted))',
					foreground: 'rgb(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
					foreground: 'rgb(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'rgb(var(--card))',
					foreground: 'rgb(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 0.25rem)',
				sm: 'calc(var(--radius) - 0.45rem)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			screens: {
				xxs: '425px',
				xs: '564px'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
};
export default config;
