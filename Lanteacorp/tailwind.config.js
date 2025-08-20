import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          base: '#0B1020',
          base2: '#121933',
          base3: '#1B2A4A'
        },
        nebula: {
          purple: '#7A5CFF',
          cyan: '#00D1FF',
          magenta: '#FF5FA2',
          sun: '#FFE66D'
        },
        neutral: {
          text: '#E6EDF3',
          muted: '#B2BDCD'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
