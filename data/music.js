/**
 * BARAKE — everything on the /music panel comes from this file.
 *
 * To update the site you only touch this file:
 *   • instagramUrl      — the hero Instagram CTA
 *   • tourDates[]       — one object per row; see the shape below
 *
 * Nothing else to maintain: the "Next show" block is the first upcoming date,
 * and once a date has passed it moves on its own from the tour list to the
 * "Played" stubs (the page re-checks the date every hour).
 *
 * Tour row shape:
 *   {
 *     date:     "SEP 5",                 // short label shown big on the strip
 *     fullDate: "September 5, 2026",     // used for the <time> / screen readers
 *     venue:    "Boat Party",
 *     city:     "Boston, USA",
 *     ticketUrl: "https://...",          // paste the link to activate the button
 *     status:   "tickets" | "soon",      // "soon" renders a non-clickable "Details soon"
 *     // for the "Played" stub once the date has passed (see pastShows):
 *     title, role, promoter, star
 *   }
 *
 * A row with status "tickets" but an empty ticketUrl shows "TICKETS ↗" in a
 * pending state (not clickable) until you paste the URL.
 */

export const musicData = {
  instagramUrl: "https://www.instagram.com/barake.music",

  bio: "BARAKE is an artist who has performed across New York City, Boston, Washington D.C., and London, playing for crowds of up to 4,000 and sharing stages with artists including Meduza, Francis Mercier, &Friends, Notre Dame, and Luch. A resident at 5ESS1ONS and curator of his own BARAKE 1NVITE5 events, he brings people together through high-energy disco and melodic sounds — creating memorable experiences wherever he goes.",
};

export const tourDates = [
  {
    date: "SEP 5",
    fullDate: "September 5, 2026",
    venue: "60 Rowes Wharf",
    city: "Boston, USA",
    ticketUrl: "https://posh.vip/e/5ess1ons-boat-party-sep-5?t=whatsapp",
    status: "tickets",
    title: "Boat Party with MEHDI",
    role: "Co-headline",
    promoter: "5ESS1ONS",
    star: true,
  },
  {
    date: "SEP 19",
    fullDate: "September 19, 2026",
    venue: "51",
    city: "Boston, USA",
    ticketUrl: "https://posh.vip/e/5ess1ons-x-monobase-sep-19?t=linktree",
    status: "tickets",
    title: "MONOBASE",
    role: "Direct support",
    promoter: "5ESS1ONS",
  },
  {
    date: "OCT 9",
    fullDate: "October 9, 2026",
    venue: "The Arcade",
    city: "Washington DC, USA",
    ticketUrl:
      "https://dice.fm/partner/tickets/event/dkd2yo-mtrnm-x-sessions-present-colombus-weekend-arcade-dc-9th-oct-the-arcade-washington-tickets?dice_id=10201862&dice_channel=sms&dice_campaign=sessionswhatsapp&dice_feature=mio_marketing",
    status: "tickets",
    title: "The Arcade with OSCAAR",
    role: "Co-headline",
    promoter: "MTRNM × 5ESS1ONS",
    star: true,
  },
  {
    date: "OCT 10",
    fullDate: "October 10, 2026",
    venue: "A.I. Warehouse",
    city: "Washington DC, USA",
    ticketUrl: "https://link.dice.fm/V2a8f7975630",
    status: "tickets",
    title: "&FRIENDS / OSCAAR",
    role: "Warm-up",
    promoter: "MTRNM × 5ESS1ONS × Nu Androids",
    star: true,
  },
  {
    date: "OCT 29",
    fullDate: "October 29, 2026",
    venue: "Eden",
    city: "New York City, USA",
    ticketUrl: "https://posh.vip/e/popup-5ess1ions?t=linktree",
    status: "tickets",
  },
  {
    date: "OCT 31",
    fullDate: "October 31, 2026",
    venue: "Gospel",
    city: "New York City, USA",
    ticketUrl: "https://posh.vip/e/halloween-day-party-oct-31?t=linktree",
    status: "tickets",
  },
  {
    date: "NOV 6",
    fullDate: "November 6, 2026",
    venue: "51",
    city: "Boston, USA",
    ticketUrl: null,
    status: "soon",
  },
];

/**
 * Every show already played, before the dates above. Order doesn't matter —
 * the page sorts newest first and groups by year.
 *
 *   {
 *     when:     "2024-04-25",          // or "2025-09" if you only know the month
 *     label:    "100TH",               // optional: replaces the date on the stub
 *     title:    "FRANCIS MERCIER",     // artist or event (artists in uppercase)
 *     role:     "Direct support",
 *     promoter: "5ESS1ONS",
 *     venue:    "51",
 *     city:     "Boston",
 *     star:     true,                  // optional: gold stub for the big nights
 *   }
 *
 * Tour dates above join this list on their own once they've passed — give
 * them the same title / role / promoter / star fields.
 */
