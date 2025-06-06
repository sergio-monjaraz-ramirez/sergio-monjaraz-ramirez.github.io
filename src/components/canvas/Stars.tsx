import { useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random'


import * as THREE from 'three'

const Stars: React.FC = (props) => {
  const ref = useRef<THREE.Points>(null)
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })


  return (
   <group rotation={[0, 0, Math.PI / 4]}>
    <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props} >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
   </group>
  )
}

const StarsCanvas: React.FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
            <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas