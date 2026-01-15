import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/\
export default defineConfig(({ mode }) => ({
  server: {
    port: 8080,            // a porta que você já está usando
    strictPort: true,
    host: '0.0.0.0',             // permite conexões externas
    allowedHosts: [
      'stereotomical-octavia-propositionally.ngrok-free.dev'
    ]
  },
  assetsInclude: ["**/*.JPG"],
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
