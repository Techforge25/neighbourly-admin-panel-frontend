import { MdOutlineDashboard, MdThumbUpOffAlt } from "react-icons/md";
import { TbLayoutNavbarFilled } from "react-icons/tb";

export const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: MdOutlineDashboard },
  { href: "/dashboard/recommendation", label: "Recommendation", icon: MdThumbUpOffAlt },
  { href: "/dashboard/sponsorship", label: "Sponsorship", icon: TbLayoutNavbarFilled },
];

export const kpiStats = [
  {
    value: "120",
    label: "Pending recommendation approval",
    icon: "/icons/dotIcon.svg",
    bgColor: "bg-bg-primary",
  },
  {
    value: "12",
    label: "Active sponsor",
    icon: "/icons/squareIcon.svg",
    bgColor: "bg-bg-secondary",
  },
  {
    value: "679",
    label: "Total recommendation",
    icon: "/icons/thumbIcon.svg",
    bgColor: "bg-bg-green",
  },
];

export const recentRecommendations = [
  {
    business: "A to Z plumbing",
    suburb: "Manly",
    responses: "Fast response - Reliable - Fair price",
  },
  {
    business: "A to Z plumbing",
    suburb: "Manly",
    responses: "Fast response - Reliable - Fair price",
  },
  {
    business: "Fresh Electrical",
    suburb: "Freshwater",
    responses: "Fast response - Reliable - Fair price",
  },
  {
    business: "Manwaring Constructions",
    suburb: "Manly",
    responses: "Fast response - Reliable - Fair price",
  },
];

export const topRecommenders = [
  {
    name: "Shannon",
    trade: "plumber",
    workplace: "at A to Z plumbing",
    count: 34,
  },
  {
    name: "Cameron",
    trade: "handyman",
    workplace: "at Manwaring Constructions",
    count: 24,
  },
  {
    name: "Ben",
    trade: "electrician",
    workplace: "at Fresh Electrical",
    count: 18,
  },
];

export const getColorThemeBorder = (key, section) => {
  const themes = [
    {
      key: "Plumber",
      theme:
        section === "mainDiv"
          ? "border-bg-primary"
          : "bg-bg-primary/10 text-bg-primary",
    },
    {
      key: "Handyman",
      theme:
        section === "mainDiv"
          ? "border-bg-secondary"
          : "bg-bg-secondary/10 text-bg-secondary",
    },
    {
      key: "Electrician",
      theme:
        section === "mainDiv"
          ? "border-bg-green"
          : "bg-bg-green/10 text-bg-green",
    },
    {
      key: "Gardener",
      theme:
        section === "mainDiv"
          ? "border-bg-[#7FB3B0]"
          : "bg-bg-[#7FB3B0]/10 text-bg-[#7FB3B0]",
    },
    {
      key: "Cleaner",
      theme:
        section === "mainDiv"
          ? "border-bg-[#E8C088]"
          : "bg-bg-[#E8C088]/10 text-bg-[#E8C088]",
    },
    {
      key: "Manly",
      theme: "border-bg-primary bg-bg-primary/8 text-bg-primary",
    },
    {
      key: "Freshwater",
      theme: "border-bg-green bg-bg-green/8 text-bg-green",
    },
  ];
  return themes.find((t) => t.key === key)?.theme;
};

export const getColorThemeBg = (key) => {
  const themes = [
    {
      key: "plumber",
      theme: "bg-bg-primary/10",
    },
    {
      key: "handyman",
      theme: "bg-bg-secondary/10",
    },
    {
      key: "electrician",
      theme: "bg-bg-green/10",
    },
  ];
  return themes.find((t) => t.key === key)?.theme;
};

export const getColorThemeText = (key) => {
  const themes = [
    {
      key: "Plumber",
      theme: "text-bg-primary",
    },
    {
      key: "Handyman",
      theme: "text-bg-secondary",
    },
    {
      key: "Electrician",
      theme: "text-bg-green",
    },
    {
      key: "Gardener",
      theme: "text-text-gardner",
    },
    {
      key: "Cleaners",
      theme: "text-text-cleaner",
    },
  ];
  return themes.find((t) => t.key === key)?.theme;
};

