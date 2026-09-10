import KwParentNav from "../KwParentNav";
import BioBackdrop from "./BioBackdrop";
import BioHero from "./BioHero";
import BioStory from "./BioStory";
import BioRcs from "./BioRcs";
import CvLink from "./CvLink";
import { bioData } from "../../data/bio";

/**
 * The /bio page. A true standalone route.
 * Hierarchy: mission → story → medicine/research/vision equity → CV.
 * Calmer and more editorial than MUSIC — clarity, not energy.
 */
export default function BioExperience() {
  return (
    <div className="bio">
      <div className="bio__grain" aria-hidden="true" />
      <BioBackdrop />

      <div className="panel-topbar">
        <KwParentNav />
      </div>

      <BioRcs />

      <div className="bio__wrap">
        <BioHero mission={bioData.mission} />
        <BioStory paragraphs={bioData.paragraphs} callouts={bioData.callouts} />
        <CvLink href={bioData.cvUrl} />
      </div>
    </div>
  );
}
