import { style, styleVariants, fontFace } from '@vanilla-extract/css'

const roboto = fontFace({
  src: 'url(/Roboto-Regular.ttf)',
})

const darkblue = '#00367e'
const blue = '#00439e'
const lightblue = '#7da0ce'

const darkgray = '#6f707c'
const gray = '#999999'
const lightgray = '#c7c9d3'

export const page = style({
  display: 'grid',
  gridTemplateColumns: '250px auto',
  height: '100%',
  width: '100%',
  fontFamily: roboto,
  overflow: 'hidden',
})

// NAV

export const menu = style({
  position: 'relative',
  height: '100%',
  background: blue,
  color: 'white',
})

export const tint = style({
  height: '50px',
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  fontSize: '30px',
  padding: '20px 20px 6px',
})

export const menuItem = style({
  height: '50px',
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  fontSize: '14px',
  color: lightblue,
  padding: '5px 32px',
})

export const activeMenuItem = style([
  menuItem,
  {
    background: darkblue,
    borderLeft: '5px solid white',
    color: 'white',
  },
])

export const menuItemIcon = style({
  fontSize: '25px',
})

export const collapse = style({
  position: 'absolute',
  top: '20px',
  right: '-18px',
  background: 'white',
  color: darkblue,
  padding: '8px 12px',
  borderRadius: '5px',
  boxShadow: '0px 0px 8px 2px rgba(16, 24, 40, 0.15)',
})

// MAIN

export const main = style({
  display: 'grid',
  gridTemplateRows: '80px auto',
  background: '#f8f8f8',
})

// TOP BAR

export const topbar = style({
  height: '80px',
  background: 'white',
  display: 'flex',
  gap: '25px',
  alignItems: 'center',
  paddingLeft: '40px',
  boxShadow: '0px 0px 12px 10px rgba(16, 24, 40, 0.02)',
})

export const organization = style({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
})

export const organizationIcon = style({
  fontSize: '25px',
})

export const product = style({
  color: darkgray,
  fontWeight: 500,
  fontSize: '18px',
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
})

export const productIcon = style({
  fontSize: '12px',
  color: lightgray,
  transform: 'rotate(-90deg)',
})

// CONTENT

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '35px 45px',
})

export const title = style({
  margin: 0,
  fontWeight: 500,
  fontSize: '26px',
})

export const filters = style({
  paddingTop: '40px',
  display: 'grid',
  gridTemplateColumns: '120px 290px 290px 400px',
})

export const input = style({
  fontSize: '18px',
  color: gray,
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
})

export const inputIcon = style({
  fontSize: '27px',
  color: darkgray,
})

export const searchIcon = style([
  inputIcon,
  {
    fontSize: '20px',
    color: darkblue,
    paddingRight: '10px',
  },
])

export const statusChevron = style({
  fontSize: '7px',
  color: gray,
  transform: 'rotate(-90deg) translateY(16px)',
})

// TABLE

export const table = style({
  marginTop: '22px',
  border: 'solid 1px #f0f0f0',
  borderRadius: '4px',
  borderSpacing: 0,
})

export const tableHead = style({
  background: 'white',
  display: 'grid',
  gridTemplateColumns: '115px 130px 148px 280px 110px 145px 200px',
})

export const tableHeadCell = style({
  padding: '24px 18px',
  fontSize: '16px',
  textAlign: 'left',
  fontWeight: 400,
})

export const tableRow = style({
  display: 'grid',
  gridTemplateColumns: '115px 130px 148px 280px 110px 145px 200px',
  alignItems: 'center',
  selectors: {
    '&:nth-child(even)': {
      background: 'white',
    },
    '&:nth-child(odd)': {
      background: '#fafafc',
    },
  },
})

export const tableCell = style({
  color: darkgray,
  padding: '20px 18px',
  display: 'flex',
  gap: '1em',
  alignItems: 'center',
  lineHeight: '24px',
})

export const nowrap = style({
  whiteSpace: 'nowrap',
})

const chipBase = style({
  fontWeight: 500,
  padding: '8px 16px',
  borderRadius: '19px',
  width: 'fit-content',
})

export const chip = styleVariants({
  gray: [chipBase, { color: '#60616d', background: '#f0f0f0' }],
  green: [chipBase, { color: '#23721d', background: '#f3fbf2' }],
})

export const details = style({
  color: lightgray,
})
