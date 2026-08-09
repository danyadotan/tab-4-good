import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import PageHero from '@/components/tab/PageHero';
import SectionReveal from '@/components/tab/SectionReveal';
import ContactDialog from '@/components/tab/ContactDialog';
import CornerSummary from '@/components/tab/CornerSummary';
import BottomNav from '@/components/tab/BottomNav';
import { Check, Circle, Clock } from 'lucide-react';

const MILESTONES = [
  {
    status: 'done',
    tag: 'PHASE 01 — NOW',
    title: 'Pilot & Validation',
    period: 'In progress',
    body: 'Embedded pilots with 3–5 enterprise design partners across customer operations and AI transformation. Validate breakdown detection and recovery routing in live environments.',
    items: [
      'Core engine: friction event detection across 2–3 connected systems per pilot',
      'Recovery routing through existing channels (Slack, Jira, email)',
      'Anonymous-by-architecture data model validated with partner security teams',
      'Pilot evidence framework: measure friction events recovered, not hours watched',
    ],
  },
  {
    status: 'next',
    tag: 'PHASE 02 — NEXT 6 MONTHS',
    title: 'Embed & Deepen Integrations',
    period: 'Q4 2026 — Q1 2027',
    body: 'Deepen the integration footprint across the environments work already happens in. Move from detection toward autonomous recovery inside approved guardrails.',
    items: [
      'Native connectors: Salesforce, HubSpot, Asana, ClickUp, Linear, Notion',
      'Data workflow integrations: dbt, Snowflake, Airflow ownership routing',
      'Autonomous recovery inside human-approved guardrails (bypass, not alert)',
      'Adaptive wrapper SDK: express the fixed core engine in partner-specific contexts',
    ],
  },
  {
    status: 'future',
    tag: 'PHASE 03 — 12 MONTHS',
    title: 'Scale to Category',
    period: '2027',
    body: 'Repeatable deployment across functions. Turn pilot evidence into a category — execution infrastructure for AI-native organizations.',
    items: [
      'Self-serve onboarding: connect a stack and map handoffs without a deployment',
      'Agent-native recovery: route to AI agents alongside people and systems',
      'Category-defining metrics: the execution-recovery benchmark for the industry',
      'Repeatable deployment across functions beyond customer ops and governance',
    ],
  },
];

const INTEGRATIONS = [
  { group: 'Ticketing & Project Management', tools: 'Jira · Asana · ClickUp · Linear · Trello' },
  { group: 'CRM & Customer Ops', tools: 'Salesforce · HubSpot · Zendesk · Intercom' },
  { group: 'Communication', tools: 'Slack · Microsoft Teams · Email' },
  { group: 'Data & Analytics', tools: 'dbt · Snowflake · Airflow · Looker' },
  { group: 'Automation & Agents', tools: 'Workato · n8n · Internal AI agents' },
];

function StatusIcon({ status }) {
  if (status === 'done') return <Check size={16} strokeWidth={2} className="text-tab-base" />;
  if (status === 'next') return <Clock size={16} strokeWidth={2} className="text-tab-base" />;
  return <Circle size={16} strokeWidth={2} className="text-tab-base/60" />;
}

export default function OperationalRoadmap() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <PageHero
          eyebrow="OPERATIONAL ROADMAP"
          title="From pilot to category — the path for investors."
          subtitle="Where TAB@Work stands today, what ships next, and the technical integrations that turn pilot evidence into execution infrastructure."
        />
        <section className="relative border-t border-tab-ghost">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <div className="space-y-px bg-tab-ghost border border-tab-ghost">
                  {MILESTONES.map((m, i) => (
                    <SectionReveal key={m.tag} delay={i * 0.1}>
                      <div className="bg-tab-ink text-tab-base p-8 sm:p-10">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                            <StatusIcon status={m.status} />
                          </span>
                          <p className="tab-mono text-[0.6rem] text-tab-base/60">{m.tag}</p>
                        </div>
                        <h2 className="font-heading font-semibold text-2xl sm:text-3xl mb-1">{m.title}</h2>
                        <p className="tab-mono text-[0.6rem] text-tab-accent mb-5">{m.period}</p>
                        <p className="text-sm text-tab-base/70 leading-relaxed mb-6">{m.body}</p>
                        <ul className="space-y-3">
                          {m.items.map((it) => (
                            <li key={it} className="flex items-start gap-3 text-sm text-tab-base/90">
                              <span className="h-1.5 w-1.5 bg-tab-accent rounded-full shrink-0 mt-2"></span>
                              <span className="leading-relaxed">{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <SectionReveal delay={0.15}>
                  <div className="lg:sticky lg:top-24">
                    <p className="tab-mono text-[0.6rem] text-tab-accent mb-5">UPCOMING TECHNICAL INTEGRATIONS</p>
                    <h3 className="font-heading font-semibold text-tab-ink text-xl mb-6">The ecosystem we are building toward.</h3>
                    <div className="border border-tab-ghost">
                      {INTEGRATIONS.map((g) => (
                        <div key={g.group} className="px-6 py-5 border-b border-tab-ghost last:border-0">
                          <p className="font-heading font-medium text-tab-ink text-sm mb-1.5">{g.group}</p>
                          <p className="tab-mono text-[0.6rem] text-tab-muted leading-relaxed">{g.tools}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-tab-muted mt-5 leading-relaxed">
                      Integrations are sequenced by where execution breaks most often in pilot environments — not by market size.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>
        <section className="relative border-t border-tab-ghost py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
            <SectionReveal>
              <h2 className="font-heading font-semibold text-tab-ink text-2xl sm:text-3xl mb-4">Invest in the seam.</h2>
              <p className="text-tab-muted max-w-lg mx-auto mb-8">Talk to us about the roadmap, the pilot evidence, and where execution infrastructure is heading.</p>
              <ContactDialog
                defaultType="Investor"
                trigger={<button className="px-7 py-3.5 bg-tab-ink text-tab-base tab-mono text-xs hover:bg-tab-accent transition-colors">Request the Investor Brief</button>}
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