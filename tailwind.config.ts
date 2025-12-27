import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        panel2: "var(--panel2)",
        text: "var(--text)",
        muted: "var(--muted)",
        muted2: "var(--muted2)",
        line: "var(--line)",
        wine: "var(--wine)",
        wine2: "var(--wine2)",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;
