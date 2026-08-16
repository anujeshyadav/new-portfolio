"use client";

import { motion } from "framer-motion";
import {
  AiOutlineClockCircle,
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import SignalTrace from "@/components/SignalTrace";
import SocialMedia from "@/components/SocialMedia";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { profile } from "@/data/resume";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: AiOutlineMail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: AiOutlinePhone,
  },
  {
    label: "Location",
    value: `${profile.location} — ${profile.relocate}`,
    href: undefined,
    Icon: AiOutlineEnvironment,
  },
  {
    label: "Availability",
    value: "9 AM – 6 PM IST, Monday to Friday",
    href: undefined,
    Icon: AiOutlineClockCircle,
  },
];

const ContactUs = () => {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <motion.div initial="hidden" animate="show" variants={staggerContainer(0.1)}>
        <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
          Contact
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-4 font-display text-4xl font-medium text-hi md:text-5xl">
          Let&apos;s build something fast.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-relaxed text-lo md:text-base">
          Have a role, a project, or just a question about frontend performance? I usually reply
          within 24 hours.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CONTACT_METHODS.map(({ label, value, href, Icon }) => {
            const content = (
              <div className="flex h-full items-start gap-4 rounded-xl border border-hairline bg-surface p-5 transition-colors duration-200 group-hover:border-copper/60">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline text-copper">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-lo">{label}</p>
                  <p className="mt-1 text-sm text-hi">{value}</p>
                </div>
              </div>
            );
            return (
              <motion.div key={label} variants={fadeUp}>
                {href ? (
                  <a href={href} className="group block h-full">
                    {content}
                  </a>
                ) : (
                  <div className="group h-full">{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={fadeUp} className="mt-10">
          <SignalTrace variant="thin" className="h-10 w-full" />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-lo">Find me elsewhere</p>
            <div className="mt-3">
              <SocialMedia />
            </div>
          </div>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-copper px-5 py-2.5 text-center text-sm font-medium text-onaccent transition-transform duration-200 hover:-translate-y-0.5"
          >
            Download Résumé
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
