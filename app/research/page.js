import ResearchExperience from "../../components/research/ResearchExperience";

export const metadata = {
  title: "Research — Karim W. Barake",
  description:
    "Tracing a path through vision, disease, and systems — research across molecular biology, clinical ophthalmology, optical modeling, and health systems.",
  openGraph: {
    title: "Research — Karim W. Barake",
    description:
      "Tracing a path through vision, disease, and systems. Published work and ongoing questions across cornea, retina, optics, surgery, fibrosis, and health systems.",
    type: "website",
  },
};

export default function ResearchPage() {
  return <ResearchExperience />;
}
