export const profile = {
  name: "Karim W. Barake",
  eyebrow: "Hi, I'm",
  tagline: "and i'm on a mission to build a world that sees better",
  email: "barakekarim@gmail.com",
};

// Social links, rendered in order in the hero.
export const socials = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karim-barake/",
  },
  {
    key: "orcid",
    label: "ORCID",
    href: "https://orcid.org/0009-0000-8912-9166",
  },
  {
    key: "mail",
    label: "Email",
    href: "mailto:barakekarim@gmail.com",
  },
];

// The four domain portals. `pos` places each in a corner on desktop
// (tl, tr, bl, br). Array ORDER is the stacked reading order on mobile:
// Bio -> Research -> Music -> Ouyouna.
export const domains = [
  {
    key: "bio",
    label: "Bio",
    pos: "bl",
    blurb: "The story so far.",
    href: "/bio",
  },
  {
    key: "research",
    label: "Research",
    pos: "tr",
    blurb: "Asking questions and following the data.",
    href: "/research",
  },
  {
    key: "music",
    label: "Music",
    pos: "tl",
    blurb: "Composing, producing, and thinking in sound.",
    href: "/music",
  },
  {
    key: "vision",
    label: "Ouyouna",
    pos: "br",
    blurb: "Optics, the eye, and how we see.",
    href: "https://ouyouna.com",
  },
];
