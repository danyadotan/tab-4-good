import SectionReveal from './SectionReveal';

const TOP = ['Leadership', 'Managers'];
const BOTTOM = ['Employees', 'Enterprise Systems', 'AI Agents'];

export default function Architecture() {
  return (
    <section id="product" className="relative tab-section border-t border-tab-ghost">
      <div className="absolute inset-0 tab-grid-fine opacity-40 pointer-events-none" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionReveal>
              <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">02 — PRODUCT ARCHITECTURE</p>
              <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-6">
                One execution layer across the organization.
              </h2>
              <p className="text-tab-muted leading-relaxed mb-6">
                TAB sits as a horizontal coordination and recovery layer — connecting leadership, managers, employees, enterprise systems and AI agents without replacing any of them.
              </p>
              <p className="text-tab-muted leading-relaxed">
                It observes in context, detects the exact breakdown, and triggers recovery inside the environments work already happens in.
              </p>
            </SectionReveal>
          </div>
          <div className="lg:col-span-7">
            <SectionReveal delay={0.15}>
              <div className="border border-tab-ghost bg-tab-base p-6 sm:p-10" aria-describedby="arch-desc">
                <div className="space-y-2">
                  {TOP.map((l) => (
                    <div key={l} className="border border-tab-ghost px-5 py-4 flex items-center justify-between">
                      <span className="font-heading font-medium text-tab-ink">{l}</span>
                      <span className="h-1.5 w-1.5 bg-tab-ghost rounded-full"></span>
                    </div>
                  ))}
                </div>
                <div className="relative my-3">
                  <div className="bg-tab-ink text-tab-base px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 bg-tab-accent rounded-full"></span>
                      <span className="tab-mono text-xs">TAB</span>
                      <span className="text-sm text-tab-base/80">coordination & recovery layer</span>
                    </div>
                    <span className="tab-mono text-[0.6rem] text-tab-base/60">CORE ENGINE</span>
                  </div>
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 h-px w-2 bg-tab-accent"></div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-px w-2 bg-tab-accent"></div>
                </div>
                <div className="space-y-2">
                  {BOTTOM.map((l) => (
                    <div key={l} className="border border-tab-ghost px-5 py-4 flex items-center justify-between">
                      <span className="font-heading font-medium text-tab-ink">{l}</span>
                      <span className="h-1.5 w-1.5 bg-tab-ghost rounded-full"></span>
                    </div>
                  ))}
                </div>
                <p id="arch-desc" className="sr-only">
                  Diagram: TAB forms a horizontal layer spanning leadership, managers, employees, enterprise systems and AI agents, acting as the coordination and recovery interface between them.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}