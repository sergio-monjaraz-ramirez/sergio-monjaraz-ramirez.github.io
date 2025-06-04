import {Suspense }from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Loader from './Loader'


const Earth: React.FC = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
      castShadow
      receiveShadow
    />
  )
}

const EarthCanvas: React.FC = () => {

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas