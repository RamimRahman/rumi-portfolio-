import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailClient from "./DetailClient";
import { experiences } from "../../portfolio-data";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) return { title: "Experience | Rumi" };

  return {
    title: `${experience.role} at ${experience.organisation} | Rumi`,
    description: `${experience.simple} Discover what Rumi does, the skills he uses and why the work matters.`,
    alternates: { canonical: `/details/${experience.slug}` },
    openGraph: {
      title: `${experience.role} — Rumi's experience`,
      description: experience.simple,
      url: `/details/${experience.slug}`,
      type: "profile",
    },
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);
  if (!experience) notFound();

  return <DetailClient experience={experience} />;
}
