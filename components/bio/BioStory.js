import Callout from "./Callout";

/**
 * The two identity markers up top, right after each other, then the whole
 * biography as consecutive editorial blocks.
 *
 *   MEDICINE
 *   RESEARCH
 *   ¶1  ¶2  ¶3  ¶4
 */
export default function BioStory({ paragraphs, callouts }) {
  return (
    <div className="bio__story">
      <div className="bio__markers">
        {callouts.map((c) => (
          <Callout key={c.label} {...c} />
        ))}
      </div>

      {paragraphs.map((p, i) => (
        <p className="bio__p" key={i}>
          {p}
        </p>
      ))}
    </div>
  );
}
