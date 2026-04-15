export type DeliveryZone = {
  id: 1 | 2 | 3;
  label: string;
  radius: string;
  description: string;
  towns: string[];
};

export const deliveryZones: DeliveryZone[] = [
  {
    id: 1,
    label: "Zone 1 — Immediate Exurban Core",
    radius: "0 – 10 miles from Shirley",
    description:
      "Our backyard. Fastest scheduling and ideal for large bulk drops when you have the room to store it.",
    towns: [
      "Shirley",
      "Devens",
      "Ayer",
      "Groton",
      "Harvard",
      "Lunenburg",
      "Townsend",
      "Pepperell",
    ],
  },
  {
    id: 2,
    label: "Zone 2 — High-Density Suburban Ring",
    radius: "10 – 15 miles from Shirley",
    description:
      "Denser neighborhoods where storage is tighter. A good fit for half-cord and single-cord deliveries of clean kiln-dried wood.",
    towns: [
      "Leominster",
      "Fitchburg",
      "Westford",
      "Littleton",
      "Boxborough",
      "Acton",
      "Chelmsford",
      "Lancaster",
      "Clinton",
    ],
  },
  {
    id: 3,
    label: "Zone 3 — Eastern Commuter Belt",
    radius: "15 – 20+ miles from Shirley",
    description:
      "Towns along the Route 2 and 495 corridors. Deliveries scheduled on the same route for efficiency — call early in the season.",
    towns: [
      "Concord",
      "Carlisle",
      "Sudbury",
      "Lincoln",
      "Wayland",
      "Weston",
      "Marlborough",
      "Southborough",
    ],
  },
];

export const allServicedTowns: string[] = [
  "Acton",
  "Ashburnham",
  "Ayer",
  "Bedford",
  "Billerica",
  "Bolton",
  "Boxborough",
  "Burlington",
  "Carlisle",
  "Chelmsford",
  "Clinton",
  "Concord",
  "Devens",
  "Dracut",
  "Dunstable",
  "Fitchburg",
  "Gardner",
  "Groton",
  "Harvard",
  "Hopkinton",
  "Hudson",
  "Lancaster",
  "Leominster",
  "Lexington",
  "Lincoln",
  "Littleton",
  "Lowell",
  "Lunenburg",
  "Marlborough",
  "Maynard",
  "Northborough",
  "Pepperell",
  "Shirley",
  "Southborough",
  "Stow",
  "Sudbury",
  "Tewksbury",
  "Townsend",
  "Tyngsboro",
  "Westborough",
  "Westford",
  "Worcester",
];
