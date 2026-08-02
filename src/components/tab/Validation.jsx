import SectionReveal from './SectionReveal';
import { Handshake, Phone, FlaskConical } from 'lucide-react';

const ITEMS = [
  { icon: Handshake, t: 'US design partnership', b: 'A live design partnership embedded in a trading workflow, validating execution recovery in a high-stakes, high-friction environment.' },
  { icon: Phone, t: 'Call-center field research', b: 'Field research focused on extreme early attrition and the operational friction that drives it — the seam where execution breaks first.' },
  { icon: FlaskConical, t: 'Behavior-first AI prototypes', b: 'Prototypes testing intervention timing, trust and low-friction recovery — proving the loop can act without surveillance.' },
];

export default function Validation() {
  return (
    <section id="validation" className="relative tab-section border-t border-tab-ghost">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">07 — EARLY VALIDATION</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-16">
            Validation where execution breaks first.
          </h2>
        </SectionReveal>
        <div className="grid sm:grid-cols-3 gap-px bg-tab-ghost border border-tab-ghost">
          {ITEMS.map((it, i) => (
            <SectionReveal key={it.t} delay={i * 0.1}>
              <div className="bg-tab-base p-8 h-full">
                <it.icon size={24} strokeWidth={1.5} className="text-tab-accent mb-6" />
                <h3 className="font-heading font-medium text-tab-ink text-lg mb-3">{it.t}</h3>
                <p className="text-sm text-tab-muted leading-relaxed">{it.b}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={0.2}>
          <p className="mt-8 tab-mono text-[0.6rem] text-tab-muted">Early-stage validation. Pilot metrics are currently being defined with design partners.</p>
        </SectionReveal>
      </div>
    </section>
  );
}