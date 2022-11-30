import { style, styleVariants } from '@vanilla-extract/css'

const transition = 'all 0.5s'

export const background = style({
  width: '100vw',
  height: '100vh',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
})

const stackBase = style({
  all: 'unset',
  listStyle: 'none',
  fontSize: 40,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
})

export const stack = styleVariants({
  stack: [stackBase],
  reactAria: [stackBase, {}],
  vanillaExtract: [stackBase, {}],
  storybook: [stackBase, {}],
  eslint: [stackBase, {}],
})

const library = style({
  transition,
  opacity: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 20,
})

export const icon = style({ height: 50, width: 50 })

export const reactAria = style([
  library,
  {
    selectors: {
      [`.${stack.reactAria} &, .${stack.vanillaExtract} &, .${stack.storybook} &, .${stack.eslint} &`]: {
        opacity: 1,
      },
    },
  },
])
export const vanillaExtract = style([
  library,
  {
    selectors: {
      [`.${stack.vanillaExtract} &, .${stack.storybook} &, .${stack.eslint} &`]: {
        opacity: 1,
      },
    },
  },
])
export const storybook = style([
  library,
  {
    selectors: {
      [`.${stack.storybook} &, .${stack.eslint} &`]: {
        opacity: 1,
      },
    },
  },
])
export const eslint = style([
  library,
  {
    selectors: {
      [`.${stack.eslint} &`]: {
        opacity: 1,
      },
    },
  },
])
