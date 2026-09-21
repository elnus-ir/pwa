import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "logo.png"],
      manifest: {
        name: "إلنوس | خدمات دیجیتال",
        short_name: "Elnus",
        description: "نسل جدید خدمات دیجیتال — بدون مراجعه، بدون انتظار",
        lang: "fa",
        dir: "rtl",
        theme_color: "#0b1220",
        background_color: "#0b1220",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
