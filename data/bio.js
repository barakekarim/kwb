/**
 * BIO — everything on the /bio panel comes from this file.
 *
 *   • mission     — the dominant hero statement
 *   • paragraphs  — the biography, as four editorial blocks (order matters)
 *   • callouts    — the three small identity markers, placed between blocks
 *   • cvUrl       — the CV PDF; drop the file at public/bio/ and it opens in a new tab
 */

export const bioData = {
  mission: "I'm on a mission to build a world that sees better.",

  paragraphs: [
    "My work is at the intersection of ophthalmology research, vision care equity, and health tech. I believe saving sight is equally a medical and a systems problem, and I work to address both.",
    "I conduct retina research at the Kim Lab at Mass Eye & Ear (Harvard Medical School), where my work focuses on therapeutic pathways for proliferative vitreoretinopathy and retinal disease. I'm a co-author on 8+ publications including those in Science Translational Medicine and the Journal of Refractive Surgery, and have had work presented at ARVO, AAO, Stanford, ESCRS, and more.",
    "Outside the lab, I'm building Ouyouna, a non-profit, community-run initiative bringing vision screening and care to children in Lebanon’s public schools. We've screened 791 students across three schools, identified 21.6% needing referral, and built an end-to-end pipeline from screening to free exams and spectacles.",
    "I graduated from Boston University with a B.S. in Human Physiology as a Trustee Scholar and Kilachand Honors College fellow. As I begin medical school, I continue to build toward a world where sight is not a privilege, but a human right.",
  ],

  callouts: [
    { label: "Medicine", desc: "Boston University School of Medicine" },
    { label: "Research", desc: "Mass Eye & Ear · Harvard Medical School" },
  ],

  cvUrl: "/bio/KW_CV.pdf",
};
