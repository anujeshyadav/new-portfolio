"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SignalTraceProps {
  className?: string;
  variant?: "full" | "thin";
}

/**
 * Signature motif: an analog signal (copper) resolving into a clean digital
 * waveform (signal-blue) — the throughline from telecom/electronics work
 * to frontend performance engineering.
 */
const SignalTrace = ({ className = "", variant = "full" }: SignalTraceProps) => {
  const reduceMotion = useReducedMotion();
  const analog =
    "M0,60 C20,22 38,98 58,52 C78,10 98,92 118,54 C138,28 158,96 178,46 C198,14 218,86 238,58 C258,34 278,72 300,52 L326,52";
  const digital =
    "M326,52 L326,20 L366,20 L366,90 L406,90 L406,20 L446,20 L446,90 L486,90 L486,20 L526,20 L526,90 L566,90 L566,52 L800,52";

  const thin = variant === "thin";

  return (
    <svg
      viewBox="0 0 800 120"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={analog}
        stroke="var(--color-copper)"
        strokeWidth={thin ? 3 : 2.5}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        opacity={thin ? 0.6 : 1}
        initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
        {...(thin
          ? { whileInView: reduceMotion ? undefined : { pathLength: 1, opacity: 0.6 }, viewport: { once: true, margin: "-80px" } }
          : { animate: reduceMotion ? undefined : { pathLength: 1, opacity: 1 } })}
        transition={{ duration: thin ? 1 : 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d={digital}
        stroke="var(--color-signal)"
        strokeWidth={thin ? 3 : 2.5}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={thin ? 0.6 : 1}
        initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
        {...(thin
          ? { whileInView: reduceMotion ? undefined : { pathLength: 1, opacity: 0.6 }, viewport: { once: true, margin: "-80px" } }
          : { animate: reduceMotion ? undefined : { pathLength: 1, opacity: 1 } })}
        transition={{ duration: thin ? 0.8 : 0.9, ease: "easeInOut", delay: thin ? 0.8 : 1.0 }}
      />
    </svg>
  );
};

export default SignalTrace;
