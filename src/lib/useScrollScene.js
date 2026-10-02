import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion.js";

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/**
 * Drives a pinned scroll scene.
 * - Writes the scroll progress (0 to 1) as the CSS variable --p on the
 *   section, so CSS does the continuous animation without React re-renders.
 * - Returns the current "step" (0 .. steps-1) for text that changes in jumps.
 * - With reduced motion, the scene is not pinned and shows `staticAt`.
 */
export function useScrollScene(steps = 1, staticAt = 1) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [step, setStep] = useState(() => (reduce ? toStep(staticAt, steps) : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduce) {
      el.style.setProperty("--p", String(staticAt));
      setStep(toStep(staticAt, steps));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const p = distance > 0 ? clamp(-rect.top / distance) : 0;
      el.style.setProperty("--p", p.toFixed(4));
      const next = toStep(p, steps);
      setStep((prev) => (prev === next ? prev : next));
    };
    // passive listener, at most one update per frame, no layout writes
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduce, steps, staticAt]);

  return { ref, step };
}

function toStep(p, steps) {
  return Math.min(steps - 1, Math.floor(p * steps));
}

/**
 * For normal (not pinned) sections: progress goes from 0 when the section's
 * top reaches 85% of the screen height, to 1 when its bottom reaches 60%.
 * Written to --p on the element. Static at 1 with reduced motion.
 */
export function useViewProgress() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [p, setP] = useState(reduce ? 1 : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.style.setProperty("--p", "1");
      setP(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.6 - rect.height;
      const value = clamp((start - rect.top) / (start - end));
      el.style.setProperty("--p", value.toFixed(4));
      const rounded = Math.round(value * 100) / 100;
      setP((prev) => (prev === rounded ? prev : rounded));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduce]);

  return { ref, p };
}
