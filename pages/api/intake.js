const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK_URL ||
  'https://discord.com/api/webhooks/1513743532857491456/8cYM2NLjU2TizDPmuJGXR3k0YRrKrmvzpVqv_0pGJLJQQYR018RDDOVCKAKEjoPL8I-K'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, service, description, budget, timeline, existing } = req.body

  if (!name || !email || !service || !description) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const embed = {
    title: '📥 New Project Intake',
    color: 0xc9a84c,
    fields: [
      { name: 'Name',    value: name,         inline: true },
      { name: 'Email',   value: email,        inline: true },
      { name: 'Phone',   value: phone || '—', inline: true },
      { name: 'Service', value: service,      inline: false },
      { name: 'Project Description', value: description.length > 1024 ? description.slice(0, 1021) + '...' : description, inline: false },
      { name: 'Budget',   value: budget   || '—', inline: true },
      { name: 'Timeline', value: timeline || '—', inline: true },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: 'Grace Inspired Technologies — Project Intake' },
  }

  if (existing && existing.trim()) {
    embed.fields.push({
      name: 'Existing App / Codebase',
      value: existing.length > 1024 ? existing.slice(0, 1021) + '...' : existing,
      inline: false,
    })
  }

  const discordRes = await fetch(DISCORD_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'GIT Intake Bot', embeds: [embed] }),
  })

  if (!discordRes.ok) {
    console.error('Discord webhook failed:', discordRes.status)
    return res.status(502).json({ error: 'Failed to send notification' })
  }

  return res.status(200).json({ ok: true })
}
