import Reveal from './Reveal';

export default function Citazione() {
  return (
    <section className="py-20 md:py-28">
      <Reveal className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <svg className="mx-auto mb-6" width="34" height="26" viewBox="0 0 34 26" fill="none" stroke="#991F50" strokeWidth="1.4">
          <path d="M0 26V16C0 8 5 2 12 0l2 4C9 6 6 10 6 15h6v11H0zm18 0V16c0-8 5-14 12-16l2 4c-5 2-8 6-8 11h6v11H18z" />
        </svg>
        <p className="font-display text-2xl md:text-3xl text-leafdark leading-snug italic">
          Uno staff gentile, una piccola serra accogliente, fiori vivaci e di
          qualità: le composizioni nascono con cura e creatività.
        </p>
        <p className="mt-5 text-ink/60 text-[15px]">Da una recensione di una cliente</p>
      </Reveal>
    </section>
  );
}
