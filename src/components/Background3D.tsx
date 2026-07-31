import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

const materialProps = {
  color: "#ffffff",
  metalness: 1,
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
  envMapIntensity: 2.5,
  distort: 0.4,
  speed: 2,
};

function ChromeShape({ position, scale, geometry, rotationSpeed }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed.x;
      meshRef.current.rotation.y += delta * rotationSpeed.y;
    }
  });

  return (
    <Float floatIntensity={2} speed={2} rotationIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <primitive object={geometry} attach="geometry" />
        <MeshDistortMaterial {...materialProps} />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const ref = useRef<any>(null);
  // Reduced particle count for better performance
  const sphere = random.inSphere(new Float32Array(3000), { radius: 15 });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#3b82f6" size={0.04} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
      </Points>
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    // Parallax effect: moving camera down based on scroll
    const scrollY = window.scrollY;
    // 0.015 controls how fast the 3D scene scrolls relative to the page
    const targetY = -scrollY * 0.015;
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.1);
  });
  return null;
}

const Background3D = () => {
  // Geometries optimized for liquid drop effect (using spheres that get distorted)
  const geometries = [
    new THREE.SphereGeometry(1.2, 64, 64),
    new THREE.SphereGeometry(1.5, 64, 64),
    new THREE.SphereGeometry(1.0, 64, 64),
    new THREE.SphereGeometry(1.3, 64, 64)
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} color="#2563eb" intensity={2} />
        
        <Environment preset="studio" />
        
        {/* Placed at different Y coordinates to appear as you scroll */}
        <ChromeShape position={[3, 3, -2]} scale={1.2} geometry={geometries[0]} rotationSpeed={{ x: 0.2, y: 0.3 }} />
        <ChromeShape position={[-4, -8, -4]} scale={1.5} geometry={geometries[1]} rotationSpeed={{ x: 0.1, y: 0.4 }} />
        <ChromeShape position={[4, -18, -3]} scale={1.3} geometry={geometries[2]} rotationSpeed={{ x: 0.3, y: 0.2 }} />
        <ChromeShape position={[-3, -26, -5]} scale={1.4} geometry={geometries[3]} rotationSpeed={{ x: 0.2, y: 0.5 }} />

        <ParticleField />
        <CameraRig />
      </Canvas>
    </div>
  );
};

export default Background3D;
