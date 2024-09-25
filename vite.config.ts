import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "cert.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "cert.crt")),
    },
    host: "192.168.100.140",
    port: 3000,
  },
});
