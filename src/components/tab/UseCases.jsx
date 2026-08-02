import { useState } from 'react';
import SectionReveal from './SectionReveal';
import { Shield, Headset, Database } from 'lucide-react';

const CORE = ['Observation logic', 'Breakdown detection', 'Recovery orchestration', 'Continuity model'];

const CASES = [
  {
    id: 'it-governance',
    icon: Shield,
    label: 'IT Governance',
    eyebrow: 'USE CASE 01',
    wrapper: 'Permissions and policy enforced per environment. Stalled access requests, expired certifications, and unreviewed changes are detected and routed to the right approver or system — before compliance drift becomes an incident.',
    signals: ['Access requests stalled past SLA', 'Expired or expiring certifications', 'Unreviewed privileged changes'],
  },
  {
    id: 'customer-ops',
    icon: Headset,
    label: 'Customer Operations',
    eyebrow: 'USE CASE 02',
    wrapper: 'Handoffs between agents, queues, and systems are watched continuously. A case that stalls between a bot, a human, and a CRM is detected and re-routed inside approved tools — before SLA breach or churn.',
    signals: ['Case handoff stalls between systems', 'SLA at risk on open tickets', 'Escalation gaps and dropped loops'],
  },
  {
    id: 'data-workflows',
    icon: Database,
    label: 'Data Workflows',
    eyebrow: 'USE CASE 03',
    wrapper: 'Pipelines, jobs, and data handoffs are monitored for stalls between systems. A failed or orphaned run is detected and recovery routed to the owner or retry path — so dashboards and decisions never wait on stale data.',
    signals: ['Pipeline runs stalled or failed', 'Orphaned dbt / ETL handoffs', 'Stale data feeding decisions'],
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const c = CASES[active];
  return (
    <section id="use-cases" className="relative tab-section border-t border-tab-ghost">
      <div className="absolute inset-0 tab-grid-fine opacity-40 pointer-events-none" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">05 — USE CASES</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-4xl mb-6">
            One core engine. Three places execution breaks.
          </h2>
          <p className="text-lg text-tab-muted max-w-2xl mb-16 leading-relaxed">
            The infrastructure stays constant. Hover a use case to see how its adaptive wrapper recovers stalled work — without replacing the tools your teams already use.
          </p>
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
              <p className="font-heading font-medium text-tab-base flex items-center gap-2">
                <c.icon size={16} strokeWidth={1.5} className="text-tab-accent" />
                {c.label}
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 bg-tab-base">
            <div className="flex flex-col">
              {CASES.map((cc, i) => {
                const Icon = cc.icon;
                const isActive = active === i;
                return (
                  <button
                    key={cc.id}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`text-left p-7 sm:p-8 transition-colors border-b border-tab-ghost last:border-b-0 ${isActive ? 'bg-tab-accent/5' : 'bg-tab-base'}`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
                  >
                    <div className="flex items-start gap-5">
                      <Icon size={22} strokeWidth={1.5} className={`shrink-0 mt-1 transition-colors ${isActive ? 'text-tab-accent' : 'text-tab-muted'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }} />
                      <div className="flex-1">
                        <p className={`tab-mono text-[0.6rem] mb-2 transition-colors ${isActive ? 'text-tab-accent' : 'text-tab-muted'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}>{cc.eyebrow}</p>
                        <h4 className="font-heading font-medium text-tab-ink text-lg mb-3">{cc.label}</h4>
                        <p className="text-sm text-tab-muted leading-relaxed mb-4">{cc.wrapper}</p>
                        <div className={`grid transition-all overflow-hidden ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}>
                          <div className="min-h-0">
                            <p className="tab-mono text-[0.55rem] text-tab-muted mb-2">RECOVERY SIGNALS</p>
                            <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                              {cc.signals.map((s) => (
                                <li key={s} className="tab-mono text-[0.6rem] text-tab-ink/80 flex items-center gap-2">
                                  <span className="h-1 w-1 bg-tab-accent rounded-full"></span>{s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <SectionReveal delay={0.2}>
          <p className="mt-10 text-center tab-mono text-[0.65rem] text-tab-muted">Same core engine. Different recovery expression.</p>
        </SectionReveal>
      </div>
    </section>
  );
}