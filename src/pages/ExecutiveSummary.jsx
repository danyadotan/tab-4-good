import Nav from '@/components/tab/Nav';
import Footer from '@/components/tab/Footer';
import PageHero from '@/components/tab/PageHero';
import DocSection from '@/components/tab/DocSection';
import SectionReveal from '@/components/tab/SectionReveal';
import CornerSummary from '@/components/tab/CornerSummary';
import BottomNav from '@/components/tab/BottomNav';
import { Layers, Eye, Repeat, Workflow, Bot, Handshake, Phone, FlaskConical, Target, ShieldAlert, Lock, Split } from 'lucide-react';

const PROBLEM = [
  { icon: Layers, t: 'Every team has a tool. No one has the workflow.', b: 'Work crosses teams, systems, and agents. No tool owns the handoff — so the handoff is where work dies.' },
  { icon: Eye, t: 'Dashboards observe. They don’t recover.', b: 'Visibility without recovery is just a faster way to watch work fail.' },
  { icon: Repeat, t: 'Automation fixes the repeatable. The rest still stalls.', b: 'The work that stalls is the unplanned, the ambiguous, the cross-system — the work no automation was built for.' },
];

const CORE = ['Observation logic', 'Breakdown detection', 'Recovery orchestration', 'Continuity model'];

const LOOP = [
  { n: '01', t: 'Observe context', b: 'Read the operational context where work already happens — tools, roles, handoffs, status.' },
  { n: '02', t: 'Detect the exact breakdown', b: 'Identify the specific point where execution has stalled — not a score, an event.' },
  { n: '03', t: 'Trigger the lowest-friction recovery', b: 'Route the smallest action that unblocks work to the right actor, in-flow.' },
  { n: '04', t: 'Return work with continuity', b: 'Resume with context, status, and next step preserved across systems.' },
];

const FACTS = [
  { stat: '+14%', label: 'Productivity gain from AI assistance', src: 'Stanford/MIT trial of 5,179 contact-center agents (Brynjolfsson et al.).' },
  { stat: '20%', label: 'Global employee engagement — ~$10T lost', src: 'Gallup 2026.' },
  { stat: '$2.97B', label: 'DEX market by 2031', src: 'Gartner: enterprise adoption 15% → 50% by 2027.' },
];

const COMPETITION = [
  { icon: Workflow, t: 'Automation platforms', s: 'Workato · Zapier · n8n', b: 'Move work on a trigger. They don’t detect when execution has stalled, and can’t recover a handoff that fell through the seams.' },
  { icon: Bot, t: 'AI assistants', s: 'Copilot · ChatGPT · Claude', b: 'Generate inside a conversation. They don’t hold the organizational context — permissions, roles, handoffs — where work disappears.' },
  { icon: Eye, t: 'Employee monitoring', s: 'Productivity surveillance', b: 'Watch people to measure effort. TAB measures friction events, not people — aggregate and anonymous by design.' },
];

const TRACTION = [
  { icon: Handshake, t: 'US design partnership', b: 'Embedded in a trading workflow, validating execution recovery in a high-stakes, high-friction environment.' },
  { icon: Phone, t: 'Call-center field research', b: 'Focused on extreme early attrition and the operational friction that drives it — where execution breaks first.' },
  { icon: FlaskConical, t: 'Behavior-first AI prototypes', b: 'Testing intervention timing, trust, and low-friction recovery — proving the loop can act without surveillance.' },
];

const METRICS = [
  { stat: '≤30s', label: 'Target recovery-loop latency' },
  { stat: '3–5', label: 'Enterprise design partners' },
  { stat: '11', label: 'Friction event types catalogued' },
  { stat: '40+', label: 'Operational workflows mapped' },
  { stat: '0', label: 'Surveillance surface' },
];

const MODEL = [
  { tag: 'PILOT', t: 'Land on a broken workflow', b: 'Enter through a single workflow where execution stalls most visibly. Design partnerships validate detection and recovery in a live environment — no fee, no rip-and-replace.' },
  { tag: 'EMBED', t: 'Per-environment annual license', b: 'Once the loop is proven, TAB expands to adjacent handoffs within the same organization. Pricing scales with the surface area TAB recovers — per environment, not per seat.' },
  { tag: 'SCALE', t: 'Multi-environment platform', b: 'Repeatable deployment across functions turns pilot evidence into a category. The same core engine, expressed through adaptive wrappers, lands in new environments with minimal configuration.' },
];

const ROADMAP = [
  { label: 'NOW', t: 'Pilot', b: 'Embedded pilots with 3–5 enterprise design partners across customer operations and AI transformation.' },
  { label: 'NEXT 6 MONTHS', t: 'Embed', b: 'Deepen integrations. Move from detection toward autonomous recovery inside approved guardrails.' },
  { label: '12 MONTHS', t: 'Scale', b: 'Repeatable deployment across functions. Turn pilot evidence into a category — execution infrastructure for AI-native organizations.' },
];

const CRITICAL = [
  { icon: Target, t: 'A single number defines success', b: 'Pilot success is measured in one number: the share of stalls the system recovers autonomously, without human intervention, with detection under five minutes. The first 90-day target: 70% autonomous recovery across three defined friction scenarios (IT governance, customer ops, data workflows). A verifiable metric — not "adoption" or "satisfaction", but direct measurement of TAB\'s ability to return work that would otherwise fall between the tools.' },
  { icon: ShieldAlert, t: 'The real risk — and the answer to it', b: 'The expected question: why wouldn\'t Slack, Asana, or ServiceNow add this themselves? The answer: they can add an alert, but not recovery. Recovery requires reading cross-tool, in real time, from all of the customer\'s systems, and acting across their own boundaries. That is a structural conflict: the big tool cannot be the judge in its own trial. TAB does not compete with existing tools — it sits beneath them, as a coordination layer none of them can or wants to be.' },
  { icon: Lock, t: 'Anonymity as a sales shield', b: 'TAB\'s anonymity is not only an ethical value — it is a market-entry engine. A "coordination" tool usually meets organizational resistance rooted in fear of employee surveillance. TAB enters faster because it threatens no employee: it measures friction events, not people, and anonymity is an architectural property, not a promise. The ethics, in this case, become an accelerator of the deal rather than a cost.' },
  { icon: Split, t: 'Keep the pipelines separate', b: 'Leads must be classified precisely between two types: Design Partner (design partner — goal: product validation and co-development) and Investor (goal: return and measured risk). The follow-up conversation, the message, and the terms differ fundamentally between the two. Mixing them in the pipeline creates communication friction and carries a high cost at a late stage — exactly what TAB itself exists to prevent.' },
];

const ASK = ['3–5 enterprise design partners', 'Live pilot environments', 'Go-to-market & platform support'];

