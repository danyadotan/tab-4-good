import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './SectionReveal';

const EASE = [0.19, 1, 0.22, 1];

const USE_CASES = [
  {
    ctx: 'Customer Operations',
    expr: 'Recovery embedded in case workflows; handoffs restored before SLA breach; AI suggestions routed inside approved tools.',
    wrapper: ['SLA-aware recovery', 'Case-context routing', 'Channel-native handoffs'],
  },
  {
    ctx: 'AI Transformation',
    expr: 'Adoption tracked as friction inside approved workflows; shadow usage surfaced structurally; trust built through low-friction recovery.',
    wrapper: ['Adoption-as-friction', 'Shadow-usage surfacing', 'Trust-first recovery'],
  },
  {
    ctx: 'IT & Governance',
    expr: 'Permissions and risk logic applied per environment; interventions conform to policy; continuity and audit preserved.',
    wrapper: ['Policy-conformant actions', 'Per-env permissions', 'Audit continuity'],
  },
  {
    ctx: 'High-friction Teams',
    expr: 'Workflow and language adapted to the team; recovery actions matched to local context and operating rhythm.',
    wrapper: ['Local language mapping', 'Rhythm-matched actions', 'Context-tuned routing'],
  },
];

const CORE = ['Observation logic', 'Breakdown detection', 'Recovery orchestration', 'Continuity model'];

export default function Differentiator() {
  const [active, setActive] = useState(0);
  const uc = USE_CASES[active];

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
          {/* Use case selector */}
          <div className="lg:col-span-5 bg-tab-base p-3 sm:p-5">
            <p className="tab-mono text-[0.6rem] text-tab-muted px-3 sm:px-4 pt-2 pb-4">SELECT A USE CASE</p>
            <div className="flex flex-col gap-1">
              {USE_CASES.map((u, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={u.ctx}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group relative text-left px-4 sm:px-5 py-4 sm:py-5 transition-colors"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-px transition-colors ${isActive ? 'bg-tab-accent' : 'bg-transparent'}`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
                      aria-hidden="true"
                    />
                    <div className="flex items-center justify-between gap-3">
                      <span className={`font-heading font-medium text-base sm:text-lg transition-colors ${isActive ? 'text-tab-ink' : 'text-tab-muted group-hover:text-tab-ink'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}>
                        {u.ctx}
                      </span>
                      <span className={`tab-mono text-[0.55rem] transition-colors ${isActive ? 'text-tab-accent' : 'text-tab-ghost'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="block overflow-hidden"
                        >
                          <span className="block pt-2 text-xs text-tab-muted leading-relaxed">{u.expr}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Layering visual: adaptive wrapper over fixed core */}
          <div className="lg:col-span-7 bg-tab-base p-6 sm:p-10 flex flex-col">
            {/* Wrapper layer */}
            <div className="relative">
              <div
                className="relative border-2 border-dashed border-tab-accent bg-tab-base px-6 sm:px-8 py-7 sm:py-8"
              >
                <div className="flex items-center justify-between mb-5">
                  <p className="tab-mono text-[0.6rem] text-tab-accent">ADAPTIVE WRAPPER</p>
                  <span className="h-1.5 w-1.5 bg-tab-accent rounded-full animate-tab-node" aria-hidden="true"></span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <h4 className="font-heading font-semibold text-tab-ink text-xl sm:text-2xl mb-3 leading-tight">{uc.ctx}</h4>
                    <p className="text-sm text-tab-muted leading-relaxed mb-5">{uc.expr}</p>
                    <div className="flex flex-wrap gap-2">
                      {uc.wrapper.map((w) => (
                        <span key={w} className="tab-mono text-[0.58rem] px-3 py-1.5 border border-tab-accent/40 text-tab-accent">{w}</span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Wrapping brackets — accent lines descending from the wrapper over the core */}
              <span className="absolute -bottom-6 left-0 w-7 h-6 border-l-2 border-b-2 border-tab-accent/50" aria-hidden="true"></span>
              <span className="absolute -bottom-6 right-0 w-7 h-6 border-r-2 border-b-2 border-tab-accent/50" aria-hidden="true"></span>
            </div>

            {/* Connector */}
            <div className="flex items-center justify-center py-3" aria-hidden="true">
              <span className="tab-mono text-[0.55rem] text-tab-muted tracking-[0.2em]">WRAPS OVER</span>
            </div>

            {/* Fixed core layer */}
            <div className="bg-tab-ink text-tab-base px-6 sm:px-8 py-7 sm:py-8">
              <div className="flex items-center justify-between mb-5">
                <p className="tab-mono text-[0.6rem] text-tab-base/60">FIXED CORE ENGINE</p>
                <span className="h-2 w-2 bg-tab-accent rounded-full" aria-hidden="true"></span>
              </div>
              <h4 className="font-heading font-semibold text-2xl mb-6">Core Engine</h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-tab-base/80">
                {CORE.map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-tab-accent shrink-0"></span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
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