export type VolumeKey = "half" | "one" | "two" | "three" | "fourPlus";

export type Product = {
  slug: "kiln-dried" | "seasoned" | "green";
  name: string;
  badge?: string;
  shortDescription: string;
  summary: string;
  features: string[];
  bestFor: string;
  pricing: Record<VolumeKey, string>;
  minimumNote?: string;
};

// NOTE: Pricing is intentionally marked TODO — replace placeholders with real
// numbers before launch. Values pulled from public 2023 pricing ($275 green /
// $375 seasoned) are shown as reference points only.
export const volumeLabels: Record<VolumeKey, string> = {
  half: "1/2 Cord",
  one: "1 Cord",
  two: "2 Cords",
  three: "3 Cords",
  fourPlus: "4+ Cords",
};

export const products: Product[] = [
  {
    slug: "kiln-dried",
    name: "Premium Kiln-Dried Hardwood",
    badge: "Flagship",
    shortDescription: "Sub-20% moisture. Clean enough to store indoors.",
    summary:
      "Baked in our thermodynamic kilns until moisture drops below 20%. Insects, mold, and fungus are eliminated during the drying cycle, so the wood is safe to stack near your hearth without worry.",
    features: [
      "Sub-20% moisture — lights fast, burns hot",
      "Insect, mold, and fungus free after kiln cycle",
      "Uniform 16-inch splits, screened for debris",
      "Produces less creosote than air-seasoned wood",
    ],
    bestFor: "Supplemental heating, fireplaces, fire pits, indoor storage",
    pricing: {
      half: "Call for pricing",
      one: "Call for pricing",
      two: "Call for pricing",
      three: "Call for pricing",
      fourPlus: "Call for pricing",
    },
  },
  {
    slug: "seasoned",
    name: "Seasoned Hardwood",
    shortDescription: "Air-dried over time, screened for cleanliness.",
    summary:
      "Our standard offering. Cut, split, and stacked to air-dry in the Zagwyn yard, then screened before loading to remove dirt, bark shards, and splinters. Reliable and cost-effective for high-volume winter heating.",
    features: [
      "Air-dried in our Shirley yard",
      "Screened for dirt and debris",
      "Uniform 16-inch splits",
      "Cost-effective option for primary heating",
    ],
    bestFor: "Primary heating, wood stoves, budget-conscious buyers",
    pricing: {
      half: "Call for pricing",
      one: "Call for pricing",
      two: "Call for pricing",
      three: "Call for pricing",
      fourPlus: "Call for pricing",
    },
  },
  {
    slug: "green",
    name: "Green Hardwood",
    shortDescription: "Freshly processed. Requires 6–12 months to season.",
    summary:
      "Fresh off the processor. Green wood needs six to twelve months of proper stacking and air-drying before it's ready to burn. Best for forward planners with the space to season a full cord or more.",
    features: [
      "Freshly cut and split",
      "Needs 6–12 months of seasoning before burning",
      "Lowest cost per cord",
      "Minimum order: 1 full cord",
    ],
    bestFor: "Forward-planners with storage space, rural properties",
    pricing: {
      half: "—",
      one: "Call for pricing",
      two: "Call for pricing",
      three: "Call for pricing",
      fourPlus: "Call for pricing",
    },
    minimumNote: "Minimum order: 1 full cord",
  },
];
