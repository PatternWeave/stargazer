export const workshop = {
  kicker: "Kulaksızlar · Middle Chalcolithic",
  title: "The workshop",
  lede: "Before the Cleveland marble entered a vitrine, figures of this type were roughed out, pecked, drilled, and polished in a hillside workshop on the Akhisar plain. Kulaksızlar is the one production center we can still name.",
  dates: "c. 4500–4250 BC",
  place: "Akhisar district, Manisa, western Anatolia",
  sources:
    "Synthesized from Akdeniz 2010; Takaoğlu 2005, 2017, 2021, 2022; Pektaş 2021; and the Cleveland Museum of Art object record for 1993.165.",
  chronologyNote:
    "Radiocarbon dates from workshop contexts place Kulaksızlar in the Middle Chalcolithic, 4500–4250 BC. The Cleveland Museum of Art dates this marble, 1993.165, to c. 3000 BCE and the early Bronze Age. The Kilia form is the type; the museum piece is a finished example of that tradition, not a find from the workshop floor.",
} as const;

export const toc = [
  { href: "#site", label: "The site" },
  { href: "#making", label: "Making" },
  { href: "#type", label: "The type" },
  { href: "#proportion", label: "Proportion" },
  { href: "#meaning", label: "Meaning" },
  { href: "#finds", label: "Finds" },
  { href: "#computation", label: "Method" },
] as const;

export const chaîne = [
  {
    title: "Stone",
    body: "Fine-grained local or regional marble, brought to the hillside as blocks.",
  },
  {
    title: "Preform",
    body: "Roughing-out into blocky, roughly anthropomorphic or conical blanks.",
  },
  {
    title: "Shape",
    body: "Pecking, abrasion, and grinding with stone hammers, pecking tools, and sandstone.",
  },
  {
    title: "Hollow",
    body: "For rhyta: interior hollowing with bow-drills and sandstone bits of graduated diameters. Drill bits were recovered on the floors.",
  },
  {
    title: "Incise",
    body: "Low-relief faces — almond eyes, triangular nose, small ears — and the pubic triangle and arm folds, cut and lightly modelled.",
  },
  {
    title: "Polish",
    body: "A last pass to a smooth, luminous skin. Finished pieces left the site; almost none were found complete in the workshops.",
  },
] as const;

export const finds = [
  {
    context: "İşlik A (U-shaped)",
    note: "Primary conical rhyton production; platforms with obsidian tools; sandstone drill bits.",
  },
  {
    context: "İşlik C (oval)",
    note: "Dense Kilia figurine waste and unfinished pieces; every production stage represented.",
  },
  {
    context: "İşlik D",
    note: "Near-finished broken figurines; the closest approach to complete examples at the site.",
  },
  {
    context: "Dağdere surface assemblage",
    note: "Finished Kilia fragments and rhyta about 30 km away — intra-regional exchange.",
  },
  {
    context: "Beçin Castle residual head",
    note: "A Kilia head in medieval layers: long-term residual deposition, or a curated object.",
  },
  {
    context: "Museum complete pieces",
    note: "Getty, Sadberk Hanım, Istanbul, Menil, Cleveland: finished products that left the workshop. Many are unprovenanced.",
  },
] as const;

export const phi = 1.6180339887;

export const measures = [
  { part: "Height", value: "17.2 cm", how: "Museum calipers. Mesh AABB 17.29 cm." },
  { part: "Max width (elbows)", value: "6.5 cm", how: "Museum; mesh 6.48 cm at y = 9.57 cm." },
  { part: "Max depth", value: "6.3 cm", how: "Museum; set by the tilted head, not the torso." },
  { part: "Head, vertical", value: "3.12 cm", how: "Chin flare to crown along world-up." },
  { part: "Head, face–occiput", value: "6.15 cm", how: "Long axis of the head ovoid (mesh PCA)." },
  { part: "Head, ear to ear", value: "5.19 cm", how: "Second axis of the head ovoid." },
  { part: "Head circumference", value: "12.0 cm", how: "Convex hull in a plane ⟂ the long axis." },
  { part: "Plan circumference of the head", value: "17.4 cm", how: "Horizontal Y-slice through the upturned skull — not an anatomical hat-size." },
  { part: "Neck length", value: "1.74 cm", how: "Shoulder inset (y 12.4) to chin flare (y 14.15)." },
  { part: "Neck width × depth", value: "1.27 × 1.38 cm", how: "Narrowest cylinder; hull circumference 4.22 cm." },
  { part: "Shoulder width", value: "5.29 cm", how: "Upper diamond, y ≈ 11.3 cm." },
  { part: "Upper arm, estimated", value: "2.68 cm", how: "Shoulder corner to elbow, front photograph + mesh width." },
  { part: "Forearm, folded, estimated", value: "3.79 cm", how: "Elbow to midline V, just below the neck." },
] as const;

export const ratios = [
  {
    pair: "Height / max width",
    value: "2.65",
    target: "φ² = 2.618",
    err: "1.1%",
    note: "Museum 17.2 / 6.5. The bounding rectangle is a square of the width, plus a golden rectangle stacked on it.",
    interest: "high" as const,
  },
  {
    pair: "Ear–ear / head vertical (ovoid)",
    value: "1.64",
    target: "φ = 1.618",
    err: "1.2%",
    note: "The two lesser axes of the head. The long axis (face–occiput) is almost 2 × the short.",
    interest: "high" as const,
  },
  {
    pair: "Shoulder width / neck width",
    value: "4.17",
    target: "φ³ = 4.236",
    err: "1.6%",
    note: "How hard the diamond is pinched into the cylinder.",
    interest: "high" as const,
  },
  {
    pair: "Folded forearm / upper arm",
    value: "1.41",
    target: "√2 = 1.414",
    err: "0.1%",
    note: "Layout of the V: elbow to midline against shoulder corner to elbow. A square’s diagonal, not φ.",
    interest: "high" as const,
  },
  {
    pair: "Chin height / total height",
    value: "0.818",
    target: "φ / 2 = 0.809",
    err: "1.1%",
    note: "Where the head begins, measured from the feet.",
    interest: "mid" as const,
  },
  {
    pair: "Height / plan circumference of the head",
    value: "0.99",
    target: "1",
    err: "1.2%",
    note: "A horizontal cut through the thrown-back skull is as long as the figure is tall. A fact of the tilt, not a hat measurement.",
    interest: "mid" as const,
  },
  {
    pair: "Elbow width / neck width",
    value: "5.08",
    target: "2φ² = 5.236",
    err: "3.0%",
    note: "Widest span against the narrowest. Close, not locked.",
    interest: "mid" as const,
  },
  {
    pair: "Head long axis / head short axis",
    value: "1.94",
    target: "2",
    err: "3.1%",
    note: "Face to occiput against chin to crown on the ovoid.",
    interest: "mid" as const,
  },
  {
    pair: "Head height / neck length",
    value: "1.79",
    target: "φ = 1.618",
    err: "11%",
    note: "The head is a little long for a golden pair with the neck. Not claimed.",
    interest: "none" as const,
  },
  {
    pair: "Neck length / neck diameter",
    value: "1.32",
    target: "φ = 1.618",
    err: "18%",
    note: "The cylinder is stubbier than a golden rod.",
    interest: "none" as const,
  },
  {
    pair: "Elbow height / total height",
    value: "0.55",
    target: "1/φ = 0.618",
    err: "11%",
    note: "The golden cut of the height does not fall at the elbows or at a navel.",
    interest: "none" as const,
  },
] as const;

