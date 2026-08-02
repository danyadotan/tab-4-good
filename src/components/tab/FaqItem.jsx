import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.19, 1, 0.22, 1];

export default function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-tab-ghost">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-heading font-medium text-tab-ink text-lg sm:text-xl leading-snug pr-2">{question}</span>
        <span className="shrink-0 mt-1 text-tab-accent transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}>
          {open ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-tab-muted text-[1.05rem] leading-relaxed max-w-3xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}