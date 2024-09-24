/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Automatically import the variables file in every SCSS file
        additionalData: `@import "./src/styles/_variables.scss";`,
      },
    },
  },
  test: {
    include: ["src/**/*.test.{js,ts,tsx}"],
    globals: true, //https://vitest.dev/guide/migration.html#globals-as-a-default
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
