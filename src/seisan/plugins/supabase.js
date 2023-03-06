import { createClient } from '@supabase/supabase-js'
const db = createClient(process.env.VUE_APP_SUPABASE_URL, process.env.VUE_APP_SUPABASE_KEY)

export default ({ app }, inject) => {
  inject('db', db)
}
