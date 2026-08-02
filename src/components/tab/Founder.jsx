import SectionReveal from './SectionReveal';

export default function Founder() {
  return (
    <section id="founder" className="relative tab-section border-t border-tab-ghost">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <SectionReveal>
              <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">08 — FOUNDER</p>
              <div className="border border-tab-ghost aspect-square tab-grid-fine flex items-center justify-center bg-tab-base">
                <span className="font-heading font-semibold text-5xl text-tab-ink tracking-tight">DD</span>
              </div>
            </SectionReveal>
          </div>
          <div className="lg:col-span-8">
            <SectionReveal delay={0.1}>
              <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-8 max-w-3xl">
                Built by a systems architect focused on the gap between knowing and doing.
              </h2>
              <p className="text-lg text-tab-muted leading-relaxed mb-6 max-w-2xl">
                Danya Dotan combines behavioral science, systems thinking and AI product design. Her work focuses on execution recovery, operational continuity, human–AI collaboration and the infrastructure organizations need to adopt AI through trust rather than surveillance.
              </p>
              <p className="tab-mono text-[0.6rem] text-tab-muted">Danya Dotan · Founder, TAB@Work</p>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}