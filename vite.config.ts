import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/taskmanager-assignment2-ritamerhej",
  plugins: [react()],
});
