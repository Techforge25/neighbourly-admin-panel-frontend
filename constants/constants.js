import { MdHome } from "react-icons/md";
import { LuFileText, LuMapPin, LuSparkles } from "react-icons/lu";

export const navItems = [
  { href: "/", label: "Dashboard", icon: MdHome },
  { href: "/recommendation", label: "Recommendation", icon: LuFileText },
  {
    href: "/subrub-management",
    label: "Subrub Management",
    icon: LuMapPin,
  },
  { href: "/sponsorship", label: "Sponsorship", icon: LuSparkles },
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
    blurb: "Fast response - Reliable - Fair price",
  },
  {
    business: "A to Z plumbing",
    suburb: "Manly",
    blurb: "Fast response - Reliable - Fair price",
  },
  {
    business: "Fresh Electrical",
    suburb: "Freshwater",
    blurb: "Fast response - Reliable - Fair price",
  },
  {
    business: "Manwaring Constructions",
    suburb: "Manly",
    blurb: "Fast response - Reliable - Fair price",
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

export const getColorThemeBorder = (key) => {
  const themes = [
    {
      key: "plumber",
      theme: "border-bg-primary",
    },
    {
      key: "handyman",
      theme: "border-bg-secondary",
    },
    {
      key: "electrician",
      theme: "border-bg-green",
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
      key: "plumber",
      theme: "text-bg-primary",
    },
    {
      key: "handyman",
      theme: "text-bg-secondary",
    },
    {
      key: "electrician",
      theme: "text-bg-green",
    },
    {
      key: "gardner",
      theme: "text-text-gardner",
    },
    {
      key: "cleaners",
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
  "plumber",
  "electrician",
  "handyman",
  "gardner",
  "cleaners",
];

export const suburbs = [
  "All",
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
    id: 1,
    name: "Shannon",
    company: "A to Z Plumbing",
    category: "plumber",
    categoryColor: "text-orange-500",
    trustedIn: "Freshwater - Manly Curl Curl",
    trustPoints: ["Fast response", "Reliable", "Fair price"],
    recommendations: 4,
  },
  {
    id: 2,
    name: "Ben",
    company: "Fresh Electrical",
    category: "electrician",
    categoryColor: "text-green-600",
    trustedIn: "Freshwater - Manly Curl Curl",
    trustPoints: ["Professional", "Reliable", "Affordable"],
    recommendations: 24,
  },
  {
    id: 3,
    name: "Cameron",
    company: "Manwaring Constructions",
    category: "handyman",
    categoryColor: "text-sky-500",
    trustedIn: "Freshwater - Manly Curl Curl",
    trustPoints: ["Experienced", "Reliable"],
    recommendations: 18,
  },
  {
    id: 4,
    name: "Alex",
    company: "Fresh Electrical",
    category: "gardner",
    categoryColor: "text-teal-500",
    trustedIn: "Manly - Curl Curl",
    trustPoints: ["Quick service", "Cheap"],
    recommendations: 16,
  },
  {
    id: 5,
    name: "John",
    company: "Storm Plumbing",
    category: "plumber",
    categoryColor: "text-orange-500",
    trustedIn: "Freshwater",
    trustPoints: ["Best quality", "Professional"],
    recommendations: 34,
  },
  {
    id: 6,
    name: "Mark",
    company: "Clean House",
    category: "cleaners",
    categoryColor: "text-yellow-500",
    trustedIn: "Curl Curl",
    trustPoints: ["Affordable", "Quick response"],
    recommendations: 10,
  },
  {
    id: 7,
    name: "Smith",
    company: "Electric Hub",
    category: "electrician",
    categoryColor: "text-green-600",
    trustedIn: "Freshwater",
    trustPoints: ["Reliable", "Professional"],
    recommendations: 20,
  },
  {
    id: 8,
    name: "Harry",
    company: "HandyFix",
    category: "handyman",
    categoryColor: "text-sky-500",
    trustedIn: "Manly",
    trustPoints: ["Friendly", "Affordable"],
    recommendations: 14,
  },
];
