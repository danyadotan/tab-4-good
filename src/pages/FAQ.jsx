import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import PageHero from '@/components/tab/PageHero';
import FAQItem from '@/components/tab/FAQItem';
import SectionReveal from '@/components/tab/SectionReveal';
import ContactDialog from '@/components/tab/ContactDialog';
import CornerSummary from '@/components/tab/CornerSummary';

const FAQS = [
  {
    q: 'How does TAB secure enterprise data?',
    a: 'TAB operates as a read-and-route layer over your existing systems. It processes the signals of work in transit to detect execution gaps — it does not store the contents of your workflows. Access is scoped per integration, encrypted in transit and at rest, and governed by your existing identity and permissions. TAB never acts outside the permissions of the account it connects through.',
  },
  {
    q: 'What data does TAB actually see?',
    a: 'TAB reads the signals of work in motion — task states, handoff timestamps, status transitions — not the content of messages, documents, or conversations. It measures friction events (a stalled handoff, a reopened ticket, a missed transition), not personal behavior or message bodies.',
  },
  {
    q: 'What does "anonymous by architecture" mean?',
    a: 'Recovery is triggered by aggregate, system-level patterns — not by identifying or profiling individuals. A friction event is surfaced as "this workflow stalled at this handoff," not "this person is underperforming." There is no sentiment detection, no burnout scoring, and no individual behavioral profiling. That is enforced by the architecture, not by a privacy policy that can be revised later.',
  },
  {
    q: 'Does TAB monitor employees?',
    a: 'No. TAB watches the seams between systems and roles, not the people inside them. The unit of measurement is the friction event — where work stalls between tools and handoffs — not individual activity. People are positioned as the recovery path, not the subject of surveillance.',
  },
  {
    q: 'What systems does TAB integrate with?',
    a: 'TAB connects to the tools where work already lives — ticketing, CRM, communication, project management, and internal databases — through standard APIs and connectors. It sits alongside your stack as a coordination and recovery layer, not a replacement for any tool in it.',
  },
  {
    q: 'How long does an integration take?',
    a: 'A typical pilot connects 2–3 core systems within the first weeks. TAB maps the handoffs where execution breaks in your environment, then routes recovery through the systems and people already in place — no rip-and-replace, no migration.',
  },
  {
    q: 'Does TAB replace our existing tools?',
    a: 'No. TAB is infrastructure that runs alongside your stack. It detects gaps and routes recovery to the person, system, or agent best positioned to act. Your tools, teams, and agents stay exactly where they are.',
  },
  {
    q: 'How does TAB avoid alert fatigue?',
    a: 'TAB does not add another notification stream. It bypasses alerts by acting through the right channel — routing recovery to the role, system, or agent that owns the next step in the workflow, based on the handoff graph it builds from your existing tooling.',
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <PageHero
          eyebrow="SECURITY & INTEGRATION"
          title="Answers for security, privacy, and integration teams."
          subtitle="How TAB recovers stalled work without surveillance — and what to expect when connecting it to your stack."
        />
        <section className="relative border-t border-tab-ghost">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
            <div className="max-w-3xl">
              {FAQS.map((f, i) => (
                <SectionReveal key={f.q} delay={Math.min(i * 0.03, 0.3)}>
                  <FAQItem question={f.q} answer={f.a} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
        <section className="relative border-t border-tab-ghost py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
            <SectionReveal>
              <h2 className="font-heading font-semibold text-tab-ink text-2xl sm:text-3xl mb-4">Still have questions?</h2>
              <p className="text-tab-muted max-w-lg mx-auto mb-8">Start a design partnership and we will walk your security team through the architecture.</p>
              <ContactDialog
                defaultType="Design Partner"
                trigger={<button className="px-7 py-3.5 bg-tab-ink text-tab-base tab-mono text-xs hover:bg-tab-accent transition-colors">Start a Conversation</button>}
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