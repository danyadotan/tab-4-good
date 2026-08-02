import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-20 tab-grid overflow-hidden">
      <div className="absolute inset-0 tab-grid-fine opacity-60 pointer-events-none" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <Link to="/" className="inline-flex items-center gap-2 tab-mono text-[0.65rem] text-tab-muted hover:text-tab-ink transition-colors mb-8">
            <ArrowLeft size={14} /> Back to overview
          </Link>
        </SectionReveal>
        <SectionReveal delay={0.05}>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">{eyebrow}</p>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h1 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-3xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6 max-w-3xl">
            {title}
          </h1>
        </SectionReveal>
        <SectionReveal delay={0.15}>
          <p className="text-lg text-tab-muted max-w-xl leading-relaxed">{subtitle}</p>
        </SectionReveal>
      </div>
    </section>
  );
}