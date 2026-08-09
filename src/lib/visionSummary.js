import { jsPDF } from 'jspdf';

const ACCENT = [124, 58, 237];
const INK = [10, 10, 11];
const MUTED = [107, 114, 128];

const SECTIONS = [
  {
    h: 'The Thesis',
    p: 'The AI layer is growing. The execution layer is missing. SaaS optimized work inside tools; TAB recovers the work that falls between them. Every team has a tool, but no one owns the handoff — so the handoff is where work dies.',
  },
  {
    h: 'The Problem',
    p: 'Failures live between intent and action — across people, permissions, tools, and teams. As AI multiplies what each tool can do, the seams widen and dropped handoffs compound. The fix is not another app. It is a layer that detects the gaps and routes recovery across the whole stack.',
  },
  {
    h: 'The Differentiator',
    p: 'A fixed core engine — observation, breakdown detection, recovery orchestration, and a continuity model — expresses itself through adaptive wrappers tuned to each team. Same core. Different operational expression.',
  },
  {
    h: 'How It Works',
    p: 'Observe the signals of work in motion. Detect friction events where work stalls at a handoff. Route a recovery action to the role, system, or agent best positioned to act. Preserve continuity across every handoff.',
  },
  {
    h: 'Why Now',
    p: 'Every company is becoming AI-native. Most are not execution-ready. The next bottleneck is not intelligence — it is the infrastructure to act on it.',
  },
  {
    h: 'Privacy by Architecture',
    p: 'TAB measures friction events, not personal behavior. No sentiment detection, no burnout scoring, no individual profiling — enforced by architecture, not policy.',
  },
  {
    h: 'Where TAB Stands',
    p: 'The technical infrastructure is built: the core engine, friction-event detection, recovery routing, the adaptive wrapper, and the anonymous-by-architecture data model. What is not yet proven is the risk funding removes — pilot proof in 3–5 live environments, native connector depth, and the friction-event metric as a repeatable benchmark. The window now is the validation, not the build: design partners shape the recovery model before it hardens; investors fund the proof that turns infrastructure into a category.',
  },
  {
    h: 'The Ask',
    p: '3–5 enterprise design partners. Live pilot environments. Go-to-market & platform support. Built on Base44, joining the Base4U accelerator.',
  },
];

const HEADER = {
  eyebrow: 'VISION SUMMARY',
  title: 'TAB@Work',
  tagline: 'Execution infrastructure for AI-native organizations.',
  contact: 'danya@dynamicbridge.io  ·  Tel Aviv, Israel',
};

export const VISION_SUMMARY = [
  `${HEADER.title} — ${HEADER.eyebrow}`,
  HEADER.tagline,
  '',
  ...SECTIONS.flatMap((s) => [`${s.h}`, s.p, '']),
  HEADER.contact,
].join('\n').trim();

export function shareToWhatsApp() {
  window.open('https://wa.me/?text=' + encodeURIComponent(VISION_SUMMARY), '_blank', 'noopener,noreferrer');
}

export function printSummary() {
  const w = window.open('', '_blank');
  if (!w) return;
  const sectionsHtml = SECTIONS.map(
    (s) => `<h2>${s.h}</h2><p>${s.p}</p>`
  ).join('');
  w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>TAB@Work — Vision Summary</title>
  <style>
    @page { margin: 28mm 22mm; }
    * { box-sizing: border-box; }
    body { font-family: -apple-system, "Segoe UI", Inter, system-ui, sans-serif; color: #0A0A0B; line-height: 1.7; max-width: 680px; margin: 0 auto; padding: 40px 24px; }
    .eyebrow { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #7C3AED; margin: 0 0 8px; }
    h1 { font-size: 34px; margin: 0 0 6px; letter-spacing: -0.02em; }
    .tagline { color: #6B7280; font-size: 16px; margin: 0 0 28px; }
    .rule { height: 1px; background: #E2E8F0; margin: 0 0 28px; }
    h2 { font-size: 15px; margin: 24px 0 6px; }
    p { font-size: 13.5px; color: #374151; margin: 0 0 14px; }
    .contact { margin-top: 32px; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #6B7280; }
  </style></head><body>
  <p class="eyebrow">${HEADER.eyebrow}</p>
  <h1>${HEADER.title}</h1>
  <p class="tagline">${HEADER.tagline}</p>
  <div class="rule"></div>
  ${sectionsHtml}
  <p class="contact">${HEADER.contact}</p>
  </body></html>`);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 350);
}

export function generateSummaryPdf() {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 56;
  const maxW = pageW - margin * 2;
  let y = margin;

  const ensureSpace = (h) => {
    if (y + h > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  doc.setFillColor(...ACCENT);
  doc.rect(margin, y, 28, 3, 'F');
  y += 14;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text(HEADER.eyebrow, margin, y);
  y += 16;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(...INK);
  doc.text(HEADER.title, margin, y);
  y += 26;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...MUTED);
  const tagLines = doc.splitTextToSize(HEADER.tagline, maxW);
  doc.text(tagLines, margin, y);
  y += tagLines.length * 15 + 12;

  doc.setDrawColor(226, 232, 240);
  doc.line(margin, y, pageW - margin, y);
  y += 20;

  SECTIONS.forEach((s) => {
    ensureSpace(36);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...INK);
    doc.text(s.h, margin, y);
    y += 16;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(60, 60, 70);
    const lines = doc.splitTextToSize(s.p, maxW);
    ensureSpace(lines.length * 15);
    doc.text(lines, margin, y);
    y += lines.length * 15 + 16;
  });

  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text(HEADER.contact, margin, pageH - 28);
    doc.text(`${i} / ${pageCount}`, pageW - margin, pageH - 28, { align: 'right' });
  }

  doc.save('TAB-Work-Vision-Summary.pdf');
}