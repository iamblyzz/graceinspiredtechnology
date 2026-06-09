import Layout from '../components/Layout'
import Link from 'next/link'

const values = [
  {
    title: 'Honest Communication',
    body: 'We tell you what we can deliver, what we cannot, and what we recommend. We do not oversell and we do not take on work we are not confident we can do well.',
  },
  {
    title: 'Clear Deliverables',
    body: 'Every engagement has a defined scope with specific deliverables. Before we start, you know exactly what you will receive and when you will receive it.',
  },
  {
    title: 'Written Documentation',
    body: 'Every piece of work comes with written notes. You should be able to hand our deliverables to any competent developer and they should understand what was done.',
  },
  {
    title: 'Focused Client List',
    body: 'We take on a limited number of projects at any given time. We prefer to give three clients good work over giving ten clients mediocre work.',
  },
]

export default function About() {
  return (
    <Layout
      title="About"
      description="Grace Inspired Technologies — a Philippine-based technology services company helping founders and small businesses with practical, honest technical work."
    >
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label">Who We Are</p>
          <h1 className="section-heading mb-4">About Grace Inspired Technologies</h1>
          <div className="divider-gold"></div>
        </div>
      </section>

      {/* About body */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-navy font-semibold text-xl mb-5">The Company</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Grace Inspired Technologies is a Philippine-based technology services company. We work directly with founders, entrepreneurs, and small businesses that need practical, reliable technical support — not a large agency engagement with high overhead and slow turnaround.
                </p>
                <p>
                  We started this company because we saw a consistent gap in the market: business owners who had real technology needs but could not find a service provider who would communicate clearly, scope work honestly, and deliver what they promised.
                </p>
                <p>
                  Our services are designed for the reality of running a small business. Fixed prices. Clear scope. Real documentation. No retainers you do not need.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-navy font-semibold text-xl mb-5">Who We Work With</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our clients are typically in one of these situations:
                </p>
                <ul className="space-y-3">
                  {[
                    'A founder with a product idea who needs help planning what to build before investing in development.',
                    'A small business that built something and needs it properly deployed or fixed.',
                    'A growing company that needs consistent technical guidance but is not ready to hire a full-time CTO or senior engineer.',
                    'A non-technical business owner who needs an honest second opinion on the technical direction of their product.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gold flex-shrink-0 mt-1">—</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 border-t border-b border-gray-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="section-label">What Guides Our Work</p>
            <h2 className="section-heading">Our Values</h2>
            <div className="divider-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white border border-gray-200 p-8">
                <h3 className="text-navy font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / trust */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="section-label">Where We Operate</p>
            <h2 className="section-heading mb-4">Based in the Philippines</h2>
            <div className="divider-gold"></div>
            <div className="space-y-4 text-gray-600 leading-relaxed mt-4">
              <p>
                Grace Inspired Technologies operates in the Philippines and primarily serves Philippine-based founders, startups, and small businesses — though we also take on international clients when the work is a good fit.
              </p>
              <p>
                We understand the local business environment, pricing expectations, and the practical constraints that come with building technology in an emerging market. We price our services accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Work With Us</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
            If what you read here sounds like what you have been looking for, we would be glad to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start" className="btn-gold">
              Start a Project
            </Link>
            <Link href="/services" className="btn-outline border-gray-500 text-gray-300 hover:bg-white hover:text-navy">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
