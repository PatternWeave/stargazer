import { create } from "zustand";
import type { LightPreset, ViewMode } from "./artwork";

type ViewerState = {
  viewMode: ViewMode;
  lightPreset: LightPreset;
  autoRotate: boolean;
  infoOpen: boolean;
  helpOpen: boolean;
  fitNonce: number;
  setViewMode: (viewMode: ViewMode) => void;
  setLightPreset: (lightPreset: LightPreset) => void;
  setAutoRotate: (autoRotate: boolean) => void;
  toggleAutoRotate: () => void;
  setInfoOpen: (infoOpen: boolean) => void;
  toggleInfo: () => void;
  setHelpOpen: (helpOpen: boolean) => void;
  requestFit: () => void;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useViewerStore = create<ViewerState>((set) => ({
  viewMode: "textured",
  lightPreset: "gallery",
  autoRotate: !prefersReducedMotion(),
  infoOpen: false,
  helpOpen: false,
  fitNonce: 0,
  setViewMode: (viewMode) => set({ viewMode }),
  setLightPreset: (lightPreset) => set({ lightPreset }),
  setAutoRotate: (autoRotate) => set({ autoRotate }),
  toggleAutoRotate: () => set((s) => ({ autoRotate: !s.autoRotate })),
  setInfoOpen: (infoOpen) => set({ infoOpen }),
  toggleInfo: () => set((s) => ({ infoOpen: !s.infoOpen })),
  setHelpOpen: (helpOpen) => set({ helpOpen }),
  requestFit: () => set((s) => ({ fitNonce: s.fitNonce + 1 })),
}));
