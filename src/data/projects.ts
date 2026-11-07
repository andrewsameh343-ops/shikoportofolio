import branding from "@/assets/p-branding.jpg";
import packaging from "@/assets/p-packaging.jpg";
import illustration from "@/assets/p-illustration.jpg";
import social from "@/assets/p-social.jpg";
import coffee from "@/assets/p-coffee.jpg";
import wine from "@/assets/p-wine.jpg";
import hero from "@/assets/hero.jpg";

export type Category = "Branding" | "Social Media" | "Packaging" | "Illustration";
export const CATEGORIES: ("All" | Category)[] = ["All", "Branding", "Social Media", "Packaging", "Illustration"];

export type Project = {
  id: string;
  title: string;
  category: Category;
  year: string;
  client: string;
  cover: string;
  images: string[];
  description: string;
};

// Edit this array to change the portfolio.
export const projects: Project[] = [
  { id: "rb-identity", title: "Rachelle Berry", category: "Branding", year: "2026", client: "Rachelle Berry Studio", cover: branding, images: [branding, hero], description: "A quiet, monogram-led identity in black and gold foil for an interior architecture studio." },
  { id: "zenith", title: "Zenith Parfum", category: "Packaging", year: "2025", client: "Zenith Beauty", cover: packaging, images: [packaging, hero], description: "Matte-black packaging system for a fragrance and skincare line, finished with hot-foil gold." },
  { id: "flora", title: "Flora Noir", category: "Illustration", year: "2025", client: "Personal", cover: illustration, images: [illustration], description: "An ink and gold-leaf illustration series exploring the meeting of portraiture and botany." },
  { id: "velour", title: "Velour Atelier", category: "Social Media", year: "2026", client: "Velour Atelier", cover: social, images: [social, branding], description: "Campaign art direction and Instagram grid system for a luxury fashion house." },
  { id: "verse", title: "Verse Coffee", category: "Branding", year: "2024", client: "Verse Roasters", cover: coffee, images: [coffee, packaging], description: "Identity and bag system for a specialty roastery — warm kraft meets restrained gold line-work." },
  { id: "solstice", title: "Solstice Wines", category: "Packaging", year: "2024", client: "Solstice Estate", cover: wine, images: [wine, illustration], description: "Engraved-style illustrated labels for a three-wine vintage release." },
];
