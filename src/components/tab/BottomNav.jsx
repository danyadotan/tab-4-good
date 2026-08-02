import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Layers, HelpCircle, BookOpen } from 'lucide-react';

const TABS = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'Use Cases', to: '/use-cases', icon: Layers },
  { label: 'FAQ', to: '/faq', icon: HelpCircle },
  { label: 'Glossary', to: '/glossary', icon: BookOpen },
];

export default function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-tab-base/95 backdrop-blur-md border-t border-tab-ghost"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)' }}
      aria-label="Primary navigation"
    >
      <div className="grid grid-cols-4">
        {TABS.map((t) => {
          const active = pathname === t.to;
          const Icon = t.icon;
          return (
            <Link
              key={t.to}
              to={t.to}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 tab-mono text-[0.55rem] transition-colors ${
                active ? 'text-tab-accent' : 'text-tab-muted hover:text-tab-ink'
              }`}
            >
              <Icon size={18} strokeWidth={1.5} />
              <span>{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}