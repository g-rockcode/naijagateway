/**
 * NaijaGateway — Unified Nigerian Portal Hub
 * Categorized Directory, Red Deadline Countdown Alerts (<=5 Days),
 * Daily Trusted News per Category, and Social Media Job/Application Poster Studio.
 */

const CATEGORIES = [
  {
    id: "all",
    name: "All Portals",
    shortName: "All Portals",
    icon: "🇳🇬",
    description: "Complete directory of verified Nigerian government and institutional portals."
  },
  {
    id: "identity",
    name: "Identity, Passport & Voters Registration",
    shortName: "Passport & Civic ID",
    icon: "🛂",
    description: "International Passports, NIN self-service, INEC Voter Registration (CVR), and civil registry."
  },
  {
    id: "education",
    name: "Education, Scholarships & NYSC",
    shortName: "Scholarships & NYSC",
    icon: "🎓",
    description: "NYSC mobilization portal, Federal & PTDF scholarships, NELFUND student loans, and JAMB/TRCN."
  },
  {
    id: "finance",
    name: "Loans, House Mortgages & Grants",
    shortName: "Mortgages & Loans",
    icon: "🏠",
    description: "Federal Mortgage Bank (FMBN) housing loans, Bank of Industry, SMEDAN, CrediCorp, and NIRSAL."
  },
  {
    id: "security",
    name: "Military, Paramilitary & Security Portals",
    shortName: "Army, Customs & Security",
    icon: "🛡️",
    description: "Nigerian Army, Civil Defence (NSCDC), Nigeria Customs, Navy, Air Force, Police, and EFCC."
  },
  {
    id: "transport",
    name: "Driving License & Vehicle Portals",
    shortName: "Driving License & FRSC",
    icon: "🚗",
    description: "National Driver's License (FRSC), plate number verification, and vehicle registration."
  },
  {
    id: "health",
    name: "Health Insurance & Medical Services",
    shortName: "Health & NHIA",
    icon: "🏥",
    description: "National Health Insurance Authority (NHIA), NAFDAC, NCDC, and medical professional portals."
  },
  {
    id: "business",
    name: "Business, Tax, Trade & Pensions",
    shortName: "Business, CAC & Tax",
    icon: "💼",
    description: "CAC company registration, FIRS TaxPro-Max, Nigeria Trade Hub, and PenCom."
  },
  {
    id: "sports",
    name: "Sports, Youth & National Institutes",
    shortName: "Sports & Youth",
    icon: "⚽",
    description: "Federal Ministry of Sports & Youth Development, NFF, NYIF youth investment, and NIS."
  },
  {
    id: "diaspora",
    name: "Diaspora & Consular Services",
    shortName: "Diaspora Hub",
    icon: "🌍",
    description: "NIDCOM diaspora portal, BVN diaspora enrollment, diaspora housing mortgages, and e-Visas."
  }
];

// ============================================================================
// Trusted Daily News Feed Segregated Across All 9 Categories
// Sources: Punch Newspaper, TVC News, NTA News, Daily Times, BBC News Nigeria, CNN Africa, Channels TV
// ============================================================================
const DAILY_CATEGORY_NEWS = [
  // IDENTITY
  {
    id: "news-id-1",
    category: "identity",
    source: "Punch Newspaper",
    sourceClass: "source-punch",
    sourceUrl: "https://punchng.com",
    timeAgo: "2 hours ago",
    headline: "NIS rolls out contactless International Passport renewal across UK, US, Canada & Europe",
    summary: "Nigerians in the diaspora and local applicants can now upload ICAO-compliant photos on the NIS portal to fast-track passport booklet renewals without middlemen."
  },
  {
    id: "news-id-2",
    category: "identity",
    source: "NTA News",
    sourceClass: "source-nta",
    sourceUrl: "https://nta.ng",
    timeAgo: "4 hours ago",
    headline: "INEC announces final 5-day window for Continuous Voter Registration (CVR) & PVC transfer",
    summary: "Eligible voters who recently relocated or turned 18 are urged to complete online pre-registration on cvr.inecnigeria.org before the phase deadline."
  },
  {
    id: "news-id-3",
    category: "identity",
    source: "TVC News",
    sourceClass: "source-tvc",
    sourceUrl: "https://www.tvcnews.tv",
    timeAgo: "Today",
    headline: "NIMC upgrades self-service portal for faster NIN date-of-birth and name modifications",
    summary: "Applicants with NPC birth attestations can now track NIN record updates online to resolve bank and passport mismatches."
  },

  // EDUCATION, SCHOLARSHIPS & NYSC
  {
    id: "news-edu-1",
    category: "education",
    source: "Punch Newspaper",
    sourceClass: "source-punch",
    sourceUrl: "https://punchng.com",
    timeAgo: "1 hour ago",
    headline: "NYSC sets 4-day deadline for Prospective Corps Members & Foreign-Trained mobilization",
    summary: "Graduates on the approved Senate List and foreign-trained Nigerians have 4 days left to complete biometric capture on portal.nysc.org.ng."
  },
  {
    id: "news-edu-2",
    category: "education",
    source: "BBC News Nigeria",
    sourceClass: "source-bbc",
    sourceUrl: "https://www.bbc.com/news/topics/c50znx8v848t",
    timeAgo: "3 hours ago",
    headline: "PTDF Overseas & Local MSc/PhD Scholarship portal enters final 2 days of submission",
    summary: "Thousands of Nigerian engineering and science graduates rush to complete their Statement of Purpose uploads on scholarship.ptdf.gov.ng."
  },
  {
    id: "news-edu-3",
    category: "education",
    source: "Daily Times",
    sourceClass: "source-dailytimes",
    sourceUrl: "https://dailytimesng.com",
    timeAgo: "Today",
    headline: "NELFUND disburses institutional tuition fees and monthly stipends to additional state universities",
    summary: "Students in federal and state tertiary institutions can still apply for interest-free loans on nelf.gov.ng using their JAMB and NIN details."
  },

  // FINANCE, LOANS & MORTGAGES
  {
    id: "news-fin-1",
    category: "finance",
    source: "TVC News",
    sourceClass: "source-tvc",
    sourceUrl: "https://www.tvcnews.tv",
    timeAgo: "2 hours ago",
    headline: "FMBN expands 6% National Housing Fund & Diaspora Mortgage ceiling up to ₦50 Million",
    summary: "Contributors at home and Nigerians in the diaspora can now subscribe to Rent-to-Own and NHF housing estates nationwide."
  },
  {
    id: "news-fin-2",
    category: "finance",
    source: "CNN Africa",
    sourceClass: "source-cnn",
    sourceUrl: "https://edition.cnn.com/world/africa",
    timeAgo: "5 hours ago",
    headline: "Bank of Industry (BOI) & SMEDAN open single-digit MSME intervention window (5 days left)",
    summary: "Small businesses with valid CAC and SMEDAN SUIN certificates have 5 days remaining to submit equipment financing applications for the current batch."
  },

  // MILITARY, PARAMILITARY & SECURITY
  {
    id: "news-sec-1",
    category: "security",
    source: "NTA News",
    sourceClass: "source-nta",
    sourceUrl: "https://nta.ng",
    timeAgo: "1 hour ago",
    headline: "Nigerian Army issues 3-day closing notice for online Regular Recruits & DSSC portal",
    summary: "Army Headquarters reminds applicants that enlistment on recruitment.army.mil.ng is 100% free and warns against fraudulent WhatsApp shortlist agents."
  },
  {
    id: "news-sec-2",
    category: "security",
    source: "Channels TV",
    sourceClass: "source-channels",
    sourceUrl: "https://www.channelstv.com",
    timeAgo: "3 hours ago",
    headline: "CDCFIB & Nigeria Customs Service (NCS) release CBT screening schedule for paramilitary applicants",
    summary: "Shortlisted candidates for Civil Defence (NSCDC) and Nigeria Customs Service are advised to verify their exam centres strictly via official portals."
  },

  // TRANSPORT & DRIVING LICENSE
  {
    id: "news-trans-1",
    category: "transport",
    source: "Punch Newspaper",
    sourceClass: "source-punch",
    sourceUrl: "https://punchng.com",
    timeAgo: "3 hours ago",
    headline: "FRSC clears backlog of National Driver's Licenses and launches instant DLC capture booking",
    summary: "Motorists applying for 3-year or 5-year renewals on nigeriadriverslicence.org can now select express biometric capture slots nationwide."
  },
  {
    id: "news-trans-2",
    category: "transport",
    source: "Daily Times",
    sourceClass: "source-dailytimes",
    sourceUrl: "https://dailytimesng.com",
    timeAgo: "Today",
    headline: "Vehicle buyers urged to verify number plates on FRSC NVIS portal before payment",
    summary: "The free online NVIS verification tool helps Nigerians confirm genuine plate assignments and avoid cloned vehicles."
  },

  // HEALTH INSURANCE & MEDICAL
  {
    id: "news-hlt-1",
    category: "health",
    source: "BBC News Nigeria",
    sourceClass: "source-bbc",
    sourceUrl: "https://www.bbc.com/news/topics/c50znx8v848t",
    timeAgo: "4 hours ago",
    headline: "NHIA records surge in Diaspora Nigerians sponsoring GIFSHIP health insurance for parents at home",
    summary: "Through the National Health Insurance Authority GIFSHIP package, families gain cashless access to accredited teaching and private hospitals."
  },
  {
    id: "news-hlt-2",
    category: "health",
    source: "TVC News",
    sourceClass: "source-tvc",
    sourceUrl: "https://www.tvcnews.tv",
    timeAgo: "Today",
    headline: "NAFDAC extends discounted MSME product registration window — 4 days left for current cohort",
    summary: "Small food, beverage, and cosmetic producers can complete online NAPAMS registration at subsidized tariff rates this week."
  },

  // BUSINESS, TAX & PENSIONS
  {
    id: "news-biz-1",
    category: "business",
    source: "Daily Times",
    sourceClass: "source-dailytimes",
    sourceUrl: "https://dailytimesng.com",
    timeAgo: "2 hours ago",
    headline: "PenCom approves over ₦60bn in 25% RSA pension balances for workers' residential house mortgages",
    summary: "Contributors with 5+ years of pension savings can apply through their PFA to fund their home equity contribution."
  },
  {
    id: "news-biz-2",
    category: "business",
    source: "Punch Newspaper",
    sourceClass: "source-punch",
    sourceUrl: "https://punchng.com",
    timeAgo: "5 hours ago",
    headline: "FIRS reminds companies of 5-day deadline for TaxPro-Max annual returns & e-TCC renewal",
    summary: "Businesses bidding for federal contracts can generate instant electronic Tax Clearance Certificates on taxpromax.firs.gov.ng."
  },

  // SPORTS & YOUTH
  {
    id: "news-spt-1",
    category: "sports",
    source: "CNN Africa",
    sourceClass: "source-cnn",
    sourceUrl: "https://edition.cnn.com/world/africa",
    timeAgo: "3 hours ago",
    headline: "Nigeria Youth Investment Fund (NYIF) & National Sports Commission open talent and grant portal (3 days left)",
    summary: "Young Nigerian athletes, coaches, and youth-led enterprises aged 18–35 have 3 days left to submit applications for the current grant batch."
  },
  {
    id: "news-spt-2",
    category: "sports",
    source: "TVC News",
    sourceClass: "source-tvc",
    sourceUrl: "https://www.tvcnews.tv",
    timeAgo: "Today",
    headline: "NFF & National Institute for Sports (NIS) announce new CAF/NFF coaching license intake",
    summary: "Grassroots football coaches and sports administrators can verify accredited training dates on thenff.com."
  },

  // DIASPORA & CONSULAR
  {
    id: "news-dia-1",
    category: "diaspora",
    source: "BBC News Nigeria",
    sourceClass: "source-bbc",
    sourceUrl: "https://www.bbc.com/news/topics/c50znx8v848t",
    timeAgo: "1 hour ago",
    headline: "NIDCOM &FMBN host Diaspora Investment and Housing Mortgage Registration (4 days to cutoff)",
    summary: "Nigerians living abroad can register on nidcom.gov.ng to participate in the Diaspora Smart City housing allocation and investment summit."
  },
  {
    id: "news-dia-2",
    category: "diaspora",
    source: "NTA News",
    sourceClass: "source-nta",
    sourceUrl: "https://nta.ng",
    timeAgo: "Today",
    headline: "CBN & NIBSS launch Non-Resident Nigerian (NRN) digital BVN platform for diaspora accounts",
    summary: "Nigerians abroad can now obtain or link their BVN remotely without visiting physical embassy queues."
  }
];

// ============================================================================
// Official Nigerian Portals Database
// Includes `daysLeft` (<= 5 triggers the Red Closing Soon Notice Tag)
// and `posterRole` / `posterHeadline` for the Social Media Poster Designer
// ============================================================================
const INITIAL_PORTALS = [
  // ============================================================================
  // 1. IDENTITY, PASSPORT & VOTERS REGISTRATION
  // ============================================================================
  {
    id: "nis-passport",
    title: "Nigeria International Passport Portal",
    acronym: "NIS",
    agencyFull: "Nigeria Immigration Service",
    category: "identity",
    url: "https://passport.immigration.gov.ng",
    domain: "passport.immigration.gov.ng",
    description: "Apply for a new Nigerian International e-Passport, renew an expired passport (at home or contactless in the diaspora), pay statutory fees online, and book biometric capture appointments.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Statutory Fee (32p / 64p)",
    windowStatus: "Open 24/7 Online",
    daysLeft: null,
    posterType: "APPLICATION OPEN",
    posterSubtitle: "Fresh e-Passport & Contactless Diaspora Renewal",
    popularRank: 1,
    keywords: ["passport", "international passport", "immigration", "visa", "renewal", "nis", "travel", "biometrics"],
    requirements: [
      "Valid 11-digit National Identification Number (NIN) with matching name & Date of Birth",
      "Birth Certificate (from NPC) or Declaration of Age (for fresh applicants)",
      "Local Government Certificate of Origin (for fresh applications)",
      "ICAO-compliant digital passport photograph (for contactless renewal)",
      "Old passport booklet data page (for renewals)"
    ],
    steps: [
      "Visit passport.immigration.gov.ng and select Apply from Nigeria or Apply from Outside Nigeria (Diaspora).",
      "Enter your NIN to validate your identity against NIMC records.",
      "Select booklet type (32-page 5-year or 64-page 10-year) and processing centre/embassy.",
      "Pay exclusively online via the integrated payment gateway and print your payment receipt.",
      "Schedule your biometric capture date (or complete contactless renewal via the NIS mobile app)."
    ],
    proTip: "Your name order and Date of Birth on your NIN MUST match exactly what you want on your passport before you pay."
  },
  {
    id: "inec-cvr",
    title: "Nigeria Voters Registration Portal (INEC CVR)",
    acronym: "INEC",
    agencyFull: "Independent National Electoral Commission",
    category: "identity",
    url: "https://cvr.inecnigeria.org",
    domain: "cvr.inecnigeria.org",
    description: "Pre-register as a new Nigerian voter, transfer your polling unit to a new neighborhood/state, replace damaged or lost Permanent Voter's Cards (PVC), and check your voter status.",
    diasporaReady: false,
    isFree: true,
    costLabel: "100% Free",
    windowStatus: "Current CVR Phase Closing in 5 Days",
    daysLeft: 5,
    deadlineNote: "Current Continuous Voter Registration (CVR) online pre-registration phase closes in 5 days!",
    posterType: "CLOSING IN 5 DAYS",
    posterSubtitle: "Continuous Voter Registration (CVR) & PVC Transfer",
    popularRank: 2,
    keywords: ["voter", "voters registration", "pvc", "inec", "election", "polling unit", "vote"],
    requirements: [
      "Must be a Nigerian citizen aged 18 years or older",
      "Active email address and Nigerian phone number",
      "Existing Voter Identification Number (VIN) if transferring polling unit or replacing PVC",
      "Clear passport photograph for online pre-registration"
    ],
    steps: [
      "Visit cvr.inecnigeria.org and create a free portal account.",
      "Select 'New Voter Pre-Registration', 'Voter Review', or 'Transfer of Registered Voter'.",
      "Fill in your biodata, upload required supporting photos, and choose your preferred Polling Unit.",
      "Schedule an appointment for physical fingerprint capture at an INEC centre."
    ],
    proTip: "Never register twice! If you registered years ago and moved cities, use the 'Voter Transfer' option instead of starting a new registration."
  },
  {
    id: "nimc-selfservice",
    title: "NIN Self-Service & Modification Portal",
    acronym: "NIMC",
    agencyFull: "National Identity Management Commission",
    category: "identity",
    url: "https://selfservicemodification.nimc.gov.ng",
    domain: "nimc.gov.ng",
    description: "Official portal for modifying National Identification Number (NIN) details (name, date of birth, phone number, address), checking NIN enrollment centres, and downloading improved NIN slips.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Verification Free / Mod Fee",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "OFFICIAL PORTAL OPEN",
    posterSubtitle: "Online NIN Modification & Digital Slip Download",
    popularRank: 5,
    keywords: ["nin", "nimc", "national id", "modification", "date of birth", "name correction"],
    requirements: [
      "11-digit National Identification Number (NIN)",
      "NPC Birth Certificate or Gazette + Sworn Affidavit (for Date of Birth / Name changes)",
      "Active phone number linked to your NIN"
    ],
    steps: [
      "Log in to the official NIMC Self-Service Modification portal with your NIN.",
      "Select the field you wish to update (Name, Date of Birth, Address, or Phone).",
      "Pay the statutory NIMC modification fee directly via Remita/portal.",
      "Upload supporting legal documents and download your updated NIN slip once approved."
    ],
    proTip: "Date of Birth on NIN can only be modified ONCE in a lifetime and requires an official National Population Commission (NPC) birth certificate."
  },
  {
    id: "npc-attestation",
    title: "NPC Birth Certificate & Age Attestation Portal",
    acronym: "NPC",
    agencyFull: "National Population Commission",
    category: "identity",
    url: "https://birthattestation.com",
    domain: "nationalpopulation.gov.ng",
    description: "Register births digitally or apply for an official NPC Birth Attestation Certificate required by NIS for passports, NIMC for NIN corrections, and embassies.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Statutory Processing Fee",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "APPLICATION OPEN",
    posterSubtitle: "Digital Birth Registration & Age Attestation Certificate",
    popularRank: 16,
    keywords: ["birth certificate", "npc", "declaration of age", "birth attestation", "population"],
    requirements: [
      "Applicant's valid NIN",
      "Court Affidavit of Birth / Age Declaration",
      "Parents' details (full names, state/LGA of origin)"
    ],
    steps: [
      "Log in with your NIN to auto-populate your primary identity data.",
      "Fill in birth place and parental details and upload your sworn court affidavit.",
      "Complete payment and select your nearest NPC state office for endorsement/download."
    ],
    proTip: "Court affidavits alone are no longer accepted for NIN Date of Birth modification; you must obtain the NPC Birth Attestation."
  },

  // ============================================================================
  // 2. EDUCATION, SCHOLARSHIPS & NYSC
  // ============================================================================
  {
    id: "nysc-portal",
    title: "NYSC Integrated Mobilization Portal",
    acronym: "NYSC",
    agencyFull: "National Youth Service Corps",
    category: "education",
    url: "https://portal.nysc.org.ng",
    domain: "portal.nysc.org.ng",
    description: "Official portal for Prospective Corps Members (PCMs) — Nigerian and foreign-trained graduates — to register for mobilization, print Call-Up letters, apply for relocation, or obtain Exemption Certificates.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Optional Online Call-Up (~₦3,000)",
    windowStatus: "Stream Registration Closing in 4 Days",
    daysLeft: 4,
    deadlineNote: "Online registration for Prospective Corps Members (Local & Foreign-Trained) closes in 4 days!",
    posterType: "MOBILIZATION OPEN",
    posterSubtitle: "NYSC Online Registration for Local & Foreign-Trained Graduates",
    popularRank: 3,
    keywords: ["nysc", "youth service", "corpers", "call up letter", "mobilization", "senate list", "foreign trained"],
    requirements: [
      "Name on Institution's Senate/Academic Board Approved List (or Foreign-Trained documents)",
      "JAMB Admission Letter & Matriculation Number",
      "Valid NIN and white-background passport photograph",
      "Degree/HND Certificate, Transcript, and International Passport data page (for Foreign-Trained graduates)"
    ],
    steps: [
      "Check the Senate List on portal.nysc.org.ng using your Institution, Matric Number, and Surname.",
      "Click 'Mobilization Batch Registration' while the portal window is open.",
      "Verify your NIN and capture biometrics using an accredited digital fingerprint scanner.",
      "Foreign-trained graduates upload degree certificates, transcripts, WAEC/NECO, and passport stamps.",
      "Log back in to print your Green Card and Call-Up Letter."
    ],
    proTip: "Foreign-trained graduates from the diaspora should ensure their university is accredited in the host country and upload clear entry/exit visa pages."
  },
  {
    id: "ptdf-scholarship",
    title: "PTDF Overseas & Local Scholarship Portal (MSc & PhD)",
    acronym: "PTDF",
    agencyFull: "Petroleum Technology Development Fund",
    category: "education",
    url: "https://scholarship.ptdf.gov.ng",
    domain: "scholarship.ptdf.gov.ng",
    description: "Fully-funded MSc and PhD scholarships in the UK, Germany, France, Malaysia, and Nigerian federal universities for Nigerian graduates in engineering, computing, renewable energy, and geosciences.",
    diasporaReady: true,
    isFree: true,
    costLabel: "100% Free (Fully Funded Award)",
    windowStatus: "Closing in 2 Days!",
    daysLeft: 2,
    deadlineNote: "URGENT: PTDF Overseas & Local MSc/PhD Scholarship portal closes in 2 days!",
    posterType: "SCHOLARSHIP OPEN",
    posterSubtitle: "Fully-Funded Overseas & Local MSc / PhD Scholarships",
    popularRank: 4,
    keywords: ["ptdf", "scholarship", "masters", "phd", "overseas scholarship", "oil and gas", "engineering"],
    requirements: [
      "Minimum of Second Class Upper (2:1) or 2:2 with relevant industry experience",
      "NYSC Discharge or Exemption Certificate",
      "5 O'Level credits including English Language and Mathematics",
      "Statement of Purpose (for MSc) or Research Proposal (for PhD) + NIN verification"
    ],
    steps: [
      "Create an applicant account at scholarship.ptdf.gov.ng and verify your NIN.",
      "Choose either Overseas Scholarship Scheme (OSS) or Local Scholarship Scheme (LSS).",
      "Upload degree certificates, transcripts, NYSC discharge certificate, and Local Government identification.",
      "Submit your Statement of Purpose or PhD Research Proposal before the 48-hour cutoff."
    ],
    proTip: "Verify your NIN on the PTDF portal first before filling the application, as name mismatches automatically disqualify applications."
  },
  {
    id: "nelfund-loan",
    title: "NELFUND Nigerian Student Loan Portal",
    acronym: "NELFUND",
    agencyFull: "Nigerian Education Loan Fund",
    category: "education",
    url: "https://nelf.gov.ng",
    domain: "nelf.gov.ng",
    description: "Interest-free Federal Government student loan portal covering 100% of institutional tuition charges plus monthly upkeep stipends for students in Nigerian public universities, polytechnics, and colleges of education.",
    diasporaReady: false,
    isFree: true,
    costLabel: "100% Free (0% Interest Loan)",
    windowStatus: "Open for Federal & State Tertiary Students",
    daysLeft: null,
    posterType: "STUDENT LOAN OPEN",
    posterSubtitle: "100% Tuition Coverage + Monthly Upkeep Allowance",
    popularRank: 5,
    keywords: ["student loan", "nelfund", "scholarship", "school fees", "tuition", "upkeep", "university loan", "loaning"],
    requirements: [
      "JAMB Admission Number and Matriculation Number",
      "Student's data uploaded by their institution onto the NELFUND Student Verification System",
      "Valid NIN and BVN (Bank Verification Number)",
      "Student's personal bank account number (for monthly upkeep disbursement)"
    ],
    steps: [
      "Visit nelf.gov.ng and click 'Apply Now' to create a student profile.",
      "Verify your identity using your NIN, BVN, and JAMB registration details.",
      "Confirm your institution and matriculation number (auto-verified against your school's database).",
      "Upload your admission letter and student ID/school fees invoice.",
      "Select whether you also want the monthly upkeep allowance in addition to institutional fees."
    ],
    proTip: "Repayment only begins two years AFTER completing your NYSC, and only once you are gainfully employed or self-employed."
  },
  {
    id: "fsb-scholarship",
    title: "Federal Scholarship Board (BEA & Nigerian Awards)",
    acronym: "FSB",
    agencyFull: "Federal Ministry of Education — Federal Scholarship Board",
    category: "education",
    url: "https://education.gov.ng/federal-scholarship-board/",
    domain: "education.gov.ng",
    description: "Access Federal Government Bilateral Educational Agreement (BEA) scholarships to study abroad, Nigerian Award (NA) scholarships for local undergraduate/postgraduate students, and Commonwealth Scholarships.",
    diasporaReady: true,
    isFree: true,
    costLabel: "100% Free Application",
    windowStatus: "Annual Scholarship Window Open",
    daysLeft: null,
    posterType: "SCHOLARSHIP OPEN",
    posterSubtitle: "Federal Bilateral (BEA) & Nigerian Tertiary Scholarships",
    popularRank: 6,
    keywords: ["scholarship", "federal scholarship", "bea", "commonwealth", "study abroad", "undergraduate scholarship", "postgraduate"],
    requirements: [
      "5 Distinctions (As & Bs) in WAEC/WASSCE including English and Mathematics (for BEA undergraduate)",
      "Minimum CGPA of 4.0/5.0 or Second Class Upper (for Nigerian Award / Postgraduate)",
      "Admission letter / ID card from a recognized Nigerian university (for local awards)",
      "State of Origin Indigene Certificate and NIN"
    ],
    steps: [
      "Visit the Federal Ministry of Education / Federal Scholarship Board portal.",
      "Select the scholarship scheme (BEA Overseas, Nigerian Award, or Commonwealth).",
      "Complete the online form and upload scanned copies of your academic transcripts/WAEC results.",
      "Select your CBT examination centre in your geopolitical zone and print your photocard."
    ],
    proTip: "Federal Scholarship Board applications and CBT exams are completely FREE. Reject anyone asking for money to 'slot' your name."
  },
  {
    id: "jamb-efacility",
    title: "JAMB e-Facility & CAPS Admission Portal",
    acronym: "JAMB",
    agencyFull: "Joint Admissions and Matriculation Board",
    category: "education",
    url: "https://efacility.jamb.gov.ng",
    domain: "efacility.jamb.gov.ng",
    description: "Check UTME/Direct Entry admission status on CAPS, print original JAMB Admission Letters and Result Slips, apply for JAMB Regularization (required for NYSC), and change courses/institutions.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Free CAPS Check / Statutory Fees",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "PORTAL ACTIVE",
    posterSubtitle: "JAMB CAPS Admission Acceptance & NYSC Regularization",
    popularRank: 11,
    keywords: ["jamb", "caps", "utme", "admission letter", "regularization", "university", "school"],
    requirements: [
      "JAMB Registration Number and registered email address",
      "JAMB Profile Code (generated by sending NIN to 55019 or 66019)"
    ],
    steps: [
      "Log in at efacility.jamb.gov.ng with your registered email and password.",
      "Click 'Access my CAPS' to accept or reject university/polytechnic admission offers.",
      "Use 'Print Admission Letter' or 'Late Application (Regularization)' if preparing for NYSC."
    ],
    proTip: "Every graduate whose admission was not originally on JAMB CAPS must complete 'JAMB Regularization' here before NYSC mobilization."
  },

  // ============================================================================
  // 3. LOANS, HOUSE MORTGAGES & GRANTS
  // ============================================================================
  {
    id: "fmbn-mortgage",
    title: "Federal Mortgage Bank of Nigeria (NHF & Diaspora Mortgage)",
    acronym: "FMBN",
    agencyFull: "Federal Mortgage Bank of Nigeria",
    category: "finance",
    url: "https://www.fmbn.gov.ng",
    domain: "fmbn.gov.ng",
    description: "Official Nigerian government house mortgage platform. Access National Housing Fund (NHF) single-digit (6%) home mortgages up to ₦50M, Rent-to-Own housing schemes, Home Renovation Loans, and the Diaspora NHF Mortgage.",
    diasporaReady: true,
    isFree: false,
    costLabel: "6% – 9% Single-Digit Mortgage",
    windowStatus: "Open to NHF Contributors & Diaspora",
    daysLeft: null,
    posterType: "MORTGAGE WINDOW OPEN",
    posterSubtitle: "6% NHF Home Mortgage & Rent-To-Own Housing Scheme",
    popularRank: 4,
    keywords: ["mortgage", "house mortgage", "housing", "fmbn", "nhf", "loan", "loaning", "real estate", "rent to own", "diaspora mortgage"],
    requirements: [
      "NHF Registration Number and minimum of 6 months contribution (or Diaspora NHF contribution for 12 months)",
      "Accredited Primary Mortgage Bank (PMB) account to package the loan application",
      "Valid title document (Certificate of Occupancy / Registered Deed) for the property being purchased",
      "3 years Tax Clearance Certificate and payslips/proof of income"
    ],
    steps: [
      "Visit fmbn.gov.ng or dial *219# to check your NHF contribution status.",
      "Choose your preferred housing product: Individual NHF Mortgage Loan, Rent-to-Own, Construction Loan, or Diaspora NHF Mortgage.",
      "For NHF Mortgage: Apply through any FMBN-accredited Primary Mortgage Bank (PMB) with the property title documents.",
      "For Rent-to-Own: Select an FMBN-funded housing estate in your desired state and submit your application form."
    ],
    proTip: "Nigerians in the Diaspora can now get up to ₦50 Million at 9% interest for up to 10 years to buy or build a home in Nigeria via the FMBN Diaspora Mortgage."
  },
  {
    id: "boi-loans",
    title: "Bank of Industry (BOI) SME & Graduate Intervention Loans",
    acronym: "BOI",
    agencyFull: "Bank of Industry Nigeria",
    category: "finance",
    url: "https://www.boi.ng",
    domain: "boi.ng",
    description: "Apply for single-digit business loans, MSME intervention funds, Graduate Entrepreneurship Fund (GEF) for NYSC members, Youth Ignite, and Presidential Conditional Grants & Manufacturing loans.",
    diasporaReady: true,
    isFree: true,
    costLabel: "Free Online Application",
    windowStatus: "Current MSME Tranche Closing in 5 Days",
    daysLeft: 5,
    deadlineNote: "Current BOI MSME & Graduate Entrepreneurship batch closes in 5 days!",
    posterType: "FUNDING WINDOW OPEN",
    posterSubtitle: "Single-Digit MSME & Graduate Business Intervention Loans",
    popularRank: 7,
    keywords: ["boi", "bank of industry", "business loan", "loaning", "grant", "sme", "manufacturing", "youth loan"],
    requirements: [
      "CAC Business Name or Limited Liability Company Registration",
      "BVN and NIN of business proprietors/directors",
      "Business Plan and Proforma Invoice for equipment (for industrial/SME loans)",
      "Tax Identification Number (TIN) and SMEDAN Certificate"
    ],
    steps: [
      "Visit boi.ng and click 'Apply for a Loan' to access the BOI Online Loan Application Portal.",
      "Register an account and select the appropriate fund (Micro, SME, Youth/NYSC, or Large Enterprise).",
      "Upload CAC documents, financial statements/business plan, and equipment invoices.",
      "Track your loan appraisal progress directly on the dashboard."
    ],
    proTip: "BOI loans are strictly for productive equipment and working capital — not for trading imported finished goods."
  },
  {
    id: "fha-housing",
    title: "Federal Housing Authority (FHA) Estates & Diaspora City",
    acronym: "FHA",
    agencyFull: "Federal Housing Authority",
    category: "finance",
    url: "https://fha.gov.ng",
    domain: "fha.gov.ng",
    description: "Explore and subscribe to Federal Government mass housing estates, Renewed Hope Housing units, and the FHA Diaspora Smart City housing initiatives across Nigeria.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Outright or Mortgage Installment",
    windowStatus: "Open for Subscriptions",
    daysLeft: null,
    posterType: "HOUSING ALLOCATION OPEN",
    posterSubtitle: "Federal Mass Housing & Diaspora Smart City Subscriptions",
    popularRank: 15,
    keywords: ["fha", "federal housing", "mortgage", "house", "buy house", "estate", "diaspora city"],
    requirements: [
      "Valid Nigerian ID (NIN, International Passport, or Driver's License)",
      "Completed FHA Housing Allocation Application Form",
      "Proof of income or Mortgage pre-qualification from FHA Mortgage Bank"
    ],
    steps: [
      "Browse available estates and ongoing housing developments on fha.gov.ng.",
      "Select the state and house typology (1, 2, 3-bedroom bungalows/terraces/duplexes).",
      "Apply via FHA or FHA Mortgage Bank Limited for structured mortgage payment plans."
    ],
    proTip: "Always verify land/house allocations directly through FHA headquarters or official zonal offices listed on fha.gov.ng."
  },
  {
    id: "credicorp-credit",
    title: "CREDICORP Nigerian Consumer Credit Portal",
    acronym: "CREDICORP",
    agencyFull: "Nigerian Consumer Credit Corporation",
    category: "finance",
    url: "https://credicorp.ng",
    domain: "credicorp.ng",
    description: "Federal Government consumer credit scheme enabling working Nigerians to access affordable credit/loans for solar home systems, compressed natural gas (CNG) vehicle conversions, locally assembled vehicles, and household needs.",
    diasporaReady: false,
    isFree: true,
    costLabel: "Free Application / Low-Rate Credit",
    windowStatus: "Open for Civil Servants & Private Workers",
    daysLeft: null,
    posterType: "CREDIT SCHEME OPEN",
    posterSubtitle: "Federal Consumer Credit for Solar, Mobility & Household Needs",
    popularRank: 8,
    keywords: ["loan", "loaning", "credit", "credicorp", "consumer credit", "federal loan", "salary loan"],
    requirements: [
      "Bank Verification Number (BVN) and National Identification Number (NIN)",
      "Verifiable monthly income (IPPIS for federal workers, state payroll, or private sector salary)",
      "Active bank account and phone number"
    ],
    steps: [
      "Visit credicorp.ng and select 'Apply for Credit' or choose a Participating Financial Institution (PFI).",
      "Enter your NIN, BVN, and employment details for automated credit scoring.",
      "Select the credit purpose and receive disbursement via partner banks."
    ],
    proTip: "CREDICORP works through Participating Financial Institutions (PFIs) and never asks for an upfront 'processing fee' into a personal account."
  },
  {
    id: "smedan-portal",
    title: "SMEDAN MSME Registration & Grants Portal",
    acronym: "SMEDAN",
    agencyFull: "Small and Medium Enterprises Development Agency of Nigeria",
    category: "finance",
    url: "https://smedanregister.ng",
    domain: "smedan.gov.ng",
    description: "Obtain your free official SMEDAN Unique Identification Number (SUIN) certificate to unlock Federal Government MSME grants, low-interest loans, and capacity-building programs.",
    diasporaReady: true,
    isFree: true,
    costLabel: "100% Free SMEDAN Certificate",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "GRANT REGISTRATION OPEN",
    posterSubtitle: "Free SMEDAN MSME Registration & Conditional Grant Access",
    popularRank: 14,
    keywords: ["smedan", "grant", "small business", "loan", "msme", "suin", "entrepreneur"],
    requirements: [
      "Business details (registered with CAC or informal micro-enterprise)",
      "Owner's NIN/BVN, phone number, and email address"
    ],
    steps: [
      "Go to smedanregister.ng and fill out your business profile.",
      "Submit your contact and sector details.",
      "Instantly download your SMEDAN Unique Identification Number (SUIN) certificate for free."
    ],
    proTip: "Most Federal Government small business grants and Bank of Industry micro-funds require a SMEDAN registration certificate."
  },

  // ============================================================================
  // 4. MILITARY, PARAMILITARY & SECURITY PORTALS
  // ============================================================================
  {
    id: "nigerian-army",
    title: "Nigerian Army Recruitment Portal (DSSC, SSC & RRI)",
    acronym: "NA",
    agencyFull: "Nigerian Army Headquarters",
    category: "security",
    url: "https://recruitment.army.mil.ng",
    domain: "recruitment.army.mil.ng",
    description: "Official recruitment portal of the Nigerian Army for Regular Recruits Intake (RRI) for non-tradesmen/tradesmen and Short Service Combatant (SSC) / Direct Short Service Commission (DSSC) for graduates.",
    diasporaReady: false,
    isFree: true,
    costLabel: "100% FREE Recruitment",
    windowStatus: "Portal Closing in 3 Days!",
    daysLeft: 3,
    deadlineNote: "URGENT: Nigerian Army online recruitment portal closes in 3 days! Application is 100% FREE.",
    posterType: "RECRUITMENT OPEN",
    posterSubtitle: "Nigerian Army Regular Recruits & Short Service Commission",
    popularRank: 2,
    keywords: ["army", "nigerian army", "soldier", "military", "recruitment", "dssc", "ssc", "rri"],
    requirements: [
      "Nigerian citizen by birth with valid NIN and State of Origin Certificate",
      "Minimum of 4 credits in maximum of 2 sittings (WASSCE/NECO/NABTEB) for Regular Recruits",
      "BSc/HND (minimum Second Class Lower / Lower Credit) + NYSC Certificate for SSC/DSSC Officers",
      "Age: 18–22 years (Non-Tradesmen), 18–26 years (Tradesmen), 23–27/30 years (Officers); Height: min 1.68m (M), 1.65m (F)"
    ],
    steps: [
      "Visit recruitment.army.mil.ng and create an account with your email and NIN.",
      "Complete the online application form and upload your passport photo, educational certificates, and indigene letter.",
      "Print your Guarantors Form and Photo Card before the 3-day deadline to present at the State Screening Centre."
    ],
    proTip: "Nigerian Army recruitment is 100% FREE. The official domain is strictly '.army.mil.ng' — ignore any WhatsApp message asking you to pay for medicals or shortlist."
  },
  {
    id: "nscdc-civil-defense",
    title: "Nigeria Security & Civil Defence Corps (NSCDC / CDCFIB) Portal",
    acronym: "NSCDC",
    agencyFull: "Nigeria Security and Civil Defence Corps",
    category: "security",
    url: "https://cdcfib.career",
    domain: "cdcfib.career / nscdc.gov.ng",
    description: "Official recruitment and institutional portal for the Nigeria Security and Civil Defence Corps (NSCDC) managed jointly with the Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB).",
    diasporaReady: false,
    isFree: true,
    costLabel: "100% FREE Recruitment",
    windowStatus: "CDCFIB Verification Closing in 5 Days",
    daysLeft: 5,
    deadlineNote: "CDCFIB / NSCDC applicant document upload & CBT verification closes in 5 days!",
    posterType: "RECRUITMENT OPEN",
    posterSubtitle: "Civil Defence (NSCDC) & Paramilitary Career Enlistment",
    popularRank: 5,
    keywords: ["civil defense", "civil defence", "nscdc", "cdcfib", "paramilitary", "security", "fire service", "immigration recruitment"],
    requirements: [
      "Nigerian citizenship by birth and valid NIN",
      "WASSCE/NECO/GCE with 5 credits including English and Mathematics (for Inspectorate/Assistant cadres)",
      "HND/Bachelor's Degree + NYSC Discharge/Exemption Certificate (for Superintendent cadre)",
      "Height not less than 1.65m for males and 1.60m for females; medically and physically fit"
    ],
    steps: [
      "Visit cdcfib.career (the unified board portal for NSCDC, NIS, FFS, and NCoS) or nscdc.gov.ng.",
      "Select the Nigeria Security and Civil Defence Corps (NSCDC) recruitment stream.",
      "Fill in your NIN, academic qualifications, and state of origin.",
      "Print the Referee/Guarantor form and monitor your application status for CBT and physical screening dates."
    ],
    proTip: "All four Interior Ministry paramilitary agencies (Civil Defence, Immigration, Fire Service, and Correctional Service) recruit strictly via cdcfib.career."
  },
  {
    id: "nigeria-customs",
    title: "Nigeria Customs Service (NCS) Recruitment & Trade Portal",
    acronym: "NCS",
    agencyFull: "Nigeria Customs Service",
    category: "security",
    url: "https://customs.gov.ng",
    domain: "customs.gov.ng",
    description: "Official gateway for the Nigeria Customs Service: access the NCS e-Recruitment portal, B'Odogwu Unified Customs Management System, e-Auction portal, and vehicle customs duty verification.",
    diasporaReady: true,
    isFree: true,
    costLabel: "100% Free Recruitment / Official Tariffs",
    windowStatus: "Portal Active 24/7",
    daysLeft: null,
    posterType: "RECRUITMENT & TRADE HUB",
    posterSubtitle: "Nigeria Customs Service Career Portal & Vehicle Duty Verification",
    popularRank: 4,
    keywords: ["custom", "customs", "nigeria custom", "ncs", "tariff", "clearing", "recruitment", "auction", "vehicle duty"],
    requirements: [
      "For Recruitment: Nigerian citizen by birth, NIN, O'Level/ND/HND/BSc + NYSC (for Superintendent cadre)",
      "For Vehicle/Trade Verification: Vehicle Identification Number (VIN) / Chassis Number or TIN"
    ],
    steps: [
      "Visit customs.gov.ng to access official Nigeria Customs announcements, trade portals, and recruitment.",
      "For recruitment cycles, click the official 'Vacancies / e-Recruitment' link on customs.gov.ng.",
      "For importers and diaspora shipping vehicles home, use the Trade Portal / B'Odogwu links to verify genuine customs duties."
    ],
    proTip: "Nigeria Customs does NOT auction cars via Facebook or Telegram pages. Only use the verified portal linked directly from customs.gov.ng."
  },
  {
    id: "nigerian-navy",
    title: "Nigerian Navy Recruitment Portal (NNR & DSSC)",
    acronym: "NN",
    agencyFull: "Nigerian Navy",
    category: "security",
    url: "https://www.joinnigeriannavy.com",
    domain: "joinnigeriannavy.com",
    description: "Official portal for joining the Nigerian Navy Basic Training School (NNBTS) for ratings and Direct Short Service Commission (DSSC) for graduate specialists.",
    diasporaReady: false,
    isFree: true,
    costLabel: "100% Free Application",
    windowStatus: "Open During Batch Intakes",
    daysLeft: null,
    posterType: "RECRUITMENT OPEN",
    posterSubtitle: "Nigerian Navy Ratings (NNBTS) & Direct Short Service Commission",
    popularRank: 12,
    keywords: ["navy", "nigerian navy", "military", "sailor", "nnbts", "recruitment"],
    requirements: [
      "Nigerian citizen by birth with valid NIN and BVN",
      "5 O'Level credits (WASSCE/NECO/GCE/NABTEB) in not more than 2 sittings",
      "BSc/HND + NYSC Certificate for DSSC Officer applicants"
    ],
    steps: [
      "Visit joinnigeriannavy.com and click 'Register' when the portal is open.",
      "Verify your NIN and complete the online registration form.",
      "Select your preferred aptitude test centre and print your Parent/Guardian Consent and Guarantor forms."
    ],
    proTip: "Applicants with tattoos or dual citizenship are ineligible for military enlistment under Harmonized Terms and Conditions of Service."
  },
  {
    id: "nigerian-airforce",
    title: "Nigerian Air Force Recruitment Portal (BMTC & DSSC)",
    acronym: "NAF",
    agencyFull: "Nigerian Air Force",
    category: "security",
    url: "https://nafrecruitment.airforce.mil.ng",
    domain: "nafrecruitment.airforce.mil.ng",
    description: "Enlistment portal for Nigerian Air Force Airmen/Airwomen (Basic Military Training Course - BMTC) and Direct Short Service Commission (DSSC) cadets.",
    diasporaReady: false,
    isFree: true,
    costLabel: "100% Free Application",
    windowStatus: "Open During Annual Intakes",
    daysLeft: null,
    posterType: "RECRUITMENT OPEN",
    posterSubtitle: "Nigerian Air Force Airmen/Airwomen (BMTC) & DSSC Enlistment",
    popularRank: 13,
    keywords: ["air force", "naf", "nigerian air force", "bmtc", "pilot", "military", "recruitment"],
    requirements: [
      "Nigerian citizenship by birth, NIN, and Local Government Indigene Certificate",
      "Minimum of 5 credits including Mathematics and English for BMTC Non-Tradesmen/Tradesmen",
      "First Degree / HND (minimum Second Class Lower / Upper Credit) + NYSC Certificate for DSSC"
    ],
    steps: [
      "Access nafrecruitment.airforce.mil.ng during active recruitment exercises.",
      "Complete the online application and print the Acknowledgment Slip, Attestation Form, and Parent/Guardian Consent Form.",
      "Attend the Zonal Selection Board screening with original credentials."
    ],
    proTip: "Ensure your Local Government Attestation Form is signed by a Military Officer (Wing Commander or equivalent and above) or Local Government Chairman."
  },
  {
    id: "npf-police",
    title: "Nigeria Police Force Recruitment & Character Certificate (POSSAP)",
    acronym: "NPF",
    agencyFull: "Nigeria Police Force / Police Service Commission",
    category: "security",
    url: "https://possap.gov.ng",
    domain: "possap.gov.ng / apply.policerecruitment.gov.ng",
    description: "Request official Police Character Certificates (PCC) for international visa/travel or diaspora residency via POSSAP, report cybercrime, or access the Police Service Commission recruitment portal.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Recruitment Free / PCC Statutory Fee",
    windowStatus: "POSSAP Open 24/7",
    daysLeft: null,
    posterType: "RECRUITMENT & SERVICES",
    posterSubtitle: "NPF Constable Recruitment & POSSAP Character Certificate",
    popularRank: 10,
    keywords: ["police", "npf", "police character certificate", "possap", "tinted permit", "police recruitment"],
    requirements: [
      "Valid NIN and International Passport data page (for Police Character Certificate)",
      "Passport photograph and biometric capture (or Diaspora Embassy fingerprint form)"
    ],
    steps: [
      "For Police Character Certificate, Tinted Permit, or CMR: Visit possap.gov.ng and create an account with your NIN.",
      "Select 'Police Character Certificate', pay the official invoice on Remita, and pick a biometric capture state.",
      "For Constable Recruitment: Visit apply.policerecruitment.gov.ng during active PSC intakes."
    ],
    proTip: "Nigerians in the diaspora applying for permanent residency abroad can request their official Police Character Certificate directly on possap.gov.ng."
  },

  // ============================================================================
  // 5. DRIVING LICENSE & VEHICLE PORTALS
  // ============================================================================
  {
    id: "frsc-dl",
    title: "Nigeria National Driver's License Portal (FRSC)",
    acronym: "FRSC",
    agencyFull: "Federal Road Safety Corps",
    category: "transport",
    url: "https://www.nigeriadriverslicence.org",
    domain: "nigeriadriverslicence.org",
    description: "Official portal for applying for a Fresh Nigerian Driver's License, renewing an expired Driver's License (3-year or 5-year validity), re-issuing a lost license, and booking DLC biometric capture.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Statutory Fee (3-Yr or 5-Yr)",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "APPLICATION OPEN",
    posterSubtitle: "National Driver's License Fresh Application & Express Renewal",
    popularRank: 3,
    keywords: ["driving license", "driver license", "drivers licence", "frsc", "road safety", "driving school", "vehicle"],
    requirements: [
      "Valid 11-digit National Identification Number (NIN)",
      "Driving School Certificate Number from an FRSC-accredited driving school (for fresh applicants only)",
      "Previous Driver's License Number and Date of Birth (for renewals)",
      "Vision test and physical biometric capture at VIO / FRSC Driver's License Centre (DLC)"
    ],
    steps: [
      "Visit nigeriadriverslicence.org and click 'DL Application' -> 'New Driver's License' or 'Renewal'.",
      "For Fresh Applicants: Enter your accredited Driving School Certificate number and NIN.",
      "For Renewals: Enter your existing Driver's License Number and Date of Birth to pull up your record.",
      "Select 3-year or 5-year validity, pay online via Remita/card, and print your payment confirmation slip.",
      "Present the slip at your chosen VIO/MVAA office and FRSC DLC for biometric capture."
    ],
    proTip: "You can verify if your current Nigerian Driver's License is genuine by entering its number on nigeriadriverslicence.org — crucial for Nigerians converting their license abroad."
  },
  {
    id: "frsc-nvis",
    title: "National Vehicle Identification & Number Plate Verification (NVIS)",
    acronym: "NVIS",
    agencyFull: "Federal Road Safety Corps — NVIS",
    category: "transport",
    url: "https://nvis.frsc.gov.ng",
    domain: "nvis.frsc.gov.ng",
    description: "Verify the authenticity of any Nigerian vehicle number plate before buying a used car, or initiate new vehicle number plate registration.",
    diasporaReady: true,
    isFree: true,
    costLabel: "100% Free Plate Verification",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "PUBLIC VERIFICATION PORTAL",
    posterSubtitle: "Free Instant Nigerian Vehicle Number Plate Verification",
    popularRank: 17,
    keywords: ["plate number", "vehicle verification", "frsc", "nvis", "car registration"],
    requirements: [
      "Vehicle Number Plate (e.g., ABC123XY) for instant verification"
    ],
    steps: [
      "Go to nvis.frsc.gov.ng.",
      "Enter the vehicle plate number in the verification box and click 'Verify'.",
      "Check that the vehicle make/color returned by FRSC matches the physical car."
    ],
    proTip: "Before paying for any Nigerian-used ('Tokunbo' or registered) car, check the plate number on NVIS to confirm it was legally issued."
  },

  // ============================================================================
  // 6. HEALTH INSURANCE & MEDICAL SERVICES
  // ============================================================================
  {
    id: "nhia-health",
    title: "National Health Insurance Authority (NHIA — GIFSHIP) Portal",
    acronym: "NHIA",
    agencyFull: "National Health Insurance Authority (formerly NHIS)",
    category: "health",
    url: "https://www.nhia.gov.ng",
    domain: "nhia.gov.ng",
    description: "Official Nigerian federal health insurance platform. Access the Group Individual and Family Social Health Insurance Programme (GIFSHIP), check accredited HMOs and hospitals nationwide, or sponsor health insurance for family in Nigeria from the diaspora.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Affordable Annual Premiums (GIFSHIP)",
    windowStatus: "Open for Individuals, Families & Diaspora Sponsors",
    daysLeft: null,
    posterType: "ENROLLMENT OPEN",
    posterSubtitle: "NHIA GIFSHIP Individual, Family & Diaspora Health Coverage",
    popularRank: 5,
    keywords: ["health", "health insurance", "nhia", "nhis", "hmo", "hospital", "medical", "gifship"],
    requirements: [
      "National Identification Number (NIN) of principal enrollee and dependents",
      "Passport photographs of enrollees",
      "Preferred NHIA-accredited Primary Healthcare Facility (Hospital) in your neighborhood"
    ],
    steps: [
      "Visit nhia.gov.ng to explore coverage plans (Formal Sector, GIFSHIP for individuals/families/diaspora sponsors, or Vulnerable Group Fund).",
      "Check the directory of NHIA-Accredited Healthcare Facilities and HMOs in your state.",
      "Enroll via GIFSHIP or your state's Social Health Insurance Agency using your NIN and select your primary hospital."
    ],
    proTip: "Nigerians in the diaspora can use NHIA's GIFSHIP plan to purchase annual health insurance coverage for aging parents and relatives in Nigeria so they don't pay out-of-pocket."
  },
  {
    id: "nafdac-portal",
    title: "NAFDAC Product Registration & MSME Assisted Window",
    acronym: "NAFDAC",
    agencyFull: "National Agency for Food and Drug Administration and Control",
    category: "health",
    url: "https://nafdac.gov.ng",
    domain: "nafdac.gov.ng / greenbook.nafdac.gov.ng",
    description: "Register food, drug, cosmetic, and medical products on the NAFDAC Automated Product Administration and Monitoring System (NAPAMS), or verify if a drug/product is genuine on the NAFDAC Greenbook.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Free Drug Check / MSME Discounted Reg",
    windowStatus: "MSME Discount Cohort Closing in 4 Days",
    daysLeft: 4,
    deadlineNote: "Current NAFDAC MSME Assisted Product Registration discount cohort closes in 4 days!",
    posterType: "APPLICATION OPEN",
    posterSubtitle: "NAFDAC e-Registration (NAPAMS) & MSME Assisted Window",
    popularRank: 18,
    keywords: ["nafdac", "health", "drug verification", "food registration", "napams", "greenbook", "pharmacy"],
    requirements: [
      "For Product Verification: NAFDAC Registration Number or Brand Name",
      "For Business Product Registration: CAC Certificate, Trademark, and Facility Inspection documents"
    ],
    steps: [
      "To verify a medicine: Visit greenbook.nafdac.gov.ng and search by product name or NAFDAC number.",
      "To register a food/cosmetic/drug product: Click 'e-Registration (NAPAMS)' on nafdac.gov.ng."
    ],
    proTip: "Micro and small food enterprises can apply under NAFDAC's simplified MSME Assisted Registration Window at discounted tariffs."
  },
  {
    id: "ncdc-portal",
    title: "Nigeria Centre for Disease Control & Public Health Portal",
    acronym: "NCDC",
    agencyFull: "Nigeria Centre for Disease Control and Prevention",
    category: "health",
    url: "https://ncdc.gov.ng",
    domain: "ncdc.gov.ng",
    description: "Access official public health advisories, travel health guidelines, Yellow Card / immunization guidance, and national disease surveillance reports.",
    diasporaReady: true,
    isFree: true,
    costLabel: "Free Public Health Resource",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "PUBLIC HEALTH PORTAL",
    posterSubtitle: "Official Travel Health Advisories & Public Health Surveillance",
    popularRank: 22,
    keywords: ["ncdc", "health", "disease control", "yellow card", "travel health", "medical"],
    requirements: [
      "No login required for public health advisories and emergency hotlines (6232)"
    ],
    steps: [
      "Visit ncdc.gov.ng for verified travel health requirements, outbreak situation reports, and Port Health links."
    ],
    proTip: "For Yellow Fever Vaccination ('Yellow Card') required for international travel, always register via the official Port Health Services portal at yellowcardnigeria.com."
  },

  // ============================================================================
  // 7. BUSINESS, TAX, TRADE & PENSIONS
  // ============================================================================
  {
    id: "cac-crp",
    title: "CAC Company Registration Portal (CRP)",
    acronym: "CAC",
    agencyFull: "Corporate Affairs Commission",
    category: "business",
    url: "https://pre.cac.gov.ng",
    domain: "pre.cac.gov.ng",
    description: "Register a Business Name, Limited Liability Company (LTD), or Incorporated Trustees (NGO/Church/Association) online without middlemen, and download your official e-Certificate and Status Report.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Statutory CAC Filing Fees",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "REGISTRATION OPEN",
    posterSubtitle: "Direct Online Business Name, Company (LTD) & NGO Registration",
    popularRank: 6,
    keywords: ["cac", "business registration", "company", "limited", "ngo", "enterprise"],
    requirements: [
      "2 Proposed Business/Company Names for availability reservation",
      "NIN, Passport Photograph, and digital signature of Proprietor(s) / Director(s)",
      "Nature of business, registered office address, and email/phone number"
    ],
    steps: [
      "Search the public database at search.cac.gov.ng to check if your desired business name is already taken.",
      "Create a Public User account at pre.cac.gov.ng using your NIN.",
      "Submit a Name Reservation request (₦500 statutory fee).",
      "Once approved, fill the registration form, pay via Remita, and download your e-Certificate + TIN."
    ],
    proTip: "Every new Limited Liability Company or Business Name registered on CAC CRP automatically receives a free JTB/FIRS Tax Identification Number (TIN) on the certificate."
  },
  {
    id: "firs-taxpromax",
    title: "FIRS TaxPro-Max & Tax Clearance Certificate (TCC) Portal",
    acronym: "FIRS",
    agencyFull: "Federal Inland Revenue Service (Nigeria Revenue Service)",
    category: "business",
    url: "https://taxpromax.firs.gov.ng",
    domain: "taxpromax.firs.gov.ng",
    description: "File company taxes, pay VAT and Withholding Tax, verify Tax Identification Numbers (TIN), and generate single-click electronic Tax Clearance Certificates (TCC).",
    diasporaReady: true,
    isFree: true,
    costLabel: "Free Portal & e-TCC Generation",
    windowStatus: "Annual Filing Cycle Closing in 5 Days",
    daysLeft: 5,
    deadlineNote: "Current corporate e-TCC & annual filing compliance window closes in 5 days without penalty!",
    posterType: "COMPLIANCE DEADLINE",
    posterSubtitle: "Online Tax Filing & Instant Electronic Tax Clearance Certificate",
    popularRank: 14,
    keywords: ["firs", "tax", "tin", "tcc", "tax clearance", "vat", "business"],
    requirements: [
      "CAC RC/BN Number and Company Tax Identification Number (TIN)",
      "Audited Financial Statements (for corporate filings)"
    ],
    steps: [
      "Visit taxpromax.firs.gov.ng to log in or verify a Tax Clearance Certificate (TCC).",
      "Submit returns online and apply for your e-TCC with instant QR code verification."
    ],
    proTip: "You can verify the authenticity of any contractor's Tax Clearance Certificate directly on the TaxPro-Max home page without logging in."
  },
  {
    id: "pencom-portal",
    title: "National Pension Commission (PenCom) & 25% RSA Mortgage Equity",
    acronym: "PENCOM",
    agencyFull: "National Pension Commission",
    category: "business",
    url: "https://www.pencom.gov.ng",
    domain: "pencom.gov.ng",
    description: "Verify Pension Fund Administrators (PFAs), check guidelines for using 25% of your Retirement Savings Account (RSA) balance as equity contribution for a residential house mortgage, and initiate RSA transfers.",
    diasporaReady: true,
    isFree: true,
    costLabel: "Free Regulatory Services",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "MORTGAGE EQUITY PORTAL",
    posterSubtitle: "Access 25% of Your RSA Pension Balance for a Home Mortgage",
    popularRank: 19,
    keywords: ["pension", "pencom", "rsa", "mortgage equity", "retirement", "pfa"],
    requirements: [
      "Personal Identification Number (PIN) from your Pension Fund Administrator (PFA)",
      "Completed Data Recapture (ERN) with NIN",
      "Minimum of 60 months (5 years) cumulative pension contributions (for 25% Residential Mortgage Equity)"
    ],
    steps: [
      "Visit pencom.gov.ng to view approved guidelines and licensed PFAs/PMBs.",
      "To use up to 25% of your pension for a house mortgage, obtain a property offer letter and apply through your PFA."
    ],
    proTip: "Under PenCom's Residential Mortgage Guidelines, Nigerian workers can access up to 25% of their RSA pension balance to pay the down payment on a home mortgage!"
  },

  // ============================================================================
  // 8. SPORTS, YOUTH & NATIONAL INSTITUTES
  // ============================================================================
  {
    id: "nyif-youth",
    title: "Nigeria Youth Investment Fund (NYIF) & Youth Academy Portal",
    acronym: "NYIF",
    agencyFull: "Federal Ministry of Youth Development",
    category: "sports",
    url: "https://fmyd.gov.ng",
    domain: "fmyd.gov.ng",
    description: "Access Federal Ministry of Youth Development empowerment programs, Nigeria Youth Investment Fund (NYIF) financing for young entrepreneurs (aged 18–35), and digital skills academies.",
    diasporaReady: true,
    isFree: true,
    costLabel: "100% Free Grant/Loan Application",
    windowStatus: "Current Batch Closing in 3 Days!",
    daysLeft: 3,
    deadlineNote: "URGENT: Nigeria Youth Investment Fund (NYIF) current batch selection closes in 3 days!",
    posterType: "YOUTH GRANT & LOAN OPEN",
    posterSubtitle: "Nigeria Youth Investment Fund (NYIF) for Ages 18–35",
    popularRank: 6,
    keywords: ["youth", "nyif", "youth loan", "empowerment", "grant", "sports", "skill acquisition"],
    requirements: [
      "Nigerian youth aged 18–35 years",
      "Valid NIN, BVN, and CAC certificate (for registered youth businesses)"
    ],
    steps: [
      "Visit fmyd.gov.ng to view open youth investment funds, digital skills cohorts, and national youth fellowships.",
      "Complete your profile with your NIN and business/training proposal before the 3-day cutoff."
    ],
    proTip: "Completing the free online entrepreneurship training modules increases your score during NYIF grant/loan selection."
  },
  {
    id: "sports-ministry",
    title: "National Sports Commission & National Institute for Sports (NIS)",
    acronym: "NSC",
    agencyFull: "National Sports Commission / Federal Ministry of Youth & Sports",
    category: "sports",
    url: "https://youthandsports.gov.ng",
    domain: "youthandsports.gov.ng",
    description: "Official portal for Nigerian sports federations, National Sports Festival updates, National Institute for Sports (NIS) coaching/management admissions, and athlete talent discovery.",
    diasporaReady: true,
    isFree: true,
    costLabel: "Free Public & Athlete Access",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "ATHLETE & COACHING PORTAL",
    posterSubtitle: "National Sports Commission & National Institute for Sports (NIS)",
    popularRank: 11,
    keywords: ["sports", "nigeria sports", "football", "athletics", "youth", "national sports commission", "nis"],
    requirements: [
      "Valid NIN and sports federation affiliation (for athlete/coaching programs)"
    ],
    steps: [
      "Visit youthandsports.gov.ng for official sports policy, federation directories, and national youth programs.",
      "Coaching and sports management applicants can also access the National Institute for Sports."
    ],
    proTip: "Diaspora Nigerian athletes wishing to represent Nigeria in international competitions can connect with their respective National Sports Federation here."
  },
  {
    id: "nff-football",
    title: "Nigeria Football Federation (NFF) Official Portal",
    acronym: "NFF",
    agencyFull: "Nigeria Football Federation",
    category: "sports",
    url: "https://thenff.com",
    domain: "thenff.com",
    description: "Official hub of Nigerian football — Super Eagles & Super Falcons updates, coaching license announcements, refereeing academies, and grassroots football governance.",
    diasporaReady: true,
    isFree: true,
    costLabel: "Official Federation Hub",
    windowStatus: "Open 24/7",
    daysLeft: null,
    posterType: "SPORTS FEDERATION OPEN",
    posterSubtitle: "NFF Coaching Licenses, Refereeing Academy & Football Hub",
    popularRank: 20,
    keywords: ["nff", "football", "soccer", "super eagles", "sports", "nigeria sports"],
    requirements: [
      "Club, State FA, or Academy registration for official FIFA/NFF licensing programs"
    ],
    steps: [
      "Visit thenff.com for official match fixtures, CAF/NFF coaching course registrations, and player transfer/TMS notices."
    ],
    proTip: "Beware of fake overseas football trial agents; verify licensed FIFA/NFF football intermediaries via the NFF."
  },

  // ============================================================================
  // 9. DIASPORA & CONSULAR SERVICES
  // ============================================================================
  {
    id: "nidcom-diaspora",
    title: "NIDCOM Nigerians in Diaspora Commission Portal & Registry",
    acronym: "NIDCOM",
    agencyFull: "Nigerians in Diaspora Commission",
    category: "diaspora",
    url: "https://nidcom.gov.ng",
    domain: "nidcom.gov.ng",
    description: "Official Federal Government agency for Nigerians in the Diaspora. Register on the Diaspora Data Mapping Portal, access the Nigeria Diaspora Investment Summit, report consular emergencies, and explore the Diaspora Mortgage Scheme.",
    diasporaReady: true,
    isFree: true,
    costLabel: "100% Free Diaspora Registration",
    windowStatus: "Summit & Housing Cohort Closing in 4 Days",
    daysLeft: 4,
    deadlineNote: "Registration for the current NIDCOM Diaspora Investment & Housing Mortgage cohort closes in 4 days!",
    posterType: "DIASPORA PORTAL OPEN",
    posterSubtitle: "Official Nigerians in Diaspora Registry & Housing Investment Desk",
    popularRank: 5,
    keywords: ["diaspora", "nidcom", "abroad", "embassy", "consular", "diaspora investment", "diaspora mortgage"],
    requirements: [
      "Nigerian heritage / citizenship living outside Nigeria",
      "Contact details in host country and Nigerian state of origin"
    ],
    steps: [
      "Visit nidcom.gov.ng and click on 'Diaspora Registration' to join the official global database of Nigerians abroad.",
      "Explore dedicated tabs for Diaspora Housing/Mortgage (with FMBN), Diaspora Health Insurance, and Consular intervention desks."
    ],
    proTip: "NIDCOM runs dedicated emergency intervention desks for Nigerians facing distress or consular delays abroad."
  },
  {
    id: "nibss-bvn-diaspora",
    title: "NIBSS BVN Diaspora Enrollment & NRN Verification Portal",
    acronym: "NIBSS",
    agencyFull: "Nigeria Inter-Bank Settlement System",
    category: "diaspora",
    url: "https://nibss-plc.com.ng/bvn/",
    domain: "nibss-plc.com.ng",
    description: "Find accredited international centres and Non-Resident Nigerian (NRN) online diaspora enrollment partners to obtain your Nigerian Bank Verification Number (BVN) from the UK, USA, Canada, Europe, UAE, and Asia.",
    diasporaReady: true,
    isFree: false,
    costLabel: "Diaspora Biometric Centre Fee",
    windowStatus: "Open Worldwide 24/7",
    daysLeft: null,
    posterType: "DIASPORA ENROLLMENT OPEN",
    posterSubtitle: "Global BVN Enrollment & Non-Resident Nigerian (NRN) Account Setup",
    popularRank: 9,
    keywords: ["bvn", "nibss", "bank", "diaspora bvn", "banking", "account"],
    requirements: [
      "Valid Nigerian International Passport (or foreign passport showing Nigerian birth/origin)",
      "Proof of address in country of residence",
      "Appointment at an NIBSS-approved Diaspora BVN Enrollment Centre or NRN digital bank platform"
    ],
    steps: [
      "Visit nibss-plc.com.ng/bvn/ to view the updated global list of approved Diaspora BVN enrolment locations.",
      "Book an appointment at the nearest centre in your city or use the Non-Resident Nigerian (NRN) digital onboarding via your Nigerian bank.",
      "Link your newly issued 11-digit BVN to all your Nigerian bank accounts and mortgage applications."
    ],
    proTip: "Without an active BVN and NIN linked to your account, Nigerian banks place a 'Post-No-Debit' restriction on accounts — use this portal to resolve it from abroad."
  }
];

