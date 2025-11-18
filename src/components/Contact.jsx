import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-sm uppercase tracking-wider text-slate-400">Get in touch</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">Let’s talk about your next project</h2>
            <p className="mt-3 text-slate-300/90">Reach out and we’ll get back within one business day. We can meet virtually or onsite.</p>

            <div className="mt-8 space-y-4">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-slate-200 hover:text-white transition">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <a href="mailto:hello@novait.co" className="flex items-center gap-3 text-slate-200 hover:text-white transition">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span className="text-sm">hello@novait.co</span>
              </a>
              <div className="flex items-center gap-3 text-slate-200">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">120 Market St, Suite 500, San Francisco, CA</span>
              </div>
            </div>
          </div>

          <form className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-300 mb-2">First name</label>
                <input type="text" placeholder="Jane" className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-2">Last name</label>
                <input type="text" placeholder="Doe" className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs text-slate-300 mb-2">Email</label>
                <input type="email" placeholder="jane@company.com" className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs text-slate-300 mb-2">Message</label>
                <textarea rows="4" placeholder="Tell us about your goals" className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition">
              Send message
            </button>
          </form>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} NovaIT. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </section>
  )
}
