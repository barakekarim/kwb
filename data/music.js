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
  return { upcoming, played: played.reverse() };
}
