import React, { useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Plane, Box, Cylinder, OrthographicCamera } from '@react-three/drei'

const Text = ({ position, rotation }: Position) => {
  return (
    <>
      <Box
        args={[0.4, 0.05, 0.4]}
        position={position}
        rotation={rotation}
        castShadow
      >
        <meshStandardMaterial color={0xcfd1d0} />
      </Box>
      <Box
        args={[0.5, 0.05, 0.08]}
        position={[position[0] - 0.55, position[1], position[2] + 0.15]}
        rotation={rotation}
        castShadow
      >
        <meshStandardMaterial color={0xcfd1d0} />
      </Box>
      <Box
        args={[0.5, 0.05, 0.08]}
        position={[position[0] - 0.55, position[1], position[2]]}
        rotation={rotation}
        castShadow
      >
        <meshStandardMaterial color={0xcfd1d0} />
      </Box>
      <Box
        args={[0.3, 0.05, 0.08]}
        position={[position[0] - 0.45, position[1], position[2] - 0.15]}
        rotation={rotation}
        castShadow
      >
        <meshStandardMaterial color={0xcfd1d0} />
      </Box>
    </>
  )
}

const Square = ({ position, rotation }: Position) => {
  return (
    <Box args={[1, 0.2, 1]} position={position} rotation={rotation} castShadow>
      <meshStandardMaterial color={0xf77a5b} />
    </Box>
  )
}

const Circle = ({ position, rotation }: Position) => {
  return (
    <Cylinder
      args={[0.4, 0.4, 0.2, 64]}
      position={position}
      rotation={rotation}
      castShadow
    >
      <meshStandardMaterial color={0xffffff} />
    </Cylinder>
  )
}

const Button = ({ position, rotation }: Position) => {
  return (
    <>
      <Cylinder
        args={[0.1, 0.1, 0.06, 64]}
        position={[position[0], position[1], position[2] + 0.4]}
        rotation={rotation}
        castShadow
      >
        <meshStandardMaterial color={0x697276} />
      </Cylinder>
      <Box
        args={[0.2, 0.06, 0.4]}
        position={[position[0], position[1], position[2] + 0.2]}
        rotation={rotation}
        castShadow
      >
        <meshStandardMaterial color={0x697276} />
      </Box>
      <Cylinder
        args={[0.1, 0.1, 0.06, 64]}
        position={position}
        rotation={rotation}
        castShadow
      >
        <meshStandardMaterial color={0x697276} />
      </Cylinder>
    </>
  )
}

type Idle = [number, number, number]

interface Running {
  duration: number
  elapsed: number
  from: Idle
  to: Idle
  current: Idle
}

type Animation = Idle | Running

interface Position {
  position: Idle
  rotation: Idle
}

interface Positions {
  camera: Position
  square: Position
  circle: Position
  text: Position
  button: Position
}

interface AnimatedPosition {
  position: Animation
  rotation: Animation
}

interface AnimatedPositions {
  camera: AnimatedPosition
  square: AnimatedPosition
  circle: AnimatedPosition
  text: AnimatedPosition
  button: AnimatedPosition
}

const isIdle = (animation: Animation): animation is Idle =>
  Array.isArray(animation)

const animate = (animation: Animation, target: Idle): Animation =>
  isIdle(animation)
    ? {
        duration: animationDuration,
        elapsed: 0,
        from: animation,
        to: target,
        current: animation,
      }
    : {
        duration: animationDuration,
        elapsed: 0,
        from: animation.current,
        to: target,
        current: animation.current,
      }

const forward = (
  { current, from, to, elapsed, duration }: Running,
  delta: number
): Animation => {
  const next: Idle = [
    current[0] + (to[0] - from[0]) * (delta / duration),
    current[1] + (to[1] - from[1]) * (delta / duration),
    current[2] + (to[2] - from[2]) * (delta / duration),
  ]

  if (elapsed + delta >= duration) {
    return to
  }

  return {
    duration,
    elapsed: elapsed + delta,
    from,
    to,
    current: next,
  }
}

const tick = (
  { position, rotation }: AnimatedPosition,
  delta: number
): AnimatedPosition => ({
  position: isIdle(position) ? position : forward(position, delta),
  rotation: isIdle(rotation) ? rotation : forward(rotation, delta),
})

const move = (
  { position, rotation }: AnimatedPosition,
  target: Position
): AnimatedPosition => ({
  position: animate(position, target.position),
  rotation: animate(rotation, target.rotation),
})

const current = ({ position, rotation }: AnimatedPosition): Position => ({
  position: isIdle(position) ? position : position.current,
  rotation: isIdle(rotation) ? rotation : rotation.current,
})

interface Props {
  display: 'illustration' | 'page'
}

const positions = {
  illustration: {
    camera: {
      position: [0, 0, 0],
      rotation: [Math.PI * 0.2, Math.PI * 0.25, 0],
    },
    square: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    circle: {
      position: [-1, 0, -0.8],
      rotation: [0, 0, 0],
    },
    text: {
      position: [0.3, 0.075, -0.9],
      rotation: [0, 0, 0],
    },
    button: {
      position: [-0.8, 0, -0.1],
      rotation: [0, 0, 0],
    },
  } as Positions,
  page: {
    camera: {
      position: [0, 0, 0],
      rotation: [Math.PI * 0.5, Math.PI, 0],
    },
    square: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    circle: {
      position: [0.15, 0, -1.65],
      rotation: [0, 0, 0],
    },
    text: {
      position: [0.3, 0.075, -0.9],
      rotation: [0, 0, 0],
    },
    button: {
      position: [-0.4, 0, -1.8],
      rotation: [0, 0, 0],
    },
  } as Positions,
}

const DesignSystemIllustration = ({ display }: Props) => (
  <Canvas shadows orthographic camera={{ zoom: 200 }}>
    <DesignSystem display={display} />
  </Canvas>
)

const animationDuration = 500

const DesignSystem = ({ display }: Props) => {
  const [{ camera, square, circle, text, button }, setPositions] = useState<
    Positions
  >(positions.illustration)
  const [animation, setAnimation] = useState<AnimatedPositions>(
    positions.illustration
  )

  useFrame((_, delta) => {
    setPositions({
      square: current(animation.square),
      circle: current(animation.circle),
      text: current(animation.text),
      button: current(animation.button),
      camera: current(animation.camera),
    })
    setAnimation({
      square: tick(animation.square, delta * 1000),
      circle: tick(animation.circle, delta * 1000),
      text: tick(animation.text, delta * 1000),
      button: tick(animation.button, delta * 1000),
      camera: tick(animation.camera, delta * 1000),
    })
  })

  useEffect(() => {
    setAnimation({
      square: move(square, positions[display].square),
      circle: move(circle, positions[display].circle),
      text: move(text, positions[display].text),
      button: move(button, positions[display].button),
      camera: move(camera, positions[display].camera),
    })
  }, [display])

  return (
    <OrthographicCamera position={camera.position} rotation={camera.rotation}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 10, 0]}
        intensity={0.5}
        castShadow
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />
      <Square {...square} />
      <Circle {...circle} />
      <Text {...text} />
      <Button {...button} />
      <Plane
        receiveShadow
        args={[1000, 1000, 1000]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
      >
        <meshStandardMaterial attach="material" color={0xe2e8ed} />
      </Plane>
    </OrthographicCamera>
  )
}

export default DesignSystemIllustration
