"use client";

import Link from "next/link";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Anujesh Yadav — home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-surface font-mono text-sm font-medium text-copper transition-colors duration-200 group-hover:border-copper">
        AY
      </span>
      <span className="hidden font-display text-lg font-medium tracking-tight text-hi sm:inline">
        Anujesh Yadav
      </span>
    </Link>
  );
};

export default Logo;
