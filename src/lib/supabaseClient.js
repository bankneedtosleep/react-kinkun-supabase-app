import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_SUPABASS_URL
const supabaseKey = process.env.REACT_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)