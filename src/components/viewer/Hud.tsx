import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Download,
  Info,
  Keyboard,
  Moon,
  RotateCcw,
  RotateCw,
  SunMedium,
  ScanSearch,
} from "lucide-react";
import { artwork, lightPresets, viewModes, type LightPreset, type ViewMode } from "@/lib/artwork";
import { cn } from "@/lib/cn";
import { useViewerStore } from "@/lib/viewer-store";
import { Button } from "@/components/ui/button";
import { AuthSlot } from "./AuthSlot";

export function Hud() {
  const viewMode = useViewerStore((s) => s.viewMode);
  const lightPreset = useViewerStore((s) => s.lightPreset);
  const autoRotate = useViewerStore((s) => s.autoRotate);
  const infoOpen = useViewerStore((s) => s.infoOpen);
  const setViewMode = useViewerStore((s) => s.setViewMode);
  const setLightPreset = useViewerStore((s) => s.setLightPreset);
  const toggleAutoRotate = useViewerStore((s) => s.toggleAutoRotate);
  const toggleInfo = useViewerStore((s) => s.toggleInfo);
  const setHelpOpen = useViewerStore((s) => s.setHelpOpen);
  const requestFit = useViewerStore((s) => s.requestFit);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-6">
      <header className="flex items-start justify-between gap-4">
        <div className="pointer-events-auto max-w-[16rem] sm:max-w-sm" id="hud-heading">
          <p className="font-sans text-[0.625rem] font-medium tracking-[0.22em] text-fg-subtle uppercase">
            <span className="sm:hidden">{artwork.accession}</span>
            <span className="hidden sm:inline">
              Cleveland Museum of Art · {artwork.accession}
            </span>
          </p>
          <h1 className="mt-1 font-display text-[1.85rem] leading-none tracking-[-0.03em] text-fg italic sm:text-[2.35rem]">
            {artwork.shortTitle}
          </h1>
          <p className="mt-2 hidden text-sm text-fg-muted sm:block">
            {artwork.culture} · {artwork.date}
          </p>
        </div>
        <div className="pointer-events-auto flex items-center gap-2">
          <Link
            to="/workshop"
            className="inline-flex h-11 items-center rounded-lg border border-border bg-surface/80 px-3 text-xs font-medium tracking-[0.14em] text-fg uppercase backdrop-blur-md transition-colors duration-150 hover:bg-fg/8"
          >
            Workshop
          </Link>
          <AuthSlot />
        </div>
      </header>

      <div id="hud-dock" className="flex flex-col items-stretch gap-3 sm:items-center">
        <div className="pointer-events-auto mx-auto flex max-w-full flex-wrap items-center justify-center gap-1 rounded-xl border border-border bg-surface/85 p-1.5 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md">
          <Segment
            ariaLabel="Surface mode"
            items={viewModes.map((m) => ({
              id: m.id,
              label: m.label,
              title: m.hint,
            }))}
            value={viewMode}
            onChange={(id) => setViewMode(id as ViewMode)}
          />
          <Divider />
          <Segment
            ariaLabel="Lighting"
            items={lightPresets.map((m) => ({
              id: m.id,
              label: m.label,
              title: m.hint,
              icon:
                m.id === "gallery" ? (
                  <SunMedium className="size-3.5" />
                ) : m.id === "night" ? (
                  <Moon className="size-3.5" />
                ) : (
                  <ScanSearch className="size-3.5" />
                ),
            }))}
            value={lightPreset}
            onChange={(id) => setLightPreset(id as LightPreset)}
          />
          <Divider />
          <IconBtn
            label={autoRotate ? "Stop rotation" : "Auto-rotate"}
            pressed={autoRotate}
            onClick={toggleAutoRotate}
          >
            <RotateCw className={cn("size-4", autoRotate && "animate-spin [animation-duration:6s]")} />
          </IconBtn>
          <IconBtn label="Reset view" onClick={requestFit}>
            <RotateCcw className="size-4" />
          </IconBtn>
          <IconBtn label="Object details" pressed={infoOpen} onClick={toggleInfo}>
            <Info className="size-4" />
          </IconBtn>
          <span className="hidden sm:inline-flex">
            <IconBtn label="Keyboard shortcuts" onClick={() => setHelpOpen(true)}>
              <Keyboard className="size-4" />
            </IconBtn>
          </span>
          <a
            href={artwork.modelPath}
            download={artwork.downloadName}
            className="inline-flex size-11 items-center justify-center rounded-lg text-fg-muted transition-colors duration-150 hover:bg-fg/8 hover:text-fg"
            aria-label="Download GLB mesh"
            title="Download GLB mesh"
          >
            <Download className="size-4" />
          </a>
        </div>

        <p className="pointer-events-none text-center font-sans text-[0.65rem] tracking-[0.16em] text-fg-subtle uppercase">
          Drag to orbit · Scroll to zoom · {artwork.measurements.split("(")[0].trim()} ·{" "}
          {artwork.mesh.triangles.toLocaleString()} triangles
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return <span className="mx-0.5 hidden h-7 w-px bg-border sm:block" aria-hidden />;
}

function Segment({
  items,
  value,
  onChange,
  ariaLabel,
}: {
  items: { id: string; label: string; title: string; icon?: ReactNode }[];
  value: string;
  onChange: (id: string) => void;
  ariaLabel: string;
}) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} className="flex items-center gap-0.5">
      {items.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            role="radio"
            aria-checked={active}
            title={item.title}
            onClick={() => onChange(item.id)}
            className={cn(
              "inline-flex h-10 min-w-10 items-center justify-center gap-1.5 rounded-md px-2 text-[0.7rem] font-medium tracking-wide transition-colors duration-150 sm:px-3 sm:text-xs",
              active ? "bg-fg text-bg" : "text-fg-muted hover:bg-fg/8 hover:text-fg",
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function IconBtn({
  children,
  label,
  onClick,
  pressed,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
  pressed?: boolean;
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      aria-pressed={pressed}
      title={label}
      onClick={onClick}
      className={cn(pressed && "bg-fg/10 text-fg")}
    >
      {children}
    </Button>
  );
}
