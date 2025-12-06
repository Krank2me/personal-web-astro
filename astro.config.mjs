import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  site: "https://astro-portfolio-template.pages.dev",
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],

  // Performance optimizations
  build: {
    inlineStylesheets: "auto",
    assets: "_astro",
  },

  // Vite optimizations for better performance
  vite: {
    build: {
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
          },
        },
      },
    },
    ssr: {
      noExternal: ["react-slick"],
    },
  },

  // Prefetch settings for better navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
