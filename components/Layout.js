import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Head from 'next/head'

export default function Layout({ children, title, description }) {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const pageTitle = title
    ? `${title} — Grace Inspired Technologies`
    : 'Grace Inspired Technologies — Technology Made Simpler'

  const pageDesc = description ||
    'Grace Inspired Technologies helps founders and small businesses turn ideas into working digital products through clear planning, reliable setup, and practical technical support.'

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About' },
  ]

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold text-sm">G</span>
                </div>
                <div className="leading-none">
                  <div className="text-navy font-semibold text-sm tracking-wide">Grace Inspired</div>
                  <div className="text-gray-500 text-xs tracking-widest uppercase">Technologies</div>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-navy border-b-2 border-gold pb-0.5'
                        : 'text-gray-600 hover:text-navy'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="hidden md:flex items-center gap-4">
                <Link href="/start" className="btn-primary text-xs px-5 py-2.5">
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-navy"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden border-t border-gray-100 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2.5 text-sm font-medium ${
                      isActive(link.href) ? 'text-navy' : 'text-gray-600'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/start"
                  className="btn-primary text-xs mt-3 inline-block"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-navy text-white">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-navy font-bold text-sm">G</span>
                  </div>
                  <div className="leading-none">
                    <div className="text-white font-semibold text-sm tracking-wide">Grace Inspired Technologies</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  Helping founders and small businesses turn ideas into working digital products through clear planning, reliable setup, and practical technical support.
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:hello@graceinspiredtech.com"
                    className="text-gold text-sm hover:text-gold-light transition-colors duration-200"
                  >
                    hello@graceinspiredtech.com
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-white font-semibold text-sm tracking-wide mb-4">Services</h4>
                <ul className="space-y-2.5">
                  {[
                    'AI App Blueprint',
                    'Foundation Setup',
                    'Deployment Fix',
                    'Production Audit',
                    'Architecture Engagement',
                  ].map((s) => (
                    <li key={s}>
                      <Link href="/services" className="text-gray-400 text-sm hover:text-gold transition-colors duration-200">
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold text-sm tracking-wide mb-4">Company</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'How It Works', href: '/how-it-works' },
                    { label: 'About', href: '/about' },
                    { label: 'Get Started', href: '/start' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-400 text-sm hover:text-gold transition-colors duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-navy-light mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} Grace Inspired Technologies. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Philippines &nbsp;·&nbsp; Professional Technology Services
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
