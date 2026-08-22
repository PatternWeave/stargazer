import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { artwork, type ViewMode } from "@/lib/artwork";

useGLTF.preload(artwork.modelPath);

const TARGET_HEIGHT = 1.72;

type Props = {
  mode: ViewMode;
};

export function StargazerModel({ mode }: Props) {
  const { scene } = useGLTF(artwork.modelPath);
  const wrap = useRef<THREE.Group>(null);

  const mats = useMemo(() => {
    const clay = new THREE.MeshStandardMaterial({
      color: "#eadccb",
      roughness: 0.58,
      metalness: 0.02,
    });
    const wire = new THREE.MeshBasicMaterial({
      color: "#ddd4c8",
      wireframe: true,
      transparent: true,
      opacity: 0.88,
    });
    const xray = new THREE.MeshPhysicalMaterial({
      color: "#e4d8c8",
      transmission: 0.86,
      thickness: 0.55,
      roughness: 0.16,
      metalness: 0,
      ior: 1.48,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
      side: THREE.DoubleSide,
      attenuationColor: "#d2c0a8",
      attenuationDistance: 0.4,
    });
    return { clay, wire, xray };
  }, []);

  useLayoutEffect(() => {
    return () => {
      mats.clay.dispose();
      mats.wire.dispose();
      mats.xray.dispose();
    };
  }, [mats]);

  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      obj.castShadow = true;
      obj.receiveShadow = true;
      if (!obj.userData.origMat) {
        obj.userData.origMat = obj.material;
        const originals = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const m of originals) {
          if (!m || !(m instanceof THREE.MeshStandardMaterial)) continue;
          if (m.map) {
            m.map.anisotropy = 8;
            m.map.colorSpace = THREE.SRGBColorSpace;
            m.emissiveMap = m.map;
            m.emissive.set("#ffffff");
            m.emissiveIntensity = 0.28;
          }
          if (m.normalMap) m.normalMap.anisotropy = 8;
          if (m.roughnessMap) m.roughnessMap.anisotropy = 8;
          m.roughness = Math.min(m.roughness ?? 1, 0.72);
          m.metalness = 0;
          m.envMapIntensity = 0.45;
          m.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      const orig = obj.userData.origMat as THREE.Material | THREE.Material[];
      if (mode === "textured") {
        obj.material = orig;
      } else if (mode === "clay") {
        obj.material = mats.clay;
      } else if (mode === "wire") {
        obj.material = mats.wire;
      } else {
        obj.material = mats.xray;
      }
    });
  }, [scene, mode, mats]);

  useLayoutEffect(() => {
    const g = wrap.current;
    if (!g) return;
    g.position.set(0, 0, 0);
    g.rotation.set(0, Math.PI, 0);
    g.scale.set(1, 1, 1);
    g.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(g);
    if (box.isEmpty()) return;
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const s = TARGET_HEIGHT / Math.max(size.y, 0.0001);
    g.scale.setScalar(s);
    g.position.set(-center.x * s, -box.min.y * s, -center.z * s);
  }, [scene]);

  return (
    <group ref={wrap}>
      <primitive object={scene} />
    </group>
  );
}
