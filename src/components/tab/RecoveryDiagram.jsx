import { ChevronDown } from 'lucide-react';
import SectionReveal from './SectionReveal';

const SOURCES = ['CRM', 'ITSM', 'Tickets', 'Pipelines'];
const DESTS = ['Sales', 'DevOps', 'Support', 'Analytics'];

const STEPS = [
  { n: 1, label: 'DETECT' },
  { n: 2, label: 'ROUTE' },
  { n: 3, label: 'RETURN' },
];

const CHIPS = ['Observe in context', 'Anonymous by architecture', 'No new system to adopt'];

const CALLOUTS = [
  {
    n: 1,
    title: 'Friction event detected',
    body: 'A cross-tool handoff stalls — the seam between two systems goes silent. TAB sees it where work already happens.',
  },
  {
    n: 2,
    title: 'Smallest action routed',
    body: 'The layer triggers the minimal step that unblocks the handoff — not a new task, not a new dashboard to watch.',
  },
  {
    n: 3,
    title: 'Continuity returned',
    body: 'Work resumes inside the destination tool with full context intact. No context switch, no rework.',
  },
];

function Node({ label }) {
  return (
    <div className="border border-tab-ghost px-2 py-3 text-center bg-tab-base">
      <span className="tab-mono text-[0.58rem] sm:text-[0.62rem] text-tab-muted">{label}</span>
    </div>
  );
}

function Connectors() {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-px h-5 sm:h-7 bg-tab-ghost" />
          <ChevronDown size={11} strokeWidth={1.5} className="text-tab-ghost -mt-0.5" />
        </div>
      ))}
    </div>
  );
}

export default function RecoveryDiagram() {
  return (
    <section id="demo" className="relative tab-section border-t border-tab-ghost">
      <div className="absolute inset-0 tab-grid-fine opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionReveal>
          <p className="tab-mono text-[0.65rem] text-tab-accent mb-5">SEE THE MECHANICS</p>
          <h2 className="font-heading font-semibold tracking-[-0.02em] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mb-6">
            Where the seams get recovered.
          </h2>
          <p className="text-lg max-w-2xl leading-relaxed text-tab-muted mb-12">
            TAB sits across the handoffs between your existing systems. When a cross-tool handoff stalls, the layer intercepts it, routes the smallest action that unblocks it, and returns work with continuity — anonymous by design.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative border border-tab-ghost bg-tab-base p-4 sm:p-8 lg:p-10">
            {/* Source systems */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {SOURCES.map((s) => (
                <Node key={s} label={s} />
              ))}
            </div>

            <Connectors />

            {/* TAB horizontal layer */}
            <div className="bg-tab-ink text-tab-base px-4 sm:px-6 py-5 sm:py-6">
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 bg-tab-accent rounded-full" />
                  <span className="tab-mono text-xs">TAB</span>
                  <span className="hidden sm:inline text-sm text-tab-base/70">coordination &amp; recovery layer</span>
                </div>
                <span className="tab-mono text-[0.58rem] sm:text-[0.6rem] text-tab-base/50">CORE ENGINE</span>
              </div>

              {/* Numbered interception steps along the layer */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-4">
                {STEPS.map((s) => (
                  <div key={s.n} className="flex items-center gap-2 sm:gap-2.5">
                    <span className="flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-tab-accent text-tab-base tab-mono text-[0.6rem] sm:text-[0.7rem] font-semibold shrink-0">
                      {s.n}
                    </span>
                    <span className="tab-mono text-[0.58rem] sm:text-[0.65rem] text-tab-base">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Architectural chips along the layer */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4 sm:mt-5 pt-4 border-t border-white/10">
                {CHIPS.map((c) => (
                  <span key={c} className="text-[0.62rem] sm:text-[0.7rem] text-tab-base/55 leading-tight">
                    · {c}
                  </span>
                ))}
              </div>
            </div>

            <Connectors />

            {/* Destination systems */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {DESTS.map((d) => (
                <Node key={d} label={d} />
              ))}
            </div>

            <p className="sr-only">
              Diagram: source systems (CRM, ITSM, Tickets, Pipelines) hand off work down through the TAB coordination and recovery layer, which detects friction events, routes the smallest unblocking action, and returns continuity to destination systems (Sales, DevOps, Support, Analytics). The layer observes in context, is anonymous by architecture, and requires no new system to adopt.
            </p>
          </div>
        </SectionReveal>

        {/* Interception callouts */}
        <SectionReveal delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {CALLOUTS.map((c) => (
              <div key={c.n} className="border-l-2 border-tab-accent pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-tab-accent text-tab-base tab-mono text-[0.62rem] font-semibold">
                    {c.n}
                  </span>
                  <span className="font-heading font-medium text-tab-ink text-sm">{c.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-tab-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}