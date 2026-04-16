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
    label: "Zone 1 — Local",
    radius: "0 – 10 miles from Shirley",
    description:
      "Our backyard. Fastest scheduling, and ideal for large bulk drops if you have the room to store it.",
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
    label: "Zone 2 — Surrounding Towns",
    radius: "10 – 15 miles from Shirley",
    description:
      "A good fit for half-cord and single-cord deliveries. Storage tends to be tighter in these neighborhoods.",
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
    label: "Zone 3 — Extended Range",
    radius: "15 – 20+ miles from Shirley",
    description:
      "Towns along the Route 2 and 495 corridors. We group deliveries by route, so call early in the season to get on the schedule.",
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
