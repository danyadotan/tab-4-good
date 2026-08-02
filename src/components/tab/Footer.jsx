export default function Footer() {
  return (
    <footer className="relative bg-tab-ink text-tab-base overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16">
        <p className="font-light text-3xl sm:text-5xl text-tab-base/25 tracking-tight mb-16" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          from intention to done
        </p>
        <div className="grid sm:grid-cols-3 gap-10 border-t border-white/10 pt-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 bg-tab-accent rounded-full"></span>
              <span className="font-heading font-semibold">TAB@Work</span>
            </div>
            <p className="text-sm text-tab-base/50">Execution infrastructure for AI-native organizations.</p>
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
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs text-tab-base/30">© {new Date().getFullYear()} TAB@Work. All rights reserved.</p>
      </div>
    </footer>
  );
}