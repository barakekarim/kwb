import MusicExperience from "../../components/music/MusicExperience";

export const metadata = {
  title: "BARAKE — Karim W. Barake",
  description:
    "BARAKE — high-energy disco and melodic sets across New York, Boston, D.C. and London. Fall 2026 tour dates.",
  openGraph: {
    title: "BARAKE",
    description: "High-energy disco and melodic sets. Fall 2026 tour dates.",
    type: "website",
  },
};

export default function MusicPage() {
  return <MusicExperience />;
}
