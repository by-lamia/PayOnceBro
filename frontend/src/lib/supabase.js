import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const supabaseConfig = {
  url: supabaseUrl,
  key: supabaseKey,
  apiUrl: `${supabaseUrl}/rest/v1`
}

export default supabase
