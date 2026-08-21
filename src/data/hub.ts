export type HubLink = {
  label: string;
  href?: string;
  note?: string;
};

export type HubFolder = {
  name: string;
  description: string;
  links: HubLink[];
};

export type HubTool = {
  id: "canva" | "notion" | "figma" | "higgsfield";
  name: string;
  tagline: string;
  description: string;
  homeUrl?: string;
  folders: HubFolder[];
};

export const hubTools: HubTool[] = [
  {
    id: "canva",
    name: "Canva",
    tagline: "brand kits & social",
    description:
      "Templates, campaign graphics, and social crops for Prism & Pollen.",
    homeUrl: "https://www.canva.com",
    folders: [
      {
        name: "Brand kit",
        description: "Logo lockups, color, type specimens.",
        links: [
          { label: "Brand kit board", note: "Add Canva link" },
          { label: "Wordmark exports", note: "Add Canva link" },
        ],
      },
      {
        name: "Campaigns",
        description: "Seasonal drops and email headers.",
        links: [
          { label: "New season campaign", note: "Add Canva link" },
          { label: "Sale banners", note: "Add Canva link" },
        ],
      },
      {
        name: "Lookbooks",
        description: "Editorial spreads and story frames.",
        links: [{ label: "SS lookbook deck", note: "Add Canva link" }],
      },
      {
        name: "Assets",
        description: "Exports ready for web and paid.",
        links: [{ label: "Web export folder", note: "Add Canva link" }],
      },
    ],
  },
  {
    id: "notion",
    name: "Notion",
    tagline: "ops & canon",
    description:
      "Product briefs, size charts, copy decks, and production notes.",
    homeUrl: "https://www.notion.so",
    folders: [
      {
        name: "Brand kit",
        description: "Voice, naming, and do/don't.",
        links: [
          { label: "Brand voice", note: "Add Notion link" },
          { label: "Naming glossary", note: "Add Notion link" },
        ],
      },
      {
        name: "Campaigns",
        description: "Launch checklists and copy.",
        links: [{ label: "Launch tracker", note: "Add Notion link" }],
      },
      {
        name: "Lookbooks",
        description: "Shot lists and styling notes.",
        links: [{ label: "Shot list DB", note: "Add Notion link" }],
      },
      {
        name: "Prompts",
        description: "Reusable writing and image prompts.",
        links: [{ label: "Prompt library", note: "Add Notion link" }],
      },
    ],
  },
  {
    id: "figma",
    name: "Figma",
    tagline: "design system",
    description:
      "Storefront components, type ramps, and campaign layouts.",
    homeUrl: "https://www.figma.com",
    folders: [
      {
        name: "Brand kit",
        description: "Tokens, type, and logo files.",
        links: [
          { label: "Design tokens", note: "Add Figma link" },
          { label: "Logo file", note: "Add Figma link" },
        ],
      },
      {
        name: "Campaigns",
        description: "Landing and email layouts.",
        links: [{ label: "Campaign frames", note: "Add Figma link" }],
      },
      {
        name: "Lookbooks",
        description: "Editorial grid templates.",
        links: [{ label: "Lookbook template", note: "Add Figma link" }],
      },
      {
        name: "Assets",
        description: "Export-ready component library.",
        links: [{ label: "Component library", note: "Add Figma link" }],
      },
    ],
  },
  {
    id: "higgsfield",
    name: "Higgsfield",
    tagline: "image & film",
    description:
      "Lookbook stills, hero plates, and motion tests for the brand.",
    homeUrl: "https://higgsfield.ai",
    folders: [
      {
        name: "Brand kit",
        description: "Locked character/wardrobe refs if any.",
        links: [{ label: "Wardrobe refs", note: "Add Higgsfield link" }],
      },
      {
        name: "Campaigns",
        description: "Hero and PDP generation jobs.",
        links: [{ label: "Hero plate jobs", note: "Add Higgsfield link" }],
      },
      {
        name: "Lookbooks",
        description: "Editorial stills batch.",
        links: [{ label: "Lookbook stills", note: "Add Higgsfield link" }],
      },
      {
        name: "Prompts",
        description: "Approved prompt stacks.",
        links: [
          {
            label: "Studio fashion prompt stack",
            note: "Add Higgsfield / Notion link",
          },
        ],
      },
      {
        name: "Assets",
        description: "Approved exports for the site.",
        links: [{ label: "Approved stills", href: "/hub/higgsfield" }],
      },
    ],
  },
];

export function getHubTool(id: string) {
  return hubTools.find((t) => t.id === id);
}
