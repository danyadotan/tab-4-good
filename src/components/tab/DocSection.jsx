import SectionReveal from './SectionReveal';

export default function DocSection({ id, eyebrow, title, intro, dark, children }) {
  return (
    <section id={id} className={`relative tab-section border-t border-tab-ghost ${dark ? 'bg-tab-ink text-tab-base' : ''}`}>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">{eyebrow}</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-6">
            {title}
          </h2>
          {intro && (
            <p className={`text-lg max-w-2xl leading-relaxed mb-12 ${dark ? 'text-tab-base/70' : 'text-tab-muted'}`}>
              {intro}
            </p>
          )}
        </SectionReveal>
        {children}
      </div>
    </section>
  );
}