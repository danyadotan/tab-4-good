import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-tab-ghost">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-heading font-medium text-tab-ink text-lg sm:text-xl leading-snug">{question}</span>
        <span className="shrink-0 mt-1 text-tab-accent">
          {open ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </span>
      </button>
      {open && (
        <p className="text-tab-muted text-[1.05rem] leading-relaxed pb-7 max-w-3xl">{answer}</p>
      )}
    </div>
  );
}