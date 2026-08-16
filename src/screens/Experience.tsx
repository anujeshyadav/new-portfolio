"use client";

import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import SignalTrace from "@/components/SignalTrace";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import {
  experience,
  earlierCareer,
  earlierCareerNote,
  education,
  awards,
  languages,
} from "@/data/resume";

const Experience = () => {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <motion.div initial="hidden" animate="show" variants={staggerContainer(0.1)}>
        <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
          Experience
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-4 font-display text-4xl font-medium text-hi md:text-5xl">
          Where I&apos;ve worked
        </motion.h1>
      </motion.div>

      <ol className="mt-14 space-y-14">
        {experience.map((role, i) => (
          <motion.li
            key={role.id}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
            className="relative border-l border-hairline pl-8"
          >
            <span
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink ${
                role.current ? "bg-copper" : "bg-lo"
              }`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-display text-2xl text-hi">{role.role}</h2>
              <span className="font-mono text-xs uppercase tracking-wide text-lo">{role.period}</span>
            </div>
            <p className="mt-1 text-sm text-copper">
              {role.company}
              {role.companyNote && <span className="text-lo"> ({role.companyNote})</span>} —{" "}
              {role.location}
            </p>
            <ul className="mt-4 space-y-2.5">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-lo">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-hairline" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.05)}
        className="mt-16 rounded-xl border border-hairline bg-surface p-6 md:p-8"
      >
        <motion.h2 variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
          Before code
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-sm leading-relaxed text-lo">
          {earlierCareerNote}
        </motion.p>
        <div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {earlierCareer.map((role) => (
            <motion.div
              key={`${role.company}-${role.period}`}
              variants={fadeUp}
              className="flex items-center justify-between gap-3 border-b border-hairline/60 py-2"
            >
              <div>
                <p className="text-sm text-hi">{role.role}</p>
                <p className="text-xs text-lo">{role.company}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-lo">{role.period}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="mt-16">
        <SignalTrace variant="thin" className="h-10 w-full" />
      </div>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="mt-8 grid gap-10 sm:grid-cols-2"
      >
        <motion.div variants={fadeUp}>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-copper">Education</h2>
          <ul className="mt-4 space-y-4">
            {education.map((entry) => (
              <li key={entry.degree}>
                <p className="text-sm text-hi">{entry.degree}</p>
                <p className="text-sm text-lo">{entry.school}</p>
                <p className="font-mono text-xs text-lo">{entry.period}</p>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={fadeUp}>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
            Awards &amp; languages
          </h2>
          <ul className="mt-4 space-y-2">
            {awards.map((award) => (
              <li key={award} className="flex items-center gap-2 text-sm text-hi">
                <AiFillStar className="shrink-0 text-copper" />
                {award}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-lo">Languages: {languages.join(", ")}</p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Experience;
