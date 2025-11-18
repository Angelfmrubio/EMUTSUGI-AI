import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 🔥 COLORES TRIUNOS - EL CORAZÓN VISUAL
      colors: {
        sne: {
          400: 'hsl(24 70% 55%)',
          500: 'hsl(22 70% 50%)',
          600: 'hsl(20 75% 45%)',
        },
        snic: {
          400: 'hsl(334 70% 65%)',
          500: 'hsl(332 75% 58%)',
          600: 'hsl(330 80% 52%)',
        },
        snc: {
          400: 'hsl(234 65% 65%)',
          500: 'hsl(232 70% 55%)',
          600: 'hsl(230 75% 48%)',
        },
        gold: {
          300: 'hsl(45 90% 70%)',
          400: 'hsl(45 85% 60%)',
          500: 'hsl(45 75% 52%)',
          600: 'hsl(44 80% 45%)',
        },
        slate: {
          900: 'hsl(220 12% 8%)',
          800: 'hsl(220 11% 12%)',
          700: 'hsl(218 10% 16%)',
        },
        // Colores antiguos mantenidos por compatibilidad
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // 🔥 RESPONSIVIDAD PARA CRISIS
      screens: {
        'crisis-xs': '320px',
        'crisis-sm': '375px',
        'crisis-md': '768px',
      },
      // 🔥 ANIMACIONES
      keyframes: {
        "float-particles": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(5px) rotate(-1deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      animation: {
        "float-particles": "float-particles 20s ease-in-out infinite",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;