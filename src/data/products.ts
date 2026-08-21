import type { ImageSourcePropType } from "react-native";

export type Product = {
  id: string;
  title: string;
  price: string;
  category: string;
  badge?: string;
  featured?: boolean;
  description: string;
  highlights: string[];
  specifications: { name: string; value: string }[];
  faq: { question: string; answer: string }[];
  checkout: string;
  image: ImageSourcePropType;
  images: ImageSourcePropType[];
};

export const products: Product[] = [
  {
    id: "1",
    title: "Linen Column Dress",
    price: "168",
    category: "dresses",
    badge: "new",
    featured: true,
    description:
      "A soft column dress in washed linen — easy through the body, open at the sides, built for warm nights and long tables.",
    highlights: [
      "Breathable midweight linen blend",
      "Column silhouette with side slits",
      "Fully lined bodice",
    ],
    specifications: [
      { name: "Fabric", value: "55% linen, 45% cotton" },
      { name: "Fit", value: "Relaxed column" },
      { name: "Care", value: "Cold wash, hang dry" },
    ],
    faq: [
      {
        question: "Does it wrinkle?",
        answer:
          "Linen softens and creases with wear — that's part of the look.",
      },
    ],
    checkout: "#",
    image: require("../../assets/brand/product-linen-dress.jpeg"),
    images: [
      require("../../assets/brand/hero-sale.jpeg"),
      require("../../assets/brand/cat-dress.jpeg"),
      require("../../assets/brand/cat-new.jpeg"),
    ],
  },
  {
    id: "2",
    title: "Soft Denim Wide Leg",
    price: "148",
    category: "jeans",
    featured: true,
    description:
      "Soft indigo denim with a high rise and a calm wide leg. Everyday structure without the stiffness.",
    highlights: [
      "Organic cotton denim",
      "High rise, wide leg",
      "Stone-washed indigo",
    ],
    specifications: [
      { name: "Fabric", value: "100% organic cotton denim" },
      { name: "Rise", value: "High" },
      { name: "Leg", value: "Wide" },
    ],
    faq: [
      {
        question: "True to size?",
        answer: "Yes — size down for a closer fit through the hip.",
      },
    ],
    checkout: "#",
    image: require("../../assets/brand/product-denim.jpeg"),
    images: [
      require("../../assets/brand/hero-denim.jpeg"),
      require("../../assets/brand/cat-essentials.jpeg"),
    ],
  },
  {
    id: "3",
    title: "Silk Bias Camisole",
    price: "128",
    category: "tops",
    badge: "sale",
    featured: true,
    description:
      "A bias silk camisole that catches light without shouting. Layer under a blazer or wear alone.",
    highlights: [
      "Bias-cut silk charmeuse",
      "Adjustable straps",
      "Finished with French seams",
    ],
    specifications: [
      { name: "Fabric", value: "100% silk charmeuse" },
      { name: "Fit", value: "Bias, follows the body" },
    ],
    faq: [],
    checkout: "#",
    image: require("../../assets/brand/cat-essentials.jpeg"),
    images: [require("../../assets/brand/cat-essentials.jpeg")],
  },
  {
    id: "4",
    title: "Merino Field Sweater",
    price: "198",
    category: "sweaters",
    featured: true,
    description:
      "A quiet crewneck in fine merino — soft enough for bare skin, structured enough for the street.",
    highlights: [
      "Extrafine merino wool",
      "Relaxed crew neck",
      "Ribbed hem and cuffs",
    ],
    specifications: [
      { name: "Fabric", value: "100% extrafine merino" },
      { name: "Fit", value: "Relaxed" },
    ],
    faq: [],
    checkout: "#",
    image: require("../../assets/brand/cat-new.jpeg"),
    images: [require("../../assets/brand/cat-new.jpeg")],
  },
  {
    id: "5",
    title: "Square Toe Mule",
    price: "248",
    category: "shoes",
    featured: true,
    description: "A low square-toe mule in soft leather — clean line, quiet presence.",
    highlights: [
      "Vegetable-tanned leather",
      "Square toe, low heel",
      "Leather sole",
    ],
    specifications: [
      { name: "Upper", value: "Vegetable-tanned leather" },
      { name: "Heel", value: "25mm" },
    ],
    faq: [],
    checkout: "#",
    image: require("../../assets/brand/cat-accessories.jpeg"),
    images: [require("../../assets/brand/cat-accessories.jpeg")],
  },
  {
    id: "6",
    title: "Mini Prism Clutch",
    price: "178",
    category: "accessories",
    featured: true,
    description:
      "A compact clutch with a prism-cut edge detail — evening scale, daytime polish.",
    highlights: [
      "Structured mini silhouette",
      "Magnetic frame closure",
      "Detachable chain strap",
    ],
    specifications: [
      { name: "Material", value: "Smooth calf leather" },
      { name: "Size", value: "18 × 12 × 4 cm" },
    ],
    faq: [],
    checkout: "#",
    image: require("../../assets/brand/cat-accessories.jpeg"),
    images: [require("../../assets/brand/cat-accessories.jpeg")],
  },
  {
    id: "7",
    title: "Pollen Slip Dress",
    price: "158",
    category: "dresses",
    badge: "new",
    featured: true,
    description:
      "A bias slip in pollen-soft cupro — light on the body, strong in the room.",
    highlights: ["Fluid cupro blend", "Bias slip silhouette", "Adjustable straps"],
    specifications: [
      { name: "Fabric", value: "Cupro blend" },
      { name: "Fit", value: "Bias slip" },
    ],
    faq: [],
    checkout: "#",
    image: require("../../assets/brand/cat-dress.jpeg"),
    images: [require("../../assets/brand/hero-sale.jpeg")],
  },
  {
    id: "8",
    title: "Everyday Oxford Shirt",
    price: "118",
    category: "tops",
    featured: true,
    description:
      "The shirt you reach for without thinking — soft oxford, easy shoulders, clean collar.",
    highlights: [
      "Organic cotton oxford",
      "Relaxed button-down",
      "Mother-of-pearl buttons",
    ],
    specifications: [
      { name: "Fabric", value: "100% organic cotton oxford" },
      { name: "Fit", value: "Relaxed" },
    ],
    faq: [],
    checkout: "#",
    image: require("../../assets/brand/hero-bestsellers.jpeg"),
    images: [require("../../assets/brand/hero-bestsellers.jpeg")],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function filterByCategory(category: string) {
  const apparel = ["dresses", "tops", "jeans", "sweaters", "shoes", "accessories"];
  if (category === "new") {
    return products.filter((p) => p.badge === "new" || p.featured);
  }
  if (category === "clothing") {
    return products.filter((p) =>
      ["dresses", "tops", "jeans", "sweaters"].includes(p.category)
    );
  }
  if (category === "sale") {
    return products.filter((p) => p.badge === "sale");
  }
  if (apparel.includes(category)) {
    return products.filter((p) => p.category === category);
  }
  return products;
}

export const brandImages = {
  heroDenim: require("../../assets/brand/hero-denim.jpeg"),
  heroBestsellers: require("../../assets/brand/hero-bestsellers.jpeg"),
  heroSale: require("../../assets/brand/hero-sale.jpeg"),
  catDress: require("../../assets/brand/cat-dress.jpeg"),
  catNew: require("../../assets/brand/cat-new.jpeg"),
  catEssentials: require("../../assets/brand/cat-essentials.jpeg"),
  catAccessories: require("../../assets/brand/cat-accessories.jpeg"),
};
