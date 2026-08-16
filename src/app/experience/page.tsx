import type { Metadata } from "next";
import Experience from "@/screens/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Anujesh Yadav's professional experience, education, and awards.",
};

export default function Page() {
  return <Experience />;
}
