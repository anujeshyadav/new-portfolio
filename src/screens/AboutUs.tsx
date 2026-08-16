"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SignalTrace from "@/components/SignalTrace";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { profile } from "@/data/resume";

const FAST_FACTS = [
  { label: "Based in", value: `${profile.location} · ${profile.relocate}` },
  { label: "Focus", value: profile.stack },
  { label: "Currently", value: `${profile.currentTitle} @ ${profile.currentCompany}` },
  { label: "Before code", value: "MBA + 8 years across telecom, operations & utilities" },
];

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <motion.div initial="hidden" animate="show" variants={staggerContainer(0.1)}>
        <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
          About
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-4 font-display text-4xl font-medium leading-tight text-hi md:text-5xl"
        >
          I&apos;m Anujesh — a frontend developer who took the long way here.
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-10 space-y-6 text-[15px] leading-relaxed text-lo md:text-base">
          <p>
            I&apos;m a Frontend Developer based in Indore, India, working mainly in{" "}
            <span className="text-hi">React.js, Next.js, and TypeScript</span>. Over the last 4+
            years I&apos;ve focused on one thing: building web apps that feel fast and stay
            maintainable as they grow — the kind of performance work that shows up in page-load
            numbers, not just in mockups.
          </p>
          <p>
            But I didn&apos;t start in code. I finished a B.E. in Electronics &amp; Communication,
            then spent close to a decade in operations, telecom, and field-engineering roles —
            testing signal quality at BSNL and Reliance Jio, running high-voltage line operations
            at MPSEB, and keeping infrastructure running at Indian Railways. Somewhere in there I
            also picked up an MBA in Marketing Management. None of it was frontend development,
            but all of it taught me how to work across teams, diagnose problems methodically, and
            own outcomes I couldn&apos;t fully control.
          </p>
          <p>
            In 2022, I made the switch — teaching myself React, then Next.js and TypeScript, and
            restarting my career as a React.js Developer at Sveltose Technology. Two years and 6+
            shipped projects later, I moved into a Senior Software Engineer (Frontend) role at
            BitCot Technology, where I now help lead the frontend on a production Next.js
            application, work directly with backend teams on GraphQL schema design, and was named
            Star Performer of the Year in 2025.
          </p>

          <blockquote className="border-l-2 border-copper/60 py-1 pl-5 font-display text-lg italic text-hi">
            What carried over from the old career is the instinct to chase a clean signal — fewer
            re-renders, smaller bundles, faster first paint. Same discipline, just pointed at a
            browser tab instead of a telecom line.
          </blockquote>

          <p>
            I&apos;m still most productive at the intersection of the two halves of my career:
            comfortable owning a whole feature end-to-end, methodical about testing and
            cross-browser edge cases, and just as happy explaining a decision to a stakeholder as I
            am shipping the code behind it.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12">
          <SignalTrace variant="thin" className="h-10 w-full" />
        </motion.div>

        <motion.dl variants={fadeUp} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FAST_FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-lo">{fact.label}</dt>
              <dd className="mt-1 text-sm text-hi">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/experience"
            className="rounded-md bg-copper px-5 py-2.5 text-sm font-medium text-onaccent transition-transform duration-200 hover:-translate-y-0.5"
          >
            See full experience timeline
          </Link>
          <Link
            href="/contactus"
            className="rounded-md border border-hairline px-5 py-2.5 text-sm font-medium text-hi transition-colors duration-200 hover:border-signal hover:text-signal"
          >
            Get in touch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
