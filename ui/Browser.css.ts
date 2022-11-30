import { style, styleVariants } from '@vanilla-extract/css'

const transition = 'all 0.5s'

const viewport = {
  width: '1280px',
  height: '723px',
}

const topbarHeight = '50px'

const browserBase = style({
  overflow: 'hidden',
  transition,
})

export const browser = styleVariants({
  displayed: [
    browserBase,
    {
      width: viewport.width,
      height: `calc(${viewport.height} + ${topbarHeight})`,
      borderRadius: 10,
    },
  ],
  hidden: [
    browserBase,
    {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    },
  ],
})

export const topbar = style({
  width: '100%',
  fontFamily: 'sans-serif',
  backgroundColor: '#22252B',
  display: 'grid',
  gridTemplateColumns: '1fr 50% 1fr',
  alignItems: 'center',
  padding: '0 20px',
  overflow: 'hidden',
  transition,
  selectors: {
    [`.${browser.displayed} &`]: {
      height: topbarHeight,
    },
    [`.${browser.hidden} &`]: {
      height: 0,
    },
  },
})

export const buttons = style({
  display: 'flex',
  gap: 20,
})

const buttonBase = style({
  borderRadius: '50%',
  height: '12px',
  width: '12px',
})

export const button = styleVariants({
  red: [
    buttonBase,
    {
      backgroundColor: '#ED594A;',
    },
  ],
  yellow: [
    buttonBase,
    {
      backgroundColor: '#FDD800',
    },
  ],
  green: [
    buttonBase,
    {
      backgroundColor: '#5AC05A',
    },
  ],
})

export const url = style({
  padding: '5px 20px',
  borderRadius: 40,
  backgroundColor: '#3b4049',
  color: '#F8F8F8',
  letterSpacing: '0.03em',
})
