import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  const email = 'hello@yourstudio.design';
  const subject = encodeURIComponent('Project Inquiry — GD Studio');
  const body = encodeURIComponent('Hi, I would love to discuss a new project.\n\nScope: \nTimeline: \nBudget: \n\nThanks!');

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-[28px] border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs text-gray-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500" /> Let's collaborate
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900">Have an idea in mind?</h3>
            <p className="mt-2 max-w-prose text-sm text-gray-700">
              Tell me about your product, and I’ll design crisp visuals that feel alive — glass, light, and motion included.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}?subject=${subject}&body=${body}`}
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-gray-900/10 hover:bg-gray-800"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-gray-900/10 bg-white/80 px-5 py-3 text-sm font-medium text-gray-900 backdrop-blur hover:bg-white"
              >
                View more work <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-gray-700">
              <a href="#" className="hover:text-gray-900 underline-offset-2 hover:underline">Instagram</a>
              <a href="#" className="hover:text-gray-900 underline-offset-2 hover:underline">Dribbble</a>
              <a href="#" className="hover:text-gray-900 underline-offset-2 hover:underline">Behance</a>
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${email}?subject=${subject}`;
              }}
              className="grid gap-3"
            >
              <div className="grid gap-2">
                <label className="text-sm text-gray-700">Your name</label>
                <input className="rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-900 shadow-inner outline-none focus:ring-2 focus:ring-gray-900/10" required />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" className="rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-900 shadow-inner outline-none focus:ring-2 focus:ring-gray-900/10" required />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-gray-700">Message</label>
                <textarea rows={4} className="rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-900 shadow-inner outline-none focus:ring-2 focus:ring-gray-900/10" required />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">Typical reply within 24h</p>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-gray-800">
                  Send inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} GD Studio — All rights reserved.</p>
    </section>
  );
}
