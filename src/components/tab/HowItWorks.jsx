import SectionReveal from './SectionReveal';

const STEPS = [
  { n: '01', t: 'Observe context', b: 'TAB reads the operational context where work already happens — tools, roles, handoffs and status.' },
  { n: '02', t: 'Detect the exact breakdown', b: 'It identifies the specific point where execution has stalled — not a score, an event.' },
  { n: '03', t: 'Trigger the lowest-friction recovery', b: 'It routes the smallest action that unblocks work to the right actor, in-flow.' },
  { n: '04', t: 'Return work with continuity', b: 'Work resumes with context, status and next step preserved across systems.' },
];

const METRICS = ['Time to first action', 'Recovery rate from stalled moments', 'Reduction in dropped handoffs', 'AI adoption inside approved workflows'];

export default function HowItWorks() {
  return (
    <section className="relative tab-section border-t border-tab-ghost">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">05 — HOW IT WORKS</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-16">
            A closed loop, not a dashboard.
          </h2>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-tab-ghost border border-tab-ghost mb-16">
          {STEPS.map((s, i) => (
            <SectionReveal key={s.n} delay={i * 0.08}>
              <div className="bg-tab-base p-7 h-full">
                <span className="font-mono text-2xl font-semibold text-tab-ink block mb-5">{s.n}</span>
                <h3 className="font-heading font-medium text-tab-ink text-lg mb-2">{s.t}</h3>
                <p className="text-sm text-tab-muted leading-relaxed">{s.b}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={0.1}>
          <div className="border-t border-tab-ghost pt-10">
            <p className="tab-mono text-[0.65rem] text-tab-muted mb-6">OUTCOME METRICS</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {METRICS.map((m) => (
                <div key={m} className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 bg-tab-accent rounded-full mt-2 shrink-0"></span>
                  <span className="text-sm text-tab-ink leading-snug">{m}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-tab-muted">Pilot metrics are currently being defined with design partners.</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}