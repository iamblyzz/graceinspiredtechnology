import Layout from '../components/Layout'
import Link from 'next/link'

const services = [
  {
    name: 'AI App Blueprint',
    price: '₱4,999',
    duration: '2–3 business days',
    tag: 'Planning',
    description:
      'You have an idea for an application but you are not sure how to structure it, what to build first, or what technology to use. This session gives you a clear, documented plan.',
    includes: [
      'One-hour structured intake session (video or async)',
      'Written breakdown of features and user flows',
      'Technology stack recommendation with rationale',
      'Development phases and estimated scope',
      'Questions to ask any developer you hire',
    ],
    ideal: 'Founders who want to validate and plan before spending on development.',
  },
  {
    name: 'Foundation Setup',
    price: '₱9,999',
    duration: '3–5 business days',
    tag: 'Setup',
    description:
      'Starting a new project on the wrong foundation is expensive to fix later. This service sets up your entire development and deployment infrastructure correctly from day one.',
    includes: [
      'Git repository setup and branch strategy',
      'Cloud hosting configuration (Vercel, Railway, or equivalent)',
      'Database provisioning and connection setup',
      'Environment variable management',
      'Basic CI/CD pipeline for safe deployments',
      'Written documentation of all configurations',
    ],
    ideal: 'Teams beginning a new project who need proper infrastructure from the start.',
  },
  {
    name: 'Deployment Fix',
    price: '₱9,999',
    duration: '2–4 business days',
    tag: 'Fix',
    description:
      'Your application exists and should be running but something is broken in the deployment. We diagnose the root cause, resolve it, and document what was wrong and how it was fixed.',
    includes: [
      'Full review of your deployment configuration',
      'Diagnosis of build errors, environment issues, or runtime failures',
      'Applied fix with explanation',
      'Testing to confirm the resolution',
      'Written summary of the problem and solution',
    ],
    ideal: 'Development teams or solo founders stuck on a deployment issue they cannot resolve.',
  },
  {
    name: 'Production Audit',
    price: '₱12,999',
    duration: '5–7 business days',
    tag: 'Audit',
    description:
      'Before you scale a product or present it to investors or clients, you need to know where it stands. This audit gives you an honest technical picture of your live application.',
    includes: [
      'Performance review (load time, response time, bottlenecks)',
      'Security assessment (common vulnerabilities, exposed secrets, access control)',
      'Infrastructure and configuration review',
      'Code quality and maintainability summary',
      'Prioritized list of recommended improvements with effort estimates',
      'Written report in plain language',
    ],
    ideal: 'Businesses running a live application that needs to be evaluated before growth.',
  },
  {
    name: 'Architecture Engagement',
    price: 'Starting at ₱24,999',
    duration: 'Agreed per engagement',
    tag: 'Ongoing',
    description:
      'Some businesses need consistent technical guidance without the overhead of a full-time technical hire. This engagement provides senior-level architecture support on an ongoing basis.',
    includes: [
      'System design and architecture reviews',
      'Technology decisions with documented rationale',
      'Code and pull request reviews on request',
      'Weekly or bi-weekly check-in calls',
      'Incident support and guidance',
      'Written architecture documentation',
    ],
    ideal: 'Growing companies that need a trusted technical partner for a defined period.',
  },
]

const tagColors = {
  Planning: 'bg-blue-50 text-blue-700',
  Setup: 'bg-green-50 text-green-700',
  Fix: 'bg-orange-50 text-orange-700',
  Audit: 'bg-purple-50 text-purple-700',
  Ongoing: 'bg-yellow-50 text-yellow-700',
}

export default function Services() {
  return (
    <Layout
      title="Services"
      description="Fixed-price technology services for founders and small businesses. AI planning, setup, deployment, audits, and architecture engagements."
    >
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label">What We Offer</p>
          <h1 className="section-heading mb-4">Our Services</h1>
          <div className="divider-gold"></div>
          <p className="text-gray-600 max-w-2xl mt-2 leading-relaxed">
            Every service is fixed-price, clearly scoped, and delivered with documentation. You know exactly what you are paying for before we begin.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-10">
            {services.map((service, i) => (
              <div
                key={service.name}
                className="border border-gray-200 p-8 md:p-10 hover:border-gold transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-sm ${tagColors[service.tag]}`}>
                      {service.tag}
                    </span>
                    <h2 className="text-xl font-semibold text-navy">{service.name}</h2>
                  </div>
                  <div className="text-right">
                    <div className="text-gold font-bold text-xl">{service.price}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{service.duration}</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-navy font-semibold text-xs uppercase tracking-widest mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="text-gold mt-0.5 flex-shrink-0">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold text-xs uppercase tracking-widest mb-3">Ideal For</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.ideal}</p>
                    <div className="mt-6">
                      <Link href="/start" className="btn-primary text-xs px-5 py-2.5">
                        Inquire About This Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h3 className="text-navy font-semibold text-xl mb-3">Not Sure Which Service You Need?</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              That is perfectly fine. Fill out our intake form and describe what you are trying to accomplish. We will review your situation and recommend the right service for your needs — or tell you honestly if we are not the right fit.
            </p>
            <Link href="/start" className="btn-gold">
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
