export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-slate-400">Who we are</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">Your partner for clean, reliable IT</h2>
            <p className="mt-4 text-slate-300/90">We help ambitious teams design scalable architectures, accelerate delivery with DevOps best practices, and ship polished user experiences.</p>
            <ul className="mt-6 space-y-3 text-slate-300/90">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span> Cloud-native transformations</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span> Secure-by-default engineering</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span> AI-driven automation</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 border border-white/10" />
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-400/20 to-violet-500/10 border border-white/10" />
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-500/10 border border-white/10" />
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-fuchsia-400/20 to-violet-500/10 border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
