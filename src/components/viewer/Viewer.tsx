import { useEffect, useState } from "react";
import { useViewerStore } from "@/lib/viewer-store";
import { HelpDialog } from "./HelpDialog";
import { Hud } from "./Hud";
import { InfoPanel } from "./InfoPanel";
import { LoadGate } from "./LoadGate";
import { ViewerCanvas } from "./ViewerCanvas";

export function Viewer() {
  const [mounted, setMounted] = useState(false);
  const setViewMode = useViewerStore((s) => s.setViewMode);
  const setLightPreset = useViewerStore((s) => s.setLightPreset);
  const toggleAutoRotate = useViewerStore((s) => s.toggleAutoRotate);
  const toggleInfo = useViewerStore((s) => s.toggleInfo);
  const setHelpOpen = useViewerStore((s) => s.setHelpOpen);
  const helpOpen = useViewerStore((s) => s.helpOpen);
  const infoOpen = useViewerStore((s) => s.infoOpen);
  const requestFit = useViewerStore((s) => s.requestFit);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "Escape") {
        if (helpOpen) setHelpOpen(false);
        else if (infoOpen) useViewerStore.getState().setInfoOpen(false);
        return;
      }
      if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        setHelpOpen(!helpOpen);
        return;
      }
      switch (e.key.toLowerCase()) {
        case "1":
          setViewMode("textured");
          break;
        case "2":
          setViewMode("clay");
          break;
        case "3":
          setViewMode("wire");
          break;
        case "4":
          setViewMode("xray");
          break;
        case "g":
          setLightPreset("gallery");
          break;
        case "n":
          setLightPreset("night");
          break;
        case "s":
          setLightPreset("study");
          break;
        case "r":
          requestFit();
          break;
        case " ":
          e.preventDefault();
          toggleAutoRotate();
          break;
        case "i":
          toggleInfo();
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [
    helpOpen,
    infoOpen,
    requestFit,
    setHelpOpen,
    setLightPreset,
    setViewMode,
    toggleAutoRotate,
    toggleInfo,
  ]);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-bg text-fg">
      {mounted ? <ViewerCanvas /> : <div className="absolute inset-0 bg-bg" />}
      {mounted && <LoadGate />}
      <Hud />
      <InfoPanel />
      <HelpDialog />
    </div>
  );
}
