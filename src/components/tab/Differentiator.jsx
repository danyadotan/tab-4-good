import { useState } from 'react';
import SectionReveal from './SectionReveal';

const EXPRESSIONS = [
  { ctx: 'Customer Operations', expr: 'Recovery embedded in case workflows; handoffs restored before SLA breach; AI suggestions routed inside approved tools.' },
  { ctx: 'AI Transformation', expr: 'Adoption tracked as friction inside approved workflows; shadow usage surfaced structurally; trust built through low-friction recovery.' },
  { ctx: 'IT & Governance', expr: 'Permissions and risk logic applied per environment; interventions conform to policy; continuity and audit preserved.' },
  { ctx: 'High-friction teams', expr: 'Workflow and language adapted to the team; recovery actions matched to local context and operating rhythm.' },
];

const CORE = ['Observation logic', 'Breakdown detection', 'Recovery orchestration', 'Continuity model'];

export default function Differentiator() {
  const [active, setActive] = useState(0);
  return (
    <section id="differentiator" className="relative tab-section border-t border-tab-ghost">
      <div className="absolute inset-0 tab-grid-fine opacity-40 pointer-events-none" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">04 — THE DIFFERENTIATOR</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-4xl mb-16">
            The infrastructure stays constant. The operating layer adapts.
          </h2>
        </SectionReveal>
        <div className="grid lg:grid-cols-12 gap-px bg-tab-ghost border border-tab-ghost">
          <div className="lg:col-span-5 bg-tab-ink text-tab-base p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="h-2.5 w-2.5 bg-tab-accent rounded-full inline-block mb-8"></span>
              <p className="tab-mono text-xs text-tab-base/60 mb-4">FIXED CORE</p>
              <h3 className="font-heading font-semibold text-2xl mb-6">Core Engine</h3>
              <ul className="space-y-3 text-sm text-tab-base/80">
                {CORE.map((x) => (
                  <li key={x} className="flex items-center gap-3"><span className="h-px w-4 bg-tab-accent"></span>{x}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="tab-mono text-[0.6rem] text-tab-base/40 mb-2">NOW EXPRESSING</p>
              <p className="font-heading font-medium text-tab-base">{EXPRESSIONS[active].ctx}</p>
            </div>
          </div>
          <div className="lg:col-span-7 bg-tab-base">
            <div className="grid sm:grid-cols-2">
              {EXPRESSIONS.map((e, i) => (
                <button
                  key={e.ctx}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`text-left p-7 sm:p-8 transition-colors ${i % 2 === 1 ? 'sm:border-l' : ''} ${i < 2 ? 'border-b' : ''} border-tab-ghost ${active === i ? 'bg-tab-accent/5' : 'bg-tab-base'}`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
                >
                  <p className={`tab-mono text-[0.6rem] mb-3 transition-colors ${active === i ? 'text-tab-accent' : 'text-tab-muted'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}>ADAPTIVE LAYER</p>
                  <h4 className="font-heading font-medium text-tab-ink mb-3">{e.ctx}</h4>
                  <p className="text-sm text-tab-muted leading-relaxed">{e.expr}</p>
                  <span className={`block mt-4 h-px transition-all ${active === i ? 'w-10 bg-tab-accent' : 'w-0 bg-transparent'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <SectionReveal delay={0.2}>
          <p className="mt-10 text-center tab-mono text-[0.65rem] text-tab-muted">Same core engine. Different operational expression.</p>
        </SectionReveal>
      </div>
    </section>
  );
}