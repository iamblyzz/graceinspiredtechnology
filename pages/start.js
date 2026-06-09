import Layout from '../components/Layout'
import { useState } from 'react'
import QuestionForm from '../components/QuestionForm'

const services = [
  'AI App Blueprint — ₱4,999',
  'Foundation Setup — ₱9,999',
  'Deployment Fix — ₱9,999',
  'Production Audit — ₱12,999',
  'Architecture Engagement — from ₱24,999',
  'Not sure — please recommend',
]

const budgets = [
  'Under ₱10,000',
  '₱10,000 – ₱25,000',
  '₱25,000 – ₱50,000',
  'Over ₱50,000',
  'Flexible',
]

const timelines = [
  'As soon as possible',
  'Within 2 weeks',
  'Within a month',
  'Flexible',
]

export default function Start() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
    existing: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout
      title="Start a Project"
      description="Submit a project intake to Grace Inspired Technologies. We review every submission and respond within one business day."
    >
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label">Get In Touch</p>
          <h1 className="section-heading mb-4">Start a Project</h1>
          <div className="divider-gold"></div>
          <p className="text-gray-600 max-w-xl mt-2 leading-relaxed">
            Fill out this form to tell us about what you need. We review every submission and respond within one business day. There is no commitment required to submit.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          {submitted ? (
            <div className="max-w-xl">
              <div className="border border-gold p-10">
                <div className="w-10 h-10 bg-navy flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-navy font-semibold text-xl mb-3">We Received Your Submission</h2>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Thank you for reaching out. We will review your project details and respond to <strong>{form.email}</strong> within one business day.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  If your request is urgent, use the intake form again or expect our response within one business day.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="name">Full Name <span className="text-gold">*</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="input-field"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="label-field" htmlFor="email">Email Address <span className="text-gold">*</span></label>
                      <input
                        id="email"
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

                  {/* Company */}
                  <div>
                    <label className="label-field" htmlFor="company">Company or Business Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="input-field"
                      placeholder="Optional"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="label-field" htmlFor="service">Which Service Are You Interested In? <span className="text-gold">*</span></label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="input-field bg-white"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget + Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="label-field" htmlFor="budget">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        className="input-field bg-white"
                        value={form.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select a range</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-field" htmlFor="timeline">Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="input-field bg-white"
                        value={form.timeline}
                        onChange={handleChange}
                      >
                        <option value="">Select a timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="label-field" htmlFor="description">
                      Describe What You Need <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Tell us what you are trying to accomplish. You do not need technical language — just describe the situation and what outcome you are looking for."
                      value={form.description}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Existing */}
                  <div>
                    <label className="label-field" htmlFor="existing">
                      Do You Have an Existing Application or Codebase?
                    </label>
                    <textarea
                      id="existing"
                      name="existing"
                      rows={3}
                      className="input-field resize-none"
                      placeholder="If yes, briefly describe what exists — technology used, where it is hosted, current status. If no, leave this blank."
                      value={form.existing}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Submitting…' : 'Submit Project Intake'}
                    </button>
                    <p className="text-gray-400 text-xs mt-3">
                      We respond within one business day. No commitment required to submit.
                    </p>
                  </div>
                </form>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-gray-50 border border-gray-200 p-8 sticky top-24">
                  <h3 className="text-navy font-semibold text-sm mb-5">What Happens Next</h3>
                  <div className="space-y-5">
                    {[
                      { n: '1', t: 'We Review Your Submission', b: 'Within one business day, we read through every intake carefully.' },
                      { n: '2', t: 'We Send a Response', b: 'We confirm the scope, price, and timeline — or ask a clarifying question if needed.' },
                      { n: '3', t: 'You Decide', b: 'No pressure. If our proposal works for you, we begin. If not, no hard feelings.' },
                    ].map((item) => (
                      <div key={item.n} className="flex gap-3">
                        <div className="w-6 h-6 bg-navy text-gold text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {item.n}
                        </div>
                        <div>
                          <div className="text-navy font-medium text-xs mb-1">{item.t}</div>
                          <div className="text-gray-500 text-xs leading-relaxed">{item.b}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <QuestionForm />
    </Layout>
  )
}
