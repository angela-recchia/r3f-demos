"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { use } from "react";
import { Model } from "./model";
import * as THREE from "three";
const Scene = () => {
  const modelRef = React.useRef();

  useFrame(({ pointer, camera }) => {
    modelRef.current.rotation.x = THREE.MathUtils.damp(
      modelRef.current.rotation.x,
      pointer.y / 5,
      0.5,
      0.1
    );

    modelRef.current.rotation.y = THREE.MathUtils.damp(
      modelRef.current.rotation.y,
      pointer.x / 5,
      0.5,
      0.1
    );

    modelRef.current.position.z = THREE.MathUtils.damp(
      modelRef.current.position.z,
      pointer.y / 5,
      0.5,
      0.1
    );
  });
  return (
    <>
      <directionalLight position={[-1, 10, 10]} intensity={1} castShadow />

      <group ref={modelRef}>
        <Model />
      </group>
    </>
  );
};

const LowPolyScene = () => {
  return (
    <Canvas camera={{ position: [0, 4, 6] }} shadows>
      {/* <OrbitControls /> */}
      <color attach={"background"} args={["#81c3a2"]} />
      <ambientLight intensity={3} />
      <Scene />
    </Canvas>
  );
};

export default LowPolyScene;
