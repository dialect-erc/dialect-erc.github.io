const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['*.html', '_site/*.html','_site/**/*.html', '_pages/**/*.md', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  theme: {
    extend: {
      height: {
        '112': '28rem',
      },
      colors: {
        primary: colors.blue,
        secondary: colors.teal,
        tertiary: colors.slate,
        header: colors.sky,
        gray: colors.slate,
        lightText: colors.slate[600],
        mainText: colors.slate[700],
        headings: colors.slate[800],
        link: colors.blue[600],
        linkLight: colors.blue[500],
        danger: colors.red,
      },
      fontFamily: {
        sans: ['Open Sans','Inter var', ...defaultTheme.fontFamily.sans]
      },
      animation: {
				fade: 'fadeIn .5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
