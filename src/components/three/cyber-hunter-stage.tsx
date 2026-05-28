"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, Sparkles, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { issueLabels } from "@/data/platform";

function ArchitectureCore() {
  const groupRef = useRef<THREE.Group>(null);
  const points = useMemo(
    () => [
      [-1.9, 0.9, -0.8],
      [-0.9, 1.45, 0.1],
      [0.2, 0.85, -0.4],
      [1.35, 1.2, 0.25],
      [1.95, 0.2, -0.7],
      [0.85, -0.8, 0.2],
      [-1.1, -0.55, -0.2]
    ],
    []
  );

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.22) * 0.18;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.17) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((point, index) => (
        <mesh key={index} position={point as [number, number, number]}>
          <sphereGeometry args={[0.045, 18, 18]} />
          <meshStandardMaterial color={index % 2 ? "#8b5cf6" : "#38bdf8"} emissive={index % 2 ? "#6d28d9" : "#0ea5e9"} emissiveIntensity={1.8} />
        </mesh>
      ))}
      {points.slice(0, -1).map((point, index) => {
        const start = new THREE.Vector3(...(point as [number, number, number]));
        const end = new THREE.Vector3(...(points[index + 1] as [number, number, number]));
        const mid = start.clone().add(end).multiplyScalar(0.5);
        const distance = start.distanceTo(end);
        const direction = end.clone().sub(start).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

        return (
          <mesh key={`${index}-line`} position={mid} quaternion={quaternion}>
            <cylinderGeometry args={[0.009, 0.009, distance, 8]} />
            <meshBasicMaterial color={index % 2 ? "#a78bfa" : "#7dd3fc"} transparent opacity={0.45} />
          </mesh>
        );
      })}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.35, -0.2]}>
        <torusGeometry args={[1.65, 0.008, 12, 160]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.32} />
      </mesh>
    </group>
  );
}

function Model({ url }: { url: string }) {
  const model = useGLTF(url);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    model.scene.traverse((object) => {
      if ((object as THREE.Mesh).isMesh) {
        const mesh = object as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#090e18",
          metalness: 0.9,
          roughness: 0.24,
          emissive: "#082f49",
          emissiveIntensity: 0.24
        });
      }
    });
  }, [model.scene]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.28) * 0.25;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.9) * 0.08;
  });

  return <primitive ref={ref} object={model.scene} scale={1.9} position={[0, -1.25, 0]} />;
}

function Scene({ hasModel }: { hasModel: boolean }) {
  return (
    <Canvas dpr={[1, 1.7]} shadows gl={{ antialias: true, alpha: true }} className="absolute inset-0">
      <PerspectiveCamera makeDefault position={[0, 0.3, 6]} fov={42} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 4]} intensity={2.2} color="#e0f2fe" />
      <pointLight position={[-2, 1, 2]} intensity={2} color="#7dd3fc" />
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.45}>
        <ArchitectureCore />
        {hasModel ? (
          <Suspense fallback={null}>
            <Model url="/spider.glb" />
          </Suspense>
        ) : null}
      </Float>
      <Sparkles count={62} scale={[5, 4, 2]} size={2.2} speed={0.35} color="#7dd3fc" />
      <Environment preset="city" />
    </Canvas>
  );
}

function IssueSwarm() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {issueLabels.map((label, index) => (
        <motion.div
          key={label}
          className={`${index > 3 ? "hidden sm:block " : ""}absolute rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-100 shadow-[0_0_28px_rgba(248,113,113,0.2)] backdrop-blur-md`}
          style={{
            left: `${[7, 58, 3, 68, 12, 76, 54, 31][index]}%`,
            top: `${[22, 12, 58, 36, 78, 66, 81, 8][index]}%`
          }}
          animate={{
            x: [0, index % 2 ? 16 : -14, 0],
            y: [0, index % 3 ? -12 : 14, 0],
            opacity: [0.86, 0.32, 0.86],
            scale: [1, 0.92, 1]
          }}
          transition={{ duration: 4.8 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {label}
        </motion.div>
      ))}
      <motion.div
        className="absolute left-[58%] top-[18%] h-px w-40 origin-left bg-gradient-to-r from-sky-300/70 to-transparent"
        animate={{ rotate: [8, -8, 8], opacity: [0.2, 0.9, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] top-[64%] h-px w-52 origin-left bg-gradient-to-r from-red-300/55 to-transparent"
        animate={{ rotate: [-22, -5, -22], opacity: [0.1, 0.75, 0.1] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function CyberHunterStage() {
  const [hasModel, setHasModel] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/spider.glb", { method: "HEAD" })
      .then((response) => {
        if (active) setHasModel(response.ok);
      })
      .catch(() => {
        if (active) setHasModel(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative min-h-[520px] w-full overflow-hidden lg:min-h-[720px]">
      <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-3xl" />
      <Scene hasModel={hasModel} />
      {!hasModel ? (
        <motion.div
          className="absolute inset-0 mx-auto flex items-center justify-center"
          animate={{ y: [0, -14, 0], rotate: [0, 1.2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/cyber-hunter.png"
            alt="Cyber architecture hunter scanning repository issues"
            width={672}
            height={718}
            priority
            className="h-auto max-h-[88%] w-[min(88vw,560px)] object-contain brightness-125 contrast-125 drop-shadow-[0_0_52px_rgba(56,189,248,0.48)]"
          />
        </motion.div>
      ) : null}
      <IssueSwarm />
      <motion.div
        className="absolute bottom-8 left-4 rounded-lg border border-sky-300/20 bg-slate-950/64 p-4 shadow-[0_0_50px_rgba(56,189,248,0.14)] backdrop-blur-xl sm:left-8"
        animate={{ opacity: [0.76, 1, 0.76] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs uppercase tracking-normal text-slate-500">Architecture score</p>
        <div className="mt-1 flex items-end gap-2">
          <span className="text-5xl font-semibold text-white">88</span>
          <span className="mb-2 text-sm text-sky-200">+14 after fixes</span>
        </div>
      </motion.div>
    </div>
  );
}
