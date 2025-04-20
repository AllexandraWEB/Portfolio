import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export function LotusHero(props) {
  const { nodes } = useGLTF('/models/lotus.glb')

  const whiteMetallicMaterial = new MeshStandardMaterial({
    color: 'white',
    metalness: 0.9, // very metallic 0.9
    roughness: 0.4, // shiny/smooth surface 0.2
  })

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Flower_Material_0.geometry} material={whiteMetallicMaterial} />
          <mesh geometry={nodes.Flower_Material_0_1.geometry} material={whiteMetallicMaterial} />
          <mesh geometry={nodes.Flower_Material_0_2.geometry} material={whiteMetallicMaterial} />
          <mesh geometry={nodes.Flower_Material_0_3.geometry} material={whiteMetallicMaterial} />
          <mesh geometry={nodes.Flower_Material_0_4.geometry} material={whiteMetallicMaterial} />
          <mesh geometry={nodes.Flower_Material_0_5.geometry} material={whiteMetallicMaterial} />
          <mesh geometry={nodes.Flower_Material_0_6.geometry} material={whiteMetallicMaterial} />
          <mesh geometry={nodes.Flower_Material_0_7.geometry} material={whiteMetallicMaterial} />
          <mesh geometry={nodes.Flower_Material_0_8.geometry} material={whiteMetallicMaterial} />
          <mesh geometry={nodes.Flower_Material_0_9.geometry} material={whiteMetallicMaterial} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/lotus.glb')
