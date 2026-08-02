import { useState } from 'react';
import { Download } from 'lucide-react';
import generateOverviewPdf from '@/lib/generateOverviewPdf';

export default function DownloadOverview({ label = 'Download Overview (PDF)', className = '' }) {
  const [building, setBuilding] = useState(false);

  const handleDownload = () => {
    setBuilding(true);
    try {
      generateOverviewPdf();
    } finally {
      setBuilding(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={building}
      className={`inline-flex items-center gap-2 tab-mono text-xs transition-colors disabled:opacity-60 ${className}`}
    >
      <Download size={14} strokeWidth={1.5} />
      {building ? 'Preparing…' : label}
    </button>
  );
}