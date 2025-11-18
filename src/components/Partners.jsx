import { ShieldCheck, Server, Cpu } from 'lucide-react'

const logos = [
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Google Cloud', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Cloud_Logo.svg' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Docker', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
  { name: 'Kubernetes', url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
  { name: 'MongoDB', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
]

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 sm:py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-slate-400">Trusted by modern teams</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">Partners & Ecosystem</h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">We integrate with industry-leading platforms to deliver secure, scalable solutions.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 h-20">
              <img src={l.url} alt={l.name} className="max-h-10 opacity-90" />
            </div>
          ))}
        </div>

        <div id="services" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.03] border border-white/10 text-slate-200">
            <ShieldCheck className="text-cyan-300" />
            <h3 className="mt-3 text-white font-semibold">Security & Compliance</h3>
            <p className="mt-2 text-sm text-slate-400">Enterprise-grade security assessments, zero-trust architecture, SOC 2 and ISO 27001 readiness.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.03] border border-white/10 text-slate-200">
            <Server className="text-cyan-300" />
            <h3 className="mt-3 text-white font-semibold">Cloud & DevOps</h3>
            <p className="mt-2 text-sm text-slate-400">Infrastructure as code, CI/CD pipelines, observability, cost optimization across AWS, GCP, Azure.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.03] border border-white/10 text-slate-200">
            <Cpu className="text-cyan-300" />
            <h3 className="mt-3 text-white font-semibold">Engineering & AI</h3>
            <p className="mt-2 text-sm text-slate-400">Custom apps, APIs, and AI features powered by robust data pipelines and modern frameworks.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
