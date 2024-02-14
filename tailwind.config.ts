import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  important: '#app',
  theme: {
    extend: {
      colors: {
        action: {
          hover: 'rgba(0, 0, 0, 0.04)',
          selected: 'rgba(0, 0, 0, 0.08)',
          disabledBackground: 'rgba(0, 0, 0, 0.12)',
          focus: 'rgba(0, 0, 0, 0.12)',
          disabled: 'rgba(0, 0, 0, 0.38)',
          active: 'rgba(0, 0, 0, 0.56)',
        },
        background: {
          default: 'rgba(243, 251, 250, 1)',
          mobileGrid: '#F5F5F5',
          success: 'rgba(234, 242, 234, 1)',
          warning: '#FDF0E6',
        },
        error: {
          main: '#D32F2F',
          dark: '#C62828',
          light: '#EF5350',
          contrast: '#FFFFFF',
        },
        info: {
          main: '#0288D1',
          dark: '#01579B',
          light: '#03A9F4',
          contrast: '#FFFFFF',
          fill: '#E6F3FA',
        },
        primary: {
          contrast: '#000000',
          dark: '#4FA999',
          disabled: 'rgba(0, 0, 0, 0.12)',
          focus: 'rgba(99, 211, 191, 0.12)',
          focusVisible: 'rgba(99, 211, 191, 0.3)',
          hover: 'rgba(99, 211, 191, 0.04)',
          light: '#82DCCC',
          main: '#63D3BF',
          outlinedBorder: 'rgba(99, 211, 191, 0.5)',
          selected: 'rgba(99, 211, 191, 0.08)',
        },
        secondary: {
          contrast: '#FFFFFF',
          dark: '#000000',
          light: '#4D4D4D',
          main: '#212121',
          outlinedBorder: 'rgba(33, 33, 33, 0.50)',
        },
        success: {
          main: '#2E7D32',
          dark: '#1B5E20',
          light: '#4CAF50',
          contrast: '#FFFFFF',
        },
        textColor: {
          disabled: 'rgba(0, 0, 0, 0.38)',
          error: 'rgba(211, 47, 47, 1)',
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.6)',
        },
        warning: {
          main: '#ED6C02',
          dark: '#E65100',
          light: '#FF9800',
          contrast: '#FFFFFF',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mukta: ['Mukta', 'sans-serif'],
      },
      fontWeight: {
        'font-regular': '400',
        'font-medium': '500',
        'font-semibold': '600',
      },
      screens: {
        xs: '340px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
} satisfies Config;
