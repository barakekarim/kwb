import MusicExperience from "../../components/music/MusicExperience";

// re-render hourly so shows move from the tour list to "Played" on their own
export const revalidate = 3600;

export const metadata = {
  title: "BARAKE — Karim W. Barake",
  description:
    "BARAKE — high-energy disco and melodic sets across New York, Boston, D.C. and London. Tour dates and past shows.",
  openGraph: {
    title: "BARAKE",
    description: "High-energy disco and melodic sets. Tour dates and past shows.",
    type: "website",
  },
};

export default function MusicPage() {
  return <MusicExperience />;
}
