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
    "As a first-year medical student, my work sits at the intersection of ophthalmology research, vision care equity, and health technology. I believe saving sight is equally a medical and a systems problem — and I work to address both.",
    "I conduct retina research at the Kim Lab at Mass Eye & Ear, Harvard Medical School, where my work focuses on therapeutic pathways for proliferative vitreoretinopathy and retinal disease. I am a co-author on 7+ publications, including work in Science Translational Medicine and the Journal of Refractive Surgery, with research presented at ARVO, AAO, Stanford, ESCRS, and other scientific meetings.",
    "Outside the lab, I've built initiatives delivering depoliticized pediatric vision screening to public-school students in Lebanon. We've screened 791 students across three schools, identified 21.6% as needing referral, and built an end-to-end pathway from school-based screening to free comprehensive examinations and spectacles.",
    "I graduated from Boston University with a B.S. in Human Physiology as a Trustee Scholar and member of the Kilachand Honors College. As I begin medical school, I continue building toward a world where sight is not a privilege, but a human right.",
  ],

  callouts: [
    { label: "Medicine", desc: "Boston University School of Medicine" },
    { label: "Research", desc: "Mass Eye & Ear · Harvard Medical School" },
  ],

  cvUrl: "/bio/KW_CV.pdf",
};
