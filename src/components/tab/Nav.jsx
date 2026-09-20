import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ContactDialog from './ContactDialog';

const LINKS = [
  { label: 'Thesis', to: '/#thesis' },
  { label: 'Product', to: '/#product' },
  { label: 'Use Cases', to: '/use-cases' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Founder', to: '/#founder' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-tab-base/85 backdrop-blur-md border-b border-tab-ghost' : 'bg-transparent border-b border-transparent'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', paddingTop: 'env(safe-area-inset-top)' }}
    >
      <nav className="mx-auto max-w-[1400px] px-4 sm:px-8 h-12 md:h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-2 w-2 bg-tab-accent rounded-full transition-transform group-hover:scale-125" style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}></span>
          <span className="font-heading font-semibold tracking-tight text-tab-ink text-sm sm:text-base">TAB@Work</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="tab-mono text-[0.7rem] text-tab-muted hover:text-tab-ink transition-colors">{l.label}</Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ContactDialog
            defaultType="Design Partner"
            trigger={<button className="tab-mono text-[0.7rem] px-4 py-2 bg-tab-ink text-tab-base hover:bg-tab-accent transition-colors">Explore a Design Partnership</button>}
          />
        </div>

        <button className="md:hidden text-tab-ink h-10 w-10 -mr-1.5 flex items-center justify-center" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu" aria-expanded={open}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-tab-ghost bg-tab-base/95 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-1.5">
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="tab-mono text-[0.65rem] text-tab-muted hover:text-tab-ink transition-colors py-0.5">{l.label}</Link>
            ))}
            <ContactDialog
              defaultType="Design Partner"
              trigger={<button className="tab-mono text-[0.65rem] px-4 py-2 mt-1 bg-tab-ink text-tab-base text-left">Explore a Design Partnership</button>}
            />
            <div className="mt-1 pt-1.5 border-t border-tab-ghost">
                </div>
          </div>
        </div>
      )}
    </header>
  );
}