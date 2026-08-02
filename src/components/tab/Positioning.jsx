import SectionReveal from './SectionReveal';
import { Workflow, Bot, Eye } from 'lucide-react';

const ITEMS = [
  {
    icon: Workflow,
    t: 'Automation platforms',
    s: 'Workato · Zapier · n8n',
    b: 'Move work between systems on a trigger. They don’t detect when execution has stalled, and they can’t recover a handoff that fell through the seams.',
  },
  {
    icon: Bot,
    t: 'AI assistants',
    s: 'Copilot · ChatGPT · Claude',
    b: 'Generate inside a single conversation. They don’t hold the organizational context around the task — the permissions, the roles, the handoffs where work disappears.',
  },
  {
    icon: Eye,
    t: 'Employee monitoring',
    s: 'Productivity surveillance',
    b: 'Watch people to measure effort. TAB measures friction events, not people — aggregate and anonymous, built to bypass breakdowns rather than surveil behavior.',
  },
];

export default function Positioning() {
  return (
    <section id="positioning" className="relative tab-section border-t border-tab-ghost">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">07 — WHY NOT EXISTING TOOLS</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-6">
            Existing tools weren’t built for the seams.
          </h2>
          <p className="text-lg text-tab-muted max-w-2xl mb-16 leading-relaxed">
            Automation moves data. Assistants generate inside a conversation. Monitoring watches people. None of them recover stalled work.
          </p>
        </SectionReveal>
        <div className="grid sm:grid-cols-3 gap-px bg-tab-ghost border border-tab-ghost">
          {ITEMS.map((it, i) => (
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
      </div>
    </section>
  );
}