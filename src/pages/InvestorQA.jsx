import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import PageHero from '@/components/tab/PageHero';
import SectionReveal from '@/components/tab/SectionReveal';
import CornerSummary from '@/components/tab/CornerSummary';
import BottomNav from '@/components/tab/BottomNav';

const GROUPS = [
  {
    label: 'THE THESIS & MARKET',
    items: [
      {
        q: 'What is TAB@Work in one sentence?',
        a: 'TAB is execution infrastructure for AI-native organizations — a horizontal coordination and recovery layer that detects where work has stalled across teams, systems, and agents, and routes recovery to whoever is best positioned to act, without replacing existing workflows.',
      },
      {
        q: 'What problem are you solving, and why now?',
        a: 'SaaS gave every team its own tool but never gave the organization a way to execute across them. Work stalls at the handoffs — between people, systems, and now AI agents. AI is multiplying what each tool can do, which widens the seams and compounds the cost of dropped handoffs. The bottleneck has shifted from intelligence to the infrastructure required to act on it. Every company is becoming AI-native; almost none are execution-ready.',
      },
      {
        q: 'How big is the market?',
        a: 'The Digital Employee Experience (DEX) market is projected to grow from $1.32B (2023) toward $2.97B by 2031, with Gartner projecting enterprise adoption rising from 15% to 50% by 2027. Underlying demand is larger: Gallup reports global employee engagement at 20%, an estimated ~$10T in lost productivity. TAB targets the execution-recovery layer beneath DEX — the infrastructure that turns that productivity loss into recovered work.',
      },
    ],
  },
  {
    label: 'PRODUCT & ARCHITECTURE',
    items: [
      {
        q: 'What exactly is the product?',
        a: 'A horizontal coordination and recovery layer that sits alongside leadership, managers, employees, enterprise systems, and AI agents — replacing none of them. It has a fixed core engine (observation logic, breakdown detection, recovery orchestration, continuity model) expressed through adaptive wrappers tuned to each team’s tools, language, permissions, and rhythm. The infrastructure stays constant; the operating layer adapts.',
      },
      {
        q: 'How does the recovery loop work?',
        a: 'A closed loop, not a dashboard: (1) Observe the operational context where work already happens — tools, roles, handoffs, status. (2) Detect the exact breakdown — the specific point where execution stalled, as an event not a score. (3) Trigger the lowest-friction recovery — route the smallest action that unblocks work to the right actor, in-flow. (4) Return work with continuity — context, status, and next step preserved across systems. Each recovery trains the layer; recurring breakdowns surface as structural patterns.',
      },
      {
        q: "What's the technical architecture?",
        a: 'TAB connects to the tools where work already lives — ticketing, CRM, communication, project management, internal databases — through standard APIs and connectors. It reads the signals of work in motion (task states, handoff timestamps, status transitions) to build a handoff graph, detects friction events against that graph, and routes recovery through the systems and people already in place. It is a read-and-route layer over existing systems, not a system of record.',
      },
    ],
  },
  {
    label: 'PRIVACY, SECURITY & TRUST',
    items: [
      {
        q: 'How do you detect a friction event without surveillance?',
        a: 'The unit of measurement is the friction event — a stalled handoff, a reopened ticket, a missed transition — not a person’s behavior. Recovery is triggered by aggregate, system-level patterns: "this workflow stalled at this handoff," not "this person is underperforming." There is no sentiment detection, no burnout scoring, and no individual behavioral profiling. That is enforced by the architecture, not by a privacy policy that can be revised later — "anonymous by architecture."',
      },
      {
        q: 'How do you secure enterprise data?',
        a: 'TAB processes the signals of work in transit to detect execution gaps; it does not store the contents of workflows. It reads task states, handoff timestamps, and status transitions — not message bodies, documents, or conversations. Access is scoped per integration, encrypted in transit and at rest, and governed by the customer’s existing identity and permissions. TAB never acts outside the permissions of the account it connects through.',
      },
      {
        q: 'Does TAB monitor employees?',
        a: 'No. TAB watches the seams between systems and roles, not the people inside them. People are positioned as the recovery path, not the subject of surveillance. This is a deliberate design choice and a market differentiator: organizations can adopt AI through trust rather than monitoring.',
      },
      {
        q: 'How does TAB avoid alert fatigue?',
        a: 'TAB does not add another notification stream. It bypasses alerts by acting through the right channel — routing recovery to the role, system, or agent that owns the next step in the workflow, based on the handoff graph it builds from existing tooling.',
      },
    ],
  },
  {
    label: 'COMPETITION & DIFFERENTIATION',
    items: [
      {
        q: 'How is TAB different from automation platforms (Workato, Zapier, n8n)?',
        a: 'Automation platforms move work between systems on a predefined trigger. They don’t detect when execution has stalled, and they can’t recover a handoff that fell through the seams. They handle the repeatable path you already mapped; TAB recovers the unplanned, ambiguous, cross-system work that no automation was built for.',
      },
      {
        q: 'How is TAB different from AI assistants (Copilot, ChatGPT, Claude)?',
        a: 'Assistants generate inside a single conversation but don’t hold the organizational context around the task — the permissions, roles, and handoffs where work disappears. TAB operates at the layer beneath the conversation: it carries the context across systems and actors, so recovery happens in-flow with continuity preserved.',
      },
      {
        q: 'How is TAB different from employee monitoring / productivity tracking?',
        a: 'Monitoring watches people to measure effort. TAB measures friction events, not people — aggregate and anonymous by design. The two are categorically different: one optimizes for observation of individuals; the other optimizes for recovery of work. They cannot be built on the same architecture.',
      },
      {
        q: 'What is the moat?',
        a: 'The handoff graph. Every recovery trains the layer, so recurring breakdowns surface as structural patterns and the system gets smarter about an organization’s specific seams over time. Combined with the fixed-core / adaptive-wrapper architecture, this creates compounding, environment-specific switching costs: TAB becomes the continuity layer an organization relies on to execute across its existing stack.',
      },
    ],
  },
  {
    label: 'BUSINESS MODEL & GO-TO-MARKET',
    items: [
      {
        q: 'What is the business model?',
        a: 'Enterprise SaaS with per-environment licensing. TAB lands on a single broken workflow (no fee, design partnership), proves the loop, then expands to adjacent handoffs within the same organization. Pricing scales with the surface area TAB recovers — per environment, not per seat — which aligns our revenue with the value delivered and avoids the seat-count friction of traditional SaaS.',
      },
      {
        q: 'How do you land and expand?',
        a: 'Land through a single workflow where execution stalls most visibly — customer ops handoffs, IT change governance, or data pipelines. Map the handoffs, prove recovery, then expand across adjacent teams and systems using the same core engine with a new adaptive wrapper. The same infrastructure, re-expressed per environment, keeps expansion cost low.',
      },
      {
        q: "What's the go-to-market motion?",
        a: 'Design-partner-led. We enter live enterprise environments with 3–5 design partners across customer operations and AI transformation, validate breakdown detection and recovery, and turn that evidence into a repeatable deployment playbook. The accelerator provides the go-to-market and platform support to move from pilot to category.',
      },
    ],
  },
  {
    label: 'TRACTION, TEAM & ACCELERATOR FIT',
    items: [
      {
        q: 'What traction do you have?',
        a: 'A US design partnership embedded in a trading workflow; call-center field research focused on extreme early attrition and the operational friction behind it; and behavior-first AI prototypes testing intervention timing, trust, and low-friction recovery. We have catalogued 11 friction event types and mapped 40+ operational workflows. Pilot KPIs are being formalized with design partners.',
      },
      {
        q: 'Who is the founder, and why her?',
        a: 'Danya Dotan — a systems architect combining behavioral science, systems thinking, and AI product design. Her work focuses on execution recovery, operational continuity, and human–AI collaboration: the infrastructure organizations need to adopt AI through trust rather than surveillance. The thesis comes from directly studying where work breaks first.',
      },
      {
        q: 'Why Base44 and the Base4U accelerator?',
        a: 'We are building TAB on Base44 because the platform lets us ship the coordination and recovery layer rapidly against real enterprise environments without reinventing backend infrastructure. Base4U gives us go-to-market and platform support, design-partner access, and the validation loop to move from pilot to a defined category — execution infrastructure for AI-native organizations.',
      },
      {
        q: 'What are you asking for?',
        a: 'Three things: 3–5 enterprise design partners, live pilot environments, and go-to-market & platform support. The capital and network of the accelerator convert our validation footprint into repeatable deployment.',
      },
      {
        q: 'What are the biggest risks?',
        a: 'Enterprise sales cycle length (mitigated by design-partner-led land-and-expand on a single broken workflow); integration breadth across heterogeneous stacks (mitigated by the read-and-route, no-rip-and-replace architecture and standard connectors); and the privacy narrative (mitigated — and turned into a moat — by anonymous-by-architecture design that makes trust a feature, not a caveat).',
      },
      {
        q: 'How do you measure success in a pilot?',
        a: 'Four outcome metrics: time to first action, recovery rate from stalled moments, reduction in dropped handoffs, and AI adoption inside approved workflows. The core engineering target is a recovery-loop latency of ≤30s from detection to a routed recovery action.',
      },
    ],
  },
];

export default function InvestorQA() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <PageHero
          eyebrow="INVESTOR Q&A · BASE4U APPLICATION"
          title="The questions investors ask most — and our answers."
          subtitle="A prepared reference aligned with the deck: the thesis, product, privacy posture, competition, model, and ask, answered the way an investor or accelerator partner would ask them."
        />
        <section className="relative border-t border-tab-ghost">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
            <div className="max-w-3xl">
              {GROUPS.map((g, gi) => (
                <div key={g.label} className={gi > 0 ? 'mt-16' : ''}>
                  <SectionReveal>
                    <p className="tab-mono text-[0.65rem] text-tab-accent mb-6 pb-4 border-b border-tab-ghost">{g.label}</p>
                  </SectionReveal>
                  <div className="space-y-10">
                    {g.items.map((it, i) => (
                      <SectionReveal key={it.q} delay={Math.min(i * 0.04, 0.2)}>
                        <div>
                          <h3 className="font-heading font-medium text-tab-ink text-lg sm:text-xl mb-3 leading-snug">{it.q}</h3>
                          <p className="text-tab-muted leading-relaxed">{it.a}</p>
                        </div>
                      </SectionReveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
      <CornerSummary />
    </div>
  );
}