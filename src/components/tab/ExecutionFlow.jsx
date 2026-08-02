export default function ExecutionFlow() {
  const NODES = [
    { y: 60, label: 'OBSERVE' },
    { y: 150, label: 'DETECT' },
    { y: 240, label: 'TRIGGER' },
    { y: 330, label: 'RETURN' },
  ];

  return (
    <div className="relative w-full aspect-[3/4] max-w-[380px] mx-auto">
      <svg viewBox="0 0 300 400" className="w-full h-full" aria-hidden="true">
        <line x1="150" y1="20" x2="150" y2="380" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="150" y1="20" x2="150" y2="380" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 10" className="animate-tab-flow" />
        {NODES.map((n, i) => (
          <g key={i}>
            <line x1="70" y1={n.y} x2="230" y2={n.y} stroke="#E2E8F0" strokeWidth="0.5" />
            <rect x="20" y={n.y - 11} width="50" height="22" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
            <rect x="230" y={n.y - 11} width="50" height="22" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
            <circle cx="150" cy={n.y} r="4.5" fill="#7C3AED" className="animate-tab-node" style={{ animationDelay: `${i * 0.4}s` }} />
            <text x="150" y={n.y + 26} textAnchor="middle" fill="#6B7280" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="2">{n.label}</text>
          </g>
        ))}
      </svg>

      {NODES.map((n, i) => (
        <div key={i} className="absolute left-0 right-0 h-px overflow-hidden pointer-events-none" style={{ top: `${(n.y / 400) * 100}%` }}>
          <div className="h-full w-1/4 bg-tab-accent/70 animate-tab-pulse" style={{ animationDelay: `${i * 0.6}s` }}></div>
        </div>
      ))}
    </div>
  );
}