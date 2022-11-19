import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { OrthographicCamera as Camera } from 'three'
import { Plane, Box, Cylinder, OrthographicCamera } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'

const Text = () => {
  return (
    <>
      <Box
        args={[0.4, 0.05, 0.4]}
        position={[0.3, 0.075, -0.9]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={0xcfd1d0} />
      </Box>
      <Box
        args={[0.5, 0.05, 0.08]}
        position={[-0.25, 0.075, -0.75]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={0xcfd1d0} />
      </Box>
      <Box
        args={[0.5, 0.05, 0.08]}
        position={[-0.25, 0.075, -0.9]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={0xcfd1d0} />
      </Box>
      <Box
        args={[0.3, 0.05, 0.08]}
        position={[-0.15, 0.075, -1.05]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={0xcfd1d0} />
      </Box>
    </>
  )
}

const Square = () => {
  return (
    <Box
      args={[1, 0.2, 1]}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
    >
      <meshStandardMaterial color={0xf77a5b} />
    </Box>
  )
}

const Circle = () => {
  return (
    <Cylinder
      args={[0.4, 0.4, 0.2, 64]}
      position={[-1, 0, -0.8]}
      rotation={[0, 0, 0]}
      castShadow
    >
      <meshStandardMaterial color={0xffffff} />
    </Cylinder>
  )
}

const Button = () => {
  return (
    <>
      <Cylinder
        args={[0.1, 0.1, 0.06, 64]}
        position={[-0.8, 0, 0.3]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={0x697276} />
      </Cylinder>
      <Box
        args={[0.2, 0.06, 0.4]}
        position={[-0.8, 0, 0.1]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={0x697276} />
      </Box>
      <Cylinder
        args={[0.1, 0.1, 0.06, 64]}
        position={[-0.8, 0, -0.1]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={0x697276} />
      </Cylinder>
    </>
  )
}

const First = () => {
  return (
    <Canvas shadows>
      <OrthographicCamera
        position={[0, 0, 0]}
        rotation={[Math.PI / 5, Math.PI / 4, 0]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={0.5}
          castShadow
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
        />
        <Square />
        <Circle />
        <Text />
        <Button />
        <Plane
          receiveShadow
          args={[1000, 1000, 1000]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        />
      </OrthographicCamera>
    </Canvas>
  )
}

export default First
