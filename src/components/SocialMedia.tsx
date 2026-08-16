"use client";

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { profile } from "@/data/resume";

interface SocialMediaProps {
  size?: number;
  className?: string;
}

const LINKS = [
  { label: "GitHub", href: profile.github, Icon: AiFillGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: AiFillLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: AiOutlineMail },
];

const SocialMedia = ({ size = 20, className = "" }: SocialMediaProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          title={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-lo transition-colors duration-200 hover:border-copper hover:text-copper"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
