import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#partners', label: 'Partners' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-md bg-slate-900/50 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between py-3 px-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
              <span className="text-white font-semibold tracking-tight">NovaIT</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-200/80 hover:text-white transition-colors text-sm">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-xs font-medium text-slate-100 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl px-3 py-2 transition">
                <Phone size={16} /> +1 (234) 567-890
              </a>
              <a href="mailto:hello@novait.co" className="inline-flex items-center gap-2 text-xs font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-xl px-3 py-2 transition">
                <Mail size={16} /> Say hello
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 border border-white/10 text-white">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block w-full text-left px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/10">
                  {l.label}
                </a>
              ))}
              <div className="pt-2 flex gap-2">
                <a href="tel:+1234567890" className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-100 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl px-3 py-2 transition">
                  <Phone size={16} /> Call us
                </a>
                <a href="mailto:hello@novait.co" className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-xl px-3 py-2 transition">
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
