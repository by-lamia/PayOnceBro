import supabase from '../config/db.js'

export const findById = async (id) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, role, username, full_name, created_at')
    .eq('id', id)
    .single()
  if (error && error.code !== 'PGRST116') throw error
  return data
}

export const updateProfile = async (id, updates) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}
