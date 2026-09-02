import Reveal from './Reveal';

const servizi = [
  {
    color: '#991F50',
    icon: 'M12 21c-4-2-8-6-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5-4 9-8 11z',
    title: 'Bouquet e composizioni',
    text: 'Mazzi di fiori freschi assemblati al momento, per un pensiero di ogni giorno o un regalo importante.',
  },
  {
    color: '#99CA3A',
    icon: 'M12 3l2.5 5 5.5.7-4 4 1 5.5L12 15.5 6.9 18.2l1-5.5-4-4 5.5-.7z',
    title: 'Matrimoni e cerimonie',
    text: 'Addobbi floreali eleganti per matrimoni, battesimi e cerimonie, pensati insieme a voi nei dettagli.',
  },
  {
    color: '#598527',
    icon: 'M12 2v14M12 6c-3-2-6-1-7 1 2 2 5 2 7 1M12 9c3-2 6-1 7 1-2 2-5 2-7 1M9 22h6',
    title: 'Corone di laurea',
    text: 'Corone e bouquet personalizzati per il giorno della laurea, preparati seguendo le vostre indicazioni.',
  },
  {
    color: '#991F50',
    icon: 'M12 3v18M6 8c0 3 2.7 5 6 5s6-2 6-5M6 15c0 2.8 2.7 4 6 4s6-1.2 6-4',
    title: 'Piante e giardino',
    text: 'Piante da balcone, da siepe e da orto, orchidee, terricci e concimi professionali per la loro cura.',
  },
  {
    color: '#99CA3A',
    icon: 'M3 12h13l-3-3m3 3l-3 3M18 6h3v12h-3',
    title: 'Consegna a domicilio',
    text: 'Consegniamo bouquet e composizioni direttamente a casa vostra o del destinatario, a Padova e dintorni.',
  },
  {
    color: '#598527',
    icon: 'M12 21s-7-4.5-9.5-9C1 8 3 4 7 4c2 0 4 1.5 5 3 1-1.5 3-3 5-3 4 0 6 4 4.5 8-2.5 4.5-9.5 9-9.5 9z',
    title: 'Fiori per ricordare',
    text: 'Composizioni e corone per cerimonie funebri, curate con rispetto e discrezione.',
  },
];

export default function Servizi() {
  return (
    <section id="servizi" className="py-24 md:py-32 bg-leaf/[0.04]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="max-w-xl mb-16">
          <p className="text-rose font-medium mb-3 text-[15px]">Cosa facciamo</p>
          <h2 className="font-display text-3xl md:text-4xl text-leafdark leading-tight">
            Un fiore per ogni occasione, dal quotidiano alle cerimonie.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {servizi.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08} className="flex gap-5">
              <svg
                className="shrink-0 mt-1"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke={s.color}
                strokeWidth="1.5"
              >
                <path d={s.icon} />
              </svg>
              <div>
                <h3 className="font-display text-xl text-leafdark mb-2">{s.title}</h3>
                <p className="text-ink/75 leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
