import Reveal from './Reveal';

export default function Dove() {
  return (
    <section id="dove" className="py-24 md:py-32 bg-leafdark text-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14">
        <Reveal>
          <p className="text-rose font-medium mb-3 text-[15px]">Dove siamo</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-8">
            Vi aspettiamo in Via dell'Ippodromo.
          </h2>

          <div className="space-y-6 text-[16px]">
            <div>
              <p className="text-ochre font-medium mb-1">Indirizzo</p>
              <p className="text-cream/85">Via dell'Ippodromo, 25 — 35129 Padova</p>
            </div>
            <div>
              <p className="text-ochre font-medium mb-1">Telefono</p>
              <a href="tel:+390498641260" className="text-cream/85 hover:text-rose transition-colors">
                049 864 1260
              </a>
            </div>
            <div>
              <p className="text-ochre font-medium mb-1">Orari</p>
              <ul className="text-cream/85 space-y-1">
                <li className="flex justify-between max-w-xs"><span>Lunedì</span><span>Chiuso</span></li>
                <li className="flex justify-between max-w-xs"><span>Mar – Sab</span><span>8:30–12:30, 15:30–19:00</span></li>
                <li className="flex justify-between max-w-xs"><span>Domenica</span><span>9:00–12:30</span></li>
              </ul>
            </div>
          </div>

          <a
            href="tel:+390498641260"
            className="inline-block mt-9 bg-rose text-cream px-7 py-3.5 rounded-full hover:bg-ochre hover:text-leafdark transition-colors text-[15px]"
          >
            Chiamaci ora
          </a>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl overflow-hidden border border-cream/15 min-h-[320px]">
          <iframe
            title="Mappa Fioreria Garden Dante"
            src="https://maps.google.com/maps?q=Fioreria%20Garden%20Dante%2C%20Via%20dell'Ippodromo%2025%2C%20Padova&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '320px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
