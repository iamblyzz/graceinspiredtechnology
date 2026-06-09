import Layout from '../components/Layout'
import Link from 'next/link'

const phases = [
  {
    number: '01',
    title: 'Submit Your Intake Form',
    body: 'Start by filling out our project intake form. You do not need to know the technical details — just describe what you are trying to accomplish, what you have already, and what outcome you need. It takes about five minutes.',
    detail: 'We ask about your timeline, budget, and any constraints upfront so we can give you an honest response rather than a generic one.',
  },
  {
    number: '02',
    title: 'We Review and Confirm Scope',
    body: 'Within one business day, we will review your submission and respond with a clear scope confirmation — what we will deliver, how long it will take, and the exact price. No estimates. No surprises.',
    detail: 'If your project does not match any of our services exactly, we will tell you that directly and suggest alternatives. We do not take on work we cannot do well.',
  },
  {
    number: '03',
    title: 'You Approve and We Begin',
    body: 'Once you approve the scope, we begin work. We will ask any clarifying questions upfront so that we are not back and forth during the engagement. You will have a point of contact for the duration of the work.',
    detail: 'For larger engagements, we provide a brief kickoff document so you know exactly what to expect at each stage.',
  },
  {
    number: '04',
    title: 'Delivery and Documentation',
    body: 'When the work is complete, we deliver everything with written documentation. Whether that is a configuration file, an audit report, or architecture notes — you receive it in writing so you can act on it independently.',
    detail: 'We do not deliver work that requires us to explain it verbally. Documentation is a standard part of every engagement.',
  },
  {
    number: '05',
    title: 'Follow-Up Support',
    body: 'After delivery, we are available for follow-up questions related to the work for three business days at no additional cost. If you identify a new need after that, we handle it as a new engagement.',
    detail: 'This keeps things clean and fair — you are not paying for open-ended support you do not need, and we are not overextended across too many clients.',
  },
]

const faq = [
  {
    q: 'Do I need to be technical to work with you?',
    a: 'No. We work with non-technical founders regularly. If you can describe what your business needs and what outcome you are looking for, we can take it from there. We will explain our work in plain language throughout.',
  },
  {
    q: 'What if I am not sure which service I need?',
    a: 'Fill out the intake form and describe your situation. We will review it and tell you what we recommend. You are not committing to anything by submitting the form.',
  },
  {
    q: 'How do payments work?',
    a: 'For fixed-price services, we collect 50% at the start and 50% upon delivery. For the Architecture Engagement, payment terms are agreed at the start of the engagement. We accept bank transfers and GCash.',
  },
  {
    q: 'What if I am not satisfied with the delivery?',
    a: 'We define scope clearly before we begin. If our delivery does not match the agreed scope, we will address it at no additional cost. Disagreements about scope that were not defined upfront are handled case by case with transparency.',
  },
  {
    q: 'Do you work with clients outside the Philippines?',
    a: 'Our primary focus is the Philippine market, but we do work with international clients on a case-by-case basis. Contact us to discuss.',
  },
  {
    q: 'Can I hire you for something not listed in your services?',
    a: 'Possibly. Describe what you need in the intake form and we will let you know if it is something we can take on. We prefer to keep our service list focused, but we occasionally take on custom engagements.',
  },
]

export default function HowItWorks() {
  return (
    <Layout
      title="How It Works"
      description="How Grace Inspired Technologies works — from intake to delivery. Simple, clear, and documented."
    >
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label">The Process</p>
          <h1 className="section-heading mb-4">How It Works</h1>
          <div className="divider-gold"></div>
          <p className="text-gray-600 max-w-2xl mt-2 leading-relaxed">
            Our process is straightforward. We do not do discovery calls that go nowhere or proposals that take weeks. Here is exactly how an engagement works from start to finish.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-14">
            {phases.map((phase, i) => (
              <div key={phase.number} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-navy flex items-center justify-center">
                    <span className="text-gold font-bold text-sm">{phase.number}</span>
                  </div>
                  {i < phases.length - 1 && (
                    <div className="w-px h-full bg-gray-200 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h2 className="text-navy font-semibold text-lg mb-3">{phase.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-3">{phase.body}</p>
                  <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-gold pl-4 italic">
                    {phase.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label">Common Questions</p>
            <h2 className="section-heading">Frequently Asked</h2>
            <div className="divider-gold"></div>
          </div>

          <div className="space-y-8">
            {faq.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-8">
                <h3 className="text-navy font-semibold mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
            Submit your intake form and we will be in touch within one business day.
          </p>
          <Link href="/start" className="btn-gold">
            Start Your Project
          </Link>
        </div>
      </section>
    </Layout>
  )
}
