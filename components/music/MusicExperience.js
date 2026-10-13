import KwParentNav from "../KwParentNav";
import MusicHero from "./MusicHero";
import NextShow from "./NextShow";
import TourDates from "./TourDates";
import PlayedShows from "./PlayedShows";
import { musicData, splitTourDates, playedByYear } from "../../data/music";

/**
 * The /music page (BARAKE). A true standalone route.
 * Sections, in order: intro, next show, tour dates, played stubs. End.
 */
export default function MusicExperience() {
  const { upcoming } = splitTourDates();
  const played = playedByYear();

  return (
    <div className="music">
      <div className="music__grain" aria-hidden="true" />
      <div className="panel-topbar">
        <KwParentNav />
      </div>

      <div className="music__wrap">
        <MusicHero data={musicData} />
        {upcoming.length > 0 && <NextShow show={upcoming[0]} />}
        {upcoming.length > 0 && <TourDates dates={upcoming} />}
        {played.length > 0 && <PlayedShows years={played} />}

        <p className="music__end" aria-hidden="true">
          BARAKE · 2026
        </p>
      </div>
    </div>
  );
}
