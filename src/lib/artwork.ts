export const artwork = {
  title: 'Statuette of a Woman: "The Stargazer"',
  shortTitle: "The Stargazer",
  accession: "1993.165",
  date: "c. 3000 BCE",
  culture: "Western Anatolia, early Bronze Age",
  cultureRange: "c. 3300–1200 BCE",
  technique: "Marble",
  department: "Egyptian and Ancient Near Eastern Art",
  collection: "Near Eastern Art",
  location: "102A Ancient Near East",
  measurements: "17.2 × 6.5 × 6.3 cm (6 3/4 × 2 9/16 × 2 1/2 in.)",
  heightCm: 17.2,
  widthCm: 6.5,
  depthCm: 6.3,
  weight: "453.6 g (16 oz.)",
  creditLine: "Leonard C. Hanna Jr. Fund; John L. Severance Fund",
  findSpot: "Said to have been found near Kırşehir, Turkey",
  description:
    '"The Stargazer" moniker was given to this diminutive marble sculpture because its upturned head looks toward the heavens. Details carved into the stone are visible while painted features have been lost to time. We do not know how this object was used, but its enigmatic nature invites speculation.',
  didYouKnow:
    "We can identify this mysterious figure as female by the inscribed pubic triangle below her waist.",
  license: "CC0 1.0 Universal — Public Domain",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  sourceUrl: "https://www.clevelandart.org/art/1993.165",
  sketchfabUrl:
    "https://sketchfab.com/3d-models/1993165-statuette-of-a-woman-the-stargazer-84cd036f133e449ba7e67d33eb8047ee",
  zenodoDoi: "10.5281/zenodo.10290047",
  modelPath: "/models/stargazer.glb",
  downloadName: "stargazer-1993.165.glb",
  mesh: {
    vertices: 7502,
    triangles: 15000,
    method: "Photogrammetry by Howard Agriesti, Cleveland Museum of Art",
    source: "Official CMA Open Access mesh (Sketchfab / Zenodo)",
  },
  images: {
    front: "/images/front.jpg",
    threeQuarter: "/images/three-quarter.jpg",
    side: "/images/side.jpg",
    back: "/images/back.jpg",
    top: "/images/top.jpg",
  },
  provenance: [
    "Said to have been found near Kırşehir, Turkey",
    "Nelson Rockefeller (before 1962)",
    "Melba Davis Whatley Greenlee, Austin, Texas",
    "Harmon Fine Arts Collection, Leonard Norman Stern, New York",
    "The Cleveland Museum of Art, 1993–",
  ],
} as const;

export type ViewMode = "textured" | "clay" | "wire" | "xray";
export type LightPreset = "gallery" | "night" | "study";

export const viewModes: { id: ViewMode; label: string; hint: string }[] = [
  { id: "textured", label: "Surface", hint: "Photogrammetry color" },
  { id: "clay", label: "Form", hint: "Untextured marble" },
  { id: "wire", label: "Mesh", hint: "15,000 triangles" },
  { id: "xray", label: "X-ray", hint: "Translucent volume" },
];

export const lightPresets: { id: LightPreset; label: string; hint: string }[] = [
  { id: "gallery", label: "Gallery", hint: "Warm museum key" },
  { id: "night", label: "Night", hint: "Moonlight from above" },
  { id: "study", label: "Study", hint: "Even conservation light" },
];
