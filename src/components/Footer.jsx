import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="py-10 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-ink/60">
        <img src={logo} alt="Garden Dante Fioreria" className="h-14 w-auto" />
        <p>© 2026 Fioreria Garden Dante — Via dell'Ippodromo 25, Padova</p>
        <p>Sito realizzato da Marco Giraldi</p>
      </div>
    </footer>
  );
}
