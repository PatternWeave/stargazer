import { useMemo } from "react";
import * as THREE from "three";
import type { LightPreset } from "@/lib/artwork";

type Props = {
  preset: LightPreset;
};

export function SceneLights({ preset }: Props) {
  const mapSize = useMemo(() => new THREE.Vector2(2048, 2048), []);

  if (preset === "night") {
    return (
      <>
        <color attach="background" args={["#07080c"]} />
        <fog attach="fog" args={["#07080c", 7, 20]} />
        <hemisphereLight args={["#8b97b0", "#0a0c12", 0.42]} />
        <ambientLight intensity={0.12} color="#a8b4c8" />
        <directionalLight
          position={[0.4, 4.8, 1.5]}
          intensity={2.6}
          color="#e7edf8"
          castShadow
          shadow-mapSize={mapSize}
          shadow-bias={-0.0002}
          shadow-camera-near={0.5}
          shadow-camera-far={12}
          shadow-camera-left={-2.2}
          shadow-camera-right={2.2}
          shadow-camera-top={2.2}
          shadow-camera-bottom={-2.2}
        />
        <directionalLight position={[-2.2, 1.2, -1.4]} intensity={0.45} color="#8ea0c4" />
        <spotLight
          position={[0.05, 3.6, 0.35]}
          angle={0.28}
          penumbra={0.9}
          intensity={2.1}
          color="#f2f6ff"
        />
        <Starfield />
      </>
    );
  }

  if (preset === "study") {
    return (
      <>
        <color attach="background" args={["#161410"]} />
        <hemisphereLight args={["#efe8dc", "#3a342e", 0.7]} />
        <ambientLight intensity={0.48} color="#f3eee6" />
        <directionalLight
          position={[2.2, 3.4, 2.5]}
          intensity={1.7}
          color="#fff8ee"
          castShadow
          shadow-mapSize={mapSize}
          shadow-bias={-0.0002}
          shadow-camera-near={0.5}
          shadow-camera-far={12}
          shadow-camera-left={-2.2}
          shadow-camera-right={2.2}
          shadow-camera-top={2.2}
          shadow-camera-bottom={-2.2}
        />
        <directionalLight position={[-2.5, 2.4, 1.5]} intensity={1.05} color="#e6eef6" />
        <directionalLight position={[0.2, 1.8, -2.6]} intensity={0.7} color="#f4eadc" />
      </>
    );
  }

  return (
    <>
      <color attach="background" args={["#0c0b0a"]} />
      <fog attach="fog" args={["#0c0b0a", 8, 18]} />
      <hemisphereLight args={["#d8d0c6", "#2c2620", 0.55]} />
      <ambientLight intensity={0.22} color="#f2e8d8" />
      <directionalLight
        position={[2.5, 3.8, 2.4]}
        intensity={3.1}
        color="#fff4e6"
        castShadow
        shadow-mapSize={mapSize}
        shadow-bias={-0.0002}
        shadow-radius={2.5}
        shadow-camera-near={0.5}
        shadow-camera-far={12}
        shadow-camera-left={-2.2}
        shadow-camera-right={2.2}
        shadow-camera-top={2.2}
        shadow-camera-bottom={-2.2}
      />
      <directionalLight position={[-2.6, 1.6, 1.6]} intensity={0.85} color="#c5d0e0" />
      <directionalLight position={[0.2, 2.6, -2.4]} intensity={1.35} color="#ffe7c8" />
    </>
  );
}

function Starfield() {
  const positions = useMemo(() => {
    const count = 700;
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 9 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = Math.abs(r * Math.cos(phi)) * 0.72 + 1.2;
      p[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return p;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#e4eaf4"
        sizeAttenuation
        transparent
        opacity={0.82}
        depthWrite={false}
      />
    </points>
  );
}
