import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#0B132B',
        'blue-secundary': '#1C2541',
        'green': '#3A506B',
        'green-secundary': '#5BC0BE'
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'],
        serif: ['Cascadia Code', 'serif'],
      },
      backgroundImage: {
        'fundo-branco': "url('/fundo-branco.png')",
      }
    }
  },
  plugins: [],
}
export default config
