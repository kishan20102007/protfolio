export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  /**
   * Optional screenshot path in /public.
   * When omitted, a labeled representative mockup is shown.
   */
  image?: string;
  imageAlt: string;
  preview: "eduenrich" | "spicegarden";
};

export const projects: Project[] = [
  {
    slug: "eduenrich",
    title: "EduEnrich - Premium Global Education Consultancy",
    category: "Education Platform",
    description:
      "A premium education consultancy platform designed to present educational programs, services, courses, and student-focused information through a modern web experience.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://innoblink-education-platform-demo.vercel.app/",
    imageAlt: "Representative interface for the EduEnrich education platform",
    preview: "eduenrich",
  },
  {
    slug: "spice-garden",
    title: "Spice Garden - Authentic Indian Cuisine",
    category: "Restaurant Website",
    description:
      "A modern restaurant website designed to showcase authentic Indian cuisine, menu items, restaurant information, and customer-focused experiences.",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://spice-garden-demo-six.vercel.app/#menu",
    imageAlt: "Representative interface for the Spice Garden restaurant website",
    preview: "spicegarden",
  },
];
