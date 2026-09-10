/**
 * RESEARCH — everything on the /research panel comes from this file.
 *
 * Real project + publication content is filled in one at a time. Anything
 * still marked "placeholder" / null is meant to be replaced and should not be
 * read as a factual claim.
 *
 * researchProjects[] shape:
 *   id, number, year
 *   question, shortLabel, tags[]
 *   summary
 *   accent: "olive" | "cobalt"
 *   whyHeadline, whyItMatters          // null => placeholder copy
 *   ideaHeadline, idea
 *   methodSteps: [{ number, title, text }] | null
 *   researchReality: { headline, text } | null  // an honest "what didn't work"
 *   groups: [{ name, n, position }] | null      // comparison arms of a study
 *   framework: [{ label, biologicalFunction, healthSystemTranslation }] | null
 *   findings:    [{ value, label }]    | null   // real reported values only
 *   caution: string | null                      // limitations / caveats
 *   takeaway
 *   visualType: string | null          // key into components/research/ResearchVisual
 *   visualData: object | null          // labels / values the schematic reads from
 *   status: "current" | "published"           // CURRENT badge only when "current"
 *   researchContext: {                          // provenance — render only what exists
 *     publicationTitle, journal, publicationYear, publicationUrl, doi,
 *     institution, secondaryInstitution, lab,
 *     leadershipLabel, leadership: [], authors: [], compactAuthors
 *   } | null
 */

export const researchMeta = {
  label: "Research",
  question: "Tracing a path through vision, disease, and systems",

  // hero intro — a short personal research journey, first person
  intro: [
    "My research moves across molecular biology, clinical ophthalmology, optical modeling, and health systems — always asking what can be changed, and how.",
    "I began doing research at 16 at the American University of Beirut, under the mentorship of Dr. Shady Awwad. After moving to Boston, that path continued at the Schepens Eye Research Institute of Mass Eye and Ear, where I joined Dr. Leo Kim’s lab and began pursuing questions spanning retina, translational therapeutics, and clinical vision science. Along the way, I’ve also had the privilege of pursuing collaborative investigations with Dr. Mohammad Dahrouj at Mass Eye and Ear and with Dr. Kimberly Samaha through the Born Global Foundation.",
    "Taken together, research has become a central part of how I approach medicine: following curiosity, asking better questions, and learning from scientists and collaborators who continually reshape how I think.",
  ],

  // quieter supporting note directly after the intro
  disclosure:
    "The work below primarily reflects studies that have been published and shared publicly. Several ongoing investigations remain undisclosed for now as we continue working to push the boundaries of investigative and translational medicine.",

  affiliation: "Mass Eye & Ear · Harvard Medical School",

  // compact summary blocks under the intro
  researchAcross: "Cornea · Retina · Optics · Surgery · Fibrosis · Health Systems",
  builtThrough:
    "American University of Beirut · Mass Eye & Ear / Harvard Medical School · Born Global Foundation",
  tagline: "Science for a clearer tomorrow",

  questionsHeading: "Published work and ongoing questions",
  questionsLine:
    "The projects below reflect work that has been published and shared publicly, alongside selected lines of inquiry that continue to evolve.",

  endingKicker: "The question is always:",
  endingStatement: "What can we change?",
};

export const researchProcess = [
  { key: "question", label: "Question", line: "What are we trying to understand?", accent: "olive" },
  { key: "model", label: "Model", line: "How can we study it?", accent: "olive" },
  { key: "perturb", label: "Perturb", line: "What can we change?", accent: "cobalt" },
  { key: "measure", label: "Measure", line: "What responds?", accent: "olive" },
  { key: "interpret", label: "Interpret", line: "What does it mean?", accent: "offwhite" },
];

