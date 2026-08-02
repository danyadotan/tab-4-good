import SectionReveal from './SectionReveal';
import ContactDialog from './ContactDialog';
import DownloadOverview from './DownloadOverview';

const ASK = ['3–5 enterprise design partners', 'Live pilot environments', 'Go-to-market & platform support'];

export default function FinalCTA() {
  return (
    <section id="contact" className="relative tab-section border-t border-tab-ghost tab-grid">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 text-center">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">11 — BUILD WITH US</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-tab-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6 max-w-3xl mx-auto">
            Build the execution layer with us.
          </h2>
          <p className="text-lg text-tab-muted max-w-xl mx-auto mb-8">
            We’re building TAB on Base44 and joining the Base4U accelerator to validate execution recovery with real enterprises — and looking for the operators and investors who see the same bottleneck.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {ASK.map((a) => (
              <span key={a} className="tab-mono text-[0.65rem] text-tab-muted flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-tab-accent rounded-full"></span>
                {a}
              </span>
            ))}
          </div>
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
          <div className="mt-6">
            <DownloadOverview className="text-tab-muted hover:text-tab-accent" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}