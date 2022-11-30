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

export const reactAria = style({
  transition,
  opacity: 0,
  selectors: {
    [`.${stack.reactAria} &, .${stack.vanillaExtract} &, .${stack.storybook} &, .${stack.eslint} &`]: {
      opacity: 1,
    },
  },
})
export const vanillaExtract = style({
  transition,
  opacity: 0,
  selectors: {
    [`.${stack.vanillaExtract} &, .${stack.storybook} &, .${stack.eslint} &`]: {
      opacity: 1,
    },
  },
})
export const storybook = style({
  transition,
  opacity: 0,
  selectors: {
    [`.${stack.storybook} &, .${stack.eslint} &`]: {
      opacity: 1,
    },
  },
})
export const eslint = style({
  transition,
  opacity: 0,
  selectors: {
    [`.${stack.eslint} &`]: {
      opacity: 1,
    },
  },
})
