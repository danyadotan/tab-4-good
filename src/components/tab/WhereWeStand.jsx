import SectionReveal from './SectionReveal';
import { Check, CircleDashed, Sparkles } from 'lucide-react';

const EASE = [0.19, 1, 0.22, 1];

const READY = [
  'Core engine: friction-event detection across connected systems',
  'Recovery routing through existing channels (Slack, Jira, email)',
  'Adaptive wrapper expressing the fixed core per environment',
  'Anonymous-by-architecture data model',
];

const MISSING = [
  'Pilot proof: 3–5 live environments validating recovery into value',
  'Native connector depth (Salesforce, HubSpot, Linear, dbt)',
  'The friction-event metric as a repeatable industry benchmark',
];

const WHY = [
  { who: 'For design partners', v: 'Shape the recovery model inside your environment before it hardens. Your seams define the category.' },
  { who: 'For investors', v: 'Fund the validation, not more R&D. The infrastructure exists; the risk left is concentrated and removable.' },
];

export default function WhereWeStand() {
  return (
    <section id="stand" className="relative border-t border-tab-ghost">
      <div className="absolute inset-0 tab-grid-fine opacity-30 pointer-events-none" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">01 — WHERE TAB STANDS</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-2xl sm:text-3xl lg:text-4xl leading-[1.15] max-w-3xl mb-4">
            The infrastructure is built. The proof is not. That is the point.
          </h2>
          <p className="text-tab-muted max-w-2xl leading-relaxed mb-14">
            An honest read for both sides of the table — what exists today, what remains unproven, and why engagement now is what converts one into the other.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-3 gap-px bg-tab-ghost border border-tab-ghost">
          {/* Ready */}
          <SectionReveal>
            <div className="bg-tab-base p-7 sm:p-9 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Check size={18} strokeWidth={1.5} className="text-tab-accent" />
                <p className="tab-mono text-[0.6rem] text-tab-accent">WHAT IS READY</p>
              </div>
              <h3 className="font-heading font-semibold text-tab-ink text-lg mb-5 leading-tight">The technical infrastructure exists.</h3>
              <ul className="space-y-3">
                {READY.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-tab-muted leading-relaxed">
                    <span className="h-1.5 w-1.5 bg-tab-accent rounded-full shrink-0 mt-2"></span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Missing */}
          <SectionReveal delay={0.08}>
            <div className="bg-tab-base p-7 sm:p-9 h-full">
              <div className="flex items-center gap-3 mb-6">
                <CircleDashed size={18} strokeWidth={1.5} className="text-tab-muted" />
                <p className="tab-mono text-[0.6rem] text-tab-muted">WHAT IS NOT YET PROVEN</p>
              </div>
              <h3 className="font-heading font-semibold text-tab-ink text-lg mb-5 leading-tight">The risk that funding removes.</h3>
              <ul className="space-y-3">
                {MISSING.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm text-tab-muted leading-relaxed">
                    <span className="h-1.5 w-1.5 border border-tab-muted rounded-full shrink-0 mt-2"></span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Why now */}
          <SectionReveal delay={0.16}>
            <div className="bg-tab-ink text-tab-base p-7 sm:p-9 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={18} strokeWidth={1.5} className="text-tab-accent" />
                <p className="tab-mono text-[0.6rem] text-tab-accent">WHY NOW</p>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-5 leading-tight">The window is the validation, not the build.</h3>
              <div className="space-y-5">
                {WHY.map((w) => (
                  <div key={w.who}>
                    <p className="tab-mono text-[0.58rem] text-tab-base/50 mb-1.5">{w.who.toUpperCase()}</p>
                    <p className="text-sm text-tab-base/85 leading-relaxed">{w.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}