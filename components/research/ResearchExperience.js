import KwParentNav from "../KwParentNav";
import ResearchBackdrop from "./ResearchBackdrop";
import ResearchHero from "./ResearchHero";
import ResearchQuestions from "./ResearchQuestions";
import { researchMeta, researchProjects } from "../../data/research";

/**
 * The /research page. A true standalone route — the page is just:
 * research hero → the questions behind the work (01–08). Each question
 * carries its own publication context; nothing follows Question 08.
 *
 * `ResearchProcess`, `AtTheBench` and `ResearchEnding` still exist as
 * components — re-add them here to bring those sections back.
 */
export default function ResearchExperience() {
  return (
    <div className="research">
      <div className="research__grain" aria-hidden="true" />
      <ResearchBackdrop />

      <div className="panel-topbar">
        <KwParentNav />
      </div>

      <div className="research__herowrap">
        <ResearchHero meta={researchMeta} />
      </div>

      <div className="research__wrap">
        <ResearchQuestions
          projects={researchProjects}
          heading={researchMeta.questionsHeading}
          line={researchMeta.questionsLine}
        />
      </div>
    </div>
  );
}
