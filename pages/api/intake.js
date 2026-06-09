const DISCORD_WEBHOOK_URL =
  process.env.DISCORD_WEBHOOK_URL ||
  'https://discord.com/api/webhooks/1513743532857491456/8cYM2NLjU2TizDPmuJGXR3k0YRrKrmvzpVqv_0pGJLJQQYR018RDDOVCKAKEjoPL8I-K'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company, service, budget, timeline, description, existing } = req.body

  if (!name || !email || !service || !description) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const embed = {
    title: '📥 New Project Intake',
    color: 0xc9a84c, // gold
    fields: [
      {
        name: 'Name',
        value: name,
        inline: true,
      },
      {
        name: 'Email',
        value: email,
        inline: true,
      },
      {
        name: 'Company',
        value: company || '—',
        inline: true,
      },
      {
        name: 'Service Requested',
        value: service,
        inline: false,
      },
      {
        name: 'Budget',
        value: budget || 'Not specified',
        inline: true,
      },
      {
        name: 'Timeline',
        value: timeline || 'Not specified',
        inline: true,
      },
      {
        name: 'Project Description',
        value: description.length > 1024 ? description.slice(0, 1021) + '...' : description,
        inline: false,
      },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Grace Inspired Technologies — Project Intake',
    },
  }

  if (existing && existing.trim()) {
    embed.fields.push({
      name: 'Existing Application / Codebase',
      value: existing.length > 1024 ? existing.slice(0, 1021) + '...' : existing,
      inline: false,
    })
  }

  const payload = {
    username: 'GIT Intake Bot',
    embeds: [embed],
  }

  const discordRes = await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!discordRes.ok) {
    console.error('Discord webhook failed:', discordRes.status, await discordRes.text())
    return res.status(502).json({ error: 'Failed to send notification' })
  }

  return res.status(200).json({ ok: true })
}
