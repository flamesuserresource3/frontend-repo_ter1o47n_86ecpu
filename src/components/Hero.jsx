import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle white overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.85),rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.3)_70%,transparent)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for freelance
        </div>
        <h1 className="mt-6 font-semibold tracking-tight text-gray-900 [font-variation-settings:'opsz'_32] text-5xl sm:text-6xl">
          Graphic Designer crafting glassmorphic 3D visuals
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
          I blend minimalist typography with liquid-glass aesthetics to deliver modern brand systems, 3D product shots, and fintech-inspired visuals.
        </p>

        {/* Detail chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {['Brand systems', '3D renders', 'Motion', 'UI direction'].map((chip) => (
            <span key={chip} className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs text-gray-800 backdrop-blur shadow-sm">
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-gray-900/10 hover:bg-gray-800 transition-colors">
            Explore Work <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gray-900/10 bg-white/80 px-5 py-3 text-sm font-medium text-gray-900 backdrop-blur hover:bg-white">
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>

        {/* Small stats */}
        <div className="mt-8 grid grid-cols-3 gap-6 text-left">
          {[{k:'Projects',v:'40+'},{k:'Brands',v:'15'},{k:'Years',v:'6+'}].map(({k,v}) => (
            <div key={k} className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur">
              <div className="text-2xl font-semibold text-gray-900">{v}</div>
              <div className="text-xs text-gray-700">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
