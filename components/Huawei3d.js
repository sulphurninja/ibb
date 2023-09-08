import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import Huawei from './Huawei'

export default function Huawei3d() {

    return (
        <Canvas className=' h-fit md:h-full  w-fit' >
            <Stage environment={'city'} intensity={0.6} >
                <Huawei />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}
