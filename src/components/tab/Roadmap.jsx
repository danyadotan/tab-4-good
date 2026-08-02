import SectionReveal from './SectionReveal';

const PHASES = [
  { label: 'NOW', t: 'Pilot', b: 'Embedded pilots with 3–5 enterprise design partners across customer operations and AI transformation. Validate breakdown detection and recovery in live environments.' },
  { label: 'NEXT 6 MONTHS', t: 'Embed', b: 'Deepen integrations across the environments work already happens in. Move from detection toward autonomous recovery inside approved guardrails.' },
  { label: '12 MONTHS', t: 'Scale', b: 'Repeatable deployment across functions. Turn pilot evidence into a category — execution infrastructure for AI-native organizations.' },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative tab-section border-t border-tab-ghost bg-tab-ink text-tab-base overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(to right, rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">08 — ROADMAP</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-16">
            From pilot to category.
          </h2>
        </SectionReveal>
        <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {PHASES.map((p, i) => (
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
      </div>
    </section>
  );
}