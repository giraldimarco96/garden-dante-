import logo from '../assets/logo.png';

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/gardendante',
    path: 'M13 22v-8h3l1-4h-4V7.5C13 6.5 13.5 6 14.7 6H17V2.2C16.6 2.1 15.4 2 14.1 2 11.3 2 9.5 3.7 9.5 6.8V10H6.5v4h3v8h3.5z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/fioreria.garden.dante/',
    path: 'M12 2c2.7 0 3.1 0 4.1.1 1.1.1 1.9.2 2.5.5.7.3 1.2.6 1.7 1.1.5.5.8 1 1.1 1.7.2.6.4 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1.1-.2 1.9-.5 2.5-.3.7-.6 1.2-1.1 1.7-.5.5-1 .8-1.7 1.1-.6.2-1.4.4-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1-.1-1.9-.2-2.5-.5-.7-.3-1.2-.6-1.7-1.1-.5-.5-.8-1-1.1-1.7-.2-.6-.4-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1.1.2-1.9.5-2.5.3-.7.6-1.2 1.1-1.7.5-.5 1-.8 1.7-1.1.6-.2 1.4-.4 2.5-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z',
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
      </div>
    </footer>
  );
}
