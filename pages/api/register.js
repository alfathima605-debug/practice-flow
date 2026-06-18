// pages/api/register.js
import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password, name } = req.body

  if (!email || !password || !name) {
    return res.status(400).json({ message: 'Please provide email, password and name' })
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  })

  if (error) {
    return res.status(400).json({ message: error.message })
  }

  // Optionally, you can send email verification etc.
  return res.status(200).json({ message: 'User created successfully. Please check your email for confirmation.', user: data.user })
}
