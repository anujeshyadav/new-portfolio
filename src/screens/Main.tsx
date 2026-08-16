"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { AiOutlineArrowRight } from "react-icons/ai";
import AnimatedStat from "@/components/AnimatedStat";
import SignalTrace from "@/components/SignalTrace";
import SocialMedia from "@/components/SocialMedia";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { profile, roleTicker, stats, skillGroups, professionalProjects } from "@/data/resume";

const FEATURED_PROJECTS = professionalProjects.slice(0, 3);
const TAG_CLOUD = Array.from(new Set(skillGroups.flatMap((g) => g.items))).slice(0, 16);

const Main = () => {
  const [text] = useTypewriter({ words: roleTicker, loop: 0, delaySpeed: 1800 });

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:px-8 md:pb-24 md:pt-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer(0.12)}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-xs uppercase tracking-[0.2em] text-copper"
            >
              {profile.stack}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-5xl font-medium leading-[1.05] text-hi text-balance md:text-7xl"
            >
              Anujesh Yadav
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-3 h-8 font-display text-xl italic text-lo md:text-2xl"
            >
              {text}
              <span className="text-copper">_</span>
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-lo md:text-base"
            >
              {profile.summary}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-copper px-5 py-2.5 text-sm font-medium text-onaccent transition-transform duration-200 hover:-translate-y-0.5"
              >
                Download Résumé
              </a>
              <Link
                href="/projects"
                className="group flex items-center gap-2 rounded-md border border-hairline px-5 py-2.5 text-sm font-medium text-hi transition-colors duration-200 hover:border-signal hover:text-signal"
              >
                View Projects
                <AiOutlineArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <SocialMedia />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm md:max-w-none"
          >
            <div className="rounded-[1.75rem] bg-gradient-to-br from-copper/50 via-hairline to-signal/40 p-[1.5px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-surface">
                <Image
                  src={profile.photo}
                  alt="Anujesh Yadav"
                  fill
                  priority
                  sizes="(min-width: 768px) 380px, 80vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 flex w-[85%] -translate-x-1/2 items-center gap-2.5 rounded-xl border border-hairline bg-surface/95 px-4 py-3 shadow-lg shadow-black/40 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-copper" />
              </span>
              <p className="font-mono text-xs text-lo">
                <span className="text-hi">{profile.currentTitle}</span> @ {profile.currentCompany}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SignalTrace className="h-16 w-full text-hairline" />
        </div>
      </section>

      {/* Stats */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mx-auto max-w-6xl px-5 py-10 md:px-8"
      >
        <div className="grid grid-cols-2 gap-6 border-y border-hairline py-8 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center md:text-left">
              <p className="font-display text-3xl font-medium text-hi md:text-4xl">
                <AnimatedStat value={stat.value} countUp={stat.countUp} />
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-lo">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills snapshot */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.04)}
        className="mx-auto max-w-6xl px-5 py-10 md:px-8"
      >
        <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
          Toolkit
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 font-display text-3xl font-medium text-hi md:text-4xl">
          What I build with
        </motion.h2>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {TAG_CLOUD.map((skill) => (
            <motion.span
              key={skill}
              variants={fadeUp}
              className="rounded-full border border-hairline px-3.5 py-1.5 font-mono text-xs text-lo transition-colors duration-200 hover:border-copper hover:text-hi"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Featured projects */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mx-auto max-w-6xl px-5 py-16 md:px-8"
      >
        <div className="flex items-end justify-between">
          <div>
            <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
              Selected work
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 font-display text-3xl font-medium text-hi md:text-4xl">
              Recent client work
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              href="/projects"
              className="hidden font-mono text-xs uppercase tracking-wide text-lo hover:text-copper md:block"
            >
              View all →
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <Link
                href={`/projects#${project.id}`}
                className="group flex h-full flex-col rounded-xl border border-hairline bg-surface p-5 transition-colors duration-300 hover:border-copper/60"
              >
                <h3 className="font-display text-lg text-hi">{project.name}</h3>
                {project.subtitle && <p className="mt-0.5 text-sm text-lo">{project.subtitle}</p>}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[11px] text-lo"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-lo">
                  {project.bullets[0]}
                </p>
                <span className="mt-auto flex items-center gap-2 pt-5 font-mono text-xs uppercase tracking-wide text-lo group-hover:text-copper">
                  Read more
                  <AiOutlineArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/projects" className="font-mono text-xs uppercase tracking-wide text-copper">
            View all projects →
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Main;
