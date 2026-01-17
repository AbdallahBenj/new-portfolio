import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory in ES Modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/new-portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
