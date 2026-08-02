import SectionReveal from './SectionReveal';

const FACTS = [
  { stat: '+14%', label: 'Productivity gain on average', src: 'Stanford/MIT randomized trial of 5,179 contact-center agents — AI assistance raised productivity +14% on average and +34% for novice and struggling workers, with improved retention (Brynjolfsson et al.).' },
  { stat: '20%', label: 'Global employee engagement', src: 'Gallup 2026 — global engagement at 20%, an estimated ~$10T in lost productivity.' },
  { stat: '$2.97B', label: 'DEX market by 2031', src: 'DEX market growing from $1.32B (2023) toward $2.97B (2031), with Gartner projecting enterprise adoption rising from 15% to 50% by 2027.' },
];

export default function WhyNow() {
  return (
    <section id="why-now" className="relative tab-section bg-tab-ink text-tab-base overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        aria-hidden="true"
        style={{ backgroundImage: 'linear-gradient(to right, rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px' }}
      ></div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">06 — WHY NOW</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-4xl mb-6">
            Every company is becoming AI-native. Most are not execution-ready.
          </h2>
          <p className="font-heading font-medium text-xl sm:text-2xl text-tab-base mb-16 max-w-3xl">
            The next enterprise bottleneck is not intelligence. It is execution.
          </p>
        </SectionReveal>
        <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {FACTS.map((f, i) => (
            <SectionReveal key={f.stat} delay={i * 0.1}>
              <div className="bg-tab-ink p-8 h-full flex flex-col">
                <span className="font-heading font-semibold text-4xl sm:text-5xl text-tab-base mb-3">{f.stat}</span>
                <span className="font-heading font-medium text-tab-base/90 mb-5">{f.label}</span>
                <p className="text-sm text-tab-base/55 leading-relaxed">{f.src}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}