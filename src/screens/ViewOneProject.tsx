"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillGithub, AiOutlineArrowLeft, AiOutlineLeft, AiOutlineLink, AiOutlineRight } from "react-icons/ai";
import type { Project as ProjectData } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/motion";

const ViewOneProject = ({ project }: { project: ProjectData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = project.Arrimg;
  const active = images[activeIndex];

  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const previous = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <motion.div initial="hidden" animate="show" variants={staggerContainer(0.08)}>
        <motion.div variants={fadeUp}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-lo hover:text-copper"
          >
            <AiOutlineArrowLeft /> All projects
          </Link>
        </motion.div>

        <motion.h1 variants={fadeUp} className="mt-5 font-display text-4xl font-medium text-hi md:text-5xl">
          {project.name.trim()}
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-sm text-lo md:text-base">
          {project.title}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md bg-copper px-4 py-2 text-sm font-medium text-onaccent"
            >
              <AiOutlineLink /> Visit live site
            </a>
          )}
          {project.github.map((link) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-hairline px-4 py-2 text-sm font-medium text-hi transition-colors duration-200 hover:border-copper hover:text-copper"
            >
              <AiFillGithub /> Source
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-10"
      >
        <div className="relative aspect-video overflow-hidden rounded-xl border border-hairline bg-surface">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={active.img}
                alt={active.caption}
                fill
                sizes="(min-width: 768px) 900px, 100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-hi backdrop-blur transition-colors hover:bg-copper hover:text-onaccent"
              >
                <AiOutlineLeft />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-hi backdrop-blur transition-colors hover:bg-copper hover:text-onaccent"
              >
                <AiOutlineRight />
              </button>
            </>
          )}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 py-3">
            <p className="font-mono text-xs text-hi">{active.caption}</p>
          </div>
        </div>

        {images.length > 1 && (
          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Show image ${i + 1}: ${img.caption}`}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md border transition-colors duration-200 ${
                  i === activeIndex ? "border-copper" : "border-hairline opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img.img} alt={img.caption} fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-10 max-w-2xl"
      >
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">About this project</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-lo">{project.D_desc}</p>
        {!!project.skills?.length && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-lo"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ViewOneProject;
