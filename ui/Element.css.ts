import { styleVariants } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

const cube = (
  height: string,
  width: string,
  length: string,
  primary: string,
  secondary: string
) => ({
  top: {
    backgroundColor: primary,
    width: width,
    height: length,
    transform: 'rotateX(90deg)',
  },
  left: {
    backgroundColor: secondary,
    width: width,
    height: height,
    transform: `rotateY(-180deg) translateY(${calc.multiply(
      length,
      -1.5
    )}) translateZ(${calc.divide(length, 2)})`,
  },
  right: {
    backgroundColor: secondary,
    width: width,
    height: height,
    transform: `rotateY(180deg) translateY(${calc.add(
      calc.multiply(length, -1.5),
      calc.multiply(height, -1)
    )}) translateZ(${calc.divide(length, -2)})`,
  },
  bottom: {
    backgroundColor: secondary,
    width: width,
    height: length,
    transform: `rotateX(90deg) translateZ(${calc.subtract(length, height)})`,
  },
  shadow: {
    backgroundColor: '#bfced5',
    width: width,
    height: length,
    transform: `rotateX(90deg) translateZ(${calc.subtract(
      calc.add(calc.multiply(length, 2), calc.multiply(height, 2)),
      '18vh'
    )})`,
  },
})

export const square = styleVariants({
  wrapper: {
    position: 'absolute',
    transform:
      'rotateX(-35deg) rotateY(45deg) translateX(32vh) translateZ(30vh)',
    transformStyle: 'preserve-3d',
  },
  ...cube('4vh', '20vh', '20vh', '#f77a5b', '#b93305'),
})

export const circle = styleVariants({
  wrapper: { position: 'absolute', top: '10vh', left: '23vh' },
  top: {
    position: 'relative',
    zIndex: 3,
    backgroundColor: '#ffffff',
    width: '15vh',
    height: '9vh',
    borderRadius: '50%',
  },
  bottom: {
    position: 'relative',
    zIndex: 2,
    marginTop: '-7.5vh',
    backgroundColor: '#d7d7d7',
    width: '15vh',
    height: '9vh',
    borderRadius: '50%',
  },
  shadow: {
    position: 'relative',
    zIndex: 1,
    marginTop: '3.4vh',
    backgroundColor: '#bfced5',
    width: '15vh',
    height: '9vh',
    borderRadius: '50%',
  },
})

export const button = styleVariants({
  top: { backgroundColor: '#697276' },
})

export const textSquare = styleVariants({
  wrapper: {
    position: 'absolute',
    transform:
      'rotateX(-35deg) rotateY(45deg) translateX(32vh) translateZ(30vh)',
    transformStyle: 'preserve-3d',
  },
  ...cube('1vh', '7vh', '7vh', '#cfd1d0', '#a0a2a4'),
})
export const textLine1 = styleVariants({
  wrapper: {
    position: 'absolute',
    transform:
      'rotateX(-35deg) rotateY(45deg) translateX(18vh) translateZ(37vh)',
    transformStyle: 'preserve-3d',
  },
  ...cube('1vh', '8vh', '1.5vh', '#cfd1d0', '#a0a2a4'),
})
export const textLine2 = styleVariants({
  wrapper: {
    position: 'absolute',
    transform:
      'rotateX(-35deg) rotateY(45deg) translateX(18vh) translateZ(34.2vh)',
    transformStyle: 'preserve-3d',
  },
  ...cube('1vh', '8vh', '1.5vh', '#cfd1d0', '#a0a2a4'),
})
export const textLine3 = styleVariants({
  wrapper: {
    position: 'absolute',
    transform:
      'rotateX(-35deg) rotateY(45deg) translateX(21.5vh) translateZ(32.9vh)',
    transformStyle: 'preserve-3d',
  },
  ...cube('1vh', '4vh', '1.5vh', '#cfd1d0', '#a0a2a4'),
})
