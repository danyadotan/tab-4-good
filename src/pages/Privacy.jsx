import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import PageHero from '@/components/tab/PageHero';
import SectionReveal from '@/components/tab/SectionReveal';
import CornerSummary from '@/components/tab/CornerSummary';
import BottomNav from '@/components/tab/BottomNav';
import { Lock, Eye, Shield, Layers, Ban, FileText } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: Ban,
    tag: '01 — WHAT WE DO NOT DO',
    title: 'No surveillance, by design.',
    body: 'TAB does not monitor employees. There is no sentiment detection, no burnout scoring, no individual behavioral profiling, and no productivity surveillance. People are positioned as the recovery path, not the subject of observation. This is enforced by the architecture, not by a policy that can be revised later.',
  },
  {
    icon: Eye,
    tag: '02 — WHAT WE SEE',
    title: 'Signals of work in motion, not content.',
    body: 'TAB reads task states, handoff timestamps, and status transitions — the signals that work is moving or has stalled. It does not read the content of messages, documents, or conversations. The unit of measurement is the friction event, not personal behavior or message bodies.',
  },
  {
    icon: Layers,
    tag: '03 — HOW ANONYMITY IS ENFORCED',
    title: 'Aggregated before it reaches a human.',
    body: 'Friction signals are aggregated at the system level before reaching any human-facing view. A recovery is triggered by "this workflow stalled at this handoff," not by "this person is underperforming." Individuals are never identifiable in the recovery loop — the aggregation happens upstream of the view, not as a filter on it.',
  },
  {
    icon: Shield,
    tag: '04 — HOW ACCESS IS SCOPED',
    title: 'Your identity, your permissions.',
    body: 'TAB operates as a read-and-route layer over your existing systems. Access is scoped per integration, encrypted in transit and at rest, and governed by your existing identity and permissions. TAB never acts outside the permissions of the account it connects through.',
  },
  {
    icon: Lock,
    tag: '05 — HOW DATA IS HANDLED',
    title: 'No storage of workflow contents.',
    body: 'TAB processes the signals of work in transit to detect execution gaps. It does not store the contents of your workflows. What it retains is the friction-event record — aggregate, system-level, and stripped of individual attribution — used to improve recovery routing over time.',
  },
  {
    icon: FileText,
    tag: '06 — HOW THIS IS GOVERNED',
    title: 'Architecture, not a promise.',
    body: 'Anonymous-by-architecture means the constraint is built into how the system works, not written into a policy that can be changed. A future revision of this page cannot quietly re-enable individual profiling, because the aggregation that prevents it is upstream of any human-facing view.',
  },
];

const COMMITMENTS = [
  'We measure friction events — where work stalls between tools and handoffs — not individual activity.',
  'We aggregate friction signals before they reach any human-facing view, so individuals are never identifiable in recovery.',
  'We do not perform sentiment detection, burnout scoring, or behavioral profiling of any kind.',
  'We do not store the contents of your workflows, messages, or documents.',
  'We scope access per integration and never act outside the permissions of the connected account.',
  'We enforce these constraints in the architecture, not in a policy that can be revised.',
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <PageHero
          eyebrow="PRIVACY POLICY"
          title="Anonymous by architecture — not by promise."
          subtitle="TAB@Work is built so that enterprise data security is a structural property of the system, not a commitment that depends on trust. This is what investors and partners need to verify before adoption."
        />
        <section className="relative border-t border-tab-ghost">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
            <SectionReveal>
              <div className="border-l-2 border-tab-accent pl-6 mb-16 max-w-3xl">
                <p className="text-lg text-tab-ink leading-relaxed">
                  The distinction that matters: anonymity enforced by system design cannot be quietly removed. Anonymity enforced by policy can. TAB chooses the first.
                </p>
              </div>
            </SectionReveal>
            <div className="grid sm:grid-cols-2 gap-px bg-tab-ghost border border-tab-ghost mb-16">
              {PRINCIPLES.map((p, i) => (
                <SectionReveal key={p.tag} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="bg-tab-base p-8 sm:p-10 h-full">
                    <p.icon size={26} strokeWidth={1.5} className="text-tab-accent mb-6" />
                    <p className="tab-mono text-[0.6rem] text-tab-accent mb-3">{p.tag}</p>
                    <h2 className="font-heading font-semibold text-tab-ink text-xl sm:text-2xl mb-4 leading-tight">{p.title}</h2>
                    <p className="text-sm text-tab-muted leading-relaxed">{p.body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
            <SectionReveal>
              <div className="border border-tab-ghost bg-tab-base p-8 sm:p-10">
                <p className="tab-mono text-[0.6rem] text-tab-accent mb-5">OUR COMMITMENTS</p>
                <h2 className="font-heading font-semibold text-tab-ink text-xl sm:text-2xl mb-8">What we guarantee — structurally.</h2>
                <ul className="space-y-4">
                  {COMMITMENTS.map((c) => (
                    <li key={c} className="flex items-start gap-4 text-sm sm:text-base text-tab-ink">
                      <span className="h-1.5 w-1.5 bg-tab-accent rounded-full shrink-0 mt-2.5"></span>
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
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