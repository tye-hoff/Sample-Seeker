import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["9a3cfa2245ab.ngrok-free.app"],
    port: 3000,
  },
});
