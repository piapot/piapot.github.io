import { defineConfig } from "astro/config"
import solidJs from "@astrojs/solid-js"
import unocss from "unocss/astro"
import vercel from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), unocss()],
  output: "static",
  adapter: vercel({ analytics: true }),
})
