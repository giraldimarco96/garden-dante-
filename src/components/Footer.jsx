import logo from '../assets/logo.png';

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/gardendante',
    path: 'M13 22v-8h3l1-4h-4V7.5C13 6.5 13.5 6 14.7 6H17V2.2C16.6 2.1 15.4 2 14.1 2 11.3 2 9.5 3.7 9.5 6.8V10H6.5v4h3v8h3.5z',
  },
];

export default function Footer() {
  return (
    <footer className="py-10 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-ink/60">
        <img src={logo} alt="Garden Dante Fioreria" className="h-14 w-auto" />

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-leafdark hover:text-rose transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        <p>© 2026 Fioreria Garden Dante — Via dell'Ippodromo 25, Padova</p>
        <p>Sito realizzato da Marco Giraldi</p>
      </div>
    </footer>
  );
}
