import type { Metadata } from "next";
import AboutUs from "@/screens/AboutUs";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Anujesh Yadav went from telecom and operations roles to a Senior Frontend Engineer building with React.js and Next.js.",
};

export default function Page() {
  return <AboutUs />;
}
