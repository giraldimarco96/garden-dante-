import { motion } from 'framer-motion';

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 + i * 0.09, duration: 0.6, ease: 'easeOut' },
  }),
};

const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.15, duration: 1.1, ease: 'easeInOut' },
  }),
};

const fillVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 0.8 } },
};

export default function Hero() {
  const words = ['Fiori', 'che', 'accompagnano'];
  const words2 = ['ogni', 'momento,'];

  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-rose font-medium mb-4 text-[15px]"
          >
            Fioreria a Padova, zona Ippodromo
          </motion.p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-leafdark">
            <span className="block">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-2"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {words2.map((w, i) => (
                <motion.span
                  key={w}
                  custom={i + 3}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-2"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span
              custom={5}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className="italic text-rose inline-block"
            >
              dal 1992.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-7 text-lg text-ink/80 max-w-md leading-relaxed"
          >
            Bouquet, composizioni per matrimoni e lauree, piante da giardino e
            orchidee importate direttamente dall'Olanda. Consegniamo a
            domicilio in tutta Padova.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="tel:+390498641260"
              className="bg-leaf text-cream px-7 py-3.5 rounded-full hover:bg-leafdark transition-colors text-[15px]"
            >
              Chiama la fioreria
            </a>
            <a
              href="https://wa.me/393886026969?text=Ciao!%20Vorrei%20ordinare%20una%20consegna%20a%20domicilio."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-7 py-3.5 rounded-full hover:brightness-95 transition-all text-[15px]"
            >
              Ordina su WhatsApp
            </a>
            <a
              href="#dove"
              className="border border-leaf/30 text-leafdark px-7 py-3.5 rounded-full hover:border-leaf transition-colors text-[15px]"
            >
              Vieni a trovarci
            </a>
          </motion.div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <svg viewBox="0 0 420 420" className="w-72 h-72 md:w-96 md:h-96" fill="none">
            <g stroke="#598527" strokeWidth="1.6" strokeLinecap="round">
              <motion.path custom={0} initial="hidden" animate="visible" variants={drawVariants}
                d="M210 90 C 150 110, 130 170, 160 220 C 190 260, 230 260, 250 220 C 270 170, 260 120, 210 90 Z" />
              <motion.path custom={1} initial="hidden" animate="visible" variants={drawVariants}
                d="M210 90 C 260 105, 285 150, 270 200 C 255 245, 210 260, 175 235" />
              <motion.path custom={2} initial="hidden" animate="visible" variants={drawVariants} strokeWidth="2"
                d="M210 300 C 210 260, 200 230, 190 210" />
              <motion.path custom={2} initial="hidden" animate="visible" variants={drawVariants}
                d="M190 260 C 160 250, 140 260, 130 280 C 150 295, 175 290, 190 270" />
              <motion.path custom={3} initial="hidden" animate="visible" variants={drawVariants} strokeWidth="2"
                d="M200 300 C 200 260, 195 240, 190 220" />
              <motion.path custom={3} initial="hidden" animate="visible" variants={drawVariants}
                d="M120 150 C 90 140, 65 150, 55 175 C 80 190, 105 180, 120 160" />
              <motion.path custom={1} initial="hidden" animate="visible" variants={drawVariants}
                d="M300 160 C 330 150, 355 160, 365 185 C 340 200, 315 190, 300 170" />
            </g>
            <motion.g initial="hidden" animate="visible" variants={fillVariants} fill="#991F50" opacity="0.5">
              <ellipse cx="205" cy="165" rx="55" ry="70" transform="rotate(-12 205 165)" />
            </motion.g>
            <motion.g
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.8, transition: { delay: 1.8, duration: 0.6 } } }}
              fill="#99CA3A"
            >
              <circle cx="205" cy="165" r="13" />
            </motion.g>
          </svg>
        </div>
      </div>
    </section>
  );
}
