import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-white to-sky-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-indigo-50 to-white blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />

        {/* Lightweight About anchor to match nav link */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur">
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-3 max-w-3xl text-base text-gray-700">
              I’m a graphic designer focused on minimalist systems that feel tactile and dimensional. I blend clean typography with 3D, liquid-glass surfaces, and subtle motion to create premium brand experiences for fintech, SaaS, and culture brands.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm">
                <h3 className="text-sm font-semibold tracking-tight">Core Services</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Brand identity & systems</li>
                  <li>• 3D visuals & product shots</li>
                  <li>• UI art direction</li>
                  <li>• Motion & launch assets</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm">
                <h3 className="text-sm font-semibold tracking-tight">Design Approach</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Discovery & creative strategy</li>
                  <li>• Rapid visual exploration</li>
                  <li>• Refine with motion & light</li>
                  <li>• Deliver a scalable system</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm">
                <h3 className="text-sm font-semibold tracking-tight">Quick Facts</h3>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <li><span className="font-semibold text-gray-900">40+</span> projects</li>
                  <li><span className="font-semibold text-gray-900">6+</span> years</li>
                  <li><span className="font-semibold text-gray-900">15</span> brands</li>
                  <li><span className="font-semibold text-gray-900">3</span> awards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}

export default App;
