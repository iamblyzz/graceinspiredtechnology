import { useState } from 'react'

export default function QuestionForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-gray-50 border-t border-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-heading">Have a Question?</h2>
            <div className="divider-gold"></div>
            <p className="text-gray-600 leading-relaxed mt-2">
              Not sure which service you need, or just want to ask something before committing? Send us a message and we will get back to you.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'No sales pressure',
                'We respond within one business day',
                'Plain answers, no jargon',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-gold text-xs">—</span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'success' ? (
              <div className="border border-gold p-8">
                <div className="w-8 h-8 bg-navy flex items-center justify-center mb-5">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-navy font-semibold mb-2">Message Sent</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thanks for reaching out. We will be in touch within one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-5 text-gold text-xs font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-field" htmlFor="q-name">Name <span className="text-gold">*</span></label>
                    <input
                      id="q-name"
                      name="name"
                      type="text"
                      required
                      className="input-field"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="q-email">Email <span className="text-gold">*</span></label>
                    <input
                      id="q-email"
                      name="email"
                      type="email"
                      required
                      className="input-field"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="label-field" htmlFor="q-message">Your Question <span className="text-gold">*</span></label>
                  <textarea
                    id="q-message"
                    name="message"
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Ask us anything about our services, process, or whether we are a good fit for your project."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-xs">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
