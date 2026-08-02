import { useRef, useState, useEffect } from 'react';
import { Loader2, RefreshCw } from 'lucide-react';

const THRESHOLD = 70;

/**
 * Native-feeling pull-to-refresh for touch devices.
 * Activates only when the window is scrolled to the top. Additive and passive:
 * never calls preventDefault, so normal scrolling and overscroll are untouched.
 */
export default function PullToRefresh({ onRefresh, children }) {
  const [pull, setPull] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const state = useRef({ startY: 0, active: false, pulling: false, pull: 0, refreshing: false });
  const refreshFn = useRef(onRefresh);
  refreshFn.current = onRefresh;

  useEffect(() => {
    const onStart = (e) => {
      const s = state.current;
      if (s.refreshing || window.scrollY > 0) return;
      s.startY = e.touches[0].clientY;
      s.active = true;
    };
    const onMove = (e) => {
      const s = state.current;
      if (!s.active || s.refreshing) return;
      const diff = e.touches[0].clientY - s.startY;
      if (diff > 0 && window.scrollY <= 0) {
        s.pulling = true;
        const next = Math.min(diff * 0.5, 100);
        s.pull = next;
        setPull(next);
      } else if (window.scrollY > 0 && s.pulling) {
        s.active = false;
        s.pulling = false;
        s.pull = 0;
        setPull(0);
      }
    };
    const onEnd = async () => {
      const s = state.current;
      if (!s.active) return;
      s.active = false;
      if (s.pulling && s.pull >= THRESHOLD) {
        s.pulling = false;
        s.refreshing = true;
        s.pull = THRESHOLD;
        setRefreshing(true);
        setPull(THRESHOLD);
        try {
          await refreshFn.current?.();
        } finally {
          s.refreshing = false;
          s.pull = 0;
          setRefreshing(false);
          setPull(0);
        }
      } else {
        s.pulling = false;
        s.pull = 0;
        setPull(0);
      }
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, []);

  const progress = Math.min(pull / THRESHOLD, 1);

  return (
    <div className="relative">
      <div
        className="absolute top-0 inset-x-0 flex items-center justify-center overflow-hidden pointer-events-none"
        style={{ height: `${pull}px`, opacity: refreshing ? 1 : progress }}
      >
        {refreshing ? (
          <Loader2 size={20} className="animate-spin text-tab-accent" strokeWidth={1.5} />
        ) : (
          <RefreshCw
            size={20}
            className="text-tab-accent"
            strokeWidth={1.5}
            style={{ transform: `rotate(${progress * 180}deg)` }}
          />
        )}
      </div>
      <div
        style={{
          transform: `translateY(${pull}px)`,
          transition: state.current.active ? 'none' : 'transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
        }}
      >
        {children}
      </div>
    </div>
  );
}