export const recommendationRows = [
  {
    id: "rec_001",
    tradie: "Shannon",
    business: "A to Z plumbing",
    trade: "plumber",
    suburb: "curl curl",
    submitted: "Feb 12, 2023",
    trustPoints: "Fast response - Reliable - Fair price",
  },
  {
    id: "rec_002",
    tradie: "Ben",
    business: "at Fresh Electrical",
    trade: "electrician",
    suburb: "manly",
    submitted: "Feb 14, 2026",
    trustPoints: "Fast response - Reliable - Fair price",
  },
  {
    id: "rec_003",
    tradie: "Ben",
    business: "at Fresh Electrical",
    trade: "electrician",
    suburb: "manly",
    submitted: "Feb 14, 2026",
    trustPoints: "Fast response - Reliable - Fair price",
  },
  {
    id: "rec_004",
    tradie: "Ben",
    business: "at Fresh Electrical",
    trade: "handyman",
    suburb: "Fresh water",
    submitted: "Feb 16, 2026",
    trustPoints: "Fast response - Reliable - Fair price",
  },
  {
    id: "rec_005",
    tradie: "Alex",
    business: "at Fresh Electrical",
    trade: "gardner",
    suburb: "Fresh water",
    submitted: "Feb 17, 2026",
    trustPoints: "Fast response - Reliable - Fair price",
  },
  {
    id: "rec_006",
    tradie: "Joseph",
    business: "at Fresh Electrical",
    trade: "cleaners",
    suburb: "Fresh water",
    submitted: "Feb 18, 2026",
    trustPoints: "Fast response - Reliable - Fair price",
  },
];

export const categories = [
  "All",
  "Plumber",
  "Electrician",
  "Handyman",
  "Gardener",
  "Cleaners",
];

export const suburbs = [
  "Balgowlah",
  "Fairlight",
  "Manly",
  "Curl Curl",
  "Freshwater",
  "Queenscliff",
  "Dee Why",
  "North Curl Curl",
  "North Manly",
  "Allambie Heights",
  "Beacon Hill",
  "Brookvale",
  "Collaroy",
  "Narrabeen",
  "North Narrabeen",
  "Collaroy Plateau",
  "Cromer",
  "Wheeler Heights",
  "Newport",
  "Bayview",
  "Church Point",
  "Mona Vale",
  "Bilgola Plateau",
  "Avalon Beach",
];

export const recommendationsData = [
  {
    id: "rec_001",
    name: "Shannon",
    company: "A to Z Plumbing",
    category: "plumber",
    categoryColor: "text-orange-500",
    trustedIn: "Freshwater - Manly Curl Curl",
    trustPoints: ["Fast response", "Reliable", "Fair price"],
    recommendations: 4,
  },
  {
    id: "rec_002",
    name: "Ben",
    company: "Fresh Electrical",
    category: "electrician",
    categoryColor: "text-green-600",
    trustedIn: "Freshwater - Manly Curl Curl",
    trustPoints: ["Professional", "Reliable", "Affordable"],
    recommendations: 24,
  },
  {
    id: "rec_003",
    name: "Cameron",
    company: "Manwaring Constructions",
    category: "handyman",
    categoryColor: "text-sky-500",
    trustedIn: "Freshwater - Manly Curl Curl",
    trustPoints: ["Experienced", "Reliable"],
    recommendations: 18,
  },
  {
    id: "rec_004",
    name: "Alex",
    company: "Fresh Electrical",
    category: "gardner",
    categoryColor: "text-teal-500",
    trustedIn: "Manly - Curl Curl",
    trustPoints: ["Quick service", "Cheap"],
    recommendations: 16,
  },
  {
    id: "rec_005",
    name: "John",
    company: "Storm Plumbing",
    category: "plumber",
    categoryColor: "text-orange-500",
    trustedIn: "Freshwater",
    trustPoints: ["Best quality", "Professional"],
    recommendations: 34,
  },
  {
    id: "rec_006",
    name: "Mark",
    company: "Clean House",
    category: "cleaners",
    categoryColor: "text-yellow-500",
    trustedIn: "Curl Curl",
    trustPoints: ["Affordable", "Quick response"],
    recommendations: 10,
  },
  {
    id: "rec_007",
    name: "Smith",
    company: "Electric Hub",
    category: "electrician",
    categoryColor: "text-green-600",
    trustedIn: "Freshwater",
    trustPoints: ["Reliable", "Professional"],
    recommendations: 20,
  },
  {
    id: "rec_008",
    name: "Harry",
    company: "HandyFix",
    category: "handyman",
    categoryColor: "text-sky-500",
    trustedIn: "Manly",
    trustPoints: ["Friendly", "Affordable"],
    recommendations: 14,
  },
];

