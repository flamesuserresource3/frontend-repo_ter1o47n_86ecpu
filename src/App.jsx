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
        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-2 max-w-3xl text-sm text-gray-700">
              I’m a graphic designer focused on modern, minimalist systems that feel tactile and dimensional. My work blends clean typography with 3D, liquid-glass surfaces, and subtle motion to create premium brand experiences.
            </p>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}

export default App;
