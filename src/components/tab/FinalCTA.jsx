import SectionReveal from './SectionReveal';
import ContactDialog from './ContactDialog';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative tab-section border-t border-tab-ghost tab-grid">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">09 — BUILD WITH US</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6 max-w-3xl mx-auto">
            Build the execution layer with us.
          </h2>
          <p className="text-lg text-tab-muted max-w-xl mx-auto mb-10">
            We’re selecting enterprise design partners and talking with pre-seed investors who understand that execution is the next bottleneck.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <ContactDialog
              defaultType="Design Partner"
              trigger={<button className="px-7 py-3.5 bg-tab-ink text-tab-base tab-mono text-xs hover:bg-tab-accent transition-colors">Become a Design Partner</button>}
            />
            <ContactDialog
              defaultType="Investor"
              trigger={<button className="px-7 py-3.5 border border-tab-ghost text-tab-ink tab-mono text-xs hover:border-tab-accent hover:text-tab-accent transition-colors">Talk to us as an Investor</button>}
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}