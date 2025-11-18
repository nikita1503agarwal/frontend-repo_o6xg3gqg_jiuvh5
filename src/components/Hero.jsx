import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-950/70 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300/90 bg-cyan-400/10 ring-1 ring-cyan-400/30 px-3 py-1 rounded-full">
            Modern IT Solutions
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight text-white tracking-tight">
            Technology that moves your business forward
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200/80 max-w-2xl">
            We design, build, and secure reliable digital platforms — from cloud infrastructure and DevOps to custom software and AI integrations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition font-medium">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
