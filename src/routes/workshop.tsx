import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { EssayHeader } from "@/components/site/EssayHeader";
import { artwork } from "@/lib/artwork";
import { chaîne, finds, measures, ratios, toc, workshop } from "@/lib/workshop";

export const Route = createFileRoute("/workshop")({ component: Workshop });

function Workshop() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <EssayHeader active="workshop" />

      <header className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16">
        <p className="text-[0.65rem] font-medium tracking-[0.22em] text-fg-subtle uppercase">
          {workshop.kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] text-fg italic sm:text-6xl">
          {workshop.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          {workshop.lede}
        </p>
        <p className="mt-4 text-sm text-fg-subtle">
          {workshop.dates} · {workshop.place}
        </p>
      </header>

      <nav
        aria-label="Essay sections"
        className="sticky top-14 z-30 border-y border-border bg-bg/88 backdrop-blur-md sm:top-16"
      >
        <div className="mx-auto flex max-w-5xl flex-nowrap gap-1 overflow-x-auto px-4 py-2 sm:px-6">
          {toc.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 px-3 py-2 text-xs font-medium tracking-[0.14em] text-fg-muted uppercase transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <figure className="overflow-hidden rounded-xl border border-border">
          <img
            src="/images/workshop/site.jpg"
            alt="Reconstruction of a U-shaped marble workshop on a limestone hillside, with craftsmen at stone benches."
            className="aspect-[16/9] w-full object-cover"
          />
          <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-fg-subtle sm:px-5">
            Reconstruction of a U-shaped workshop at Kulaksızlar: stone
            foundations, perishable superstructure, work platforms, and marble
            waste. Drawn from published excavation evidence, not a photograph
            of the site.
          </figcaption>
        </figure>

        <section id="site" className="scroll-mt-32 pt-14 sm:pt-16">
          <SectionKicker>01</SectionKicker>
          <h2 className="mt-2 font-display text-3xl tracking-[-0.03em] italic sm:text-4xl">
            The site
          </h2>
          <Prose>
            <p>
              Kulaksızlar is a single-period Middle Chalcolithic settlement and
              marble workshop near the modern village of the same name, in the
              Akhisar district of Manisa, western Anatolia. It sits on a gentle
              limestone hillside at about 150 m, on the eastern edge of the
              Akhisar plain. Cultural deposits are thin — twenty to forty
              centimetres — which preserved workshop floors and left them open
              to the plough and to looting.
            </p>
            <p>
              Surface survey in the mid-1990s, by Rafet Dinç, first marked the
              place. Turan Takaoğlu’s later survey and analysis established it
              as a rare prehistoric specialist workshop in marble. Rescue
              excavations in 2018 and 2019, under the Manisa Museum and the
              Ministry of Culture, gave the first stratified contexts: clustered
              installations (İşlik A, C, D, and others) rather than a dense
              village.
            </p>
          </Prose>
          <aside className="mt-8 max-w-2xl border-l border-border-strong pl-5">
            <p className="text-[0.65rem] font-medium tracking-[0.18em] text-fg-subtle uppercase">
              Chronology
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              {workshop.chronologyNote}
            </p>
          </aside>
          <Prose>
            <p>
              The architecture is modest and telling. U-shaped and oval
              workshops stand on single-course stone foundations; the rest was
              perishable — wattle-and-daub is attested. Inside: stone platforms
              and low benches as work surfaces. Production areas cluster, with
              empty ground between them. Pottery, cattle bone (about 72 percent
              of the fauna), loom weights, and ground stone argue for more than
              a seasonal camp.
            </p>
            <p>
              Related material at Dağdere, about 30 km away, and residual Kilia
              heads in much later layers at Beçin Castle and Aphrodisias, show
              both regional movement in the fifth millennium and a long afterlife
              for the type.
            </p>
          </Prose>
        </section>

        <section id="making" className="scroll-mt-32 pt-14 sm:pt-16">
          <SectionKicker>02</SectionKicker>
          <h2 className="mt-2 font-display text-3xl tracking-[-0.03em] italic sm:text-4xl">
            Making
          </h2>
          <Prose>
            <p>
              Kulaksızlar is one of the clearest pre-urban cases of craft
              specialization in the Aegean–Anatolian world. Two product classes
              dominate: Kilia-type schematic marble figurines, and conical
              marble rhyta — pointed vessels with paired suspension lugs.
            </p>
          </Prose>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {chaîne.map((step, i) => (
              <li key={step.title} className="bg-surface px-5 py-5 sm:px-6">
                <p className="font-display text-2xl text-fg-subtle italic">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-sm font-medium tracking-wide text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <Prose>
            <p>
              Waste is diagnostic: discarded necks — a habitual break — unfinished
              heads, body preforms, conical fragments with rotary striations.
              Tools include sandstone drill bits, hammerstones, abrasive slabs.
              Obsidian from Melos and from central Anatolia lies on the work
              platforms: even the toolkit travelled.
            </p>
            <p>
              After Costin (1991), the site meets the usual tests of
              specialization: divided space, high volume, standardized form and
              proportion, heavy technical investment. That is uncommon this
              early, and it argues for full- or near-full-time makers rather
              than purely household work. Finished objects left. The floors
              keep the failures.
            </p>
          </Prose>
        </section>

        <section id="type" className="scroll-mt-32 pt-14 sm:pt-16">
          <SectionKicker>03</SectionKicker>
          <h2 className="mt-2 font-display text-3xl tracking-[-0.03em] italic sm:text-4xl">
            The type
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {(
              [
                [artwork.images.threeQuarter, "Three-quarter view of the Cleveland marble."],
                [artwork.images.front, "Front: diamond torso, long neck, head thrown back."],
                [artwork.images.top, "From above: the face, looking out."],
              ] as const
            ).map(([src, alt]) => (
              <figure
                key={src}
                className="overflow-hidden rounded-xl border border-border bg-surface"
              >
                <img src={src} alt={alt} className="aspect-[3/4] w-full object-cover object-top" />
              </figure>
            ))}
          </div>
          <p className="mt-3 text-xs text-fg-subtle">
            1993.165, Cleveland Museum of Art. Official photographs, CC0.
          </p>
          <Prose>
            <p>
              The type takes its name from Kilia, on the Gallipoli peninsula,
              where the first known example was found in the nineteenth century.
              The form is highly standardized:
            </p>
          </Prose>
          <ul className="mt-6 max-w-2xl space-y-2 text-sm leading-relaxed text-fg-muted">
            <li>A flat, broad torso; arms folded or reduced across the chest.</li>
            <li>A long cylindrical neck from wide shoulders.</li>
            <li>
              An oversized head tilted far back, so the face seems to look up —
              the museum nickname “Stargazer.”
            </li>
            <li>Low-relief almond eyes, triangular nose, small ears.</li>
            <li>An incised pubic triangle and a division of the legs.</li>
            <li>Proportions that give the head, and the upward turn, the last word.</li>
          </ul>
          <Prose>
            <p>
              Heights run from a few centimetres to museum pieces of 15–25 cm.
              Cleveland’s marble is 17.2 cm. The canon is tight enough that
              unprovenanced examples in Western collections can now be placed,
              with some confidence, in western Anatolian workshops — Kulaksızlar
              the one production site we can still walk.
            </p>
          </Prose>
        </section>

        <section id="proportion" className="scroll-mt-32 pt-14 sm:pt-16">
          <SectionKicker>04</SectionKicker>
          <h2 className="mt-2 font-display text-3xl tracking-[-0.03em] italic sm:text-4xl">
            Proportion
          </h2>
          <Prose>
            <p>
              The Cleveland marble is small enough to hold, and complete enough
              to measure. Museum calipers give 17.2 × 6.5 × 6.3 cm. The
              photogrammetry mesh — 7,502 vertices, scaled so its height matches
              those calipers — lets us take lengths the vitrine will not:
              neck cylinder, head ovoid, the folded arms as they sit on the
              chest. What follows is that reading, set against φ
              (1.618…) and a few other simple ratios. Close correspondences
              are flagged. Loose ones are left loose. The makers did not
              have Euclid; they had a block, a proportion of the type, and
              an eye.
            </p>
          </Prose>

          <figure className="mt-8 overflow-hidden rounded-xl border border-border">
            <img
              src="/images/workshop/phi.jpg"
              alt="Front and side of the Cleveland Stargazer with a column of measured lengths."
              className="aspect-[16/9] w-full object-cover object-left"
            />
            <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-fg-subtle sm:px-5">
              Front and side of 1993.165. Lengths from the official mesh,
              scaled to the museum height of 17.2 cm. Arm lengths are estimated
              from the front photograph: the mesh does not separate the arms as
              a volume, only as low relief on the diamond.
            </figcaption>
          </figure>

          <div className="mt-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="border-b border-border bg-surface text-[0.65rem] tracking-[0.16em] text-fg-subtle uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium sm:px-5">Part</th>
                  <th className="px-4 py-3 font-medium sm:px-5">Length</th>
                  <th className="px-4 py-3 font-medium sm:px-5">How taken</th>
                </tr>
              </thead>
              <tbody>
                {measures.map((row) => (
                  <tr key={row.part} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 align-top text-fg sm:px-5">{row.part}</td>
                    <td className="px-4 py-3 align-top whitespace-nowrap text-fg sm:px-5">
                      {row.value}
                    </td>
                    <td className="px-4 py-3 align-top text-fg-muted sm:px-5">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Prose>
            <p>
              The head is an ovoid thrown back so far that its long axis
              (face to occiput, 6.15 cm) lies nearly along the depth of the
              whole object. That is why the museum depth, 6.3 cm, is a head
              measurement, not a body one. The torso in side view is a blade,
              about two centimetres through. A horizontal slice through the
              upturned skull has a circumference of 17.4 cm — within a
              millimetre or two of the figure’s height. That is not a hat
              size; it is what the tilt does in plan. The anatomical
              circumference, taken in a plane across the long axis, is 12.0 cm.
            </p>
            <p>
              The neck is a short elliptical cylinder, 1.74 cm long, 1.27 ×
              1.38 cm in section. The diamond of the torso is widest at the
              elbows (6.48 cm in the mesh, 9.57 cm up from the sole). The
              arms are not a separate mass. They are the upper sides of that
              diamond, with a V incised toward the neck. From the front
              photograph, shoulder-corner to elbow is 2.68 cm (upper arm);
              elbow to the midline meeting, just under the neck, is 3.79 cm
              (folded forearm).
            </p>
          </Prose>

          <h3 className="mt-10 font-display text-2xl tracking-[-0.03em] italic">
            Against φ
          </h3>
          <Prose>
            <p>
              φ = (1 + √5) / 2 ≈ 1.618. Its square is φ² ≈ 2.618, which is
              also φ + 1: a square with a golden rectangle stacked on it.
              √2 ≈ 1.414 is the diagonal of a square — a ratio a maker can
              take off a block with a cord. Below, mesh and museum lengths
              divided, and the nearest of those targets. Error is relative
              to the target, not to a wish.
            </p>
          </Prose>

          <div className="mt-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="border-b border-border bg-surface text-[0.65rem] tracking-[0.16em] text-fg-subtle uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium sm:px-5">Pair</th>
                  <th className="px-4 py-3 font-medium sm:px-5">Ratio</th>
                  <th className="px-4 py-3 font-medium sm:px-5">Target</th>
                  <th className="px-4 py-3 font-medium sm:px-5">Error</th>
                </tr>
              </thead>
              <tbody>
                {ratios.map((row) => (
                  <tr key={row.pair} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 align-top text-fg sm:px-5">
                      {row.pair}
                      <p className="mt-1 text-xs leading-relaxed text-fg-subtle">{row.note}</p>
                    </td>
                    <td className="px-4 py-3 align-top whitespace-nowrap text-fg sm:px-5">
                      {row.value}
                    </td>
                    <td className="px-4 py-3 align-top whitespace-nowrap text-fg-muted sm:px-5">
                      {row.target}
                    </td>
                    <td className="px-4 py-3 align-top whitespace-nowrap sm:px-5">
                      <span
                        className={
                          row.interest === "high"
                            ? "text-fg"
                            : row.interest === "mid"
                              ? "text-fg-muted"
                              : "text-fg-subtle"
                        }
                      >
                        {row.err}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Prose>
            <p>
              Four readings sit inside about two percent, and are worth
              keeping on the table.
            </p>
            <p>
              First, the bounding rectangle. Height over maximum width, from
              the museum’s own 17.2 / 6.5, is 2.65 against φ² = 2.618 — off
              by 1.1 percent. The mesh is a little taller in its AABB (2.67).
              Either way the figure, as a block, is a square of its width with
              a golden rectangle set on top. That is the most robust of the
              correspondences: it uses only the published calipers, and does
              not depend on where one calls a chin.
            </p>
            <p>
              Second, the head ovoid. Ear-to-ear over the short (chin–crown)
              axis is 1.64 against φ, off 1.2 percent. The long axis,
              face to occiput, is almost twice the short (1.94). The head is
              not a golden ellipsoid in all three directions; two of them
              pair, the third is a doubling.
            </p>
            <p>
              Third, the pinch of the neck. Shoulder width over neck width
              is 4.17 against φ³ = 4.236, off 1.6 percent. The diamond is
              three golden steps wider than the cylinder it rises into.
            </p>
            <p>
              Fourth, the folded arms — the measurement asked for, and the
              one that refuses φ. Forearm over upper arm is 1.41, which is
              √2 to a tenth of a percent. That is a square’s diagonal. A
              maker laying the V of the chest against the outer edge of the
              diamond could take it with a cord, without any interest in
              pentagons. It is the cleanest ratio on the figure, and it is
              not golden.
            </p>
            <p>
              Other tests fail in instructive ways. Head to neck is 1.79, a
              little long for φ. The neck is stubbier than a golden rod
              (length / diameter 1.32). The golden cut of the height does
              not fall at the elbows, nor at a navel: there is no Vitruvian
              division through the torso. Chin-from-feet at 0.818 is near
              φ/2, which may only be another way of saying the head is
              about a fifth of the height and sits on a short neck.
            </p>
            <p>
              What is of interest, then: the block as φ², the head’s lesser
              axes as φ, the neck pinch as φ³, and the arms as √2. What is
              not: a grand golden canon. The type is schematic. A lozenge,
              a cylinder, a tilted disk, cut by eye in a tradition that
              already knew its proportions, will throw off a few of these
              numbers without anyone having named them. The Cleveland piece
              is one finished example, not a proof of the workshop’s
              arithmetic. Still, the bounding rectangle and the arm V are
              tight enough that anyone drawing or reconstructing a Kilia
              figure from fragments would be foolish to ignore them.
            </p>
          </Prose>
        </section>

        <section id="meaning" className="scroll-mt-32 pt-14 sm:pt-16">
          <SectionKicker>05</SectionKicker>
          <h2 className="mt-2 font-display text-3xl tracking-[-0.03em] italic sm:text-4xl">
            Meaning
          </h2>
          <Prose>
            <p>
              These were not ordinary house things. Finished figurines and
              conical rhyta moved across western Anatolia, and the type or the
              objects themselves reached the islands. Inland workshops were
              already tied to the coast.
            </p>
            <p>
              The gaze, the swollen head, the repeated female schema, invite
              the usual readings — fertility, ancestry, a watch on the sky,
              a mark of standing. Frequent recovery as fragments may be ritual
              breakage, or simply the weakness of marble at the neck. We do
              not know how Cleveland’s piece was used. The form still asks.
            </p>
            <p>
              Sustained specialist production implies skill handed on, some
              form of patronage or communal outlay, and demand enough to
              justify the labour. Residual heads in Bronze Age, Classical, and
              medieval layers — Beçin among them — suggest the objects kept a
              charge long after the kilns of their own time: heirloom, find, or
              curiosity.
            </p>
            <p>
              There is a modern cost. Complete or near-complete examples bring
              high prices. Looting at Kulaksızlar and related sites has
              stripped context and fed the trade. The 2018–2019 seasons were,
              in part, a race to record what the plough and the market had not
              yet taken.
            </p>
          </Prose>
        </section>

        <section id="finds" className="scroll-mt-32 pt-14 sm:pt-16">
          <SectionKicker>06</SectionKicker>
          <h2 className="mt-2 font-display text-3xl tracking-[-0.03em] italic sm:text-4xl">
            Finds
          </h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead className="border-b border-border bg-surface text-[0.65rem] tracking-[0.16em] text-fg-subtle uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium sm:px-5">Context</th>
                  <th className="px-4 py-3 font-medium sm:px-5">Significance</th>
                </tr>
              </thead>
              <tbody>
                {finds.map((row) => (
                  <tr key={row.context} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 align-top text-fg sm:px-5">{row.context}</td>
                    <td className="px-4 py-3 align-top text-fg-muted sm:px-5">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <figure className="mt-14 overflow-hidden rounded-xl border border-border">
          <img
            src="/images/workshop/map.jpg"
            alt="Schematic map of western Anatolia marking Kulaksızlar on the Akhisar plain."
            className="aspect-[16/9] w-full object-cover"
          />
          <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-fg-subtle sm:px-5">
            Schematic placing of Kulaksızlar on the Akhisar plain, with the
            Aegean to the west. A reconstruction for reading, not a surveyed
            distribution plot.
          </figcaption>
        </figure>

        <section id="computation" className="scroll-mt-32 pt-14 sm:pt-16">
          <SectionKicker>07</SectionKicker>
          <h2 className="mt-2 font-display text-3xl tracking-[-0.03em] italic sm:text-4xl">
            A note on method
          </h2>
          <Prose>
            <p>
              The corpus is unusually tractable for anyone working with images
              and fragments. The form is canonical and still varies. Workshop
              waste labels stages that finished museum pieces conceal. Necks
              snap; heads go missing — a natural test for reconstruction. Find
              spots, if they can be joined to stone chemistry, sketch a network.
              Excavated floors versus auction photographs are a real, if
              uncomfortable, training pair for questions of licit and illicit
              marble.
            </p>
            <p>
              This vitrine is one such use: the Cleveland photogrammetry mesh,
              CC0, turned so the upward face can be looked at again. The
              proportion notes on this page were taken from that mesh (world
              AABB scaled to the museum height of 17.2 cm) and from the front
              photograph for the folded arms, which exist only as relief.
              The workshop essay sits beside the object so it is not an orphan
              of the market.
            </p>
          </Prose>
        </section>

        <section className="scroll-mt-32 border-t border-border pt-14 sm:pt-16">
          <h2 className="font-display text-3xl tracking-[-0.03em] italic sm:text-4xl">
            Close
          </h2>
          <Prose>
            <p>
              Kulaksızlar remains a landmark for specialist craft, exchange,
              and the making of a tightly held symbolic type in the mid-fifth
              millennium — well before the better-known Cycladic marble of the
              Early Bronze Age. The technical debris and the wide scatter of
              finished pieces open both the bench and the social world.
            </p>
            <p>
              The upward face still asks how a community put a person, a god,
              or the sky into stone. Further sourcing of the marble, more of
              the remaining clusters, and a patient comparison of excavated
              and museum specimens will tighten the picture. Until then, the
              Cleveland figure looks up, and the hillside that likely taught
              that pose is on the record.
            </p>
          </Prose>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-fg-subtle">
            {workshop.sources} Photographs of 1993.165 and the 3D mesh are
            Cleveland Museum of Art, Open Access, CC0. Workshop reconstruction
            and map are newly made illustrations for this page, after published
            excavation accounts.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex h-11 items-center rounded-lg border border-border bg-surface px-4 text-sm font-medium text-fg transition-colors duration-150 hover:bg-fg/8"
          >
            Return to the vitrine
          </Link>
        </section>
      </article>
    </div>
  );
}

function SectionKicker({ children }: { children: string }) {
  return (
    <p className="text-[0.65rem] font-medium tracking-[0.22em] text-fg-subtle uppercase">
      {children}
    </p>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 max-w-2xl space-y-4 text-[0.95rem] leading-relaxed text-fg-muted [&_strong]:font-medium [&_strong]:text-fg">
      {children}
    </div>
  );
}
