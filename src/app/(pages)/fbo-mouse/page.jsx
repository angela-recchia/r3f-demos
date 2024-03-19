"use client";
import { shaderMaterial, useFBO } from "@react-three/drei";
import { useFrame, useThree, extend, Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { frag } from "./shader/frag";
import { vert } from "./shader/vert";
import * as THREE from "three";
import { quadFrag } from "./shader/quadFrag";
import { useSpring, animated } from "@react-spring/three";

const PlaneMaterial = shaderMaterial(
  {
    uPointer: { x: 0, y: 0 },
    uAspect: null,
    uTime: 0,
    uSpeed: 0,
    uTexture: null,
  },
  vert,
  frag
);

extend({ PlaneMaterial });

// ref https://tympanus.net/codrops/2021/07/21/creating-a-typography-motion-trail-effect-with-three-js/
// ref https://www.youtube.com/watch?v=nf6e13wSMug
const FBOMouse = () => {
  const { viewport, camera } = useThree();

  const matRef = useRef();

  // quad framebuffer
  let targetA = useFBO();

  // visible scene framebuffer
  let targetB = useFBO();

  const quadScene = new THREE.Scene();
  const geo = new THREE.PlaneGeometry(viewport.width, viewport.height);

  const quadMaterial = new THREE.ShaderMaterial({
    // transparent: true,
    uniforms: {
      uPointer: { value: { x: 0, y: 0 } },
      uAspect: { value: null },
      uTime: { value: 0 },
      uTexture: { value: null },
    },
    vertexShader: vert,
    fragmentShader: quadFrag,
    depthTest: false,
    depthWrite: false,
    blending: THREE.NoBlending,
  });

  quadScene.add(new THREE.Mesh(geo, quadMaterial));

  const [props, api] = useSpring(() => ({
    px: 0,
    py: 0,
    config: {
      friction: 30,
      tension: 180,
    },
  }));

  let prevX;
  let prevY;
  useFrame(({ clock, viewport: vw, pointer, gl, scene, camera }, delta) => {
    gl.setRenderTarget(targetA);
    gl.render(scene, camera);

    gl.setRenderTarget(targetB);

    quadMaterial.uniforms.uTexture.value = targetA.texture;

    gl.render(quadScene, camera);

    gl.setRenderTarget(null);
    matRef.current.uniforms.uTexture.value = targetB.texture;
    gl.render(scene, camera);

    const speed = () => {
      const deltaX = pointer.x - matRef.current.uniforms.uPointer.value.x;
      const deltaY = pointer.y - matRef.current.uniforms.uPointer.value.y;
      const speedX = deltaX / delta;
      const speedY = deltaY / delta;

      prevX = pointer.x;
      prevY = pointer.y;

      return Math.sqrt(speedX * speedX + speedY * speedY);
    };

    if (matRef.current) {
      matRef.current.uniforms.uTime.value = clock.getElapsedTime();
      matRef.current.uniforms.uAspect.value = vw.aspect;
      matRef.current.uniforms.uSpeed.value = Number.isNaN(speed())
        ? 0.1
        : speed();
    }

    // update the quad material uniforms
    quadMaterial.uniforms.uTime.value = clock.getElapsedTime();
    quadMaterial.uniforms.uPointer.value = pointer;
    quadMaterial.uniforms.uAspect.value = vw.aspect;
  }, 1);

  return (
    <>
      <ambientLight intensity={4} />
      <directionalLight position={[10, 10, 10]} />

      <mesh
        onPointerMove={(e) => {
          api.start({
            px: e.pointer.x,
            py: e.pointer.y,
          });
        }}
      >
        <planeGeometry args={[viewport.width, viewport.height, 1]} />
        {/* <FinalMat uPointer={{ x: props.px, y: props.py }} /> */}
        <animated.shaderMaterial
          uniforms={{
            uPointer: { value: { x: 0, y: 0 } },
            uAspect: { value: null },
            uTime: { value: 0 },
            uSpeed: { value: 0 },
            uTexture: { value: null },
          }}
          vertexShader={vert}
          fragmentShader={frag}
          ref={matRef}
          uniforms-uPointer-value-x={props.px}
          uniforms-uPointer-value-y={props.py}
        ></animated.shaderMaterial>
      </mesh>
    </>
  );
};

const FBOScene = () => {
  return (
    <Canvas orthographic>
      <FBOMouse />
    </Canvas>
  );
};

export default FBOScene;
