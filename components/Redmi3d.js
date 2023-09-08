import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import Redmi from './Redmi'

export default function Redmi3d() {
  
    return (
        <Canvas className=' h-fit md:h-full  w-fit' >
            <Stage environment={'city'} intensity={0.6} >         
                    <Redmi />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}
