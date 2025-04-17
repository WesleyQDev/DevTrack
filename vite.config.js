import { defineConfig } from "vite";
import { config } from 'dotenv';
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Permite o acesso ao servidor de desenvolvimento via ngrok
    allowedHosts: [
      "",
      // Você também pode usar um wildcard para permitir todos os subdomínios do ngrok
      // '*.ngrok-free.app',
    ],
  },
  define: {
    'process.env': process.env
  },
});