export const pastShows = [
  // ---- 2024 ----
  { when: "2024-02-02", title: "EPSYLON", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2024-02-12", title: "ASHTON COLLIER", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2024-03-28", title: "5ESS1ONS", role: "Headline", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2024-04-25", title: "FRANCIS MERCIER", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston", star: true },
  { when: "2024-05-14", title: "REWA", role: "Opening", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2024-05-31", title: "NOTRE DAME", role: "Direct support", promoter: "Bijou", venue: "Bijou", city: "Boston", star: true },
  { when: "2024-08-31", title: "FELLA", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2024-09-21", title: "VXSION", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2024-09-26", title: "&FRIENDS", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston", star: true },
  { when: "2024-10-19", title: "VICTOR ALC", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2024-10-26", title: "GOSPEL NYC", role: "Performance", promoter: "5ESS1ONS × Gospel", venue: "Gospel", city: "New York City", star: true },

  // ---- 2025 ----
  { when: "2025-01-18", title: "5ESS1ONS", role: "Headline", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2025-02-08", title: "MEHDI", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2025-03-06", title: "CAIIRO", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston", star: true },
  { when: "2025-04-19", title: "RAYYAN", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2025-05-06", title: "SAMSON", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2025-05-17", title: "REWA", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2025-05-24", title: "5ESS1ONS", role: "Headline", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2025-06-12", title: "100th Session with ROME MEHDI", role: "Warm-up", promoter: "MTRNM × 5ESS1ONS", venue: "Arlo Williamsburg", city: "New York City", star: true },
  { when: "2025-09-04", title: "RALØ", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2025-09-12", title: "MEDUZA", role: "Direct support", promoter: "Extra Credit Productions", venue: "Providence Ice Rink", city: "Providence, RI", star: true },
  { when: "2025-09-20", title: "5ESS1ONS", role: "Headline", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2025-10-04", title: "MEHDI", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2025-10-10", title: "The Arcade with OSCAAR", role: "Direct support", promoter: "MTRNM × 5ESS1ONS", venue: "The Arcade", city: "Washington DC", star: true },
  { when: "2025-10-11", title: "Columbus Weekend Rooftop Party", role: "Performance", promoter: "MTRNM × 5ESS1ONS", venue: "Arlo Rooftop", city: "Washington DC", star: true },
  { when: "2025-11-29", title: "LUCH & ORSAY with OSCAAR", role: "Closing B2B", promoter: "MTRNM × 5ESS1ONS", venue: "Theata", city: "London", star: true },

  // ---- 2026 ----
  { when: "2026-01-22", title: "5ESS1ONS", role: "B2B with OSCAAR", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2026-02-08", title: "5ESS1ONS Residency 2-Year Anniversary", role: "Headline", promoter: "5ESS1ONS", venue: "51", city: "Boston", star: true },
  { when: "2026-02-19", title: "SON OF SON", role: "Direct support", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2026-03-23", title: "5ESS1ONS", role: "Headline", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
  { when: "2026-04-19", title: "Boat Party with OSCAAR", role: "Co-headline", promoter: "MTRNM × 5ESS1ONS", venue: "60 Rowes Wharf", city: "Boston", star: true },
  { when: "2026-04-19", title: "Marathon Weekend Afterparty with OSCAAR", role: "B2B headline", promoter: "MTRNM × 5ESS1ONS", venue: "Bijou", city: "Boston", star: true },
  { when: "2026-05-16", title: "5ESS1ONS", role: "Headline", promoter: "5ESS1ONS", venue: "51", city: "Boston" },
];

// A show counts as played once its night is over: 6am New York time the next
// day (11:00 UTC is 6am EST / 7am EDT), so a late set never flips to "played"
// before it ends.
function playedAfter(fullDate) {
  const d = new Date(`${fullDate} UTC`);
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1, 11);
}

export function splitTourDates(now = Date.now()) {
  const upcoming = [];
  const played = [];
  for (const show of tourDates) {
    (now >= playedAfter(show.fullDate) ? played : upcoming).push(show);
  }
  return { upcoming, played };
}

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

/** "2024-04-25" → "APR 25", "2025-09" → "SEP", "2025" → "2025" */
function stubLabel(when) {
  const [, m, d] = when.split("-");
  if (!m) return when;
  return d ? `${MONTHS[m - 1]} ${Number(d)}` : MONTHS[m - 1];
}

/**
 * Every played show — the archive plus tour dates that have passed — newest
 * first, grouped by year: [{ year, shows }].
 */
export function playedByYear(now = Date.now()) {
  const fromTour = splitTourDates(now).played.map((show) => {
    const d = new Date(`${show.fullDate} UTC`);
    const when = d.toISOString().slice(0, 10);
    const { date, fullDate, ticketUrl, status, ...rest } = show;
    return { ...rest, when, city: show.city.replace(/, USA$/, "") };
  });

  const all = [...pastShows, ...fromTour]
    .map((show) => ({ ...show, label: show.label ?? stubLabel(show.when) }))
    .sort((a, b) => b.when.localeCompare(a.when));

  const years = [];
  for (const show of all) {
    const year = show.when.slice(0, 4);
    if (years.at(-1)?.year !== year) years.push({ year, shows: [] });
    years.at(-1).shows.push(show);
  }
  return years;
}
