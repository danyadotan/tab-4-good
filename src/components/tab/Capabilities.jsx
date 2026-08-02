import SectionReveal from './SectionReveal';

const CAPS = [
  { n: '01', title: 'Detect', body: 'TAB measures friction events in the workflow, in-flow — not people. Aggregate and anonymous by architecture. It counts events, not people; it bypasses, not alerts.' },
  { n: '02', title: 'Coordinate', body: 'TAB routes the right action to the right actor — human, manager, or AI — inside existing tools, permissions and environments.' },
  { n: '03', title: 'Recover', body: 'Stalled work is picked up and returned with continuity preserved — context, status and next step intact across systems and handoffs.' },
  { n: '04', title: 'Learn', body: 'Each recovery trains the layer. Recurring breakdowns surface as structural patterns, not individual signals.' },
];

export default function Capabilities() {
  return (
    <section className="relative tab-section border-t border-tab-ghost">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">03 — CAPABILITIES</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-16">
            The execution loop: observe, detect, recover, learn.
          </h2>
        </SectionReveal>
        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-tab-accent via-tab-ghost to-transparent" aria-hidden="true"></div>
          <div className="space-y-12">
            {CAPS.map((c, i) => (
              <SectionReveal key={c.n} delay={i * 0.08}>
                <div className="relative pl-14 sm:pl-20">
                  <div className="absolute left-0 top-0 w-8 sm:w-12">
                    <span className="font-mono text-2xl sm:text-3xl font-semibold text-tab-ink">{c.n}</span>
                  </div>
                  <h3 className="font-heading font-medium text-tab-ink text-xl sm:text-2xl mb-3">{c.title}</h3>
                  <p className="text-tab-muted leading-relaxed max-w-2xl">{c.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}