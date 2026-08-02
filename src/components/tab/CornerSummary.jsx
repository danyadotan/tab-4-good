import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, Printer, Download, X } from 'lucide-react';
import { shareToWhatsApp, printSummary, generateSummaryPdf } from '@/lib/visionSummary';

const EASE = [0.19, 1, 0.22, 1];

const ACTIONS = [
  { key: 'whatsapp', label: 'Send to WhatsApp', icon: MessageCircle, run: shareToWhatsApp },
  { key: 'print', label: 'Print summary', icon: Printer, run: printSummary },
  { key: 'pdf', label: 'Download PDF', icon: Download, run: generateSummaryPdf },
];

export default function CornerSummary() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const run = (key, fn) => {
    setBusy(key);
    try { fn(); } finally { setBusy(null); }
  };

  return (
    <div ref={ref} className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="absolute bottom-full right-0 mb-2.5 w-72 bg-tab-base border border-tab-ghost shadow-2xl"
          >
            <div className="flex items-start justify-between px-4 pt-3.5 pb-3 border-b border-tab-ghost">
              <div>
                <p className="tab-mono text-[0.58rem] text-tab-accent mb-1">VISION SUMMARY</p>
                <p className="font-heading font-semibold text-tab-ink text-sm leading-tight">Take TAB@Work with you</p>
                <p className="text-[0.7rem] text-tab-muted mt-1 leading-snug">Summarize the thesis, send it to WhatsApp, print it, or keep the PDF.</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close summary" className="text-tab-muted hover:text-tab-ink transition-colors -mt-0.5 -mr-1 p-1">
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-1.5">
              {ACTIONS.map((a) => (
                <button
                  key={a.key}
                  onClick={() => run(a.key, a.run)}
                  disabled={busy === a.key}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm text-tab-ink hover:bg-tab-ghost/50 transition-colors disabled:opacity-60"
                >
                  <a.icon size={16} strokeWidth={1.5} className="text-tab-accent shrink-0" />
                  {a.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close vision summary' : 'Open vision summary'}
        aria-expanded={open}
        className="group relative block w-14 h-14 sm:w-16 sm:h-16"
      >
        {/* page beneath the fold */}
        <span
          className="absolute inset-0 bg-tab-ghost/80 transition-transform duration-500"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', transform: 'translate(4px, 4px)', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
          aria-hidden="true"
        />
        {/* the fold */}
        <span
          className="absolute inset-0 bg-tab-ink transition-transform duration-500 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
          aria-hidden="true"
        >
          <Sparkles size={15} strokeWidth={1.5} className="absolute text-tab-base" style={{ bottom: '11px', right: '11px' }} />
        </span>
        {/* hover label */}
        <span
          className="absolute right-0 bottom-0 translate-y-full pt-1.5 tab-mono text-[0.58rem] text-tab-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
        >
          Summary
        </span>
      </button>
    </div>
  );
}