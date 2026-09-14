export const pricingPlans = [
  {
    name: "Starter",
    price: "Rs. 2,999+",
    type: "Landing Page",
    featured: false,
    includes: [
      "Responsive design",
      "Modern UI",
      "Mobile optimization",
      "Basic deployment",
    ],
  },
  {
    name: "Business",
    price: "Rs. 5,999+",
    type: "Business Website",
    featured: true,
    includes: [
      "Multi-section website",
      "Responsive design",
      "Contact/WhatsApp integration",
      "Deployment",
    ],
  },
  {
    name: "Premium",
    price: "Rs. 9,999+",
    type: "Premium Digital Experience",
    featured: false,
    includes: [
      "Advanced UI",
      "Multiple pages/sections",
      "Animations",
      "Interactive elements",
      "Deployment",
    ],
  },
] as const;
