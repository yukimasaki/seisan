/** Nuxt3におけるプラグインの読み込み方法
 *  https://tech.torico-corp.com/blog/migrate-nuxt2-to-nuxt3-on-our-product/
 */
import {defineNuxtPlugin} from 'nuxt/app'
import VCalendar from 'v-calendar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VCalendar, {})
})
