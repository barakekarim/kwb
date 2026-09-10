import ScienceBackground from "../components/ScienceBackground";
import { OrbitLayer, DomainGrid } from "../components/OrbitCards";
import SocialIcon from "../components/SocialIcon";
import { profile, socials, domains } from "../data/content";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="hero">
      <ScienceBackground />
      <OrbitLayer domains={domains} />

      <div className="hero__inner">
        <div className="hero__avatar">
          <img src="/headshot.jpg" alt={profile.name} />
        </div>

        <p className="hero__eyebrow">{profile.eyebrow}</p>
        <h1 className="hero__name">{profile.name}</h1>

        <p className="hero__domains">
          {domains.map((d, i) => (
            <span key={d.key}>
              {i > 0 && <span className="hero__dot">·</span>}
              {d.label}
            </span>
          ))}
        </p>

        <p className="hero__tagline">{profile.tagline}</p>

        <nav className="hero__socials" aria-label="Social links">
          {socials.map((s) => {
            const external = s.href.startsWith("http");
            return (
              <a
                key={s.key}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <SocialIcon name={s.key} />
              </a>
            );
          })}
        </nav>

        <DomainGrid domains={domains} />
      </div>

      <div className="hero__rule" aria-hidden="true" />
      <footer className="hero__footer">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
