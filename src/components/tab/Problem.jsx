import SectionReveal from './SectionReveal';
import { Layers, Eye, Repeat } from 'lucide-react';

const FRICTION_IMG = '/images/execution-friction.png';

const ITEMS = [
  { icon: Layers, title: 'Every team has a tool. No one has the workflow.', body: 'SaaS gave each team a purpose-built app, but work crosses teams, systems, and agents. No tool owns the handoff — so the handoff is where work dies.' },
  { icon: Eye, title: 'Dashboards observe. They don’t recover.', body: 'Monitoring tools surface metrics and alerts, but watching a stalled workflow doesn’t restart it. Visibility without recovery is just a faster way to watch work fail.' },
  { icon: Repeat, title: 'Automation fixes the repeatable. The rest still stalls.', body: 'RPA and workflow tools handle the path you already mapped. The work that stalls is the unplanned, the ambiguous, the cross-system — the work no automation was built for.' },
];

export default function Problem() {
  return (
    <section id="thesis" className="relative tab-section border-t border-tab-ghost">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">01 — THE THESIS</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-5">
            The AI layer is growing. The execution layer is missing.
          </h2>
          <p className="font-heading font-medium text-xl sm:text-2xl text-tab-muted mb-16 max-w-3xl">
            SaaS optimized work inside tools. TAB recovers the work that falls between them.
          </p>
        </SectionReveal>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 grid gap-px bg-tab-ghost border border-tab-ghost">
            {ITEMS.map((it, i) => (
              <SectionReveal key={it.title} delay={i * 0.1}>
                <div className="bg-tab-base p-7 flex gap-5">
                  <it.icon size={22} className="text-tab-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-heading font-medium text-tab-ink text-lg mb-2">{it.title}</h3>
                    <p className="text-tab-muted text-[1.05rem] leading-relaxed">{it.body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          <div className="lg:col-span-5">
            <SectionReveal delay={0.2}>
              <figure className="relative aspect-[4/3] overflow-hidden border border-tab-ghost bg-tab-ghost">
                <img src={FRICTION_IMG} alt="Abstract render of friction: jagged glass shards meeting fluid mercury, representing the gap between intent and action." className="w-full h-full object-cover grayscale" />
              </figure>
              <p className="mt-4 text-sm text-tab-muted leading-relaxed">
                Failures live between intent and action — across people, permissions, tools and teams. The missing layer is not another app. It is the infrastructure that coordinates and recovers across them.
              </p>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}