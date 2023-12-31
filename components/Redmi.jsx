/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 redmi.gltf --transform 
Files: redmi.gltf [1.59MB] > redmi-transformed.glb [1.85MB] (-16%)
Author: NeloMN1 (https://sketchfab.com/NeloMN1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/xiaomi-mi-note-10-pro-e4c8be9a57c74a4183e9f80fc7f274db
Title: Xiaomi Mi Note 10 Pro
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/redmi-transformed.glb')
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI / -3, 0]} > {/* Add rotation here */}
      <mesh geometry={nodes.Cylinder_Material001_0.geometry} material={materials.PaletteMaterial001} position={[9.467, 33.265, -13.733]} rotation={[0, Math.PI / 2, 0]} scale={[5.246, 5.246, 0.592]} />
      <mesh geometry={nodes.Cylinder008_Material004_0.geometry} material={materials['Material.004']} position={[10.035, 140.882, -36.643]} rotation={[0, Math.PI / 2, 0]} scale={[3.205, 1.584, 0.727]} />
      <mesh geometry={nodes.Cube001_Material_0.geometry} material={materials.PaletteMaterial002} position={[4.463, 37.872, 26.685]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.923, 2.438, 9.679]} />
    </group>
  )
}

useGLTF.preload('/redmi-transformed.glb')
