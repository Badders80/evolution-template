import { fontFamily as defaultFontFamily } from 'tailwindcss/defaultTheme'

const config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366f1',
          light: '#a5b4fc',
          dark: '#4f46e5',
        },
      },
      fontFamily: {
        sans: ['var(--font-bw-gradual)', ...defaultFontFamily.sans],
        majorHeading: ['var(--font-bw-gradual)', ...defaultFontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
