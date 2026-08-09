import SectionReveal from './SectionReveal';

const FEATURED = {
  stat: '≤30s',
  label: 'Target recovery-loop latency',
  context:
    'From friction-event detection to a routed recovery action — the core execution metric TAB is engineered around. The loop that turns intelligence into done.',
  bar: 72,
};

const METRICS = [
  { stat: '3–5', label: 'Enterprise design partners', context: 'Active discussions across customer operations and AI transformation.' },
  { stat: '11', label: 'Friction event types catalogued', context: 'A taxonomy derived from field research where execution breaks first.' },
  { stat: '40+', label: 'Operational workflows mapped', context: 'Cross-system handoffs documented across pilot environments.' },
  { stat: '0', label: 'Surveillance surface', context: 'No employee monitoring, sentiment detection, or behavioral scoring — by design.' },
];

export default function Metrics() {
  return (
    <section id="metrics" className="relative tab-section bg-tab-ink text-tab-base overflow-hidden border-t border-white/10">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{ backgroundImage: 'linear-gradient(to right, rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px' }}
      ></div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">10 — OPERATIONAL METRICS</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-6">
            The numbers behind execution recovery.
          </h2>
          <p className="text-lg text-tab-base/70 max-w-2xl leading-relaxed mb-16">
            A measurable loop, not a dashboard of opinions. These are the operational metrics TAB is built to move — and the validation footprint behind them.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
          <SectionReveal className="lg:col-span-5">
            <div className="bg-tab-ink p-8 sm:p-10 h-full flex flex-col">
              <span className="tab-mono text-[0.6rem] text-tab-base/50 mb-5">CORE LOOP · TARGET</span>
              <span className="font-heading font-semibold text-5xl sm:text-6xl text-tab-base mb-3 tracking-tight">{FEATURED.stat}</span>
              <span className="font-heading font-medium text-xl text-tab-base/90 mb-8">{FEATURED.label}</span>
              <div className="mb-8">
                <div className="h-px w-full bg-white/15 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-tab-accent" style={{ width: `${FEATURED.bar}%` }}></div>
                </div>
                <div className="flex justify-between mt-2 tab-mono text-[0.55rem] text-tab-base/40">
                  <span>DETECT</span>
                  <span>ROUTE</span>
                  <span>RETURN</span>
                </div>
              </div>
              <p className="text-sm text-tab-base/55 leading-relaxed mt-auto">{FEATURED.context}</p>
            </div>
          </SectionReveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10">
            {METRICS.map((m, i) => (
              <SectionReveal key={m.label} delay={0.05 + i * 0.08}>
                <div className="bg-tab-ink p-8 h-full flex flex-col">
                  <span className="font-heading font-semibold text-4xl text-tab-base mb-3 tracking-tight">{m.stat}</span>
                  <span className="font-heading font-medium text-tab-base/90 mb-4">{m.label}</span>
                  <p className="text-sm text-tab-base/55 leading-relaxed mt-auto">{m.context}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal delay={0.2}>
          <p className="mt-10 tab-mono text-[0.6rem] text-tab-base/45">
            Design targets and current validation footprint. Pilot KPIs are being formalized with design partners. All measurements are aggregate and anonymous.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}