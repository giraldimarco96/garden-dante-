import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-leaf/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Garden Dante Fioreria" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[15px]">
          <a href="#storia" className="hover:text-rose transition-colors">La storia</a>
          <a href="#servizi" className="hover:text-rose transition-colors">Servizi</a>
          <a href="#dove" className="hover:text-rose transition-colors">Dove siamo</a>
          <a
            href="tel:+390498641260"
            className="inline-flex items-center gap-2 bg-leaf text-cream px-5 py-2.5 rounded-full hover:bg-leafdark transition-colors"
          >
            049 864 1260
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-leafdark"
          aria-label="Apri menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-cream border-t border-leaf/10 px-6 py-5 flex flex-col gap-4 text-[15px]">
          <a href="#storia" onClick={() => setOpen(false)}>La storia</a>
          <a href="#servizi" onClick={() => setOpen(false)}>Servizi</a>
          <a href="#dove" onClick={() => setOpen(false)}>Dove siamo</a>
          <a href="tel:+390498641260" className="text-rose" onClick={() => setOpen(false)}>
            Chiama: 049 864 1260
          </a>
        </div>
      )}
    </header>
  );
}
