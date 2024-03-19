"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/low_poly_living_room.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.005} rotation-y={-Math.PI / 4}>
        <group
          position={[0, 352.333, -487.651]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TV_Black_0.geometry}
            material={materials.Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TV_Grey_0.geometry}
            material={materials.Grey}
          />
        </group>
        <group
          position={[0, 91.421, -423.361]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[202.889, 69.426, 87.711]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard001_Bookshelf_0.geometry}
            material={materials.Bookshelf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard001_Table_0.geometry}
            material={materials.Table}
          />
        </group>
        <group
          position={[-187.311, 90.077, -354.721]}
          rotation={[-Math.PI / 2, 0, -0.636]}
          scale={[213.144, 55.838, 92.144]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard002_Table_0.geometry}
            material={materials.Table}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard002_White_0.geometry}
            material={materials.material_0}
          />
        </group>
        <group
          position={[57.395, 90.018, -356.164]}
          rotation={[-Math.PI / 2, 0, 0.808]}
          scale={[213.144, 55.838, 92.144]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard003_Table_0.geometry}
            material={materials.Table}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard003_White_0.geometry}
            material={materials.material_0}
          />
        </group>
        <group
          position={[72.235, 90.077, -354.721]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[213.144, 55.838, 92.144]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard004_Table_0.geometry}
            material={materials.Table}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard004_White_0.geometry}
            material={materials.material_0}
          />
        </group>
        <group
          position={[-0.108, 0, 289.538]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sofa_Bookshelf_0.geometry}
            material={materials.Bookshelf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sofa_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sofa_Table_0.geometry}
            material={materials.Table}
          />
        </group>
        <group
          position={[328.171, 0, -53.004]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Single_sofa_Bookshelf_0.geometry}
            material={materials.Bookshelf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Single_sofa_Table_0.geometry}
            material={materials.Table}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Single_sofa_White_0.geometry}
            material={materials.material_0}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book002_Book_red_0.geometry}
            material={materials.Book_red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book002_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book002_Book_yellow_0.geometry}
            material={materials.Book_yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book002_Book_blue_0.geometry}
            material={materials.Book_blue}
          />
        </group>
        <group
          position={[-367.661, 232.133, -454.555]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book001_Book_yellow_0.geometry}
            material={materials.Book_yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book001_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book001_Book_red_0.geometry}
            material={materials.Book_red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book001_Book_purple_0.geometry}
            material={materials.Book_purple}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book001_Book_blue_0.geometry}
            material={materials.Book_blue}
          />
        </group>
        <group
          position={[-430.785, 68.788, -454.555]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_stack_Book_red_0.geometry}
            material={materials.Book_red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_stack_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_stack_Book_yellow_0.geometry}
            material={materials.Book_yellow}
          />
        </group>
        <group
          position={[-293.428, 157.382, -453.634]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_Book_purple_0.geometry}
            material={materials.Book_purple}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_Book_red_0.geometry}
            material={materials.Book_red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Book_Book_yellow_0.geometry}
            material={materials.Book_yellow}
          />
        </group>
        <group
          position={[362.889, 321.067, -492.761]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Picture_2_Bookshelf_0.geometry}
            material={materials.Bookshelf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Picture_2_Picture_1_0.geometry}
            material={materials.Picture_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Picture_2_White_0.geometry}
            material={materials.material_0}
          />
        </group>
        <group
          position={[-494.801, 352.276, -265.779]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Picture_1_Bookshelf_0.geometry}
            material={materials.Bookshelf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Picture_1_Picture_1_0.geometry}
            material={materials.Picture_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Picture_1_White_0.geometry}
            material={materials.material_0}
          />
        </group>
        <group
          position={[-444.401, 0, 380.58]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Table_0.geometry}
            material={materials.Table}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Plant_0.geometry}
            material={materials.Plant}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plant_Leaves_0.geometry}
            material={materials.Leaves}
          />
        </group>
        <group
          position={[-470.928, 315.163, 125.035]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Succulent_Book_red_0.geometry}
            material={materials.Book_red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Succulent_Leaves_0.geometry}
            material={materials.Leaves}
          />
        </group>
        <group
          position={[-470.928, 315.163, -50.548]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Succulent001_Book_blue_0.geometry}
            material={materials.Book_blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Succulent001_Leaves_0.geometry}
            material={materials.Leaves}
          />
        </group>
        <group
          position={[-434.52, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard_Bookshelf_0.geometry}
            material={materials.Bookshelf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cupboard_Table_0.geometry}
            material={materials.Table}
          />
        </group>
        <group
          position={[-33.521, 55.52, -45.38]}
          rotation={[-Math.PI / 2, 0, 0.454]}
          scale={[38.965, 53.174, 38.965]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Newspaper_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Newspaper_Newspaper_0.geometry}
            material={materials.Newspaper}
          />
        </group>
        <group
          position={[61.246, 102.84, -29.204]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mug_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mug_Plant_0.geometry}
            material={materials.Plant}
          />
        </group>
        <group
          position={[-7.732, 102.84, -29.204]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mug001_White_0.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mug001_Bookshelf_0.geometry}
            material={materials.Bookshelf}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_Grey_0.geometry}
          material={materials.Grey}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_tile_Wall_tile_0.geometry}
          material={materials.Wall_tile}
          position={[0, 267.468, -494.263]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[265.38, 500, 493.876]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bookshelf_Bookshelf_0.geometry}
          material={materials.Bookshelf}
          position={[-359.185, 176.721, -459.275]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_Table_0.geometry}
          material={materials.Table}
          position={[0, 0, -55.508]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wallshelf_White_0.geometry}
          material={materials.material_0}
          position={[-478.727, 326.222, 80.012]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Carpet_Picture_1_0.geometry}
          material={materials.Picture_1}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/low_poly_living_room.glb");
