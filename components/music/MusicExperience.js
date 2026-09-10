import KwParentNav from "../KwParentNav";
import MusicHero from "./MusicHero";
import NextShow from "./NextShow";
import TourDates from "./TourDates";
import TourPoster from "./TourPoster";
import { musicData, tourDates } from "../../data/music";

/**
 * The /music page (BARAKE). A true standalone route.
 * Sections, in order: intro, next show, tour dates, tour poster. End.
 */
export default function MusicExperience() {
  return (
    <div className="music">
      <div className="music__grain" aria-hidden="true" />
      <div className="panel-topbar">
        <KwParentNav />
      </div>

      <div className="music__wrap">
        <MusicHero data={musicData} />
        <NextShow show={musicData.nextShow} />
        <TourDates dates={tourDates} />
        <TourPoster poster={musicData.poster} />

        <p className="music__end" aria-hidden="true">
          BARAKE · 2026
        </p>
      </div>
    </div>
  );
}
