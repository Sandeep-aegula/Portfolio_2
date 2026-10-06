import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sandeep Aegula</h3>
              <p className="text-slate-600 text-sm">Full Stack Developer</p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <div className="flex justify-center space-x-6 text-sm">
                <Link href="/#home" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
                <Link href="/#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link>
                <Link href="/#experience" className="text-slate-600 hover:text-slate-900 transition-colors">Experience</Link>
                <Link href="/#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</Link>
                <Link href="/#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
              </div>
            </div>

            {/* Copyright & Tech Stack */}
            <div className="text-center md:text-right">
              <p className="text-slate-600 text-sm mb-1">© {currentYear} All rights reserved</p>
              <p className="text-slate-500 text-xs">Built with Next.js & Tailwind CSS</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-xs">
              Designed & Developed with ❤️ • Open to work
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
