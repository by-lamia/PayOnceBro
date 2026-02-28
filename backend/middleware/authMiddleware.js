import supabase from '../config/db.js'

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Not authorised, no token' })
    }

    // Verify the Supabase JWT — uses the service role client
    const { data: { user }, error } = await supabase.auth.getUser(token)

    if (error || !user) {
      return res.status(401).json({ message: 'Not authorised, token invalid' })
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.user_metadata?.role || 'user',
    }

    next()
  } catch (err) {
    res.status(401).json({ message: 'Not authorised' })
  }
}
