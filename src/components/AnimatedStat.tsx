"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface AnimatedStatProps {
  value: string;
  countUp?: boolean;
}

const parse = (value: string) => {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { prefix: "", number: null as number | null, suffix: value };
  const [, prefix, number, suffix] = match;
  return { prefix, number: Number(number), suffix };
};

const AnimatedStat = ({ value, countUp = true }: AnimatedStatProps) => {
  const { prefix, number, suffix } = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (number === null || !countUp || !inView) return;
    const controls = animate(0, number, {
      duration: reduceMotion ? 0 : 1.3,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, number, countUp, reduceMotion]);

  if (number === null) {
    return <span ref={ref}>{suffix}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {countUp ? display : number}
      {suffix}
    </span>
  );
};

export default AnimatedStat;
