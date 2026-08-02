import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import PageHero from '@/components/tab/PageHero';
import SectionReveal from '@/components/tab/SectionReveal';
import ContactDialog from '@/components/tab/ContactDialog';
import { ShieldCheck, Headset, Database } from 'lucide-react';
import CornerSummary from '@/components/tab/CornerSummary';

const CASES = [
  {
    icon: ShieldCheck,
    tag: '01 — IT GOVERNANCE',
    title: 'Policy and change workflows that close themselves.',
    body: 'Change requests stall between approval, implementation, and verification — approved but never implemented, implemented but never verified, policy written in one system and forgotten in the next. TAB detects each stall at the handoff and routes recovery to the owner, system, or agent that carries the next step, closing the governance loop without another dashboard to watch.',
    points: [
      'Approved changes that never reach implementation',
      'Implementations that skip verification',
      'Policy drift between systems of record',
    ],
  },
  {
    icon: Headset,
    tag: '02 — CUSTOMER OPS',
    title: 'Customer issues that don’t die in the handoff.',
    body: 'Support tickets stall between queues, reopen after resolution, and slip between support, engineering, and the customer — often silently until the customer feels the gap. TAB detects when a ticket stalls, reopens, or crosses a team boundary and routes recovery to the team or agent best positioned to act, restoring momentum before the customer notices.',
    points: [
      'Tickets stalled between support and engineering',
      'Reopened issues with no clear owner',
      'Handoffs that drop the customer context',
    ],
  },
  {
    icon: Database,
    tag: '03 — DATA WORKFLOWS',
    title: 'Pipelines and models that actually complete.',
    body: 'Data pipelines, dbt models, and downstream reports stall between owners — failures land in no one’s queue, and the work that feeds decisions quietly stops. TAB detects when a pipeline, model, or report stalls and routes recovery to the data owner, system, or agent that can unblock it, so the work that feeds decisions actually reaches the people waiting on it.',
    points: [
      'Pipelines stalled between data and engineering owners',
      'Failed models with no assigned owner',
      'Stale reports feeding downstream decisions',
    ],
  },
];

export default function UseCases() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <PageHero
          eyebrow="ENTERPRISE USE CASES"
          title="Where TAB recovers stalled work."
          subtitle="Three workflows where execution breaks at the handoff — and where coordination infrastructure pays back fastest."
        />
        <section className="relative border-t border-tab-ghost">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
            <div className="grid gap-px bg-tab-ghost border border-tab-ghost">
              {CASES.map((c, i) => (
                <SectionReveal key={c.tag} delay={i * 0.1}>
                  <div className="bg-tab-base p-8 sm:p-10 grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4">
                      <c.icon size={28} strokeWidth={1.5} className="text-tab-accent mb-5" />
                      <p className="tab-mono text-[0.65rem] text-tab-accent mb-3">{c.tag}</p>
                      <h2 className="font-heading font-semibold text-tab-ink text-2xl sm:text-3xl leading-tight">{c.title}</h2>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-tab-muted text-[1.05rem] leading-relaxed mb-6">{c.body}</p>
                      <ul className="space-y-2.5">
                        {c.points.map((p) => (
                          <li key={p} className="flex items-center gap-3 text-sm text-tab-ink">
                            <span className="h-1.5 w-1.5 bg-tab-accent rounded-full shrink-0"></span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
        <section className="relative border-t border-tab-ghost py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
            <SectionReveal>
              <h2 className="font-heading font-semibold text-tab-ink text-2xl sm:text-3xl mb-4">See it in your workflow.</h2>
              <p className="text-tab-muted max-w-lg mx-auto mb-8">Tell us where execution breaks in your environment — we will map the handoffs TAB would recover.</p>
              <ContactDialog
                defaultType="Design Partner"
                trigger={<button className="px-7 py-3.5 bg-tab-ink text-tab-base tab-mono text-xs hover:bg-tab-accent transition-colors">Map My Workflow</button>}
              />
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
      <CornerSummary />
    </div>
  );
}