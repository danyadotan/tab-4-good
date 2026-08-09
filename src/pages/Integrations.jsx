import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import PageHero from '@/components/tab/PageHero';
import SectionReveal from '@/components/tab/SectionReveal';
import ContactDialog from '@/components/tab/ContactDialog';
import CornerSummary from '@/components/tab/CornerSummary';
import BottomNav from '@/components/tab/BottomNav';
import { Ticket, Users, MessageSquare, Database, Bot, GitBranch } from 'lucide-react';

const CATEGORIES = [
  {
    icon: Ticket,
    tag: '01 — TICKETING & PROJECT MANAGEMENT',
    title: 'Where work is tracked.',
    body: 'The systems of record for tasks, tickets, and project state. TAB reads status transitions and handoff timestamps to detect when work stalls between owners — not the content of the work itself.',
    tools: ['Jira', 'Asana', 'ClickUp', 'Linear', 'Trello', 'Monday'],
  },
  {
    icon: Users,
    tag: '02 — CRM & CUSTOMER OPS',
    title: 'Where customers are served.',
    body: 'The systems that carry customer-facing work across support, success, and sales. TAB detects tickets that stall between queues, reopen after resolution, or cross team boundaries — and routes recovery before the customer feels the gap.',
    tools: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Freshdesk'],
  },
  {
    icon: MessageSquare,
    tag: '03 — COMMUNICATION',
    title: 'Where handoffs actually happen.',
    body: 'The channels where work moves between people. TAB routes recovery through the right channel instead of adding another notification — bypassing alerts by acting where the next step already lives.',
    tools: ['Slack', 'Microsoft Teams', 'Email', 'Google Workspace'],
  },
  {
    icon: Database,
    tag: '04 — DATA & ANALYTICS',
    title: 'Where decisions are fed.',
    body: 'Pipelines, models, and reports that stall between owners. TAB detects when a pipeline or model stops progressing and routes recovery to the data owner, system, or agent that can unblock it.',
    tools: ['dbt', 'Snowflake', 'Airflow', 'Looker', 'BigQuery'],
  },
  {
    icon: Bot,
    tag: '05 — AUTOMATION & AI AGENTS',
    title: 'Where work is routed automatically.',
    body: 'Automation platforms move work on a trigger; AI agents act inside a conversation. TAB gives both the missing context — the handoff graph and recovery routing that returns stalled work to motion.',
    tools: ['Workato', 'n8n', 'Zapier', 'Internal AI agents', 'Copilot'],
  },
  {
    icon: GitBranch,
    tag: '06 — INTERNAL & CUSTOM SYSTEMS',
    title: 'Where your stack is unique.',
    body: 'Every enterprise has systems no off-the-shelf connector covers. TAB connects through standard APIs and a wrapper SDK, so the seams unique to your environment are watched the same way as the standard ones.',
    tools: ['Internal APIs', 'Custom webhooks', 'Proprietary databases', 'Workflow engines'],
  },
];

export default function Integrations() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <PageHero
          eyebrow="INTEGRATION PARTNERS"
          title="The ecosystem TAB keeps in motion."
          subtitle="TAB@Work integrates with the tools where work already lives — sitting alongside your stack as a coordination and recovery layer, never replacing a single tool in it."
        />
        <section className="relative border-t border-tab-ghost">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
            <div className="grid sm:grid-cols-2 gap-px bg-tab-ghost border border-tab-ghost">
              {CATEGORIES.map((c, i) => (
                <SectionReveal key={c.tag} delay={Math.min(i * 0.06, 0.3)}>
                  <div className="bg-tab-base p-8 sm:p-10 h-full flex flex-col">
                    <c.icon size={26} strokeWidth={1.5} className="text-tab-accent mb-6" />
                    <p className="tab-mono text-[0.6rem] text-tab-accent mb-3">{c.tag}</p>
                    <h2 className="font-heading font-semibold text-tab-ink text-xl sm:text-2xl mb-4 leading-tight">{c.title}</h2>
                    <p className="text-sm text-tab-muted leading-relaxed mb-6">{c.body}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {c.tools.map((t) => (
                        <span key={t} className="tab-mono text-[0.6rem] px-3 py-1.5 border border-tab-ghost text-tab-ink">{t}</span>
                      ))}
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
              <h2 className="font-heading font-semibold text-tab-ink text-2xl sm:text-3xl mb-4">Don't see your stack?</h2>
              <p className="text-tab-muted max-w-lg mx-auto mb-8">TAB connects through standard APIs and a wrapper SDK. Tell us your environment and we will map the seams.</p>
              <ContactDialog
                defaultType="Design Partner"
                trigger={<button className="px-7 py-3.5 bg-tab-ink text-tab-base tab-mono text-xs hover:bg-tab-accent transition-colors">Map My Stack</button>}
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