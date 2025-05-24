import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/fundpivot-site/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        fallback: "./index.html",
      },
    },
  },
});
