import type { Metadata } from "next";
import Project from "@/screens/Project";

export const metadata: Metadata = {
  title: "Projects",
  description: "Live projects and products built by Anujesh Yadav with React.js and Next.js.",
};

export default function Page() {
  return <Project />;
}
