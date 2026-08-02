import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import SectionReveal from '@/components/tab/SectionReveal';
import FaqItem from '@/components/tab/FaqItem';

const GROUPS = [
  {
    id: 'security',
    eyebrow: '01 — SECURITY',
    label: 'Security',
    items: [
      {
        q: 'How does TAB access our systems without exposing sensitive data?',
        a: 'TAB reads operational signals — task states, handoff timestamps, and status transitions — not message content or documents. Each connection uses a scoped, revocable OAuth token limited to the metadata needed to detect stalled work.',
      },
      {
        q: 'Is TAB a monitoring or surveillance tool?',
        a: 'No. TAB measures friction events — where work stalls between people, systems, and agents — not individual behavior. It does not track keystrokes, screen activity, or personal productivity.',
      },
      {
        q: 'How are credentials and connections managed?',
        a: 'Every integration uses scoped OAuth tokens that can be revoked at any time. TAB never stores raw passwords. Tokens are encrypted at rest, and access is audited so you can see exactly what was read and when.',
      },
    ],
  },
  {
    id: 'privacy',
    eyebrow: '02 — PRIVACY',
    label: 'Privacy',
    items: [
      {
        q: 'What data does TAB store about our employees?',
        a: 'TAB stores aggregate, de-identified friction signals — the fact that a handoff stalled, not who was at fault. Individual-level data is minimized by design and is never used for performance management.',
      },
      {
        q: 'Can TAB be used for performance monitoring or burnout detection?',
        a: 'No, and it is explicitly not built for that. TAB does not detect sentiment, burnout, or individual productivity. The system measures execution gaps, not people, and we will not extend it into people surveillance.',
      },
      {
        q: 'Where is data stored, and who controls it?',
        a: 'Data lives in your Base44 environment with row-level security. You control access, retention, and deletion. TAB never sells or shares your data, and you can export or purge it on your schedule.',
      },
    ],
  },
  {
    id: 'anonymous',
    eyebrow: '03 — ANONYMOUS BY ARCHITECTURE',
    label: 'Anonymous by Architecture',
    items: [
      {
        q: 'What does "anonymous by architecture" mean?',
        a: 'It means anonymity is enforced by how the system is built, not by a policy promise. TAB aggregates friction signals before they reach any human-facing view, so individuals are never identifiable in the recovery loop by design — not by a setting that could later be turned off.',
      },
      {
        q: 'How does TAB recover work without identifying who stalled it?',
        a: 'Recovery routes to the role, system, or agent best positioned to act — not to a named individual. The loop acts on the gap and the next-best action, so accountability stays with the workflow rather than becoming a person.',
      },
      {
        q: 'Can we tune the level of anonymity?',
        a: 'Yes. You can configure aggregation windows and role-based routing so that even internal admins see only the level of detail your governance policy permits. The default is the most anonymous setting that still lets recovery work.',
      },
    ],
  },
  {
    id: 'integration',
    eyebrow: '04 — INTEGRATION EXPECTATIONS',
    label: 'Integration Expectations',
    items: [
      {
        q: 'What systems does TAB integrate with?',
        a: 'TAB connects to the tools where work already lives — task managers, ticketing, CRM, communication, and AI agent platforms — through scoped connectors. We do not require you to replace or migrate existing workflows.',
      },
      {
        q: 'How long does an integration take?',
        a: 'Most individual connectors are live within a day. A full pilot environment is typically configured in one to two weeks, depending on the number of systems and the depth of your governance review.',
      },
      {
        q: 'Does TAB replace our existing tools?',
        a: 'No. TAB sits alongside your stack as a coordination and recovery layer. It detects gaps and routes recovery; your teams and agents keep working in the tools they already use. Nothing is ripped out.',
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <section className="relative pt-32 pb-16 tab-grid overflow-hidden">
          <div className="absolute inset-0 tab-grid-fine opacity-60 pointer-events-none" aria-hidden="true"></div>
          <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
            <SectionReveal>
              <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">FAQ</p>
              <h1 className="font-heading font-semibold tracking-[-0.02em] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl mb-6">
                Answers for security, privacy, and integration teams.
              </h1>
              <p className="text-lg text-tab-muted max-w-2xl leading-relaxed">
                TAB is built to recover stalled work without surveillance. Here is how we handle security, privacy, anonymity, and integration.
              </p>
            </SectionReveal>
          </div>
        </section>

        <section className="relative border-t border-tab-ghost pb-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-24">
                  <p className="tab-mono text-[0.6rem] text-tab-muted mb-4">CONTENTS</p>
                  <ul className="flex flex-col gap-3">
                    {GROUPS.map((g) => (
                      <li key={g.id}>
                        <a href={`#${g.id}`} className="tab-mono text-[0.7rem] text-tab-muted hover:text-tab-ink transition-colors block py-1">{g.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
              <div className="lg:col-span-9">
                {GROUPS.map((g, gIndex) => (
                  <div key={g.id} id={g.id} className="mb-16 last:mb-0 scroll-mt-24">
                    <SectionReveal>
                      <p className="tab-mono text-[0.65rem] text-tab-accent mb-2">{g.eyebrow}</p>
                      <h2 className="font-heading font-semibold tracking-[-0.01em] text-2xl sm:text-3xl text-tab-ink mb-6">{g.label}</h2>
                    </SectionReveal>
                    <SectionReveal delay={0.1}>
                      <div className="border-t border-tab-ghost">
                        {g.items.map((it, i) => (
                          <FaqItem key={it.q} question={it.q} answer={it.a} defaultOpen={i === 0 && gIndex === 0} />
                        ))}
                      </div>
                    </SectionReveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}