export const researchProjects = [
  {
    id: "cairs-salvage",
    number: "01",
    year: "2023",
    status: "published",

    question:
      "When a synthetic corneal implant fails, can donor tissue take its place?",

    shortLabel: "Cornea",
    tags: ["Keratoconus", "CAIRS", "Corneal surgery"],

    summary:
      "A synthetic intrastromal ring segment had migrated through the cornea into the anterior chamber. We explored whether an allogenic corneal segment could replace it at a safer, shallower depth while restoring corneal shape and vision.",

    accent: "olive",

    whyHeadline: "The treatment can become the complication.",
    whyItMatters:
      "Synthetic corneal ring segments can regularize the keratoconic cornea, but serious complications including intrusion, melt and extrusion can occur. Removing a failed implant may also sacrifice its corneal-shaping effect.",

    ideaHeadline: "Replace plastic with cornea.",
    idea:
      "Rather than implant another rigid synthetic segment into compromised tissue, donor corneal tissue was placed in a new, shallower stromal tunnel above the previous implant plane.",

    methodSteps: [
      {
        number: "01",
        title: "Identify the failure",
        text: "Anterior-segment OCT demonstrated synthetic ring intrusion into the anterior chamber.",
      },
      {
        number: "02",
        title: "Remove it",
        text: "The affected synthetic segment was explanted and the cornea was allowed to recover.",
      },
      {
        number: "03",
        title: "Change the plane",
        text: "A donor corneal segment was implanted in a new 250-µm-deep tunnel above the previous tunnel.",
      },
      {
        number: "04",
        title: "Follow the eye",
        text: "Corneal shape, visual acuity, refraction, aberrations and implant behavior were followed after surgery.",
      },
    ],

    findings: [
      { value: "20/80 → 20/20", label: "Corrected visual acuity" },
      { value: "1.54 D → 0.60 D", label: "Coma" },
      { value: "53.30 D → 47.59 D", label: "Maximum keratometry" },
    ],

    takeaway:
      "In this case, donor corneal tissue restored corneal regularity and vision after failure of a synthetic ring.",

    visualType: "corneal-ring-depth",

    researchContext: {
      publicationTitle:
        "Corneal Allogenic Intrastromal Ring Segments as a Therapeutic Method for Intrusion of Synthetic Intrastromal Corneal Ring Segment: A Case Report",
      journal: "Journal of Refractive Surgery Case Reports",
      publicationYear: "2023",
      publicationUrl: null,
      doi: "10.3928/jrscr-20230814-01",
      institution: "American University of Beirut",
      secondaryInstitution: null,
      lab: null,
      leadershipLabel: null,
      leadership: [],
      authors: [],
      compactAuthors: null,
      showAuthors: true,
    },
  },

  {
    id: "pmma-cairs-optical-zones",
    number: "02",
    year: "2023",
    status: "published",

    question:
      "Can two different implants reshape the same cornea better together?",

    shortLabel: "Cornea",
    tags: ["Keratoconus", "CAIRS", "Optical zones"],

    summary:
      "A synthetic ring had improved the cornea, but not enough. Instead of removing it, we asked whether donor corneal tissue could be added at a different depth and optical zone to build on the original effect.",

    accent: "olive",

    whyHeadline: "Sometimes the first treatment works — just not enough.",
    whyItMatters:
      "The existing synthetic segment had already improved corneal regularity and vision. Removing it risked losing that benefit, raising the question of whether a second implant type could build on what was already working.",

    ideaHeadline: "Don't start over. Build on what worked.",
    idea:
      "The existing PMMA segment was left at a 7-mm optical zone and 375-µm depth, while donor corneal segments were added at a smaller 5-mm optical zone and a shallower 260-µm depth.",

    methodSteps: [
      {
        number: "01",
        title: "Keep the first effect",
        text: "Leave the existing synthetic PMMA segment in place.",
      },
      {
        number: "02",
        title: "Change the optical zone",
        text: "Position the donor segments at a smaller 5-mm optical zone.",
      },
      {
        number: "03",
        title: "Change the depth",
        text: "Implant the CAIRS more superficially at 260 µm.",
      },
      {
        number: "04",
        title: "Test the combination",
        text: "Follow visual acuity and corneal topography to determine whether the second intervention adds further benefit.",
      },
    ],

    findings: [
      { value: "20/60 → 20/30", label: "Corrected visual acuity" },
      { value: "53.46 D → 45.20 D", label: "Average keratometry" },
      { value: "−3.59 D → −2.57 D", label: "Keratometric astigmatism" },
    ],

    takeaway:
      "In this case, synthetic and donor corneal segments could coexist at different optical zones and build on one another's effects.",

    visualType: "dual-optical-zone",
    visualData: {
      synthetic: { material: "PMMA", opticalZone: "7 mm", depth: "375 µm", accent: "cobalt" },
      allogenic: { material: "CAIRS", opticalZone: "5 mm", depth: "260 µm", accent: "olive" },
    },

    researchContext: {
      publicationTitle:
        "Polymethylmethacrylate and Corneal Allogenic Intrastromal Ring Segments: Same Cornea, Different Optical Zones",
      journal: "Journal of Refractive Surgery Case Reports",
      publicationYear: "2023",
      publicationUrl: null,
      doi: "10.3928/jrscr-20230818-01",
      institution: "American University of Beirut",
      secondaryInstitution: null,
      lab: null,
      leadershipLabel: null,
      leadership: [],
      authors: [],
      compactAuthors: null,
      showAuthors: true,
    },
  },
  {
    id: "mrna-runx1-trap",
    number: "03",
    year: "2024",
    status: "published",

    question:
      "Can mRNA be used to inhibit a disease-driving protein instead of replacing one?",

    shortLabel: "Retina",
    tags: ["PVR", "mRNA therapeutics", "RUNX1", "Retinal fibrosis"],

    summary:
      "We engineered mRNA to produce a protein that traps RUNX1 outside the nucleus, then asked whether transiently blocking this disease-driving transcription factor could suppress retinal fibrosis and abnormal blood-vessel growth.",

    accent: "cobalt",

    whyHeadline: "For PVR, surgery is still the treatment.",
    whyItMatters:
      "Proliferative vitreoretinopathy causes fibrotic membranes to form after retinal detachment. With no approved medical therapy, treatment remains surgical. RUNX1 had emerged as a potential molecular driver of both retinal fibrosis and pathological angiogenesis.",

    ideaHeadline: "Trap it before it reaches the nucleus.",
    idea:
      "Instead of using mRNA to replace a missing protein, we used it to encode a dominant-negative RUNX1 inhibitor. RUNX1-Trap sequesters RUNX1 in the cytoplasm, reducing its nuclear activity.",

    methodSteps: [
      {
        number: "01",
        title: "Start with human disease",
        text: "Characterize patient-derived PVR cells and membranes and examine the relationship between RUNX1 and EMT.",
      },
      {
        number: "02",
        title: "Encode the trap",
        text: "Deliver mRNA encoding RUNX1-Trap and test expression, localization, proliferation and toxicity.",
      },
      {
        number: "03",
        title: "Test the eye",
        text: "Evaluate whether RUNX1-Trap reduces membrane formation and pathology in a rabbit model of PVR.",
      },
      {
        number: "04",
        title: "Return to human tissue",
        text: "Treat freshly removed human PVR membrane explants and measure their outgrowth.",
      },
      {
        number: "05",
        title: "Challenge another disease process",
        text: "Test RUNX1-Trap against pathological angiogenesis in a mouse model of laser-induced CNV.",
      },
    ],

    researchReality: {
      headline: "The first ideas didn't work.",
      text: "Other anti-EMT mRNA candidates reduced proliferation in vitro but failed to protect against PVR in vivo, pushing the project toward RUNX1.",
    },

    findings: [
      { value: "↓", label: "PVR-cell proliferation" },
      { value: "6.9 → 3.67", label: "Average rabbit PVR severity" },
      { value: "≈ no outgrowth", label: "RUNX1-Trap–treated human PVR explants" },
      { value: "↓ leakage · ↓ lesion size", label: "Laser-induced CNV" },
    ],

    takeaway:
      "This study provides preclinical proof-of-concept that mRNA can transiently encode a dominant-negative protein to inhibit pathological transcription-factor activity in the eye.",

    visualType: "runx1-cytosolic-trap",

    researchContext: {
      publicationTitle:
        "An mRNA-encoded dominant-negative inhibitor of transcription factor RUNX1 suppresses vitreoretinal disease in experimental models",
      journal: "Science Translational Medicine",
      publicationYear: "2024",
      publicationUrl:
        "https://www.science.org/doi/10.1126/scitranslmed.adh0994",
      doi: "10.1126/scitranslmed.adh0994",
      institution: "Mass Eye & Ear · Harvard Medical School",
      secondaryInstitution: null,
      lab: null,
      leadershipLabel: null,
      leadership: [],
      // full list retained for later use; hidden on this card via showAuthors
      authors: [
        "O'Hare, M.", "Miller, W.P.", "Arevalo-Alquichire, S.", "Amarnani, D.",
        "Apryani, E.", "Perez-Corredor, P.", "Marino, C.", "Shu, D.Y.",
        "Vanderleest, T.E.", "Muriel-Torres, A.", "Gordon, H.P.", "Gunawan, A.L.",
        "Kaplan, B.A.", "Barake, K.W.", "Bejjani, R.P.", "Doan, T.H.", "Lin, R.",
        "Delgado-Tirado, S.", "Gonzalez-Buendia, L.", "Rossin, E.", "Zhao, G.",
        "Eliott, D.", "Weinl-Tenbruck, C.", "Rejman, J.", "Montrasio, F.",
        "Kim, L.A.", "Arboleda-Vasquez, J.F.",
      ],
      compactAuthors: null,
      showAuthors: false,
    },
  },

  {
    id: "angle-alpha-kappa",
    number: "04",
    year: "2025",
    status: "published",

    question: "When we treat the eye, what does “centered” actually mean?",

    shortLabel: "Optics",
    tags: ["Refractive surgery", "Angle α", "Angle κ", "Ocular geometry"],

    summary:
      "We mapped angle alpha and angle kappa in myopic and hyperopic eyes to understand how the eye's visual, pupillary, and optical centers differ — and how that geometry changes with refractive error.",

    accent: "olive",

    whyHeadline: "The eye has more than one “center.”",
    whyItMatters:
      "The visual, pupillary and optical axes of the eye do not necessarily align. Understanding those offsets matters when centering laser ablations and intraocular lenses, where decentration may affect visual quality.",

    ideaHeadline: "Map the offsets.",
    idea:
      "Measure the magnitude and direction of angle alpha and angle kappa, then compare their distributions across myopic and hyperopic refractive surgery candidates.",

    methodSteps: [
      {
        number: "01",
        title: "Map 479 eyes",
        text: "Analyze 271 myopic and 208 hyperopic eyes from refractive surgery candidates.",
      },
      {
        number: "02",
        title: "Find the centers",
        text: "Identify the pupil center, corneal geometric center and corneal vertex using corneal imaging.",
      },
      {
        number: "03",
        title: "Measure the offsets",
        text: "Calculate angle alpha and angle kappa chord magnitudes, directions and coordinates.",
      },
      {
        number: "04",
        title: "Compare the geometry",
        text: "Examine how these measurements differ between myopia and hyperopia and relate to refractive error.",
      },
    ],

    findings: [
      { value: "0.38 → 0.52 mm", label: "Angle α · myopia → hyperopia" },
      { value: "0.23 → 0.34 mm", label: "Angle κ · myopia → hyperopia" },
      {
        value: "94% · 100%",
        label: "Angle α clustered within 135°–225° · myopia · hyperopia",
      },
      { value: "α > κ", label: "Angle alpha was larger and less spatially variable" },
    ],

    takeaway:
      "Where the eye looks, where the pupil sits, and where the eye is geometrically centered are not the same — and the difference varies systematically with refractive error.",

    visualType: "ocular-axis-map",
    visualData: {
      alpha: { definition: "visual axis ↔ optical axis", accent: "olive" },
      kappa: { definition: "visual axis ↔ pupillary axis", accent: "cobalt" },
      groups: {
        myopia: { alpha: "0.38 mm", kappa: "0.23 mm" },
        hyperopia: { alpha: "0.52 mm", kappa: "0.34 mm" },
      },
    },

    researchContext: {
      publicationTitle:
        "Distribution of Angle Alpha and Angle Kappa Chord Magnitude and Axes in Myopic and Hyperopic Refractive Surgery Candidates",
      journal: "Journal of Refractive Surgery",
      publicationYear: "2025",
      publicationUrl: null,
      doi: "10.3928/1081597X-20250506-04",
      institution: "American University of Beirut",
      secondaryInstitution: null,
      lab: null,
      leadershipLabel: null,
      leadership: [],
      authors: [],
      compactAuthors: null,
      showAuthors: true,
    },
  },

  {
    id: "secondary-iol-outcomes",
    number: "05",
    year: "2026",
    status: "published",

    question:
      "When the eye needs a second lens, does how we fix it change what can go wrong?",

    shortLabel: "Surgery",
    tags: ["Secondary IOL", "Vitreoretinal surgery", "Surgical outcomes"],

    summary:
      "When the eye no longer has adequate support for a standard intraocular lens, surgeons have several ways to place a secondary lens. We compared four approaches to understand their retinal risks, complications, and postoperative outcomes.",

    accent: "cobalt",

    whyHeadline: "There is more than one way to put a lens back in the eye.",
    whyItMatters:
      "Without normal capsular support, an artificial lens may be positioned in the anterior chamber, sulcus, or secured to the sclera using different techniques. Each approach changes the anatomy differently and may carry a distinct complication profile.",

    ideaHeadline: "Same goal. Four ways to get there.",
    idea:
      "Compare secondary IOL techniques performed by vitreoretinal surgeons and characterize retinal complications and technique-specific postoperative outcomes.",

    methodSteps: [
      {
        number: "01",
        title: "Follow 138 eyes",
        text: "Review consecutive secondary IOL surgeries performed by five vitreoretinal surgeons at a tertiary academic center.",
      },
      {
        number: "02",
        title: "Separate four strategies",
        text: "Compare anterior chamber, sulcus, scleral-fixated and scleral-sutured intraocular lenses.",
      },
      {
        number: "03",
        title: "Look behind the lens",
        text: "Track intraoperative retinal breaks, postoperative retinal detachments and additional vitreoretinal interventions.",
      },
      {
        number: "04",
        title: "Compare the trade-offs",
        text: "Identify postoperative complication patterns associated with different secondary IOL approaches.",
      },
    ],

    groups: [
      { name: "ACIOL", n: 42, position: "Anterior chamber" },
      { name: "SULCUS", n: 27, position: "Ciliary sulcus" },
      { name: "SFIOL", n: 43, position: "Scleral fixation" },
      { name: "SSIOL", n: 26, position: "Scleral-sutured" },
    ],

    findings: [
      { value: "6.5%", label: "Intraoperative retinal tear / hole" },
      { value: "2.2%", label: "Postoperative retinal detachment" },
      { value: "↑ CME", label: "Anterior chamber IOL" },
      { value: "↑ vitreous hemorrhage", label: "Scleral-sutured IOL" },
      { value: "7.0%", label: "Severe rotation among scleral-fixated IOL cases" },
    ],

    takeaway:
      "Secondary IOL surgery had relatively low retinal-detachment rates in this vitreoretinal cohort, while different fixation strategies showed distinct postoperative complication profiles.",

    visualType: "secondary-iol-position",

    researchContext: {
      publicationTitle:
        "Outcomes and Complications of Secondary Intraocular Lens Implantation: Insights From a Vitreoretinal Surgery Cohort",
      journal: "Ophthalmic Surgery, Lasers and Imaging Retina",
      publicationYear: "2026",
      publicationUrl: null,
      doi: "10.3928/23258160-20260320-01",
      institution: "Mass Eye & Ear · Harvard Medical School",
      secondaryInstitution: null,
      lab: null,
      leadershipLabel: null,
      leadership: [],
      authors: [],
      compactAuthors: null,
      showAuthors: true,
    },
  },

  {
    id: "efemp1-aso",
    number: "06",
    year: "2026",
    status: "published",

    question:
      "Can silencing one gene disrupt both retinal degeneration and abnormal blood-vessel growth?",

    shortLabel: "Retina",
    tags: ["AMD", "EFEMP1", "Antisense oligonucleotides", "Angiogenesis"],

    summary:
      "EFEMP1 accumulates in an inherited macular degeneration and is also elevated in age-related macular degeneration. We developed an antisense oligonucleotide that lowers EFEMP1 expression and asked whether silencing it could alter complement activity, retinal vascular behavior, and pathological choroidal growth.",

    accent: "cobalt",

    whyHeadline: "Rare disease. Common pathway?",
    whyItMatters:
      "A mutation in EFEMP1 causes autosomal dominant drusen, but EFEMP1 is also elevated in age-related macular degeneration. This raised the possibility that biology discovered through a rare inherited disease could reveal a therapeutic target relevant to AMD.",

    ideaHeadline: "Silence the message.",
    idea:
      "Use an antisense oligonucleotide to bind EFEMP1 mRNA and promote its degradation before the transcript can continue producing EFEMP1 protein.",

    methodSteps: [
      {
        number: "01",
        title: "Build the disease model",
        text: "Use CRISPR-Cas9 to introduce the R345W EFEMP1 mutation and characterize the resulting disease-associated molecular pathways.",
      },
      {
        number: "02",
        title: "Find the sequence",
        text: "Screen 247 EFEMP1-targeting antisense oligonucleotides and identify a lead candidate through dose-response testing.",
      },
      {
        number: "03",
        title: "Follow the pathways",
        text: "Measure EFEMP1 and downstream complement-related changes including C3 after knockdown.",
      },
      {
        number: "04",
        title: "Challenge retinal vessels",
        text: "Test whether EFEMP1 knockdown alters proliferation and migration in human retinal microvascular endothelial cells.",
      },
      {
        number: "05",
        title: "Move into tissue",
        text: "Measure angiogenic sprouting after EFEMP1 knockdown in mouse and human choroidal explants.",
      },
      {
        number: "06",
        title: "Test AMD tissue",
        text: "Confirm EFEMP1 elevation in human AMD RPE/choroid and evaluate ASO treatment in AMD donor explants.",
      },
    ],

    findings: [
      { value: "247 → 1", label: "ASO screen → lead candidate" },
      { value: "3.807 nM", label: "Lead ASO IC50" },
      { value: "30 days", label: "Significant EFEMP1 knockdown in vivo" },
      { value: "↓ C3", label: "Complement-related response" },
      {
        value: "↓ migration · ↓ proliferation",
        label: "Human retinal endothelial cells",
      },
      { value: "↓ sprouting", label: "Mouse + human choroidal tissue" },
    ],

    takeaway:
      "Across retinal cells, mouse models, and human choroidal tissue, suppressing EFEMP1 altered complement and angiogenic pathways and reduced pathological vascular growth, supporting EFEMP1 as a potential therapeutic target for inherited and age-related macular degeneration.",

    visualType: "aso-rna-degradation",
    visualData: {
      target: "EFEMP1 mRNA",
      intervention: "EFEMP1 ASO",
      mechanism: "RNase H1-mediated degradation",
      downstream: ["Complement", "ECM", "Angiogenesis"],
      accent: "cobalt",
    },

    researchContext: {
      publicationTitle:
        "Development of an antisense oligonucleotide targeting EFEMP1 in models relevant to macular degeneration",
      journal: "Molecular Therapy: Nucleic Acids",
      publicationYear: "2026",
      publicationUrl: null,
      doi: "10.1016/j.omtn.2026.103024",
      institution: "Mass Eye & Ear · Harvard Medical School",
      secondaryInstitution: null,
      lab: null,
      leadershipLabel: null,
      leadership: [],
      authors: [],
      compactAuthors: null,
      showAuthors: true,
    },
  },

  {
    id: "runx1-pulmonary-fibrosis",
    number: "07",
    year: "2026",
    status: "published",

    question:
      "Can blocking a fibrosis-driving transcription factor restore function — not just improve what the tissue looks like?",

    shortLabel: "Fibrosis",
    tags: ["RUNX1", "Idiopathic pulmonary fibrosis", "EMT", "Translational biology"],

    summary:
      "RUNX1 is implicated in fibrotic remodeling across tissues. We asked whether inhibiting it with the small molecule Ro24-7429 could improve actual lung function in experimental pulmonary fibrosis — and whether the same target is present and drug-responsive in human IPF tissue.",

    accent: "cobalt",

    whyHeadline: "Less scar tissue only matters if the organ works better.",
    whyItMatters:
      "Idiopathic pulmonary fibrosis progressively replaces normal lung architecture with collagen and extracellular matrix, producing a stiff lung with impaired function. Earlier work showed that RUNX1 inhibition reduced fibrotic markers, but whether this translated into better pulmonary function remained unclear.",

    ideaHeadline: "Break the partnership.",
    idea:
      "Ro24-7429 inhibits RUNX1 transcriptional activity, proposed in part through disruption of its interaction with CBFβ, with the goal of interrupting downstream EMT and fibrotic remodeling.",

    methodSteps: [
      {
        number: "01",
        title: "Start with human disease",
        text: "Determine whether RUNX1 and fibrotic markers are elevated in lung tissue from patients with idiopathic pulmonary fibrosis.",
      },
      {
        number: "02",
        title: "Make dysfunction measurable",
        text: "Establish bleomycin-induced fibrosis with reproducible abnormalities in lung compliance, elastance, resistance, inspiratory capacity and work of breathing.",
      },
      {
        number: "03",
        title: "Block RUNX1",
        text: "Treat with Ro24-7429 and assess pulmonary function, collagen deposition and molecular markers of fibrosis.",
      },
      {
        number: "04",
        title: "Compare the standard",
        text: "Compare Ro24 with pirfenidone and nintedanib using pulmonary-function testing and treadmill exercise tolerance.",
      },
      {
        number: "05",
        title: "Return to human tissue",
        text: "Treat precision-cut lung slices from human IPF donors and evaluate RUNX1 and fibrosis-associated markers.",
      },
    ],

    findings: [
      { value: "RUNX1 ↑", label: "Human IPF lung tissue" },
      { value: "32.1 → 23.4", label: "Elastance · bleomycin → Ro24" },
      { value: "102.9 → 92.2", label: "Work of breathing · bleomycin → Ro24" },
      { value: "−62% → −14%", label: "Change in treadmill running distance" },
      { value: "↓ collagen", label: "Experimental pulmonary fibrosis" },
      {
        value: "↓ RUNX1 · ↓ COL1A1 · ↓ FN1",
        label: "Human IPF precision-cut lung slices",
      },
    ],

    caution:
      "This was a preclinical, predominantly preventive study. Bleomycin-induced fibrosis does not fully reproduce chronic human IPF, and the human tissue cohorts were small.",

    takeaway:
      "RUNX1 inhibition reduced fibrotic remodeling while improving physiological and exercise outcomes in experimental pulmonary fibrosis, supporting RUNX1 as a translational antifibrotic target.",

    visualType: "lung-fibrosis-function",
    visualData: {
      pathway: [
        "TGF-β / TNF-α",
        "RUNX1 + CBFβ",
        "EMT",
        "Collagen / ECM",
        "Lung stiffness",
      ],
      intervention: "Ro24-7429",
      modes: ["Tissue", "Function"],
      accent: "cobalt",
    },

    researchContext: {
      publicationTitle:
        "Inhibition of runt related transcription factor 1 with Ro24-7429 improves lung function in experimental models of idiopathic pulmonary fibrosis",
      journal: "Scientific Reports",
      publicationYear: "2026",
      publicationUrl: null,
      doi: "10.1038/s41598-026-55553-2",
      institution: "Mass Eye & Ear · Harvard Medical School",
      secondaryInstitution: null,
      lab: null,
      leadershipLabel: null,
      leadership: [],
      authors: [],
      compactAuthors: null,
      showAuthors: true,
    },
  },

  {
    id: "lebanon-biomimicry-phc",
    number: "08",
    year: "2026",
    status: "published",

    question:
      "Can a health system learn to respond to scarcity the way a living system does?",

    shortLabel: "Health systems",
    tags: ["Lebanon", "Primary care", "Biomimicry", "Health policy"],

    summary:
      "Lebanon's primary-care network operates under chronic scarcity, but resources are not consistently redistributed according to measured need. We asked whether resilience strategies from grapevine root systems could be translated into practical rules for sensing stress, reallocating capacity, and connecting primary care to referral hubs.",

    accent: "olive",

    whyHeadline:
      "Scarcity isn't only a resource problem. It's an architecture problem.",
    whyItMatters:
      "Lebanon's PHC system lacks standardized sensing, need-responsive redistribution, and consistently integrated referral pathways. The result is persistent misalignment between population health need and available service capacity.",

    ideaHeadline: "Sense. Adapt. Stay connected.",
    idea:
      "Use the drought-resilient architecture of Vitis vinifera as design logic for three health-system functions: sensing local stress through standardized Need Scores, redistributing capacity toward measured need, and anchoring PHC centers to referral hubs through defined catchments and two-way information flow.",

    methodSteps: [
      {
        number: "01",
        title: "Map the mismatch",
        text: "Synthesize publicly available health-system and population data across Lebanon's eight governorates to examine where healthcare need and service capacity diverge.",
      },
      {
        number: "02",
        title: "Build a sensing mechanism",
        text: "Create a preliminary Need Score using clinical demand, service-capacity strain, and socioeconomic vulnerability.",
      },
      {
        number: "03",
        title: "Test the computation",
        text: "Apply the preliminary score across all eight governorates to determine whether the framework behaves as designed.",
      },
      {
        number: "04",
        title: "Turn signals into rules",
        text: "Translate measured need into predefined response mechanisms rather than discretionary allocation.",
      },
      {
        number: "05",
        title: "Redistribute capacity",
        text: "Use measured need to guide staffing, service intensity, operating capacity, and geographic deployment.",
      },
      {
        number: "06",
        title: "Close the loop",
        text: "Anchor every PHC center to a referral hub through defined catchments, supervised escalation, counter-referral, and electronic feedback.",
      },
    ],

    framework: [
      {
        label: "Sense",
        biologicalFunction: "Sense environmental stress",
        healthSystemTranslation: "PHC Need Scores",
      },
      {
        label: "Adapt",
        biologicalFunction: "Redistribute growth toward resources",
        healthSystemTranslation: "Need-responsive capacity allocation",
      },
      {
        label: "Connect",
        biologicalFunction: "Maintain protected root connectivity",
        healthSystemTranslation: "PHC ↔ referral hub architecture",
      },
    ],

    findings: [
      {
        value: "3 domains",
        label: "Clinical demand · capacity strain · vulnerability",
      },
      { value: "8", label: "Governorates in preliminary Need Score computation" },
      { value: "Sense", label: "Standardized frontline stress signals" },
      { value: "Adapt", label: "Need-responsive redistribution" },
      { value: "Connect", label: "Closed referral and counter-referral loops" },
    ],

    caution:
      "The Need Score is preliminary and should not be interpreted as a validated ranking of healthcare need. Thresholds, weighting, and external validation are required before operational use.",

    takeaway:
      "The framework proposes shifting primary healthcare from discretionary allocation toward a sensing, adaptive, feedback-driven system that responds to measured population need.",

    visualType: "grapevine-health-system",
    visualData: {
      biologicalSide: [
        "Sense water",
        "Redistribute root growth",
        "Maintain core connection",
      ],
      healthSystemSide: [
        "Sense need",
        "Redistribute capacity",
        "Close referral loops",
      ],
      scoreDomains: [
        "Clinical demand",
        "Capacity strain",
        "Socioeconomic vulnerability",
      ],
    },

    researchContext: {
      publicationTitle:
        "Improving Primary Healthcare: Applying Grapevine (Vitis vinifera) Principles to Lebanon's Vision 2030",
      journal: "Healthcare",
      publicationYear: "2026",
      publicationUrl: null,
      doi: "10.3390/healthcare14172741",
      institution: "Born Global Foundation",
      secondaryInstitution: null,
      lab: null,
      leadershipLabel: null,
      leadership: [],
      authors: [],
      compactAuthors: null,
      showAuthors: true,
    },
  },
];


// `src: null` renders a placeholder frame; drop files in public/research/ later.
export const researchPhotos = [
  { src: null, label: "Placeholder — laboratory work", place: "Boston", date: "2025", rot: -1.4 },
  { src: null, label: "Placeholder — microscopy", place: "Mass Eye & Ear", date: "2025", rot: 1.1 },
  { src: null, label: "Placeholder — poster session", place: "ARVO", date: "2025", rot: -0.7 },
  { src: null, label: "Placeholder — research notebook", place: "", date: "", rot: 1.5 },
];
