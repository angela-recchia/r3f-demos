"use client";
import * as THREE from "three";
import React, { Suspense, useMemo, useRef } from "react";
import { Ring } from "./components/Ring";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
  Bounds,
  Cloud,
  Clouds,
  ContactShadows,
  Environment,
  Float,
  Text,
} from "@react-three/drei";
import "./index.scss";
import { motion } from "framer-motion-3d";
import { useScroll, useTransform } from "framer-motion";

const RotateOnScroll = () => {
  return (
    <>
      <Canvas className={"canvasWrapper"} resize={{ scroll: false }}>
        {/* <OrbitControls /> */}
        <color attach="background" args={["#73777b"]} />

        {/* <Bounds fit observe> */}
        <Scene />
        {/* </Bounds> */}

        <Clouds material={THREE.MeshBasicMaterial} position-z={-4}>
          <Cloud
            segments={30}
            bounds={[5, 2, 2]}
            volume={5}
            color="pink"
            fade={40}
            scale={1.8}
            speed={0.14}
          />
        </Clouds>
      </Canvas>

      <div className="container"></div>
    </>
  );
};

const Scene = () => {
  const groupRef = useRef();

  const { viewport } = useThree();
  const { scrollYProgress } = useScroll();

  //opacity
  const op1 = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const op2 = useTransform(scrollYProgress, [0, 0.4, 0.6, 0.85], [0, 0, 1, 0]);
  const op3 = useTransform(scrollYProgress, [0, 0.85, 0.9], [0, 0, 1]);

  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        metalness: 1,
        roughness: 0,
        color: "#797979",
        opacity: 0,
        envMapIntensity: 0.8,
      }),
    []
  );

  useFrame(() => {
    if (groupRef.current === undefined) return;
    groupRef.current.children[0].material.opacity = op1.get();
    groupRef.current.children[1].material.opacity = op2.get();
    groupRef.current.children[2].material.opacity = op3.get();
  });

  return (
    <group>
      <directionalLight intensity={1} position={[-1, -1, 0]} />

      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.25}
        scale={10}
        blur={2}
        far={5}
      />

      <directionalLight position={[0, 1, 3]} intensity={1} />

      <Suspense fallback={null}>
        <Float speed={0.5} floatIntensity={0.5}>
          <Ring />
        </Float>

        <motion.group ref={groupRef}>
          <Text
            fontSize={viewport.width / 3.5}
            material={mat}
            position={[
              (viewport.width / 40) * -5,
              4.5 - viewport.width / 10,
              -2,
            ]}
          >
            LOREM
          </Text>

          <Text
            fontSize={viewport.width / 8.2}
            position={[(viewport.width / 15) * 1.75, 0, 1.7]}
            material={mat}
          >
            IPSUM
          </Text>
          <Text
            material={mat}
            fontSize={viewport.width / 8}
            position={[
              (viewport.width / 36) * -1.8,
              -1.8 + viewport.width / 30,
              2,
            ]}
          >
            DOLOR
          </Text>
        </motion.group>

        <Environment files={"./img/sky.hdr"} />
      </Suspense>
    </group>
  );
};

export default RotateOnScroll;
