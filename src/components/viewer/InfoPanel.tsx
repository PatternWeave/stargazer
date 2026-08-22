import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { artwork } from "@/lib/artwork";
import { useViewerStore } from "@/lib/viewer-store";
import { Button } from "@/components/ui/button";

export function InfoPanel() {
  const open = useViewerStore((s) => s.infoOpen);
  const setInfoOpen = useViewerStore((s) => s.setInfoOpen);

  return (
    <>
      <button
        type="button"
        aria-label="Dismiss object record"
        className={`absolute inset-0 z-20 bg-bg/40 backdrop-blur-[2px] transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setInfoOpen(false)}
      />
      <aside
      className={`absolute inset-y-0 right-0 z-30 flex w-full max-w-md flex-col border-l border-border bg-surface/95 shadow-[-24px_0_60px_-30px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <p className="text-[0.65rem] font-medium tracking-[0.2em] text-fg-subtle uppercase">
          Object record
        </p>
        <Button variant="ghost" size="icon" aria-label="Close details" onClick={() => setInfoOpen(false)}>
          <X className="size-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        <p className="text-[0.65rem] tracking-[0.18em] text-fg-subtle uppercase">
          {artwork.accession}
        </p>
        <h2 className="mt-2 font-display text-3xl leading-tight tracking-[-0.03em] text-fg italic">
          {artwork.title}
        </h2>
        <p className="mt-3 text-sm text-fg-muted">
          {artwork.culture} ({artwork.cultureRange})
        </p>

        <dl className="mt-6 grid grid-cols-[7.5rem_1fr] gap-x-3 gap-y-2.5 text-sm">
          <Row label="Date" value={artwork.date} />
          <Row label="Material" value={artwork.technique} />
          <Row label="Dimensions" value={artwork.measurements} />
          <Row label="Weight" value={artwork.weight} />
          <Row label="Location" value={artwork.location} />
          <Row label="Credit" value={artwork.creditLine} />
        </dl>

        <p className="mt-6 text-[0.95rem] leading-relaxed text-fg">{artwork.description}</p>

        <figure className="mt-6 overflow-hidden rounded-xl border border-border">
          <img
            src={artwork.images.threeQuarter}
            alt="Three-quarter view of The Stargazer marble figurine"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </figure>

        <section className="mt-6">
          <h3 className="text-[0.65rem] font-medium tracking-[0.18em] text-fg-subtle uppercase">
            Did you know
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">{artwork.didYouKnow}</p>
        </section>

        <section className="mt-6">
          <h3 className="text-[0.65rem] font-medium tracking-[0.18em] text-fg-subtle uppercase">
            Mesh
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">
            {artwork.mesh.method}. {artwork.mesh.vertices.toLocaleString()} vertices,{" "}
            {artwork.mesh.triangles.toLocaleString()} triangles, with photogrammetry
            color, roughness, and normal maps. Source file served from this gallery
            as a GLB.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-[0.65rem] font-medium tracking-[0.18em] text-fg-subtle uppercase">
            Provenance
          </h3>
          <ol className="mt-2 space-y-1.5 text-sm text-fg-muted">
            {artwork.provenance.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
        </section>

        <section className="mt-6">
          <h3 className="text-[0.65rem] font-medium tracking-[0.18em] text-fg-subtle uppercase">
            Workshop
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">
            Kilia-type figures of this form were made at Kulaksızlar, a Middle
            Chalcolithic marble workshop on the Akhisar plain.
          </p>
          <Link
            to="/workshop"
            className="mt-3 inline-flex text-sm text-fg underline-offset-4 hover:underline"
            onClick={() => setInfoOpen(false)}
          >
            Read the workshop essay
          </Link>
        </section>

        <section className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-fg-subtle">
          <p>
            {artwork.license}. Credit is not required. Photographs and 3D model
            published by the Cleveland Museum of Art Open Access initiative.
          </p>
          <p className="mt-2">
            <a
              href={artwork.sourceUrl}
              className="text-fg-muted underline-offset-4 hover:text-fg hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Collection record
            </a>
            {" · "}
            <a
              href={artwork.sketchfabUrl}
              className="text-fg-muted underline-offset-4 hover:text-fg hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Sketchfab source
            </a>
            {" · "}
            DOI {artwork.zenodoDoi}
          </p>
        </section>
      </div>
    </aside>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-fg-subtle">{label}</dt>
      <dd className="text-fg">{value}</dd>
    </>
  );
}
