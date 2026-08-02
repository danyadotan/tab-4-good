import SectionReveal from './SectionReveal';
import { Activity, EyeOff, Unplug } from 'lucide-react';

const FRICTION_IMG = 'https://media.base44.com/images/public/6a6ed39f0305566485de08b3/11af604f4_generated_af736af1.png';

const ITEMS = [
  { icon: Activity, title: 'AI adoption stalls', body: 'New intelligence lands in the organization, but the workflows meant to absorb it stay unchanged. Capability arrives; execution doesn’t follow.' },
  { icon: EyeOff, title: 'Critical work disappears', body: 'Work slips between systems and roles — between a tool, a team, and the next handoff — with no layer watching the seams.' },
  { icon: Unplug, title: 'Shadow AI grows', body: 'Where official tools fail to execute, people improvise. Shadow AI fills the gap without governance, continuity, or visibility.' },
];

export default function Problem() {
  return (
    <section id="thesis" className="relative tab-section border-t border-tab-ghost">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">01 — THE THESIS</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-16">
            The AI layer is growing. The execution layer is missing.
          </h2>
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
                Failures live between intent and action — across people, permissions, tools and teams. The missing layer is not more intelligence. It is coordination and recovery.
              </p>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}