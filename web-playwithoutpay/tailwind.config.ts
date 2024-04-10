import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray" : '#949494',
        "active" : 'rgba(217, 217, 217, 0.20)', 
        'hover' : 'rgba(217, 217, 217, 0.20)',
        'border' : 'rgba(217, 217, 217, 0.20)',
        'background' : '#1F1B24',
        'color' : '#F5F4F9',
        'settings-text' : 'rgba(245, 244, 249, 0.5)',
        'profile-text' : 'rgba(245, 244, 249, 0.8)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'logo': ['Major Mono Display', 'monospace'],
      },
      borderRadius: {
        'primary': '0.4375rem',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(
    {
      layout: {
        radius: {
          medium: "0.4375rem"
        }
      },
      themes: {
       dark: {
         colors: {
          primary: {
            DEFAULT: "rgba(217, 217, 217, 0.20)"
          }
         }
       }
      }
    }
  )],
};
export default config;
