export type ZipEntry = { zip: string; town: string; zone: 1 | 2 | 3 };

export const zipLookup: ZipEntry[] = [
  { zip: "01464", town: "Shirley", zone: 1 },
  { zip: "01432", town: "Ayer", zone: 1 },
  { zip: "01434", town: "Devens", zone: 1 },
  { zip: "01450", town: "Groton", zone: 1 },
  { zip: "01451", town: "Harvard", zone: 1 },
  { zip: "01462", town: "Lunenburg", zone: 1 },
  { zip: "01469", town: "Townsend", zone: 1 },
  { zip: "01463", town: "Pepperell", zone: 1 },
  { zip: "01453", town: "Leominster", zone: 2 },
  { zip: "01420", town: "Fitchburg", zone: 2 },
  { zip: "01886", town: "Westford", zone: 2 },
  { zip: "01460", town: "Littleton", zone: 2 },
  { zip: "01719", town: "Boxborough", zone: 2 },
  { zip: "01720", town: "Acton", zone: 2 },
  { zip: "01824", town: "Chelmsford", zone: 2 },
  { zip: "01523", town: "Lancaster", zone: 2 },
  { zip: "01510", town: "Clinton", zone: 2 },
  { zip: "01742", town: "Concord", zone: 3 },
  { zip: "01741", town: "Carlisle", zone: 3 },
  { zip: "01776", town: "Sudbury", zone: 3 },
  { zip: "01773", town: "Lincoln", zone: 3 },
  { zip: "01778", town: "Wayland", zone: 3 },
  { zip: "02493", town: "Weston", zone: 3 },
  { zip: "01752", town: "Marlborough", zone: 3 },
  { zip: "01772", town: "Southborough", zone: 3 },
];

export function lookupZip(zip: string): ZipEntry | null {
  const trimmed = zip.trim();
  return zipLookup.find((z) => z.zip === trimmed) ?? null;
}
