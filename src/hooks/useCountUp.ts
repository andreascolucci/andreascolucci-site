import { useEffect, useRef, useState } from "react";

// Counts from 0 up to `target` over `duration` ms (easeOutCubic).
// When `enabled` is false (e.g. prefers-reduced-motion), it returns the final
// value immediately. The real final value should also be rendered via a
// `data-final` attribute so the static prerender/no-JS markup is always correct.
export function useCountUp(target: number, enabled: boolean, duration = 1200): number {
  const [value, setValue] = useState(enabled ? 0 : target);
  const raf = useRef<number>();

  useEffect(() => {
    if (!enabled) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, enabled, duration]);

  return value;
}
