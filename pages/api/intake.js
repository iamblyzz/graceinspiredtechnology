const AIRTABLE_API_KEY   = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID   = process.env.AIRTABLE_BASE_ID
const AIRTABLE_TABLE     = process.env.AIRTABLE_TABLE_NAME || 'Leads'
const DISCORD_WEBHOOK    = process.env.DISCORD_WEBHOOK_URL

// ─── Save lead to Airtable ────────────────────────────────────────────────────
async function saveToAirtable({ name, email, phone, service, description, source }) {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`

  // Confirmed fields — match exact Airtable column names
  const fields = {
    Name:    name,
    Email:   email,
    Phone:   phone || '',
    Service: service,
    Notes:   description,
  }

  const body = { fields }

  const res = await fetch(url, {
    method:  'POST',
    headers: {
      Authorization:  `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Airtable error ${res.status}: ${text}`)
  }

  return await res.json()
}

// ─── Send Discord notification ────────────────────────────────────────────────
async function sendDiscord({ name, email, phone, service, description, source }) {
  const embed = {
    title:  '🟢 NEW LEAD',
    color:  0xc9a84c, // gold
    fields: [
      { name: 'Name',                value: name,              inline: true  },
      { name: 'Email',               value: email,             inline: true  },
      { name: 'Phone',               value: phone || '—',      inline: true  },
      { name: 'Service',             value: service,           inline: false },
      { name: 'Project Description', value: description.length > 1024
          ? description.slice(0, 1021) + '...'
          : description,                                        inline: false },
      { name: 'Source',              value: source || 'Website', inline: true },
    ],
    footer:    { text: '✅ Saved to Airtable successfully' },
    timestamp: new Date().toISOString(),
  }

  const res = await fetch(DISCORD_WEBHOOK, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ username: 'GIT Intake Bot', embeds: [embed] }),
  })

  if (!res.ok) {
    // Non-fatal — lead is already saved. Log and continue.
    console.error('Discord notify failed:', res.status, await res.text())
  }
}

// ─── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.error('Missing Airtable env vars')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  const { name, email, phone, service, description, budget, timeline, existing } = req.body

  if (!name || !email || !service || !description) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Build a rich description that includes optional fields
  const fullDescription = [
    description,
    budget    ? `\nBudget: ${budget}`       : null,
    timeline  ? `\nTimeline: ${timeline}`   : null,
    existing  ? `\nExisting app: ${existing}` : null,
  ].filter(Boolean).join('')

  // 1. Save to Airtable — if this fails, stop and return error
  try {
    await saveToAirtable({
      name,
      email,
      phone,
      service,
      description: fullDescription,
      source: 'Website',
    })
  } catch (err) {
    console.error('Airtable save failed:', err.message)
    return res.status(502).json({ error: 'Failed to save lead. Please try again.' })
  }

  // 2. Airtable succeeded — send Discord notification (non-blocking failure)
  await sendDiscord({
    name,
    email,
    phone,
    service,
    description: fullDescription,
    source: 'Website',
  })

  // 3. Return success to the browser
  return res.status(200).json({ ok: true })
}
