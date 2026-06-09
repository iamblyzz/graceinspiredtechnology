const DISCORD_WEBHOOK_URL =
  process.env.DISCORD_QUESTION_WEBHOOK_URL ||
  'https://discord.com/api/webhooks/1513751313429823509/P-qSX_3Od0LcxW6ddBrbhIzaqdJYmmweoWXjhPyhzTYWN7jWkwtQH532a37RV_Fo5FVj'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const embed = {
    title: '💬 New Question',
    color: 0x1b2b4b, // navy
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
        name: 'Message',
        value: message.length > 1024 ? message.slice(0, 1021) + '...' : message,
        inline: false,
      },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Grace Inspired Technologies — Question Form',
    },
  }

  const payload = {
    username: 'GIT Question Bot',
    embeds: [embed],
  }

  const discordRes = await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!discordRes.ok) {
    console.error('Discord webhook failed:', discordRes.status, await discordRes.text())
    return res.status(502).json({ error: 'Failed to send message' })
  }

  return res.status(200).json({ ok: true })
}
