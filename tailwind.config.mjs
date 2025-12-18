import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // --- SUAS CONFIGURAÇÕES ORIGINAIS (MANTIDAS) ---
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        'gray-900': '#0d1117',
        'gray-800': '#161b22',
        'gray-700': '#21262d',
      },

      // --- NOVAS CONFIGURAÇÕES DE ANIMAÇÃO (ADICIONADAS) ---
      keyframes: {
        // Fade in vindo de baixo (usado no Hero e Projects)
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Fade in vindo da esquerda (usado na imagem do About)
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Fade in vindo da direita (usado no texto do About)
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Animação de gradiente (se usada em textos coloridos)
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        // Flutuação lenta (usada nos orbs de fundo)
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-left': 'fadeInLeft 1s ease-out forwards',
        'fade-in-right': 'fadeInRight 1s ease-out forwards',
        'gradient': 'gradient 8s ease infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-slower': 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}