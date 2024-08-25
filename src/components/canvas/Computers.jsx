import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <pointLight intensity={1.5} position={[10, 10, 10]} />
      <ambientLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.4 : 0.75} 
        position={isMobile ? [0, -2, -1.5] : [0, -3.25, -1.5]} 
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    updateIsMobile(); 
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]} 
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
