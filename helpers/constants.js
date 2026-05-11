import { MdHome } from "react-icons/md";
import { LuFileText, LuMapPin, LuSparkles } from "react-icons/lu";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
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
    trade: "Plumber",
    workplace: "at A to Z plumbing",
    count: 34,
  },
  {
    name: "Cameron",
    trade: "Handyman",
    workplace: "at Manwaring Constructions",
    count: 24,
  },
  {
    name: "Ben",
    trade: "Electrician",
    workplace: "at Fresh Electrical",
    count: 18,
  },
];

export const getColorTheme = (key, type) => {
  switch (key) {
    case "Plumber":
      return `${type}-[#FE9A86]`;

    case "Handyman":
      return `${type}-[#718496]`;

    case "Electrician":
      return `${type}-[#8FA58A]`;

    default:
      return `${type}-[#EFEFEF]`;
  }
};
