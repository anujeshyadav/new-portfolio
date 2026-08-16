import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { profile } from "@/data/resume";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 md:flex-row md:justify-between md:px-8">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Logo />
          <p className="mt-2 max-w-sm text-center text-sm text-lo md:text-left">
            {profile.role} — {profile.stack}
          </p>
        </div>
        <SocialMedia />
      </div>
      <div className="border-t border-hairline/60 py-4 text-center font-mono text-xs text-lo">
        © {year} Anujesh Yadav. Built with Next.js, Tailwind CSS &amp; Framer Motion.
      </div>
    </footer>
  );
};

export default Footer;
