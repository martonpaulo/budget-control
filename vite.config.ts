import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const ReactCompilerConfig = {
  /* ... */
};

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
  base: "/budget-control",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
