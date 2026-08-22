import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useLayoutEffect } from "react";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useViewerStore } from "@/lib/viewer-store";
import { SceneLights } from "./SceneLights";
import { StargazerModel } from "./StargazerModel";

// Opening frame: high front. HudSafeFraming shifts the projection so the
// crown sits below the title block on every viewport.
const HOME_TARGET: [number, number, number] = [0, 0.78, 0];
const HOME_DISTANCE = 4.6;
const HOME_POLAR = 0.55;
const HOME_AZIMUTH = Math.PI;

function spherical(
  target: [number, number, number],
  radius: number,
  polar: number,
  azimuth: number,
): [number, number, number] {
  return [
    target[0] + radius * Math.sin(polar) * Math.sin(azimuth),
    target[1] + radius * Math.cos(polar),
    target[2] + radius * Math.sin(polar) * Math.cos(azimuth),
  ];
}

export const HOME = {
  position: spherical(HOME_TARGET, HOME_DISTANCE, HOME_POLAR, HOME_AZIMUTH),
  target: HOME_TARGET,
};

export function ViewerCanvas() {
  const viewMode = useViewerStore((s) => s.viewMode);
  const lightPreset = useViewerStore((s) => s.lightPreset);
  const autoRotate = useViewerStore((s) => s.autoRotate);

  return (
    <Canvas
      className="h-full w-full touch-none"
      shadows
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      camera={{ position: HOME.position, fov: 28, near: 0.05, far: 40 }}
    >
      <SceneLights preset={lightPreset} />
      <Suspense fallback={null}>
        <StargazerModel mode={viewMode} />
      </Suspense>
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        autoRotate={autoRotate}
        autoRotateSpeed={0.35}
        minDistance={0.7}
        maxDistance={8}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI * 0.5}
        target={HOME.target}
      />
      <FitController />
      <HudSafeFraming />
      <WarmTone />
    </Canvas>
  );
}

function FitController() {
  const fitNonce = useViewerStore((s) => s.fitNonce);
  const camera = useThree((s) => s.camera);
  const controls = useThree((s) => s.controls) as OrbitControlsImpl | null;

  useLayoutEffect(() => {
    camera.position.set(...HOME.position);
    if (controls) {
      controls.target.set(...HOME.target);
      controls.update();
    }
  }, [fitNonce, camera, controls]);

  return null;
}

function HudSafeFraming() {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  const size = useThree((s) => s.size);

  useLayoutEffect(() => {
    const heading = document.getElementById("hud-heading");

    const apply = () => {
      const headingBottom = heading ? heading.getBoundingClientRect().bottom : 110;
      const shift = Math.round(headingBottom + 40);
      camera.setViewOffset(size.width, size.height, 0, -shift, size.width, size.height);
      camera.updateProjectionMatrix();
    };

    apply();
    const obs = new ResizeObserver(apply);
    if (heading) obs.observe(heading);
    return () => {
      obs.disconnect();
      camera.clearViewOffset();
      camera.updateProjectionMatrix();
    };
  }, [camera, size.height, size.width]);

  return null;
}

function WarmTone() {
  const gl = useThree((s) => s.gl);
  useLayoutEffect(() => {
    gl.toneMappingExposure = 1.42;
  }, [gl]);
  return null;
}
