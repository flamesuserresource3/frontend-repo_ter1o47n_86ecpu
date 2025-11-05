import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Card System',
    desc: 'Glassmorphic 3D cards and motion system for a digital bank.',
    tags: ['3D', 'Brand', 'UI'],
    link: '#',
    hue: 'from-sky-400 to-indigo-500',
  },
  {
    title: 'Product Shot Series',
    desc: 'Photorealistic renders with liquid light refractions.',
    tags: ['Render', 'Art Direction'],
    link: '#',
    hue: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Crypto Identity',
    desc: 'Minimal mark, motion logo, and token UI kit.',
    tags: ['Identity', 'Motion'],
    link: '#',
    hue: 'from-fuchsia-400 to-pink-500',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Frosted panels and depth for analytics platform.',
    tags: ['UI', 'Design System'],
    link: '#',
    hue: 'from-amber-400 to-orange-500',
  },
  {
    title: 'E-commerce Editorial',
    desc: 'Type-forward layouts and glossy product frames.',
    tags: ['Editorial', 'E‑comm'],
    link: '#',
    hue: 'from-violet-400 to-purple-500',
  },
  {
    title: 'Brand Motion Pack',
    desc: 'Loopable animations for campaign social toolkit.',
    tags: ['Motion', 'Toolkit'],
    link: '#',
    hue: 'from-lime-400 to-emerald-500',
  },
];

function ProjectCard({ title, desc, tags, link, hue }) {
  return (
    <a href={link} className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-5 shadow-sm transition-all hover:shadow-lg backdrop-blur">
      <div className={`absolute inset-0 opacity-70 transition-opacity group-hover:opacity-90 pointer-events-none bg-gradient-to-br ${hue}`} />
      <div className="relative z-10">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 text-xs text-gray-700 shadow-sm">
            View <ExternalLink className="h-3 w-3" />
          </span>
        </div>
        <p className="text-sm text-gray-700/90 max-w-sm">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/70 bg-white/80 px-2.5 py-1 text-xs text-gray-800 backdrop-blur">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 h-28 w-full rounded-2xl bg-white/60 ring-1 ring-black/5 shadow-inner" />
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-700">
            A curated set of projects exploring glass, light and spatial UI for modern brands.
          </p>
        </div>
        <a href="#contact" className="rounded-full border border-gray-900/10 bg-white/80 px-4 py-2 text-sm text-gray-900 backdrop-blur hover:bg-white">Start a project</a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
