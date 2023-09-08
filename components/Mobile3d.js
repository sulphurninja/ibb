import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Iphone from './Iphone'

export default function Mobile3d() {
  return (
    <Canvas className='h-fit md:h-full w-full'>
      <Stage environment={'city'} intensity={0.6}>
        <Iphone />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
