import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import unocss from "unocss/astro"
import { presetUno, transformerDirectives, presetIcons } from "unocss"

export default defineConfig({
  outDir: "./docs",
  integrations: [
    unocss({
      presets: [presetUno(), presetIcons()],
      transformers: [transformerDirectives()],
    }),
    tailwind(),
  ],
})
