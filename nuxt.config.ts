import {
  version,
  Mname,
  author,
  description,
  homepage,
  name,
} from "./package.json";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      packageName: Mname,
      packageVersion: version,
      packageAuthor: author,
    },
  },

  modules: [
    "@vite-pwa/nuxt",
    "@nuxt/ui",
    "nuxt-security",
    "@nuxt/content",
  ],

  css: ["~/assets/css/main.css"],

  $development: {
    security: {
      strict: false,
      headers: {
        crossOriginEmbedderPolicy: "unsafe-none",
      },
    },
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        "connect-src": ["*"],
        "img-src": ["data:", "'self'"],
        "script-src": ["'self'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        "style-src-attr": ["'unsafe-inline'"],
      },
    },
    strict: true,
  },

  site: {
    url: homepage,
    name: Mname,
    description: description,
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  pwa: {
    experimental: {
      enableWorkboxPayloadQueryParams: true,
    },
    client: { periodicSyncForUpdates: 3600 },
    registerType: "autoUpdate",
    workbox: {
      globPatterns: ["**/*"],
    },
    pwaAssets: {
      preset: "minimal-2023",
      image: "../public/favicon.svg",
    },
    manifest: {
      name: Mname,
      id: name,
      orientation: "any",
      short_name: Mname,
      launch_handler: {
        client_mode: "auto",
      },
      description: description,
      theme_color: "#ffffff",
      background_color: "#ffffff",
      dir: "auto",
      prefer_related_applications: false,
      categories: [
        "games",
        "entertainment",
        "business",
        "finance",
        "kids",
        "productivity",
        "shopping",
        "social",
        "utilities",
      ],
      display: "standalone",
      icons: [
        {
          src: "pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      screenshots: [
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          form_factor: "wide",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          form_factor: "narrow",
        },
      ],
    },
  },
  compatibilityDate: "2030-01-01",
});