export const reviews = [
  {
    name: "Alex",
    category: "Plumber",
    location: "Curl Curl",
    email: "olivia@gmail.com",
    phone: "+138474957",
    address: "Smith Street",
    date: "2 Weeks Ago",
    review:
      "Shannon was absolutely brilliant! He showed up exactly when he said he would and fixed our leaking tap quickly. Super friendly and fair pricing.",
    tags: [
      "Fast Response",
      "Reliable",
      "Fair Price",
      "Quality Work",
      "Responsive",
      "Trustworthy",
    ],
  },
  {
    name: "Emma",
    category: "Electrician",
    location: "Manly",
    email: "emma@gmail.com",
    phone: "+138474958",
    address: "Ocean Avenue",
    date: "1 Week Ago",
    review:
      "Fantastic electrician! Arrived on time and fixed our lighting issue within an hour. Very professional and clean work.",
    tags: ["Professional", "Clean Work", "Affordable", "Punctual"],
  },
  {
    name: "James",
    category: "Painter",
    location: "Freshwater",
    email: "james@gmail.com",
    phone: "+138474959",
    address: "Palm Street",
    date: "3 Days Ago",
    review:
      "Did an amazing paint job in our living room. Smooth finish and very detail-oriented.",
    tags: ["Quality Work", "Neat", "Friendly", "Recommended"],
  },
  {
    name: "Sophia",
    category: "Gardener",
    location: "Dee Why",
    email: "sophia@gmail.com",
    phone: "+138474960",
    address: "Green Road",
    date: "5 Days Ago",
    review:
      "Our backyard has never looked this good. Very hardworking and knowledgeable gardener.",
    tags: ["Efficient", "Hardworking", "Friendly"],
  },
  {
    name: "Liam",
    category: "Carpenter",
    location: "Brookvale",
    email: "liam@gmail.com",
    phone: "+138474961",
    address: "Wood Lane",
    date: "4 Days Ago",
    review:
      "Built custom shelves for us and they turned out perfect. Great craftsmanship.",
    tags: ["Skilled", "Creative", "Reliable"],
  },
  {
    name: "Olivia",
    category: "Cleaner",
    location: "Narrabeen",
    email: "olivia2@gmail.com",
    phone: "+138474962",
    address: "Lake View St",
    date: "6 Days Ago",
    review:
      "Very thorough cleaning service. Left the house spotless and smelling fresh.",
    tags: ["Spotless", "Professional", "Quick Service"],
  },
  {
    name: "Noah",
    category: "Mechanic",
    location: "Mona Vale",
    email: "noah@gmail.com",
    phone: "+138474963",
    address: "Garage Street",
    date: "1 Day Ago",
    review:
      "Diagnosed and fixed my car issue quickly. Honest pricing and great communication.",
    tags: ["Honest", "Fast", "Experienced"],
  },
  {
    name: "Ava",
    category: "Dog Walker",
    location: "Collaroy",
    email: "ava@gmail.com",
    phone: "+138474964",
    address: "Beach Road",
    date: "2 Days Ago",
    review: "My dog absolutely loves her! Very caring and dependable service.",
    tags: ["Caring", "Reliable", "Friendly"],
  },
  {
    name: "William",
    category: "Photographer",
    location: "Fairlight",
    email: "william@gmail.com",
    phone: "+138474965",
    address: "Sunset Blvd",
    date: "1 Month Ago",
    review: "Captured our family event beautifully. Photos turned out amazing.",
    tags: ["Creative", "Professional", "Talented"],
  },
  {
    name: "Mia",
    category: "Tutor",
    location: "Balgowlah",
    email: "mia@gmail.com",
    phone: "+138474966",
    address: "Education Street",
    date: "3 Weeks Ago",
    review:
      "Excellent tutor with lots of patience. Helped my son improve his math grades significantly.",
    tags: ["Patient", "Knowledgeable", "Supportive"],
  },
];

export const fieldsConfig = [
  {
    type: "text",
    name: "personName",
    label: "Sponsor Name",
    placeholder: "e.g. Sally",
    required: true,
  },
  {
    type: "text",
    name: "businessName",
    label: "Business Name",
    placeholder: "e.g. Apex Finance",
    required: true,
  },
  {
    type: "select",
    name: "suburb",
    label: "Suburb",
    placeholder: "Select suburb",
    required: true,
    options: suburbs,
  },
  {
    type: "radio-pill",
    name: "serviceType",
    label: "Business Category",
    required: true,
    options: [
      { label: "Mortgage Broker", value: "Mortgage Broker" },
      { label: "Real Estate Agent", value: "Real Estate Agent" },
      { label: "Advisor", value: "Advisor" },
    ],
  },
  {
    type: "file-upload",
    name: "logo",
    label: "Sponsor Photo",
  },
  {
    type: "phone",
    name: "contact",
    label: "Call Button Link (Phone Number)",
    required: true,
  },
];

export const sponsor = [
  { label: "Mortgage Broker", value: "Mortgage Broker" },
  { label: "Real Estate Agent", value: "Real Estate Agent" },
  { label: "Advisor", value: "Advisor" },
]