// ============================================================================
// Application State & Initialization
// ============================================================================
let portalsData = [...INITIAL_PORTALS];
let activeCategory = "all";
let activeAudience = "all"; // 'all' | 'closing' | 'diaspora' | 'saved'
let activeNewsSource = "all";
let searchQuery = "";
let sortBy = "featured";
let savedPortalIds = new Set();
let currentModalPortalId = null;
let currentPosterPortalId = INITIAL_PORTALS[0].id;

function isClosingSoon(portal) {
  return typeof portal.daysLeft === "number" && portal.daysLeft >= 1 && portal.daysLeft <= 5;
}

// Load persisted bookmarks and user-submitted portals from localStorage
function loadPersistedState() {
  try {
    const savedRaw = localStorage.getItem("naijagateway_saved_portals");
    if (savedRaw) {
      savedPortalIds = new Set(JSON.parse(savedRaw));
    }

    const customPortalsRaw = localStorage.getItem("naijagateway_custom_portals");
    if (customPortalsRaw) {
      const customList = JSON.parse(customPortalsRaw);
      if (Array.isArray(customList) && customList.length > 0) {
        portalsData = [...customList, ...INITIAL_PORTALS];
      }
    }

    const savedTheme = localStorage.getItem("naijagateway_theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  } catch (e) {
    console.warn("Local storage unavailable:", e);
  }
}

function saveBookmarks() {
  try {
    localStorage.setItem(
      "naijagateway_saved_portals",
      JSON.stringify(Array.from(savedPortalIds))
    );
  } catch (e) {
    // ignore storage errors
  }
  updateSavedCountBadge();
}

function updateSavedCountBadge() {
  const badge = document.getElementById("savedCountBadge");
  if (badge) {
    badge.textContent = savedPortalIds.size;
  }
}

function updateUrgentCounts() {
  const urgentCount = portalsData.filter(isClosingSoon).length;
  const bannerEl = document.getElementById("urgentCountBanner");
  const heroEl = document.getElementById("heroClosingCount");
  if (bannerEl) bannerEl.textContent = urgentCount;
  if (heroEl) heroEl.textContent = urgentCount;
}

// ============================================================================
// Live News Ticker & Category News Desk Rendering
// ============================================================================
function renderNewsTicker() {
  const track = document.getElementById("newsTickerTrack");
  if (!track) return;

  track.innerHTML = DAILY_CATEGORY_NEWS.map((item) => {
    const cat = CATEGORIES.find((c) => c.id === item.category);
    return `
      <a href="${escapeHTML(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="ticker-item">
        <span class="ticker-source-tag">${escapeHTML(item.source)}</span>
        <span>${cat ? cat.icon : "🇳🇬"} ${escapeHTML(item.headline)}</span>
        <span style="color: var(--text-muted); font-size: 0.72rem;">(${escapeHTML(item.timeAgo)})</span>
      </a>
    `;
  }).join('<span style="color: var(--border-hover);">•</span>');
}

function renderCategoryNewsSection() {
  const grid = document.getElementById("categoryNewsGrid");
  const heading = document.getElementById("newsCategoryHeading");
  if (!grid) return;

  const activeCatObj = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];
  if (heading) {
    heading.textContent =
      activeCategory === "all"
        ? "Latest Verified Daily News Across All Nigerian Portal Categories"
        : `${activeCatObj.icon} Daily Verified News: ${activeCatObj.name}`;
  }

  let newsItems = DAILY_CATEGORY_NEWS.filter((n) => {
    if (activeCategory !== "all" && n.category !== activeCategory) return false;
    if (activeNewsSource !== "all" && n.source !== activeNewsSource) return false;
    return true;
  });

  if (newsItems.length === 0) {
    newsItems = DAILY_CATEGORY_NEWS.filter((n) =>
      activeCategory === "all" ? true : n.category === activeCategory
    );
  }

  // When viewing "All", show top 6 across categories so it stays clean and scannable
  const displayedNews = activeCategory === "all" && activeNewsSource === "all"
    ? newsItems.slice(0, 6)
    : newsItems;

  grid.innerHTML = displayedNews
    .map((item) => {
      const catObj = CATEGORIES.find((c) => c.id === item.category);
      return `
        <article class="news-card">
          <div>
            <div class="news-meta-top">
              <span class="news-source-badge ${item.sourceClass || ""}">
                🗞️ ${escapeHTML(item.source)}
              </span>
              <span class="news-timestamp">${escapeHTML(item.timeAgo)}</span>
            </div>
            <h3 class="news-headline" style="margin-top: 9px; margin-bottom: 6px;">
              ${escapeHTML(item.headline)}
            </h3>
            <p class="news-summary">${escapeHTML(item.summary)}</p>
          </div>
          <div class="news-footer-row">
            <span class="news-cat-tag">${catObj ? `${catObj.icon} ${catObj.shortName}` : "Nigeria"}</span>
            <a href="${escapeHTML(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="news-read-link">
              Read on ${escapeHTML(item.source)} &rarr;
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

// ============================================================================
// Urgent Deadlines Strip Rendering (<= 5 Days Left)
// ============================================================================
function renderUrgentDeadlinesStrip() {
  const panel = document.getElementById("urgentDeadlinesPanel");
  const strip = document.getElementById("urgentDeadlinesStrip");
  if (!panel || !strip) return;

  const urgentPortals = portalsData
    .filter((p) => {
      if (!isClosingSoon(p)) return false;
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      return true;
    })
    .sort((a, b) => a.daysLeft - b.daysLeft);

  if (urgentPortals.length === 0) {
    panel.classList.add("hidden");
    return;
  }

  panel.classList.remove("hidden");
  strip.innerHTML = urgentPortals
    .map((p) => {
      const dayWord = p.daysLeft === 1 ? "Day" : "Days";
      return `
        <div class="urgent-mini-card">
          <div>
            <div class="urgent-mini-top">
              <span class="urgent-mini-agency">${escapeHTML(p.acronym)}</span>
              <span class="red-notice-tag">
                🚨 ${p.daysLeft} ${dayWord} Left
              </span>
            </div>
            <h4 class="urgent-mini-title" style="margin-top: 8px; margin-bottom: 4px;">
              ${escapeHTML(p.title)}
            </h4>
            <p class="urgent-mini-note">${escapeHTML(p.deadlineNote || p.windowStatus)}</p>
          </div>
          <div class="urgent-mini-actions">
            <button type="button" class="btn-urgent-poster" data-open-poster="${p.id}">
              🎨 Share Poster
            </button>
            <a href="${escapeHTML(p.url)}" target="_blank" rel="noopener noreferrer" class="btn-urgent-apply">
              Apply Now &rarr;
            </a>
          </div>
        </div>
      `;
    })
    .join("");

  strip.querySelectorAll("[data-open-poster]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openPosterStudioModal(btn.getAttribute("data-open-poster"));
    });
  });
}

// ============================================================================
// Filtering & Sorting Logic
// ============================================================================
function getFilteredPortals() {
  const q = searchQuery.trim().toLowerCase();

  let list = portalsData.filter((portal) => {
    // Audience filter
    if (activeAudience === "diaspora" && !portal.diasporaReady) {
      return false;
    }
    if (activeAudience === "closing" && !isClosingSoon(portal)) {
      return false;
    }
    if (activeAudience === "saved" && !savedPortalIds.has(portal.id)) {
      return false;
    }

    // Category filter
    if (activeCategory !== "all" && portal.category !== activeCategory) {
      return false;
    }

    // Search query filter
    if (q) {
      const haystack = [
        portal.title,
        portal.acronym,
        portal.agencyFull,
        portal.description,
        portal.domain,
        ...(portal.keywords || [])
      ]
        .join(" ")
        .toLowerCase();

      const terms = q.split(/\s+/);
      const matchesAll = terms.every((term) => haystack.includes(term));
      if (!matchesAll) return false;
    }

    return true;
  });

  // Sort results
  if (sortBy === "alpha") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "deadline") {
    list.sort((a, b) => {
      const aDays = isClosingSoon(a) ? a.daysLeft : 999;
      const bDays = isClosingSoon(b) ? b.daysLeft : 999;
      return aDays - bDays || (a.popularRank || 99) - (b.popularRank || 99);
    });
  } else if (sortBy === "free") {
    list.sort((a, b) => Number(b.isFree) - Number(a.isFree) || (a.popularRank || 99) - (b.popularRank || 99));
  } else if (sortBy === "recruitment") {
    list.sort((a, b) => {
      const aRec = a.category === "security" || a.category === "education" || isClosingSoon(a) ? 1 : 0;
      const bRec = b.category === "security" || b.category === "education" || isClosingSoon(b) ? 1 : 0;
      return bRec - aRec || (a.popularRank || 99) - (b.popularRank || 99);
    });
  } else {
    // featured
    list.sort((a, b) => (a.popularRank || 99) - (b.popularRank || 99));
  }

  return list;
}

// ============================================================================
// Rendering UI Components
// ============================================================================
function renderCategoryTabs() {
  const tabsContainer = document.getElementById("categoryTabs");
  const footerLinks = document.getElementById("footerCategoryLinks");
  if (!tabsContainer) return;

  tabsContainer.innerHTML = CATEGORIES.map((cat) => {
    const matching = portalsData.filter((p) => {
      if (cat.id !== "all" && p.category !== cat.id) return false;
      if (activeAudience === "diaspora" && !p.diasporaReady) return false;
      if (activeAudience === "closing" && !isClosingSoon(p)) return false;
      if (activeAudience === "saved" && !savedPortalIds.has(p.id)) return false;
      return true;
    });

    const hasUrgent = matching.some(isClosingSoon);
    const isActive = activeCategory === cat.id;

    return `
      <button
        type="button"
        class="cat-tab ${isActive ? "active" : ""}"
        data-category="${cat.id}"
      >
        <span>${cat.icon}</span>
        <span>${cat.shortName}</span>
        ${hasUrgent ? `<span class="cat-urgent-dot" title="Contains applications closing within 5 days"></span>` : ""}
        <span class="cat-tab-count">${matching.length}</span>
      </button>
    `;
  }).join("");

  tabsContainer.querySelectorAll(".cat-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.getAttribute("data-category");
      renderCategoryTabs();
      renderUrgentDeadlinesStrip();
      renderCategoryNewsSection();
      renderDirectory();
    });
  });

  if (footerLinks && footerLinks.children.length === 0) {
    footerLinks.innerHTML = CATEGORIES.filter((c) => c.id !== "all")
      .map(
        (cat) => `
        <li>
          <button type="button" data-footer-cat="${cat.id}">
            ${cat.icon} ${cat.shortName}
          </button>
        </li>
      `
      )
      .join("");

    footerLinks.querySelectorAll("button[data-footer-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-footer-cat");
        renderCategoryTabs();
        renderUrgentDeadlinesStrip();
        renderCategoryNewsSection();
        renderDirectory();
        document
          .querySelector(".main-directory")
          ?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }
}

function createPortalCardHTML(portal) {
  const isSaved = savedPortalIds.has(portal.id);
  const closingSoon = isClosingSoon(portal);
  const dayWord = portal.daysLeft === 1 ? "Day" : "Days";

  return `
    <article class="portal-card ${closingSoon ? "card-closing-soon" : ""}" data-portal-id="${portal.id}">
      <div>
        ${
          closingSoon
            ? `
          <div class="card-deadline-banner">
            <span class="red-notice-tag">🚨 CLOSING IN ${portal.daysLeft} ${dayWord.toUpperCase()}</span>
            <span class="deadline-banner-text">Deadline Approaching!</span>
          </div>
        `
            : ""
        }

        <div class="card-top-row">
          <div class="agency-identity">
            <div class="agency-badge" title="${escapeHTML(portal.agencyFull)}">
              ${escapeHTML(portal.acronym)}
            </div>
            <div class="agency-meta">
              <span class="agency-domain-pill" title="Verified Official Domain">
                🔒 ${escapeHTML(portal.domain)}
              </span>
              <span class="agency-fullname">${escapeHTML(portal.agencyFull)}</span>
            </div>
          </div>

          <div class="card-top-actions">
            <button
              type="button"
              class="bookmark-btn ${isSaved ? "bookmarked" : ""}"
              data-bookmark-id="${portal.id}"
              aria-label="${isSaved ? "Remove from saved portals" : "Save portal"}"
              title="${isSaved ? "Saved in your bookmarks" : "Bookmark this portal"}"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <h3 class="portal-title">${escapeHTML(portal.title)}</h3>
        <p class="portal-desc">${escapeHTML(portal.description)}</p>

        <div class="portal-badges">
          <span class="mini-badge badge-verified">✓ Verified Official</span>
          ${
            portal.diasporaReady
              ? `<span class="mini-badge badge-diaspora">🌍 Diaspora Ready</span>`
              : ""
          }
          <span class="mini-badge ${portal.isFree ? "badge-open" : "badge-cost"}">
            ${escapeHTML(portal.costLabel)}
          </span>
        </div>
      </div>

      <div class="card-actions">
        <button
          type="button"
          class="btn-guide"
          data-guide-id="${portal.id}"
          title="View checklist of requirements and step-by-step guide"
        >
          <span>📋 Guide</span>
        </button>

        <button
          type="button"
          class="btn-card-poster"
          data-poster-id="${portal.id}"
          title="Design & Share Social Media Job / Application Poster"
        >
          <span>🎨 Share Poster</span>
        </button>

        <a
          href="${escapeHTML(portal.url)}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-launch"
        >
          <span>Launch Portal</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </article>
  `;
}

function renderDirectory() {
  const container = document.getElementById("portalsContainer");
  const emptyState = document.getElementById("emptyState");
  const emptyQuerySpan = document.getElementById("emptySearchQuery");
  const headingEl = document.getElementById("activeCategoryTitle");
  const countTextEl = document.getElementById("resultsCountText");
  const totalCountStat = document.getElementById("totalPortalsCount");

  if (totalCountStat) {
    totalCountStat.textContent = portalsData.length;
  }
  updateUrgentCounts();

  const filtered = getFilteredPortals();
  const activeCatObj =
    CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  if (headingEl) {
    if (searchQuery.trim()) {
      headingEl.textContent = `Search Results for "${searchQuery.trim()}"`;
    } else if (activeAudience === "closing" && activeCategory === "all") {
      headingEl.textContent = "🚨 Portals & Recruitments Closing Within 5 Days";
    } else if (activeAudience === "diaspora" && activeCategory === "all") {
      headingEl.textContent = "🌍 Diaspora-Ready Nigerian Portals";
    } else if (activeAudience === "saved" && activeCategory === "all") {
      headingEl.textContent = "🔖 Your Saved Portals";
    } else {
      headingEl.textContent = `${activeCatObj.icon} ${activeCatObj.name}`;
    }
  }

  if (countTextEl) {
    countTextEl.textContent = `${filtered.length} ${
      filtered.length === 1 ? "Official Portal" : "Official Portals"
    }`;
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    emptyState.classList.remove("hidden");
    if (emptyQuerySpan) {
      emptyQuerySpan.textContent =
        searchQuery.trim() ||
        (activeAudience === "saved"
          ? "Saved Bookmarks"
          : activeAudience === "closing"
          ? "Closing Soon Filter"
          : activeCatObj.name);
    }
    return;
  }

  emptyState.classList.add("hidden");

  const shouldGroupByCategory =
    activeCategory === "all" &&
    activeAudience === "all" &&
    !searchQuery.trim() &&
    sortBy === "featured";

  if (shouldGroupByCategory) {
    const sectionsHTML = CATEGORIES.filter((cat) => cat.id !== "all")
      .map((cat) => {
        const catPortals = filtered.filter((p) => p.category === cat.id);
        if (catPortals.length === 0) return "";

        const catNews = DAILY_CATEGORY_NEWS.filter((n) => n.category === cat.id);
        const inlineNewsHTML =
          catNews.length > 0
            ? `
          <div class="inline-category-news-bar">
            <span class="ticker-badge" style="background: var(--ng-green-50); color: var(--ng-green-700); border-color: var(--ng-green-200);">
              📰 ${escapeHTML(cat.shortName)} Daily News
            </span>
            <div class="inline-news-items">
              ${catNews
                .map(
                  (n) => `
                <a href="${escapeHTML(n.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="inline-news-link">
                  <span class="ticker-source-tag">${escapeHTML(n.source)}</span>
                  <span>${escapeHTML(n.headline)}</span>
                </a>
              `
                )
                .join("")}
            </div>
          </div>
        `
            : "";

        return `
          <section class="category-section" id="section-${cat.id}">
            <div class="category-section-header">
              <div class="category-section-title-group">
                <div class="category-section-icon">${cat.icon}</div>
                <div>
                  <h3 class="category-section-title">${escapeHTML(cat.name)}</h3>
                  <p class="category-section-subtitle">${escapeHTML(cat.description)}</p>
                </div>
              </div>
              <span class="results-count-pill">${catPortals.length} Portals</span>
            </div>
            ${inlineNewsHTML}
            <div class="portals-grid">
              ${catPortals.map(createPortalCardHTML).join("")}
            </div>
          </section>
        `;
      })
      .join("");

    container.innerHTML = sectionsHTML;
  } else {
    container.innerHTML = `
      <div class="portals-grid">
        ${filtered.map(createPortalCardHTML).join("")}
      </div>
    `;
  }

  // Bind "Guide", "Share Poster", and "Bookmark" buttons
  container.querySelectorAll("[data-guide-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openPortalDetailModal(btn.getAttribute("data-guide-id"));
    });
  });

  container.querySelectorAll("[data-poster-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openPosterStudioModal(btn.getAttribute("data-poster-id"));
    });
  });

  container.querySelectorAll("[data-bookmark-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleBookmark(btn.getAttribute("data-bookmark-id"));
    });
  });
}

// ============================================================================
// Modal 1: Requirements & Step-by-Step Guide
// ============================================================================
function openPortalDetailModal(portalId) {
  const portal = portalsData.find((p) => p.id === portalId);
  if (!portal) return;

  currentModalPortalId = portal.id;
  const catObj = CATEGORIES.find((c) => c.id === portal.category);

  document.getElementById("modalCategoryBadge").textContent = catObj
    ? `${catObj.icon} ${catObj.shortName}`
    : "Official Portal";
  document.getElementById("modalAgencyAcronym").textContent = portal.acronym;
  document.getElementById("modalPortalTitle").textContent = portal.title;
  document.getElementById("modalAgencyFull").textContent = portal.agencyFull;
  document.getElementById("modalOfficialUrl").textContent = portal.url;
  document.getElementById("modalDescription").textContent = portal.description;

  document.getElementById("modalCostInfo").textContent = portal.costLabel;
  document.getElementById("modalAudienceInfo").textContent = portal.diasporaReady
    ? "Home & Diaspora Nigerians"
    : "Citizens in Nigeria";
  document.getElementById("modalWindowInfo").textContent = portal.windowStatus;

  const redTag = document.getElementById("modalDeadlineRedTag");
  if (redTag) {
    if (isClosingSoon(portal)) {
      redTag.textContent = `🚨 Closing in ${portal.daysLeft} ${
        portal.daysLeft === 1 ? "Day" : "Days"
      }`;
      redTag.classList.remove("hidden");
    } else {
      redTag.classList.add("hidden");
    }
  }

  const reqList = document.getElementById("modalRequirementsList");
  reqList.innerHTML = (portal.requirements || [])
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join("");

  const stepsList = document.getElementById("modalStepsList");
  stepsList.innerHTML = (portal.steps || [])
    .map((step) => `<li>${escapeHTML(step)}</li>`)
    .join("");

  document.getElementById("modalProTip").textContent =
    portal.proTip ||
    "Ensure all personal information matches your National Identification Number (NIN).";

  const launchLink = document.getElementById("modalLaunchLink");
  launchLink.href = portal.url;

  updateModalBookmarkButton();

  const modal = document.getElementById("portalDetailModal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function updateModalBookmarkButton() {
  const bookmarkText = document.getElementById("modalBookmarkText");
  if (!bookmarkText || !currentModalPortalId) return;
  const isSaved = savedPortalIds.has(currentModalPortalId);
  bookmarkText.textContent = isSaved
    ? "✓ Saved in Bookmarks"
    : "Save to Bookmarks";
}

// ============================================================================
// Modal 2: Social Media Job Open & Application Open Poster Studio (HTML5 Canvas)
// ============================================================================
function populatePosterPortalSelect() {
  const select = document.getElementById("posterPortalSelect");
  if (!select) return;

  select.innerHTML = CATEGORIES.filter((c) => c.id !== "all")
    .map((cat) => {
      const catPortals = portalsData.filter((p) => p.category === cat.id);
      const options = catPortals
        .map((p) => {
          const urgentLabel = isClosingSoon(p)
            ? ` [🚨 ${p.daysLeft} Days Left]`
            : "";
          return `<option value="${p.id}">${escapeHTML(p.acronym)} — ${escapeHTML(p.title)}${urgentLabel}</option>`;
        })
        .join("");
      return `<optgroup label="${cat.icon} ${escapeHTML(cat.name)}">${options}</optgroup>`;
    })
    .join("");
}

function openPosterStudioModal(portalId) {
  closeAllModals();
  populatePosterPortalSelect();

  const targetPortal =
    portalsData.find((p) => p.id === portalId) || portalsData[0];
  currentPosterPortalId = targetPortal.id;

  const selectEl = document.getElementById("posterPortalSelect");
  if (selectEl) selectEl.value = currentPosterPortalId;

  // Auto-select crimson theme if closing within 5 days
  const themeSelect = document.getElementById("posterThemeSelect");
  if (themeSelect) {
    if (isClosingSoon(targetPortal)) {
      themeSelect.value = "urgent";
    } else if (targetPortal.category === "security") {
      themeSelect.value = "navy";
    } else {
      themeSelect.value = "emerald";
    }
  }

  const badgeSelect = document.getElementById("posterBadgeTypeSelect");
  if (badgeSelect) {
    badgeSelect.value = "auto";
  }

  renderPosterAndSocialLinks();

  const modal = document.getElementById("posterStudioModal");
  modal?.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function renderPosterAndSocialLinks() {
  const portal =
    portalsData.find((p) => p.id === currentPosterPortalId) || portalsData[0];
  if (!portal) return;

  const badgeOverride =
    document.getElementById("posterBadgeTypeSelect")?.value || "auto";
  const themeKey =
    document.getElementById("posterThemeSelect")?.value || "emerald";

  drawRecruitmentPosterCanvas(portal, badgeOverride, themeKey);
  updateSocialCaptionAndBroadcastLinks(portal, badgeOverride);
}

function drawRecruitmentPosterCanvas(portal, badgeOverride, themeKey) {
  const canvas = document.getElementById("recruitmentPosterCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width; // 1080
  const H = canvas.height; // 1080

  const themes = {
    emerald: {
      bgStart: "#042f1d",
      bgEnd: "#064e3b",
      accent: "#10b981",
      badgeBg: "#008751",
      pillText: "#ecfdf5"
    },
    urgent: {
      bgStart: "#450a0a",
      bgEnd: "#7f1d1d",
      accent: "#f87171",
      badgeBg: "#dc2626",
      pillText: "#fef2f2"
    },
    navy: {
      bgStart: "#0b132b",
      bgEnd: "#1c2541",
      accent: "#fbbf24",
      badgeBg: "#d97706",
      pillText: "#fffbeb"
    },
    royal: {
      bgStart: "#0f172a",
      bgEnd: "#1e3a8a",
      accent: "#38bdf8",
      badgeBg: "#0284c7",
      pillText: "#f0f9ff"
    }
  };

  const t = themes[themeKey] || themes.emerald;
  const catObj = CATEGORIES.find((c) => c.id === portal.category);

  // 1. Background Gradient
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, t.bgStart);
  grad.addColorStop(1, t.bgEnd);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Decorative Civic Circles
  ctx.save();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 2;
  for (let r = 180; r <= 720; r += 140) {
    ctx.beginPath();
    ctx.arc(W - 120, 140, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  // Top Nigerian Flag Accent Bar
  ctx.fillStyle = "#008751";
  ctx.fillRect(0, 0, W / 3, 18);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(W / 3, 0, W / 3, 18);
  ctx.fillStyle = "#008751";
  ctx.fillRect((W / 3) * 2, 0, W / 3, 18);

  // 2. Top Header Brand & Category Pill
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 32px 'Plus Jakarta Sans', Inter, sans-serif";
  ctx.fillText("🇳🇬 NAIJAGATEWAY OFFICIAL ALERT", 64, 88);

  ctx.font = "600 22px Inter, sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
  ctx.fillText(
    catObj ? `${catObj.name.toUpperCase()}` : "VERIFIED NIGERIAN PORTAL",
    64,
    124
  );

  // 3. Headline Status Banner (RECRUITMENT OPEN / APPLICATION OPEN / CLOSING SOON)
  let headlineBadge =
    badgeOverride !== "auto"
      ? badgeOverride
      : isClosingSoon(portal)
      ? `🚨 CLOSING IN ${portal.daysLeft} ${
          portal.daysLeft === 1 ? "DAY" : "DAYS"
        } — APPLY NOW`
      : portal.posterType || "OFFICIAL APPLICATION OPEN";

  drawRoundedRect(ctx, 64, 158, W - 128, 72, 16, isClosingSoon(portal) ? "#dc2626" : t.badgeBg);
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 31px 'Plus Jakarta Sans', Inter, sans-serif";
  ctx.fillText(headlineBadge, 92, 205);

  // 4. Main White/Translucent Content Card
  drawRoundedRect(
    ctx,
    64,
    256,
    W - 128,
    670,
    24,
    "rgba(15, 23, 42, 0.72)",
    "rgba(255, 255, 255, 0.18)"
  );

  // Agency Acronym Badge
  drawRoundedRect(ctx, 100, 292, 140, 66, 14, t.accent);
  ctx.fillStyle = "#0f172a";
  ctx.font = "800 30px 'Plus Jakarta Sans', Inter, sans-serif";
  ctx.fillText(portal.acronym.slice(0, 7), 120, 336);

  // Agency Full Name
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.font = "600 23px Inter, sans-serif";
  ctx.fillText(portal.agencyFull.slice(0, 52), 260, 320);

  ctx.fillStyle = t.accent;
  ctx.font = "700 20px 'JetBrains Mono', monospace";
  ctx.fillText(`🔒 Verified Domain: ${portal.domain}`, 260, 352);

  // Main Portal Title (Wrapped)
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 44px 'Plus Jakarta Sans', Inter, sans-serif";
  let nextY = wrapCanvasText(ctx, portal.title, 100, 424, W - 200, 54, 2);

  // Subtitle / Cost / Window Info
  ctx.fillStyle = "#cbd5e1";
  ctx.font = "500 24px Inter, sans-serif";
  nextY = wrapCanvasText(
    ctx,
    portal.posterSubtitle || portal.description,
    100,
    nextY + 12,
    W - 200,
    34,
    2
  );

  // Key Requirements Box inside Poster
  const reqBoxY = Math.max(nextY + 24, 560);
  drawRoundedRect(
    ctx,
    100,
    reqBoxY,
    W - 200,
    230,
    16,
    "rgba(255, 255, 255, 0.06)",
    "rgba(255, 255, 255, 0.14)"
  );

  ctx.fillStyle = t.accent;
  ctx.font = "800 22px 'Plus Jakarta Sans', Inter, sans-serif";
  ctx.fillText("📋 KEY REQUIREMENTS & DETAILS:", 126, reqBoxY + 40);

  ctx.fillStyle = "#f8fafc";
  ctx.font = "500 21px Inter, sans-serif";
  const reqs = (portal.requirements || []).slice(0, 3);
  let reqY = reqBoxY + 80;
  reqs.forEach((r) => {
    const cleanReq = r.length > 68 ? r.slice(0, 65) + "..." : r;
    ctx.fillText(`✓  ${cleanReq}`, 126, reqY);
    reqY += 40;
  });

  // Fee & Status Pill Row at bottom of Main Card
  ctx.fillStyle = "#fde047";
  ctx.font = "700 22px Inter, sans-serif";
  ctx.fillText(
    `Fee Status: ${portal.costLabel}   •   Status: ${portal.windowStatus}`,
    100,
    892
  );

  // 5. Bottom Official URL Call-to-Action Footer
  drawRoundedRect(ctx, 64, 950, W - 128, 86, 18, "#ffffff");
  ctx.fillStyle = "#0f172a";
  ctx.font = "800 24px 'Plus Jakarta Sans', Inter, sans-serif";
  ctx.fillText("APPLY DIRECTLY AT:", 96, 1002);

  ctx.fillStyle = "#008751";
  ctx.font = "800 26px 'JetBrains Mono', monospace";
  const displayUrl =
    portal.url.length > 42 ? portal.domain : portal.url.replace(/^https?:\/\//, "");
  ctx.fillText(displayUrl, 365, 1003);
}

function drawRoundedRect(ctx, x, y, width, height, radius, fillStyle, strokeStyle) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
  if (strokeStyle) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  ctx.restore();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const words = String(text || "").split(" ");
  let line = "";
  let lineCount = 0;
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      lineCount++;
      if (maxLines && lineCount >= maxLines) {
        ctx.fillText(line.trim() + "...", x, currentY);
        return currentY + lineHeight;
      }
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + " ";
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
  return currentY + lineHeight;
}

function updateSocialCaptionAndBroadcastLinks(portal, badgeOverride) {
  const closingSoon = isClosingSoon(portal);
  const headline =
    badgeOverride !== "auto"
      ? badgeOverride
      : closingSoon
      ? `🚨 CLOSING IN ${portal.daysLeft} ${
          portal.daysLeft === 1 ? "DAY" : "DAYS"
        }`
      : portal.posterType || "OFFICIAL APPLICATION OPEN";

  const caption = `🇳🇬 ${headline}: ${portal.title} (${portal.acronym})\n\n` +
    `✅ Official Verified Portal: ${portal.url}\n` +
    `💰 Fee Status: ${portal.costLabel}\n` +
    `⏳ Status: ${portal.windowStatus}\n` +
    `📋 Key Requirement: ${(portal.requirements && portal.requirements[0]) || "Valid NIN"}\n\n` +
    `⚠️ Beware of touts and fake links. Access all verified Nigerian government, scholarship, mortgage, and security portals via NaijaGateway! #Nigeria #${portal.acronym.replace(/[^a-zA-Z0-9]/g, "")} #NaijaGateway #NigeriaJobs`;

  const textarea = document.getElementById("posterCaptionTextarea");
  if (textarea) {
    textarea.value = caption;
  }

  bindSocialShareUrls(caption, portal.url);
}

function bindSocialShareUrls(captionText, officialUrl) {
  const encodedText = encodeURIComponent(captionText);
  const encodedUrl = encodeURIComponent(officialUrl);

  const wa = document.getElementById("shareWhatsAppBtn");
  if (wa) wa.href = `https://api.whatsapp.com/send?text=${encodedText}`;

  const tw = document.getElementById("shareTwitterBtn");
  if (tw) tw.href = `https://twitter.com/intent/tweet?text=${encodedText}`;

  const fb = document.getElementById("shareFacebookBtn");
  if (fb) fb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;

  const li = document.getElementById("shareLinkedInBtn");
  if (li) li.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const tg = document.getElementById("shareTelegramBtn");
  if (tg) tg.href = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
}

function closeAllModals() {
  document.getElementById("portalDetailModal")?.classList.add("hidden");
  document.getElementById("posterStudioModal")?.classList.add("hidden");
  document.getElementById("safetyModal")?.classList.add("hidden");
  document.getElementById("suggestModal")?.classList.add("hidden");
  document.body.style.overflow = "";
}

function toggleBookmark(portalId) {
  if (savedPortalIds.has(portalId)) {
    savedPortalIds.delete(portalId);
    showToast("Removed from your saved portals");
  } else {
    savedPortalIds.add(portalId);
    showToast("Saved! Access it anytime under 'Saved' at the top.");
  }
  saveBookmarks();
  renderCategoryTabs();
  renderDirectory();
  updateModalBookmarkButton();
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove("hidden");

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 3200);
}

function escapeHTML(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================================
// Event Listeners & Initialization
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadPersistedState();
  updateSavedCountBadge();
  updateUrgentCounts();
  renderNewsTicker();
  renderCategoryTabs();
  renderUrgentDeadlinesStrip();
  renderCategoryNewsSection();
  renderDirectory();

  // Search Input & Clear Button
  const searchInput = document.getElementById("portalSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  searchInput?.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim().length > 0) {
      clearSearchBtn?.classList.remove("hidden");
    } else {
      clearSearchBtn?.classList.add("hidden");
    }
    renderDirectory();
  });

  clearSearchBtn?.addEventListener("click", () => {
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    clearSearchBtn.classList.add("hidden");
    renderDirectory();
    searchInput?.focus();
  });

  // Keyboard shortcut '/' to focus search
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "/" &&
      document.activeElement?.tagName !== "INPUT" &&
      document.activeElement?.tagName !== "TEXTAREA"
    ) {
      e.preventDefault();
      searchInput?.focus();
    }
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Quick Popular Search Tags
  document.querySelectorAll(".quick-tag[data-query]").forEach((tag) => {
    tag.addEventListener("click", () => {
      const q = tag.getAttribute("data-query") || "";
      searchQuery = q;
      if (searchInput) searchInput.value = q;
      clearSearchBtn?.classList.remove("hidden");
      activeCategory = "all";
      activeAudience = "all";
      document
        .querySelectorAll(".audience-btn")
        .forEach((b) => b.classList.toggle("active", b.dataset.audience === "all"));
      renderCategoryTabs();
      renderDirectory();
      document
        .querySelector("#portalsContainer")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Quick Filter for Closing Soon (<= 5 Days)
  const triggerClosingFilter = () => {
    activeAudience = "closing";
    activeCategory = "all";
    document
      .querySelectorAll(".audience-btn")
      .forEach((b) => b.classList.toggle("active", b.dataset.audience === "closing"));
    renderCategoryTabs();
    renderDirectory();
    document
      .getElementById("urgentDeadlinesPanel")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  document
    .getElementById("closingSoonQuickBtn")
    ?.addEventListener("click", triggerClosingFilter);
  document
    .getElementById("quickFilterClosingBtn")
    ?.addEventListener("click", triggerClosingFilter);

  // Audience Filter Switch (All / Closing Soon / Diaspora / Saved)
  document.querySelectorAll(".audience-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".audience-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeAudience = btn.getAttribute("data-audience") || "all";
      renderCategoryTabs();
      renderDirectory();
    });
  });

  // Trusted News Source Filter Pills
  document.querySelectorAll("#newsSourceFilters .source-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document
        .querySelectorAll("#newsSourceFilters .source-pill")
        .forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeNewsSource = pill.getAttribute("data-source") || "all";
      renderCategoryNewsSection();
    });
  });

  // Sort Select
  const sortSelect = document.getElementById("statusSortSelect");
  sortSelect?.addEventListener("change", (e) => {
    sortBy = e.target.value;
    renderDirectory();
  });

  // Reset Filters Button in Empty State
  document.getElementById("resetFiltersBtn")?.addEventListener("click", () => {
    searchQuery = "";
    activeCategory = "all";
    activeAudience = "all";
    sortBy = "featured";
    if (searchInput) searchInput.value = "";
    if (sortSelect) sortSelect.value = "featured";
    clearSearchBtn?.classList.add("hidden");
    document
      .querySelectorAll(".audience-btn")
      .forEach((b) => b.classList.toggle("active", b.dataset.audience === "all"));
    renderCategoryTabs();
    renderUrgentDeadlinesStrip();
    renderCategoryNewsSection();
    renderDirectory();
  });

  // Theme Toggle (Light / Dark)
  document.getElementById("themeToggleBtn")?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("naijagateway_theme", next);
    } catch (e) {
      // ignore
    }
  });

  // Copy Official URL inside Detail Modal
  document.getElementById("copyUrlBtn")?.addEventListener("click", () => {
    const urlText = document.getElementById("modalOfficialUrl")?.textContent;
    if (urlText && navigator.clipboard) {
      navigator.clipboard.writeText(urlText).then(() => {
        showToast("Official URL copied to clipboard!");
      });
    }
  });

  // Bookmark button inside Detail Modal
  document.getElementById("modalBookmarkBtn")?.addEventListener("click", () => {
    if (currentModalPortalId) {
      toggleBookmark(currentModalPortalId);
    }
  });

  // Open Poster Studio from Header or Detail Modal
  document
    .getElementById("openPosterStudioHeaderBtn")
    ?.addEventListener("click", () => {
      openPosterStudioModal(portalsData[0].id);
    });

  document
    .getElementById("modalOpenPosterBtn")
    ?.addEventListener("click", () => {
      openPosterStudioModal(currentModalPortalId || portalsData[0].id);
    });

  // Poster Studio Controls Listeners
  document
    .getElementById("posterPortalSelect")
    ?.addEventListener("change", (e) => {
      currentPosterPortalId = e.target.value;
      const p = portalsData.find((item) => item.id === currentPosterPortalId);
      const themeSelect = document.getElementById("posterThemeSelect");
      if (p && themeSelect) {
        themeSelect.value = isClosingSoon(p)
          ? "urgent"
          : p.category === "security"
          ? "navy"
          : "emerald";
      }
      renderPosterAndSocialLinks();
    });

  document
    .getElementById("posterBadgeTypeSelect")
    ?.addEventListener("change", renderPosterAndSocialLinks);

  document
    .getElementById("posterThemeSelect")
    ?.addEventListener("change", renderPosterAndSocialLinks);

  document
    .getElementById("posterCaptionTextarea")
    ?.addEventListener("input", (e) => {
      const p =
        portalsData.find((item) => item.id === currentPosterPortalId) ||
        portalsData[0];
      bindSocialShareUrls(e.target.value, p.url);
    });

  document.getElementById("copyCaptionBtn")?.addEventListener("click", () => {
    const caption = document.getElementById("posterCaptionTextarea")?.value;
    if (caption && navigator.clipboard) {
      navigator.clipboard.writeText(caption).then(() => {
        showToast("Social media caption copied!");
      });
    }
  });

  // Download HD Poster PNG
  document
    .getElementById("downloadPosterPngBtn")
    ?.addEventListener("click", () => {
      const canvas = document.getElementById("recruitmentPosterCanvas");
      const p =
        portalsData.find((item) => item.id === currentPosterPortalId) ||
        portalsData[0];
      if (!canvas) return;
      const link = document.createElement("a");
      link.download = `NaijaGateway-${p.acronym}-Poster.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      showToast(`Downloaded ${p.acronym} Social Media Poster (PNG)!`);
    });

  // Native Web Share API (shares actual PNG image file + caption on supported browsers/devices)
  document
    .getElementById("nativeSharePosterBtn")
    ?.addEventListener("click", () => {
      const canvas = document.getElementById("recruitmentPosterCanvas");
      const caption =
        document.getElementById("posterCaptionTextarea")?.value || "";
      const p =
        portalsData.find((item) => item.id === currentPosterPortalId) ||
        portalsData[0];
      if (!canvas) return;

      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], `NaijaGateway-${p.acronym}.png`, {
          type: "image/png"
        });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: p.title,
              text: caption,
              files: [file]
            });
          } catch (err) {
            // user cancelled
          }
        } else {
          // Fallback: trigger PNG download and copy caption
          const link = document.createElement("a");
          link.download = `NaijaGateway-${p.acronym}-Poster.png`;
          link.href = canvas.toDataURL("image/png");
          link.click();
          showToast("Poster downloaded! Attach it to your social media post.");
        }
      }, "image/png");
    });

  // Modal Close Controls
  document
    .getElementById("closeDetailModalBtn")
    ?.addEventListener("click", closeAllModals);
  document
    .getElementById("closePosterModalBtn")
    ?.addEventListener("click", closeAllModals);
  document
    .getElementById("closeSafetyModalBtn")
    ?.addEventListener("click", closeAllModals);
  document
    .getElementById("ackSafetyBtn")
    ?.addEventListener("click", closeAllModals);
  document
    .getElementById("closeSuggestModalBtn")
    ?.addEventListener("click", closeAllModals);
  document
    .getElementById("cancelSuggestBtn")
    ?.addEventListener("click", closeAllModals);

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Open Safety Modal
  document.getElementById("scamTipBtn")?.addEventListener("click", () => {
    document.getElementById("safetyModal")?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

  // Open Suggest / Add Portal Modal
  const openSuggest = () => {
    document.getElementById("suggestModal")?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };
  document
    .getElementById("suggestPortalBtn")
    ?.addEventListener("click", openSuggest);
  document
    .getElementById("emptySuggestBtn")
    ?.addEventListener("click", openSuggest);

  // Handle Custom Portal Submission (with optional Days Left for Red Deadline Tag)
  document
    .getElementById("suggestPortalForm")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("newPortalName").value.trim();
      const acronym = document
        .getElementById("newPortalAgency")
        .value.trim()
        .toUpperCase();
      const category = document.getElementById("newPortalCategory").value;
      const url = document.getElementById("newPortalUrl").value.trim();
      const daysVal = document.getElementById("newPortalDaysLeft").value.trim();
      const description = document.getElementById("newPortalDesc").value.trim();

      const parsedDays = daysVal ? parseInt(daysVal, 10) : null;

      let domain = url;
      try {
        domain = new URL(url).hostname.replace(/^www\./, "");
      } catch (err) {
        // fallback
      }

      const newPortal = {
        id: "custom-" + Date.now(),
        title,
        acronym: acronym.slice(0, 8),
        agencyFull: `${acronym} — Verified Community Submission`,
        category,
        url,
        domain,
        description,
        diasporaReady: true,
        isFree: true,
        costLabel: "Official Portal",
        windowStatus:
          parsedDays && parsedDays <= 5
            ? `Closing in ${parsedDays} Days!`
            : "Open 24/7",
        daysLeft: parsedDays,
        deadlineNote:
          parsedDays && parsedDays <= 5
            ? `Application window closes in ${parsedDays} days!`
            : null,
        posterType:
          parsedDays && parsedDays <= 5
            ? `CLOSING IN ${parsedDays} DAYS`
            : "APPLICATION OPEN",
        posterSubtitle: description.slice(0, 80),
        popularRank: 1,
        keywords: [title.toLowerCase(), acronym.toLowerCase(), category],
        requirements: [
          "Valid National Identification Number (NIN)",
          "Active email address and phone number"
        ],
        steps: [
          `Visit the official portal at ${domain}.`,
          "Create an account or log in with your verified credentials.",
          "Complete the required service form online."
        ],
        proTip:
          "Always verify that you are on the official domain before making any online payments."
      };

      portalsData.unshift(newPortal);
      try {
        const existingCustom = JSON.parse(
          localStorage.getItem("naijagateway_custom_portals") || "[]"
        );
        existingCustom.unshift(newPortal);
        localStorage.setItem(
          "naijagateway_custom_portals",
          JSON.stringify(existingCustom)
        );
      } catch (err) {
        // ignore
      }

      e.target.reset();
      closeAllModals();
      activeCategory = category;
      renderCategoryTabs();
      renderUrgentDeadlinesStrip();
      renderCategoryNewsSection();
      renderDirectory();
      showToast(`Added "${title}" to the directory!`);
    });
});
