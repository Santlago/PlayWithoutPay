import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'hover' : 'rgba(217, 217, 217, 0.20)',
        'border' : 'rgba(217, 217, 217, 0.20)',
        'background' : '#1F1B24',
        'color' : '#F5F4F9'
      },
    },
  },
  plugins: [],
};
export default config;
