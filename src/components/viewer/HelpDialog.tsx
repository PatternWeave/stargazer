import { X } from "lucide-react";
import { useViewerStore } from "@/lib/viewer-store";
import { Button } from "@/components/ui/button";

const rows = [
  ["Drag", "Orbit"],
  ["Scroll / pinch", "Zoom"],
  ["Right-drag / two-finger", "Pan"],
  ["1 – 4", "Surface / Form / Mesh / X-ray"],
  ["G / N / S", "Gallery / Night / Study light"],
  ["R", "Reset camera"],
  ["Space", "Toggle auto-rotate"],
  ["I", "Object record"],
  ["?", "This list"],
];

export function HelpDialog() {
  const open = useViewerStore((s) => s.helpOpen);
  const setHelpOpen = useViewerStore((s) => s.setHelpOpen);
  if (!open) return null;

  return (
    <div
      className="absolute inset-0 z-30 grid place-items-center bg-bg/55 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={() => setHelpOpen(false)}
    >
      <div
        role="dialog"
        aria-labelledby="help-title"
        className="w-full max-w-md rounded-xl border border-border bg-surface p-5 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 id="help-title" className="font-display text-2xl italic tracking-[-0.03em]">
            Looking
          </h2>
          <Button variant="ghost" size="icon" aria-label="Close" onClick={() => setHelpOpen(false)}>
            <X className="size-4" />
          </Button>
        </div>
        <dl className="mt-4 divide-y divide-border">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="font-mono text-[0.7rem] tracking-wide text-fg-muted">{k}</dt>
              <dd className="text-sm text-fg">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
