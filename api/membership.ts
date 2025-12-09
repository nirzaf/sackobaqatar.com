import { createClient } from '@supabase/supabase-js'

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }
  try {
    const body = req.body || JSON.parse(req.rawBody || '{}')
    const required = ['fullName','email','mobilePhone','date']
    for (const k of required) {
      if (!body[k]) {
        res.status(400).json({ error: `Missing field: ${k}` })
        return
      }
    }
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    let refId = `MEM-${Date.now()}`
    if (url && key) {
      const supabase = createClient(url, key)
      const { error } = await supabase
        .from('membership_applications')
        .insert([{ ...body, referenceId: refId, status: 'received' }])
      if (error) {
        res.status(500).json({ error: error.message })
        return
      }
      res.status(200).json({ ok: true, referenceId: refId })
    } else {
      res.status(202).json({ ok: true, referenceId: refId, note: 'Stored disabled: missing SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY' })
    }
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Server error' })
  }
}
