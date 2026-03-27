// src/components/CountUp.jsx

import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useCallback } from "react";

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = "",
  separator = "",
}) {
  const ref = useRef(null);

  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration),
  });

  const isInView = useInView(ref, { once: true });

  const formatValue = useCallback(
    (value) => {
      const formatted = Intl.NumberFormat("en-US").format(Math.floor(value));
      return separator ? formatted.replace(/,/g, separator) : formatted;
    },
    [separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = from;
    }
  }, [from]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(to);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, motionValue, to, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span ref={ref} className={className} />;
}