import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import PageHero from '@/components/tab/PageHero';
import SectionReveal from '@/components/tab/SectionReveal';
import CornerSummary from '@/components/tab/CornerSummary';

const TERMS = [
  {
    term: 'Friction Event',
    def: 'A measurable point where work stalls between people, systems, or agents — a missed handoff, a reopened ticket, a stalled transition. The unit TAB measures, not a person’s behavior.',
  },
  {
    term: 'Execution Gap',
    def: 'The distance between work being known and work being done. Where intelligence exists but the action never completes — the space TAB was built to close.',
  },
  {
    term: 'Recovery Action',
    def: 'The next step TAB routes to the role, system, or agent best positioned to unblock stalled work. Recovery acts on the gap, not the person.',
  },
  {
    term: 'Adaptive Wrapper',
    def: 'The operating layer that expresses TAB’s fixed core engine in a specific team’s context — its tools, language, permissions, and rhythm. The wrapper adapts; the engine stays constant.',
  },
  {
    term: 'Core Engine',
    def: 'TAB’s fixed infrastructure: observation logic, breakdown detection, recovery orchestration, and a continuity model. The same engine under every adaptive wrapper.',
  },
  {
    term: 'Handoff',
    def: 'The transfer of work between people, systems, or agents. The seam where most execution breaks occur — and where TAB watches continuously.',
  },
  {
    term: 'Anonymous by Architecture',
    def: 'Anonymity enforced by system design, not policy. Friction signals are aggregated before reaching any human-facing view, so individuals are never identifiable in the recovery loop.',
  },
  {
    term: 'Bypass, Not Alert',
    def: 'TAB routes recovery through the right channel instead of adding another notification. It acts on the gap rather than alerting a person to watch it.',
  },
  {
    term: 'Coordination Layer',
    def: 'TAB’s role in the stack: a horizontal layer that sits alongside existing tools to detect gaps and route recovery — not a replacement for any of them.',
  },
  {
    term: 'Execution Recovery',
    def: 'The act of restoring stalled work to motion. TAB’s purpose: detect the gap, route the recovery, return the work to execution.',
  },
  {
    term: 'Recovery Routing',
    def: 'The logic that directs a recovery action to the role, system, or agent that owns the next step — based on the handoff graph TAB builds from your tooling.',
  },
  {
    term: 'Stalled Work',
    def: 'Work that has stopped progressing between handoffs — not failed, not closed, just stuck. The state TAB detects and recovers.',
  },
  {
    term: 'Continuity Model',
    def: 'The mechanism that keeps work moving across people, systems, and agents over time — preserving context and momentum across every handoff.',
  },
  {
    term: 'Breakdown Detection',
    def: 'The core engine’s ability to recognize when work has stopped progressing — distinguishing a true stall from normal latency.',
  },
  {
    term: 'Shadow AI',
    def: 'Unsanctioned AI usage that fills the gap where official tools fail to execute. TAB surfaces it structurally and routes recovery through approved workflows.',
  },
];

export default function Glossary() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <PageHero
          eyebrow="GLOSSARY"
          title="The language of execution recovery."
          subtitle="TAB introduces a precise vocabulary for where work stalls and how it gets recovered. These definitions align your team — and your stakeholders — with how we talk about execution."
        />
        <section className="relative border-t border-tab-ghost">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
            <div className="grid sm:grid-cols-2 gap-px bg-tab-ghost border border-tab-ghost">
              {TERMS.map((t, i) => (
                <SectionReveal key={t.term} delay={Math.min(i * 0.03, 0.3)}>
                  <div className="bg-tab-base p-7 sm:p-8 h-full">
                    <p className="tab-mono text-[0.6rem] text-tab-accent mb-3">{String(i + 1).padStart(2, '0')}</p>
                    <h2 className="font-heading font-semibold text-tab-ink text-xl mb-3">{t.term}</h2>
                    <p className="text-sm text-tab-muted leading-relaxed">{t.def}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
        <section className="relative border-t border-tab-ghost py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <SectionReveal>
              <p className="text-center tab-mono text-[0.65rem] text-tab-muted max-w-2xl mx-auto leading-relaxed">
                These terms are how TAB measures and recovers work — not how it watches people. For how the architecture enforces that distinction, see the FAQ.
              </p>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
      <CornerSummary />
    </div>
  );
}