import BioExperience from "../../components/bio/BioExperience";

export const metadata = {
  title: "Bio — Karim W. Barake",
  description:
    "Karim W. Barake — first-year medical student working at the intersection of retina research, vision care equity, and health technology.",
  openGraph: {
    title: "Bio — Karim W. Barake",
    description:
      "On a mission to build a world that sees better: retina research, vision care equity, and health technology.",
    type: "website",
  },
};

export default function BioPage() {
  return <BioExperience />;
}
