import ResearchExperience from "../../components/research/ResearchExperience";

export const metadata = {
  title: "Research — Karim W. Barake",
  description:
    "Research across molecular biology, clinical ophthalmology, optical modeling, and health systems.",
  openGraph: {
    title: "Research — Karim W. Barake",
    description:
      "Research across cornea, retina, optics, surgery, fibrosis, and health systems.",
    type: "website",
  },
};

export default function ResearchPage() {
  return <ResearchExperience />;
}
