import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Permite o acesso ao servidor de desenvolvimento via ngrok
    allowedHosts: [
      "5e12-191-221-227-236.ngrok-free.app",
      // Você também pode usar um wildcard para permitir todos os subdomínios do ngrok
      // '*.ngrok-free.app',
    ],
  },
});
