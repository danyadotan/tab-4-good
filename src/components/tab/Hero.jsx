import SectionReveal from './SectionReveal';
import ExecutionFlow from './ExecutionFlow';
import ContactDialog from './ContactDialog';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 tab-grid overflow-hidden">
      <div className="absolute inset-0 tab-grid-fine opacity-60 pointer-events-none" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionReveal>
              <p className="tab-mono text-[0.65rem] sm:text-[0.7rem] text-tab-accent mb-6">EXECUTION INFRASTRUCTURE FOR AI-NATIVE ORGANIZATIONS</p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h1 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-[2.1rem] sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
                AI is transforming work. TAB makes sure work actually gets executed.
              </h1>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-lg text-tab-muted max-w-xl mb-8 leading-relaxed">
                TAB detects execution gaps, restores stalled work, and coordinates employees, managers and AI — without replacing existing workflows.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <ContactDialog
                  defaultType="Design Partner"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-tab-ink text-tab-base tab-mono text-xs hover:bg-tab-accent transition-colors group">
                      Explore a Design Partnership
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }} />
                    </button>
                  }
                />
                <a href="#thesis" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-tab-ghost text-tab-ink tab-mono text-xs hover:border-tab-accent hover:text-tab-accent transition-colors">Read the Thesis</a>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <p className="mt-10 tab-mono text-[0.6rem] text-tab-muted/80">Built for enterprise pilots. Designed around real operational environments.</p>
            </SectionReveal>
          </div>
          <div className="lg:col-span-5">
            <SectionReveal delay={0.3}>
              <ExecutionFlow />
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}