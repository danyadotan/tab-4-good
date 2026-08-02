import { jsPDF } from 'jspdf';

const ACCENT = [124, 58, 237];
const INK = [10, 10, 11];
const MUTED = [107, 114, 128];

const SECTIONS = [
  {
    h: 'The Thesis',
    p: 'The AI layer is growing. The execution layer is missing. SaaS optimized work inside tools; TAB recovers the work that falls between them. Every team has a tool, but no one owns the handoff — so the handoff is where work dies. Dashboards observe but do not recover. Automation fixes the repeatable; the rest still stalls. The missing layer is not another app. It is the infrastructure that coordinates and recovers across the entire stack.',
  },
  {
    h: 'The Problem',
    p: 'Failures live between intent and action — across people, permissions, tools, and teams. As AI multiplies what each tool can do, the seams widen and the cost of dropped handoffs compounds. The fix is not another app. It is a layer that detects the gaps and routes recovery across the whole stack.',
  },
  {
    h: 'The Differentiator',
    p: 'The infrastructure stays constant. The operating layer adapts. A fixed core engine — observation logic, breakdown detection, recovery orchestration, and a continuity model — expresses itself through adaptive wrappers tuned to each team’s tools, language, permissions, and rhythm. Same core engine. Different operational expression.',
  },
  {
    h: 'How It Works',
    p: 'TAB observes the signals of work in motion, detects friction events where work stalls at a handoff, routes a recovery action to the role, system, or agent best positioned to act, and preserves continuity across every handoff. It bypasses alerts by acting through the right channel rather than adding another notification stream.',
  },
  {
    h: 'Why Now',
    p: 'Every company is becoming AI-native. Most are not execution-ready. SaaS gave every team its own app but never gave the organization a way to execute across them. The next bottleneck is not intelligence — it is the infrastructure to act on it.',
  },
  {
    h: 'Privacy by Architecture',
    p: 'TAB measures friction events, not personal behavior. Recovery is triggered by aggregate, system-level patterns — not by identifying or profiling individuals. There is no sentiment detection, no burnout scoring, and no individual behavioral profiling. That is enforced by the architecture, not by a privacy policy that can be revised later.',
  },
  {
    h: 'Roadmap',
    p: 'Now: pilot the coordination and recovery layer with 3–5 enterprise design partners across live environments. Next 6 months: expand adaptive wrappers and recovery routing across additional tool stacks. 12 months: generalize the core engine for AI-native organizations at scale.',
  },
  {
    h: 'The Ask',
    p: '3–5 enterprise design partners. Live pilot environments. Go-to-market and platform support. Built on Base44, joining the Base4U accelerator to validate execution recovery with real enterprises.',
  },
];

export default function generateOverviewPdf() {
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

  // Accent rule
  doc.setFillColor(...ACCENT);
  doc.rect(margin, y, 28, 3, 'F');
  y += 14;

  // Eyebrow
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text('EXECUTIVE OVERVIEW', margin, y);
  y += 18;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(...INK);
  doc.text('TAB@Work', margin, y);
  y += 30;

  // Tagline
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(...MUTED);
  const tagLines = doc.splitTextToSize('Execution infrastructure for AI-native organizations.', maxW);
  doc.text(tagLines, margin, y);
  y += tagLines.length * 16 + 10;

  // Divider
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, y, pageW - margin, y);
  y += 24;

  SECTIONS.forEach((s) => {
    ensureSpace(40);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(...INK);
    doc.text(s.h, margin, y);
    y += 18;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(60, 60, 70);
    const lines = doc.splitTextToSize(s.p, maxW);
    ensureSpace(lines.length * 15);
    doc.text(lines, margin, y);
    y += lines.length * 15 + 18;
  });

  // Footer on every page
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text('TAB@Work  ·  danya@dynamicbridge.io  ·  Tel Aviv, Israel', margin, pageH - 28);
    doc.text(`${i} / ${pageCount}`, pageW - margin, pageH - 28, { align: 'right' });
  }

  doc.save('TAB-Work-Executive-Overview.pdf');
}