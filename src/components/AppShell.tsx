"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const AppShell = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Nav />
      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default AppShell;
