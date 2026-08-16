"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import projects, { type Project as ProjectData } from "@/data/projects";
import { professionalProjects, type ProfessionalProject } from "@/data/resume";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const Project = () => {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <motion.div initial="hidden" animate="show" variants={staggerContainer(0.1)}>
        <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
          Projects
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-4 font-display text-4xl font-medium text-hi md:text-5xl">
          What I&apos;ve built
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm text-lo md:text-base">
          Recent client and enterprise work, alongside earlier live products and platforms I&apos;ve
          shipped.
        </motion.p>
      </motion.div>

      {/* Professional / client work */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mt-14"
      >
        <motion.h2 variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
          Professional work
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-3 max-w-xl text-sm text-lo">
          Client and enterprise projects delivered in my current and recent roles. Most are
          private/NDA products, so these are described rather than linked.
        </motion.p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {professionalProjects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Live / public projects */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mt-20"
      >
        <motion.h2 variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
          Live projects &amp; products
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-3 max-w-xl text-sm text-lo">
          Earlier production apps I&apos;ve built or shipped features for — spanning content
          platforms, CRMs, and live-streaming products.
        </motion.p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((data) => (
            <motion.div key={data.id} variants={fadeUp}>
              <Card data={data} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

const ProCard = ({ project }: { project: ProfessionalProject }) => {
  return (
    <div
      id={project.id}
      className="flex h-full scroll-mt-24 flex-col rounded-xl border border-hairline bg-surface p-5 transition-colors duration-300 hover:border-signal/60"
    >
      <h3 className="font-display text-xl text-hi">{project.name}</h3>
      {project.subtitle && <p className="mt-0.5 text-sm text-lo">{project.subtitle}</p>}

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[11px] text-lo"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-2">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-[13.5px] leading-relaxed text-lo">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-hairline" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Card = ({ data }: { data: ProjectData }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-surface transition-colors duration-300 hover:border-copper/60">
      <Link href={`/viewone/${data.id}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={data.img}
          alt={data.name.trim()}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/viewone/${data.id}`}>
          <h2 className="font-display text-xl text-hi">{data.name.trim()}</h2>
        </Link>
        <p className="mt-1.5 text-sm text-lo">{data.title}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {data.skills?.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[11px] text-lo"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-end gap-2 pt-5">
          <button
            type="button"
            aria-label={`Open ${data.name.trim()} on GitHub`}
            onClick={() => data.github.forEach((link) => window.open(link, "_blank"))}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-lo transition-colors duration-200 hover:border-copper hover:text-copper"
          >
            <AiFillGithub size={18} />
          </button>
          {data.url && (
            <button
              type="button"
              aria-label={`Open ${data.name.trim()} live site`}
              onClick={() => window.open(data.url, "_blank")}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-lo transition-colors duration-200 hover:border-signal hover:text-signal"
            >
              <AiOutlineLink size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
