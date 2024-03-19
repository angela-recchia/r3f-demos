import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";

import { motion } from "framer-motion-3d";
import {
  useScroll,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";

export function Ring(props) {
  const { size } = useThree();
  const { nodes, materials } = useGLTF("/au-55519_v2.glb");

  // const config = useControls({
  //   bounces: { value: 2, min: 0, max: 8, step: 1 },
  //   aberrationStrength: { value: 0.08, min: 0, max: 0.1, step: 0.01 },
  //   ior: { value: 0, min: 0, max: 10 },
  //   fresnel: { value: 1, min: 0, max: 1 },
  //   color: "white",
  //   fastChroma: true,
  // });

  const { scrollYProgress } = useScroll();
  const scroll = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  const groupRef = useRef();

  const rotX = useTransform(scroll, [0, 0.5, 1], [0, 0.5, 0.5]);
  const posZ = useTransform(scroll, [0, 0.5, 1], [0.8, 1.2, 2]);
  const posY = useTransform(scroll, [0, 0.5, 1], [0, 0, -0.5]);

  useMotionValueEvent(scroll, "change", (value) => {
    groupRef.current.rotation.y = value * Math.PI * 2;
    groupRef.current.rotation.x = rotX.get();
    groupRef.current.position.z = posZ.get();
    groupRef.current.position.y = posY.get();
  });

  const t = useLoader(RGBELoader, "./img/sky.hdr");

  return (
    <>
      <motion.group
        {...props}
        dispose={null}
        ref={groupRef}
        position-z={0.8}
        scale={0.7 + (0.3 * (size.width - 300)) / (1900 - 300)}
      >
        <group rotation={[-Math.PI, 0, 0]}>
          <group rotation={[Math.PI / 2 + 0.5, 0, 0]} scale={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cabochon_Cushion_None_0.geometry}
              // material={materials.None}
            >
              <meshStandardMaterial
                attach="material"
                metalness={1}
                roughness={0}
                color={"white"}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Diamond_Round_Material_1_0.geometry}
              material={materials.Material_1}
            />

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Diamond_Round_2_Material_1_0.geometry}
              material={materials.Material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Diamond_Round_3_Material_1_0.geometry}
              material={materials.Material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Diamond_Round_4_Material_1_0.geometry}
              material={materials.Material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Diamond_Round_5_Material_1_0.geometry}
              material={materials.Material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Diamond_Round_6_Material_1_0.geometry}
              material={materials.Material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2_WhiteMetal_0.geometry}
              material={materials.WhiteMetal}
            />
          </group>
        </group>
      </motion.group>
    </>
  );
}

useGLTF.preload("/au-55519_v2.glb");
