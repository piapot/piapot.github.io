import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  transformerDirectives,
  transformerAttributifyJsx,
  transformerCompileClass,
  transformerVariantGroup,
} from 'unocss'
import type { Theme } from 'unocss/preset-uno'
import { presetExtra } from 'unocss-preset-extra'
import presetAutoprefixer from 'unocss-preset-autoprefixer'
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'

export default defineConfig<Theme>({
  theme: {},
  presets: [
    presetUno({ dark: 'media' }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAttributify(),
    presetExtra(),
    presetAutoprefixer(),
    presetScrollbarHide(),
  ],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx(),
    transformerCompileClass(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    'flex-center': 'justify-center items-center',
  },
})
