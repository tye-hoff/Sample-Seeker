import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["fe9e35b5a2fb.ngrok-free.app"],
    port: 3000,
  },
});