export default function ExecutiveSummary() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <PageHero
          eyebrow="EXECUTIVE SUMMARY"
          title="Execution infrastructure for AI-native organizations."
          subtitle="A one-page synthesis of TAB@Work — the thesis, the product, the market, the model, and the ask — aligned with the investor deck."
        />

        <DocSection id="opportunity" eyebrow="01 — THE OPPORTUNITY" title="AI is transforming work. Work isn't getting executed." intro="SaaS gave every team its own tool. It never gave the organization a way to execute across them. As AI multiplies what each tool can do, the seams between them widen — and the cost of dropped handoffs compounds. The next bottleneck is not intelligence. It is the infrastructure to act on it.">
          <div className="grid sm:grid-cols-3 gap-px bg-tab-ghost border border-tab-ghost">
            {PROBLEM.map((it, i) => (
              <SectionReveal key={it.t} delay={i * 0.08}>
                <div className="bg-tab-base p-8 h-full">
                  <it.icon size={22} strokeWidth={1.5} className="text-tab-accent mb-5" />
                  <h3 className="font-heading font-medium text-tab-ink text-lg mb-2">{it.t}</h3>
                  <p className="text-sm text-tab-muted leading-relaxed">{it.b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </DocSection>

        <DocSection id="product" eyebrow="02 — THE PRODUCT" title="One execution layer across the organization." intro="TAB is a horizontal coordination and recovery layer — sitting alongside leadership, managers, employees, enterprise systems, and AI agents without replacing any of them. It observes in context, detects the exact breakdown, and triggers recovery inside the environments work already happens in.">
          <div className="grid lg:grid-cols-12 gap-px bg-tab-ghost border border-tab-ghost">
            <div className="lg:col-span-5 bg-tab-ink text-tab-base p-8 sm:p-10">
              <span className="h-2.5 w-2.5 bg-tab-accent rounded-full inline-block mb-6"></span>
              <p className="tab-mono text-xs text-tab-base/60 mb-3">FIXED CORE</p>
              <h3 className="font-heading font-semibold text-2xl mb-6">Core Engine</h3>
              <ul className="space-y-3 text-sm text-tab-base/80">
                {CORE.map((x) => (
                  <li key={x} className="flex items-center gap-3"><span className="h-px w-4 bg-tab-accent"></span>{x}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 bg-tab-base p-8 sm:p-10">
              <p className="tab-mono text-xs text-tab-muted mb-4">ADAPTIVE WRAPPERS</p>
              <p className="text-tab-muted leading-relaxed mb-4">The same core engine is expressed through adaptive wrappers tuned to each team’s context — tools, language, permissions, and rhythm. The infrastructure stays constant; the operating layer adapts.</p>
              <p className="text-tab-muted leading-relaxed">Customer Operations · AI Transformation · IT &amp; Governance · High-friction teams — same engine, different operational expression.</p>
            </div>
          </div>
        </DocSection>

        <DocSection id="loop" eyebrow="03 — THE LOOP" title="A closed loop, not a dashboard." intro="The execution loop: observe, detect, recover, learn. Each recovery trains the layer; recurring breakdowns surface as structural patterns, not individual signals.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-tab-ghost border border-tab-ghost">
            {LOOP.map((s, i) => (
              <SectionReveal key={s.n} delay={i * 0.08}>
                <div className="bg-tab-base p-7 h-full">
                  <span className="font-mono text-2xl font-semibold text-tab-ink block mb-5">{s.n}</span>
                  <h3 className="font-heading font-medium text-tab-ink text-lg mb-2">{s.t}</h3>
                  <p className="text-sm text-tab-muted leading-relaxed">{s.b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </DocSection>

        <DocSection id="why-now" dark eyebrow="04 — WHY NOW" title="Every company is becoming AI-native. Most are not execution-ready." intro="SaaS tools were built to optimize work inside each team. None were built to recover the work that falls between them. As AI multiplies what each tool can do, the seams widen — and the cost of dropped handoffs compounds.">
          <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {FACTS.map((f, i) => (
              <SectionReveal key={f.stat} delay={i * 0.1}>
                <div className="bg-tab-ink p-8 h-full flex flex-col">
                  <span className="font-heading font-semibold text-4xl sm:text-5xl text-tab-base mb-3">{f.stat}</span>
                  <span className="font-heading font-medium text-tab-base/90 mb-4">{f.label}</span>
                  <p className="text-sm text-tab-base/55 leading-relaxed mt-auto">{f.src}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </DocSection>

        <DocSection id="competition" eyebrow="05 — WHY NOT EXISTING TOOLS" title="Existing tools weren't built for the seams." intro="Automation moves data. Assistants generate inside a conversation. Monitoring watches people. None of them recover stalled work.">
          <div className="grid sm:grid-cols-3 gap-px bg-tab-ghost border border-tab-ghost">
            {COMPETITION.map((it, i) => (
              <SectionReveal key={it.t} delay={i * 0.1}>
                <div className="bg-tab-base p-8 h-full flex flex-col">
                  <it.icon size={24} strokeWidth={1.5} className="text-tab-accent mb-6" />
                  <h3 className="font-heading font-medium text-tab-ink text-lg mb-1">{it.t}</h3>
                  <p className="tab-mono text-[0.6rem] text-tab-muted mb-4">{it.s}</p>
                  <p className="text-sm text-tab-muted leading-relaxed">{it.b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </DocSection>

        <DocSection id="traction" eyebrow="06 — TRACTION & VALIDATION" title="Validation where execution breaks first." intro="Early-stage validation across a live design partnership, field research, and behavior-first prototypes. Pilot KPIs are being formalized with design partners.">
          <div className="grid sm:grid-cols-3 gap-px bg-tab-ghost border border-tab-ghost mb-10">
            {TRACTION.map((it, i) => (
              <SectionReveal key={it.t} delay={i * 0.1}>
                <div className="bg-tab-base p-8 h-full">
                  <it.icon size={24} strokeWidth={1.5} className="text-tab-accent mb-6" />
                  <h3 className="font-heading font-medium text-tab-ink text-lg mb-3">{it.t}</h3>
                  <p className="text-sm text-tab-muted leading-relaxed">{it.b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.15}>
            <p className="tab-mono text-[0.65rem] text-tab-muted mb-5">OPERATIONAL METRICS</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-tab-ghost border border-tab-ghost">
              {METRICS.map((m) => (
                <div key={m.label} className="bg-tab-base p-6">
                  <span className="font-heading font-semibold text-3xl text-tab-ink block mb-2">{m.stat}</span>
                  <span className="text-sm text-tab-muted leading-snug">{m.label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </DocSection>

        <DocSection id="model" eyebrow="07 — BUSINESS MODEL" title="Land on a broken workflow. Expand across the organization." intro="TAB enters through a single broken workflow — the place execution stalls most visibly — then expands across adjacent handoffs and teams. The model is enterprise SaaS: per-environment licensing that scales with the surface area TAB recovers.">
          <div className="grid sm:grid-cols-3 gap-px bg-tab-ghost border border-tab-ghost">
            {MODEL.map((m, i) => (
              <SectionReveal key={m.t} delay={i * 0.1}>
                <div className="bg-tab-base p-8 h-full flex flex-col">
                  <span className="h-2 w-2 bg-tab-accent rounded-full mb-5"></span>
                  <p className="tab-mono text-[0.6rem] text-tab-muted mb-3">{m.tag}</p>
                  <h3 className="font-heading font-semibold text-xl text-tab-ink mb-4">{m.t}</h3>
                  <p className="text-sm text-tab-muted leading-relaxed">{m.b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </DocSection>

        <DocSection id="roadmap" dark eyebrow="08 — ROADMAP" title="From pilot to category.">
          <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {ROADMAP.map((p, i) => (
              <SectionReveal key={p.t} delay={i * 0.1}>
                <div className="bg-tab-ink p-8 h-full flex flex-col">
                  <span className="h-2 w-2 bg-tab-accent rounded-full mb-6"></span>
                  <p className="tab-mono text-[0.6rem] text-tab-base/50 mb-3">{p.label}</p>
                  <h3 className="font-heading font-semibold text-2xl text-tab-base mb-4">{p.t}</h3>
                  <p className="text-sm text-tab-base/70 leading-relaxed">{p.b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </DocSection>

        <DocSection id="ask" eyebrow="09 — THE ASK" title="Build the execution layer with us." intro="We're looking for the operators and investors who see the same bottleneck.">
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {ASK.map((a) => (
              <span key={a} className="tab-mono text-[0.7rem] text-tab-ink flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-tab-accent rounded-full"></span>{a}
              </span>
            ))}
          </div>
        </DocSection>

        <DocSection id="founder" eyebrow="10 — FOUNDER" title="Built by a systems architect focused on the gap between knowing and doing." intro="Danya Dotan combines behavioral science, systems thinking, and AI product design. Her work focuses on execution recovery, operational continuity, and human–AI collaboration — the infrastructure organizations need to adopt AI through trust rather than surveillance.">
          <SectionReveal>
            <p className="tab-mono text-[0.6rem] text-tab-muted">Danya Dotan · Founder, TAB@Work · Tel Aviv, Israel</p>
          </SectionReveal>
        </DocSection>

        <DocSection id="critical" eyebrow="11 — WHAT MUST BE RIGHT" title="Four points worth getting right before sending." intro="The synthesis holds, but four points deserve to be stated explicitly before this goes out — a measurable win, the honest answer to the obvious risk, anonymity as a sales advantage, and a clean separation between the two pipelines.">
          <div className="grid sm:grid-cols-2 gap-px bg-tab-ghost border border-tab-ghost">
            {CRITICAL.map((it, i) => (
              <SectionReveal key={it.t} delay={i * 0.08}>
                <div className="bg-tab-base p-8 h-full">
                  <it.icon size={22} strokeWidth={1.5} className="text-tab-accent mb-5" />
                  <h3 className="font-heading font-medium text-tab-ink text-lg mb-3">{it.t}</h3>
                  <p className="text-sm text-tab-muted leading-relaxed">{it.b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </DocSection>
      </main>
      <Footer />
      <BottomNav />
      <CornerSummary />
    </div>
  );
}