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
    venue: "Boat Party",
    city: "Boston, USA",
    ticketUrl: "https://posh.vip/e/5ess1ons-boat-party-sep-5?t=whatsapp",
    status: "tickets",
  },
  {
    date: "SEP 19",
    fullDate: "September 19, 2026",
    venue: "51",
    city: "Boston, USA",
    ticketUrl: "https://posh.vip/e/5ess1ons-x-monobase-sep-19?t=linktree",
    status: "tickets",
  },
  {
    date: "OCT 9",
    fullDate: "October 9, 2026",
    venue: "The Arcade",
    city: "Washington DC, USA",
    ticketUrl:
      "https://dice.fm/partner/tickets/event/dkd2yo-mtrnm-x-sessions-present-colombus-weekend-arcade-dc-9th-oct-the-arcade-washington-tickets?dice_id=10201862&dice_channel=sms&dice_campaign=sessionswhatsapp&dice_feature=mio_marketing",
    status: "tickets",
  },
  {
    date: "OCT 10",
    fullDate: "October 10, 2026",
    venue: "A.I. Warehouse",
    city: "Washington DC, USA",
    ticketUrl: "https://link.dice.fm/V2a8f7975630",
    status: "tickets",
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
 *     when:  "2024-04-25",          // or "2025-09" if you only know the month
 *     label: "100TH",               // optional: replaces the date on the stub
 *     venue: "51",
 *     city:  "Boston",
 *     role:  "Direct support",      // Headline · Direct support · Opening · Closing
 *     with:  "Francis Mercier",     // optional: who you played with
 *     note:  "B2B Oscar",           // optional: small extra line
 *     star:  true,                  // optional: gold stub for the big nights
 *   }
 *
 * Dates passed on tourDates above join this list on their own.
 */
export const pastShows = [
  // ---- 2024 ----
  { when: "2024-02-03", venue: "51", city: "Boston", role: "Opening", with: "Epsylon" },
  { when: "2024-02-12", venue: "Bijou", city: "Boston", role: "Opening", with: "Ashton Collier" },
  { when: "2024-03-28", venue: "51", city: "Boston", role: "Headline" },
  { when: "2024-04-25", venue: "51", city: "Boston", role: "Direct support", with: "Francis Mercier", star: true },
  { when: "2024-05-14", venue: "51", city: "Boston", role: "Direct support" },
  { when: "2024-05-31", venue: "Bijou", city: "Boston", role: "Direct support", with: "Notre Dame", star: true },
  { when: "2024-08-27", venue: "51", city: "Boston", role: "Direct support" },
  { when: "2024-09-17", venue: "51", city: "Boston", role: "Direct support", with: "Vision" },
  { when: "2024-09-26", venue: "51", city: "Boston", role: "Direct support", with: "&Friends" },
  { when: "2024-10-19", venue: "51", city: "Boston", role: "Direct support", with: "Victor Alk" },
  { when: "2024-10-26", venue: "Gospel", city: "New York City", star: true },

  // ---- 2025 ----
  { when: "2025-01-14", venue: "51", city: "Boston", role: "Direct support", with: "Mehdi" },
  { when: "2025-02-08", venue: "51", city: "Boston", role: "Direct support", with: "Samsung" },
  { when: "2025-03-06", venue: "51", city: "Boston", role: "Direct support", with: "Cairo" },
  { when: "2025-04-19", venue: "51", city: "Boston", role: "Direct support", with: "Tehran" },
  { when: "2025", label: "100TH", venue: "Arlo Williamsburg", city: "New York City", note: "MTRNM x 5ESS1ONS — the 100th session", star: true },
  { when: "2025-05-17", venue: "51", city: "Boston", role: "Direct support", with: "Treo" },
  { when: "2025-05-24", venue: "51", city: "Boston", role: "Headline" },
  { when: "2025-08-25", venue: "51", city: "Boston", role: "Direct support", with: "ALO" },
  { when: "2025-09-12", venue: "Providence Ice Rink", city: "Providence, RI", role: "Direct support", with: "Meduza", star: true },
  { when: "2025-09", venue: "51", city: "Boston", role: "Headline", note: "5ESS1ONS" },
  { when: "2025-10-04", venue: "51", city: "Boston", role: "Direct support", with: "Mehdi" },
  { when: "2025-10-10", venue: "The Arcade", city: "Washington DC", note: "Columbus Weekend" },
  { when: "2025-10-11", venue: "ALO Rooftop", city: "Washington DC", note: "Columbus Weekend" },
  { when: "2025-11-29", venue: "Orasi Theatre", city: "London", role: "Closing", with: "Luch", star: true },

  // ---- 2026 ----
  { when: "2026-01-13", venue: "51", city: "Boston", role: "Direct support", with: "Son of Son" },
  { when: "2026-01-22", venue: "51", city: "Boston", role: "Headline", note: "5ESS1ONS · B2B Oscar" },
  { when: "2026-02-03", venue: "51", city: "Boston", role: "Headline", note: "5ESS1ONS" },
  { when: "2026-03-23", venue: "51", city: "Boston", role: "Headline", note: "5ESS1ONS" },
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
    return { when, venue: show.venue, city: show.city.replace(/, USA$/, "") };
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
