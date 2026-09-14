export type Creative = {
  id: string;
  title: string;
  description: string;
  /**
   * Replace with a real image in /public/creatives to use your own work.
   */
  image: string;
  alt: string;
};

export const creatives: Creative[] = [
  {
    id: "ai-ads",
    title: "AI Ads",
    description: "Promotional visuals crafted for social and digital campaigns.",
    image: "/creatives/ai-ads.svg",
    alt: "Placeholder visual for AI-powered advertisements",
  },
  {
    id: "ai-posters",
    title: "AI Posters",
    description: "Event and brand posters with a clean, campaign-ready look.",
    image: "/creatives/ai-posters.svg",
    alt: "Placeholder visual for AI poster design",
  },
  {
    id: "social",
    title: "Social Media Creatives",
    description: "Feed-ready graphics that keep a brand consistent and sharp.",
    image: "/creatives/social.svg",
    alt: "Placeholder visual for social media creatives",
  },
  {
    id: "product",
    title: "Product Promotions",
    description: "Launch visuals that put the product and offer first.",
    image: "/creatives/product.svg",
    alt: "Placeholder visual for product promotions",
  },
  {
    id: "marketing",
    title: "Marketing Visuals",
    description: "Campaign artwork for announcements, offers, and brand stories.",
    image: "/creatives/marketing.svg",
    alt: "Placeholder visual for marketing graphics",
  },
  {
    id: "uiux",
    title: "UI/UX Concepts",
    description: "Interface explorations focused on clarity and conversion.",
    image: "/creatives/uiux.svg",
    alt: "Placeholder visual for UI/UX concepts",
  },
];
