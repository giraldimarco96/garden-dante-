import Reveal from './Reveal';

export default function Storia() {
  return (
    <section id="storia" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-5 gap-12 items-start">
        <Reveal className="md:col-span-2">
          <p className="text-rose font-medium mb-3 text-[15px]">La nostra storia</p>
          <h2 className="font-display text-3xl md:text-4xl text-leafdark leading-tight">
            Trent'anni di fiori, un solo indirizzo.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-3 space-y-5 text-[17px] leading-relaxed text-ink/85">
          <p>
            Dal 1992 Garden Dante è un punto di riferimento per chi cerca fiori
            veri, curati a mano, in zona Ippodromo a Padova. Non siamo un
            negozio di catena: siamo una serra, e si vede — nei colori, nella
            varietà, nella cura con cui prepariamo ogni composizione.
          </p>
          <p>
            Importiamo direttamente dall'Olanda, il più grande produttore di
            fiori e piante al mondo, per offrire un assortimento di orchidee
            tra i più ampi della città a prezzi corretti. Il resto — piante da
            giardino, da orto, terricci e concimi professionali — lo scegliamo
            con la stessa attenzione.
          </p>
          <p className="text-leafdark font-medium">
            La soddisfazione di chi ci sceglie per un momento importante è, da
            sempre, il motivo per cui facciamo questo lavoro.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
