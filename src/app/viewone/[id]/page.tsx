import type { Metadata } from "next";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import ViewOneProject from "@/screens/ViewOneProject";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return {
    title: project ? project.name.trim() : "Project not found",
    description: project?.desc,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ViewOneProject project={project} />;
}
