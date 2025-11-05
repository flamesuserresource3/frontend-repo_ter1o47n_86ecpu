import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="rounded-xl bg-white/70 shadow-inner ring-1 ring-black/5 p-2">
            <span className="block h-5 w-5 rounded-md bg-gradient-to-br from-sky-500 to-indigo-600" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">GD Studio</span>
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#work" className="text-gray-700 hover:text-gray-900 transition-colors">Work</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="ml-4 hidden md:inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800 transition-colors">Let's talk</a>
      </nav>
    </header>
  );
}
