import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

/** カスタムテーマをヘルパーを使用して読み込む方法
 *  https://zenn.dev/coedo/articles/nuxt3-vuetify3
 */
import { defaults } from '@/helpers/defaults'
import { MAIN_THEME, mainTheme, MAIN_DARK_THEME, mainDarkTheme } from '@/helpers/themes'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    defaults,
    components,
    directives,
    display: {
      mobileBreakpoint: 'sm',
    },
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
        mainDarkTheme,
      },
      // primary-darken-9 primary-lighten-9 までできるようにする
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 9,
        darken: 9,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify);
})
