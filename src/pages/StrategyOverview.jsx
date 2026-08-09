import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import PageHero from '@/components/tab/PageHero';
import SectionReveal from '@/components/tab/SectionReveal';
import ContactDialog from '@/components/tab/ContactDialog';
import CornerSummary from '@/components/tab/CornerSummary';
import BottomNav from '@/components/tab/BottomNav';
import { Layers, Activity, GitBranch, Repeat } from 'lucide-react';

const PILLARS = [
  {
    icon: Layers,
    tag: '01 — COORDINATION LAYER',
    title: 'A horizontal layer, not another tool.',
    body: 'TAB sits alongside the stack your teams already use — ticketing, CRM, communication, project management, internal databases. It is not a system of record and it is not a replacement. It is the connective tissue that watches the seams between systems where execution actually breaks.',
  },
  {
    icon: Activity,
    tag: '02 — OBSERVATION IN CONTEXT',
    title: 'Detect the breakdown, not the person.',
    body: 'The core engine reads the signals of work in motion — task states, handoff timestamps, status transitions — and recognizes when work has stopped progressing. It distinguishes a true stall from normal latency, surfacing friction events as "this workflow stalled at this handoff," never as a behavioral profile of a person.',
  },
  {
    icon: GitBranch,
    tag: '03 — RECOVERY ROUTING',
    title: 'Route the smallest action that unblocks.',
    body: 'Once a friction event is detected, TAB routes a recovery action to the role, system, or agent best positioned to act — based on the handoff graph it builds from your tooling. It bypasses alerts instead of adding them, acting through the right channel rather than asking a person to watch another dashboard.',
  },
  {
    icon: Repeat,
    tag: '04 — CONTINUITY MODEL',
    title: 'Return the work to execution.',
    body: 'Recovery is not a one-time nudge. The continuity model preserves context and momentum across every handoff, so work that stalled comes back into motion with the full history intact — across people, systems, and agents over time.',
  },
];

const THESIS = [
  { k: 'The gap', v: 'Modern SaaS ecosystems generate work faster than they complete it. Every tool creates a new seam, and every seam is a place where a handoff can fall through.' },
  { k: 'The shift', v: 'Intelligence now exists in the organization, but the action never completes. The distance between work being known and work being done is where value quietly leaks.' },
  { k: 'The thesis', v: 'Recovery, not surveillance, is the missing infrastructure layer. Detect the gap, route the recovery, return the work — without manual intervention, without watching people.' },
];

export default function StrategyOverview() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <PageHero
          eyebrow="STRATEGY OVERVIEW"
          title="Recovery as infrastructure — the architectural thesis."
          subtitle="TAB@Work recovers stalled work inside the environments it already happens in. No manual triage, no new dashboard to watch, no replacement of the tools your teams depend on."
        />
        <section className="relative border-t border-tab-ghost">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
            <div className="max-w-3xl mb-16">
              {THESIS.map((t, i) => (
                <SectionReveal key={t.k} delay={i * 0.08}>
                  <div className="flex gap-6 py-5 border-b border-tab-ghost last:border-0">
                    <p className="tab-mono text-[0.6rem] text-tab-accent w-24 shrink-0 pt-1.5">{t.k}</p>
                    <p className="text-lg text-tab-ink leading-relaxed">{t.v}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-tab-ghost border border-tab-ghost">
              {PILLARS.map((p, i) => (
                <SectionReveal key={p.tag} delay={Math.min(i * 0.08, 0.3)}>
                  <div className="bg-tab-base p-8 sm:p-10 h-full">
                    <p.icon size={26} strokeWidth={1.5} className="text-tab-accent mb-6" />
                    <p className="tab-mono text-[0.6rem] text-tab-accent mb-3">{p.tag}</p>
                    <h2 className="font-heading font-semibold text-tab-ink text-xl sm:text-2xl mb-4 leading-tight">{p.title}</h2>
                    <p className="text-sm text-tab-muted leading-relaxed">{p.body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
        <section className="relative border-t border-tab-ghost py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
            <SectionReveal>
              <h2 className="font-heading font-semibold text-tab-ink text-2xl sm:text-3xl mb-4">Walk through the architecture.</h2>
              <p className="text-tab-muted max-w-lg mx-auto mb-8">Start a design partnership and we will map the seams where execution breaks in your environment.</p>
              <ContactDialog
                defaultType="Design Partner"
                trigger={<button className="px-7 py-3.5 bg-tab-ink text-tab-base tab-mono text-xs hover:bg-tab-accent transition-colors">Start a Conversation</button>}
              />
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
      <CornerSummary />
    </div>
  );
}