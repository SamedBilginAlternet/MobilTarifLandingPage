"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 55;

function Pills() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const data = useMemo(() => {
    return Array.from({ length: COUNT }, () => ({
      x: (Math.random() - 0.5) * 22,
      y: (Math.random() - 0.5) * 11,
      z: (Math.random() - 0.5) * 4 - 3,
      rx: Math.random() * Math.PI * 2,
      ry: Math.random() * Math.PI * 2,
      rz: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.004,
      vy: (Math.random() - 0.5) * 0.003,
      vrx: (Math.random() - 0.5) * 0.012,
      vry: (Math.random() - 0.5) * 0.009,
      scale: 0.6 + Math.random() * 0.6,
    }));
  }, []);

  useFrame(() => {
    const m = meshRef.current;
    if (!m) return;

    data.forEach((d, i) => {
      d.x += d.vx;
      d.y += d.vy;
      d.rx += d.vrx;
      d.ry += d.vry;

      if (d.x > 11) d.x = -11;
      if (d.x < -11) d.x = 11;
      if (d.y > 6) d.y = -6;
      if (d.y < -6) d.y = 6;

      dummy.position.set(d.x, d.y, d.z);
      dummy.rotation.set(d.rx, d.ry, d.rz);
      dummy.scale.setScalar(d.scale);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });

    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
      <capsuleGeometry args={[0.12, 0.38, 4, 8]} />
      <meshStandardMaterial
        color="#2c76be"
        transparent
        opacity={0.13}
        roughness={0.4}
        metalness={0.15}
      />
    </instancedMesh>
  );
}

export default function PillParticlesScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 58 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 6, 4]} intensity={0.9} />
      <Pills />
    </Canvas>
  );
}
