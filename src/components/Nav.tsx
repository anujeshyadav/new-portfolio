"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/resume";

const NAV_ITEMS = [
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "About", path: "/aboutus" },
  { label: "Contact", path: "/contactus" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline/80 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <Logo />

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative px-3 py-2 font-mono text-[13px] uppercase tracking-wide transition-colors duration-200 ${
                      active ? "text-hi" : "text-lo hover:text-hi"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-[1px] h-[1.5px] bg-copper"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                );
              })}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-3 rounded-md border border-copper/60 px-4 py-1.5 font-mono text-[13px] uppercase tracking-wide text-copper transition-colors duration-200 hover:bg-copper hover:text-onaccent"
              >
                Resume
              </a>
            </nav>

            <ThemeToggle className="ml-1" />

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="text-hi md:hidden"
            >
              <AiOutlineMenu size={26} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex h-full flex-col"
            >
              <div className="flex h-16 items-center justify-between px-5">
                <Logo />
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="text-hi"
                  >
                    <AiOutlineClose size={26} />
                  </button>
                </div>
              </div>
              <ul className="flex flex-1 flex-col items-center justify-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={`font-display text-3xl ${
                        pathname === item.path ? "text-copper" : "text-hi"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="rounded-md border border-copper px-6 py-2 font-mono text-sm uppercase tracking-wide text-copper"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
