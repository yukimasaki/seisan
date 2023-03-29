/** Nuxt3におけるプラグインの読み込み方法
 *  https://tech.torico-corp.com/blog/migrate-nuxt2-to-nuxt3-on-our-product/
 */
import VCalendar from 'v-calendar'
import 'v-calendar/style.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VCalendar, {})
})
