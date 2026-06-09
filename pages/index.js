import Layout from '../components/Layout'
import Link from 'next/link'

const services = [
  {
    name: 'AI App Blueprint',
    price: '₱4,999',
    description:
      'A structured planning session that maps out your app idea into a clear, buildable plan — features, flow, tech stack, and next steps.',
    best: 'Best for founders with an idea who need a roadmap before spending on development.',
  },
  {
    name: 'Foundation Setup',
    price: '₱9,999',
    description:
      'We set up your project from scratch — repository, environment, hosting, CI/CD pipeline, and database — so you can start building on a solid base.',
    best: 'Best for startups beginning a new project who need everything configured correctly.',
  },
  {
    name: 'Deployment Fix',
    price: '₱9,999',
    description:
      'Your app exists but something is broken in production. We diagnose the issue, fix the deployment, and document what was done.',
    best: 'Best for teams stuck on a production problem they cannot resolve on their own.',
  },
  {
    name: 'Production Audit',
    price: '₱12,999',
    description:
      'A thorough review of your live application — performance, security, configuration, and reliability — with a written report and prioritized action items.',
    best: 'Best for businesses running an app that needs to be evaluated before scaling.',
  },
  {
    name: 'Architecture Engagement',
    price: 'From ₱24,999',
    description:
      'Ongoing technical guidance for your product — system design, infrastructure decisions, team support, and architecture reviews over an agreed engagement period.',
    best: 'Best for growing companies that need a senior technical partner without a full-time hire.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Tell Us About Your Project',
    body: 'Fill out our intake form with a brief description of what you need. No technical jargon required.',
  },
  {
    number: '02',
    title: 'We Review and Respond',
    body: 'Within one business day, we confirm scope, timeline, and pricing. No surprises.',
  },
  {
    number: '03',
    title: 'Work Begins',
    body: 'We handle the technical work and keep you informed at every step. You stay in control.',
  },
  {
    number: '04',
    title: 'Delivery and Handoff',
    body: 'You receive the deliverable with clear documentation so you can move forward independently.',
  },
]

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-white py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="section-label">Grace Inspired Technologies</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy leading-tight mb-6">
              Technology<br />Made Simpler.
            </h1>
            <div className="divider-gold"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              Grace Inspired Technologies helps founders and small businesses turn ideas into working digital products through clear planning, reliable setup, and practical technical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/start" className="btn-gold">
                Start a Project
              </Link>
              <Link href="/services" className="btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            {[
              'Clear fixed-price services',
              'No hidden fees',
              'Delivered with documentation',
              'Built for the Philippines',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-gold text-xs">✓</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label">What We Offer</p>
            <h2 className="section-heading">Services Designed for<br />Real Business Needs</h2>
            <div className="divider-gold"></div>
            <p className="text-gray-600 max-w-xl mt-2">
              Each service is scoped, priced, and delivered to help you move forward — not to lock you into ongoing retainers you do not need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.name} className="service-card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-navy font-semibold text-base">{service.name}</h3>
                  <span className="text-gold font-semibold text-sm whitespace-nowrap ml-4">{service.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <p className="text-gray-400 text-xs italic">{service.best}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-outline">
              See Full Service Details
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works — brief */}
      <section className="bg-gray-50 border-t border-b border-gray-100 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label">The Process</p>
            <h2 className="section-heading">Simple from Start to Finish</h2>
            <div className="divider-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="text-gold font-bold text-2xl mb-3 font-serif">{step.number}</div>
                <h3 className="text-navy font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/how-it-works" className="btn-primary">
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* About blurb */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="section-heading">Practical Technology Help<br />for Growing Businesses</h2>
              <div className="divider-gold"></div>
              <p className="text-gray-600 leading-relaxed mt-2 mb-6">
                Grace Inspired Technologies is a Philippine-based technology services company working directly with founders, entrepreneurs, and small business owners.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are not a large agency. We are a focused team that takes on a small number of projects at a time so that every client receives careful, personal attention. If you need a real technical partner — someone who communicates clearly, delivers on time, and documents everything — we are here.
              </p>
              <Link href="/about" className="btn-outline">
                About the Company
              </Link>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: 'We speak plainly',
                  body: 'No unnecessary jargon. We explain what we are doing and why in terms that make sense for your business.',
                },
                {
                  title: 'We deliver documentation',
                  body: 'Every engagement ends with written notes so you are never dependent on us to understand your own system.',
                },
                {
                  title: 'We keep scope tight',
                  body: 'Clearly defined deliverables mean no scope creep, no surprise invoices, and no wasted time.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 bg-gold flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-navy font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Ready to Move Forward?</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            Tell Us What You Need.<br />We Handle the Rest.
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Fill out our intake form and we will review your project within one business day. No commitment required.
          </p>
          <Link href="/start" className="btn-gold">
            Start a Project
          </Link>
        </div>
      </section>
    </Layout>
  )
}
