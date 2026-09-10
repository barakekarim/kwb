import MotifField from "../components/MotifField";
import { OrbitLayer, DomainGrid } from "../components/OrbitCards";
import SocialIcon from "../components/SocialIcon";
import { profile, socials, domains } from "../data/content";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="hero">
      <MotifField />
      <OrbitLayer domains={domains} />

      <div className="hero__inner">
        <span className="hero__orbit" aria-hidden="true">
          <svg viewBox="0 0 400 232">
            <ellipse
              className="hero__orbit-ring"
              cx="200"
              cy="116"
              rx="192"
              ry="104"
            />
            <circle className="hero__orbit-dot" cx="26" cy="150" r="3.5" />
            <circle className="hero__orbit-dot" cx="356" cy="78" r="3" />
          </svg>
        </span>

        <div className="hero__avatar">
          <img src="/headshot.png" alt={profile.name} />
        </div>

        <p className="hero__eyebrow">{profile.eyebrow}</p>
        <h1 className="hero__name">{profile.name}</h1>

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
