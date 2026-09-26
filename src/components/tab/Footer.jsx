import { Link } from 'react-router-dom';
import DownloadOverview from './DownloadOverview';

const NAV_LINKS = [
  { label: 'Thesis', to: '/#thesis' },
  { label: 'Product', to: '/#product' },
  { label: 'Founder', to: '/#founder' },
  { label: 'Use Cases', to: '/use-cases' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Glossary', to: '/glossary' },
  { label: 'Executive Summary', to: '/executive-summary' },
  { label: 'Investor Q&A', to: '/investor-qa' },
];

export default function Footer() {
  return (
    <footer className="relative bg-tab-ink text-tab-base overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-16 pb-32 md:pb-16">
        <p className="font-light text-3xl sm:text-5xl text-tab-base/25 tracking-tight mb-16" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          from intention to done
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-white/10 pt-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 bg-tab-accent rounded-full"></span>
              <span className="font-heading font-semibold">TAB@Work</span>
            </div>
            <p className="text-sm text-tab-base/50">Execution infrastructure for AI-native organizations.</p>
          </div>
          <div>
            <p className="tab-mono text-[0.6rem] text-tab-base/40 mb-3">NAVIGATE</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <Link key={l.to} to={l.to} className="text-tab-base/70 hover:text-tab-accent transition-colors w-fit">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="tab-mono text-[0.6rem] text-tab-base/40 mb-3">LOCATION</p>
            <p className="text-sm text-tab-base/70">Tel Aviv, Israel</p>
          </div>
          <div>
            <p className="tab-mono text-[0.6rem] text-tab-base/40 mb-3">CONTACT</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:danya@dynamicbridge.io" className="text-tab-base/70 hover:text-tab-accent transition-colors">danya@dynamicbridge.io</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-tab-base/70 hover:text-tab-accent transition-colors">LinkedIn</a>
              <div className="flex flex-col gap-1">
                <a href="https://github.com/danyadotan/execution-hygiene-agent" target="_blank" rel="noopener noreferrer" className="text-tab-base/70 hover:text-tab-accent transition-colors">Open source on GitHub</a>
                <span className="text-xs text-tab-base/50">The open-source hygiene check behind TAB.</span>
              </div>
              <DownloadOverview className="text-tab-base/70 hover:text-tab-accent" label="Download Overview (PDF)" />
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs text-tab-base/30">© {new Date().getFullYear()} TAB@Work. All rights reserved.</p>
      </div>
    </footer>
  );
}