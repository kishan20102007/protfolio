export const site = {
  fullName: "GUNNIREDDY JAIKISHANREDDY",
  displayName: "Jai Kishanreddy",
  legalName: "Gunnireddy JaiKishanReddy",
  firstName: "Gunnireddy JaiKishanReddy",
  role: "Full-Stack Web Developer & AI Creative Developer",
  shortRole: "Full-Stack Web Developer • AI Creative Developer",
  tagline:
    "I build modern websites, high-converting landing pages, interactive 3D experiences, and AI-powered visual content for businesses, startups, and personal brands.",
  supporting:
    "Turning ideas into modern digital experiences through web development, 3D interfaces, UI/UX design, and AI-powered creative solutions.",
  email: "jaikishangunnireddy@gamil.com",
  phoneDisplay: "+91 8247532964",
  whatsapp: "https://wa.me/918247532964",
  linkedin:
    "https://www.linkedin.com/in/jaikishanreddy-gunnireddy-043619380/",
  github: "https://github.com/kishan20102007",
  location: "India",
  college: "RVR & JC College of Engineering",
  branch: "Computer Science and Business Systems",
  branchShort: "Computer Science & Business Systems",
  availability: "Open for Freelancing",
  status: "B.Tech 3rd Year Student",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";
