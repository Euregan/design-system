import { style, styleVariants, fontFace } from '@vanilla-extract/css'

const roboto = fontFace({
  src: 'url(/Roboto.ttf)',
  fontWeight: '0 1999',
})
const inter = fontFace({
  src: 'url(/Inter.ttf)',
  fontWeight: '0 1999',
})

const transition = 'all 0.5s'

const darkblue = '#00367e'
const blue = { old: '#00439e', new: '#0D54D1' }
const lightblue = { old: '#7da0ce', new: '#ecf3ff' }

const darkgray = { old: '#6f707c', new: '#676C77' }
const gray = { old: '#999999', new: '#7e8aa4' }
const lightgray = { old: '#c7c9d3', new: '#f9fafc' }

const pageBase = style({
  display: 'grid',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  fontFamily: inter,
  transition,
})

export const page = styleVariants({
  old: [
    pageBase,
    {
      gridTemplateColumns: '250px auto',
      fontFamily: roboto,
    },
  ],
  new: [
    pageBase,
    {
      gridTemplateColumns: '295px auto',
      alignItems: 'center',
      justifyItems: 'center',
      background: 'white',
    },
  ],
  search: [
    pageBase,
    {
      gridTemplateColumns: '0 auto',
      alignItems: 'center',
      justifyItems: 'center',
      background: 'white',
    },
  ],
  select: [
    pageBase,
    {
      gridTemplateColumns: '0 auto',
      alignItems: 'center',
      justifyItems: 'center',
      background: 'white',
    },
  ],
  autocomplete: [
    pageBase,
    {
      gridTemplateColumns: '0 auto',
      alignItems: 'center',
      justifyItems: 'center',
      background: 'white',
    },
  ],
  filteredSelect: [
    pageBase,
    {
      gridTemplateColumns: '0 auto',
      alignItems: 'center',
      justifyItems: 'center',
      background: 'white',
    },
  ],
  filters: [
    pageBase,
    {
      gridTemplateColumns: '0 auto',
      alignItems: 'center',
      justifyItems: 'center',
      background: 'white',
    },
  ],
})

// NAV

export const menu = style({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      background: blue.old,
      color: 'white',
      gap: '0px',
    },
    [`.${page.new} &`]: {
      background: lightblue.new,
      color: 'black',
      paddingLeft: '8px',
      borderTopRightRadius: '22px',
      gap: '8px',
      boxShadow: '0px 0px 12px 10px rgba(16, 24, 40, 0.03)',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      overflow: 'hidden',
      width: 0,
    },
  },
})

export const tint = style({
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      fontSize: '30px',
      height: '50px',
      padding: '20px 20px 6px',
    },
    [`.${page.new} &`]: {
      fontSize: '22px',
      height: '40px',
      padding: '18px 20px 12px',
    },
  },
})

export const menuItem = style({
  display: 'flex',
  alignItems: 'center',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      height: '50px',
      padding: '5px 32px',
      color: lightblue.old,
      fontSize: '14px',
      gap: '15px',
    },
    [`.${page.new} &`]: {
      height: '30px',
      padding: '6px 8px',
      marginLeft: '11px',
      marginRight: '20px',
      color: darkgray.new,
      fontWeight: 600,
      fontSize: '14px',
      gap: '16px',
    },
  },
})

export const activeMenuItem = style([
  menuItem,
  {
    transition,
    selectors: {
      [`.${page.old} &`]: {
        color: 'white',
        background: darkblue,
        borderLeft: '5px solid white',
      },
      [`.${page.new} &`]: {
        color: blue.new,
        background: '#e1ebfc',
        borderRadius: '3px',
        borderLeft: '0px solid white',
      },
    },
  },
])

export const menuItemIcon = style({
  transition,
  selectors: {
    [`.${page.old} &`]: {
      fontSize: '25px',
    },
    [`.${page.new} &`]: {
      fontSize: '15px',
    },
  },
})

export const collapse = style({
  position: 'absolute',
  top: '20px',
  color: darkblue,
  padding: '8px 12px',
  borderRadius: '5px',
  zIndex: 5,
  transition,
  selectors: {
    [`.${page.old} &`]: {
      right: '-18px',
      boxShadow: '0px 0px 8px 2px rgba(16, 24, 40, 0.15)',
      background: 'white',
    },
    [`.${page.new} &`]: {
      right: '14px',
      fontSize: '18px',
    },
  },
})

// MAIN

export const main = style({
  display: 'grid',
  gridTemplateRows: '80px auto',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      background: '#f8f8f8',
    },
    [`.${page.new} &`]: {
      background: 'white',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      gridTemplateRows: '0 auto',
    },
  },
})

// TOP BAR

export const topbar = style({
  position: 'relative',
  background: 'white',
  display: 'flex',
  gap: '25px',
  alignItems: 'center',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      boxShadow: '0px 0px 12px 10px rgba(16, 24, 40, 0.02)',
      width: '100%',
      paddingLeft: '40px',
      paddingTop: '0',
      height: '80px',
      margin: '0',
    },
    [`.${page.new} &`]: {
      width: '690px',
      paddingLeft: '0',
      paddingTop: '30px',
      height: '40px',
      margin: '0 146.5px',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      height: 0,
      overflow: 'hidden',
    },
  },
})

export const breadcrumb = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1em',
  overflow: 'hidden',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      width: '0',
    },
    [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      width: '120px',
      color: darkgray.new,
    },
  },
})

export const breadcrumbLink = style({
  color: blue.new,
  fontWeight: 500,
  fontSize: '14px',
})

export const organization = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      left: '65px',
    },
    [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      left: '470px',
    },
  },
})

export const organizationIcon = style({
  transition,
  selectors: {
    [`.${page.old} &:first-child`]: {
      fontSize: '25px',
      width: '25px',
    },
    [`.${page.old} &:last-child`]: {
      fontSize: '20px',
      width: '0',
    },
    [`.${page.new} &:first-child`]: {
      fontSize: '25px',
      width: '0',
    },
    [`.${page.new} &:last-child`]: {
      fontSize: '20px',
      width: '20px',
    },
  },
})

export const product = style({
  position: 'absolute',
  color: darkgray.old,
  fontWeight: 500,
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      fontSize: '18px',
      left: '245px',
    },
    [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      fontSize: '13px',
      left: '355px',
    },
  },
})

export const productIcon = style({
  fontSize: '12px',
  color: lightgray.old,
  transform: 'rotate(-90deg)',
})

export const options = style({
  position: 'absolute',
  boxSizing: 'border-box',
  width: ' 36px',
  height: '36px',
  border: '1px solid #dfe5f2',
  borderRadius: '8px',
  boxShadow: '0px 1px 2px 0px #1018280D',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      left: '1200px',
    },
    [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      left: '650px',
    },
  },
})

// CONTENT

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      margin: '0 0',
      width: '100%',
      padding: '35px 45px',
    },
    [`.${page.new} &`]: {
      margin: '0 146.5px',
      width: '690px',
      padding: '82px 0',
    },
  },
})

export const title = style({
  margin: 0,
  fontWeight: 500,
  overflow: 'hidden',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      fontSize: '26px',
    },
    [`.${page.new} &`]: {
      fontSize: '32px',
      height: '39px',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      height: '0',
    },
  },
})

export const filters = style({
  display: 'grid',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      paddingTop: '40px',
      gridTemplateColumns: '120px 290px 290px 400px',
    },
    [`.${page.new} &`]: {
      paddingTop: '42px',
      gap: '10px',
      gridTemplateColumns: '165px 165px 165px 165px',
    },
    [`.${page.search} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      paddingTop: '0',
      gap: '0',
      gridTemplateColumns: '0 0 0 400px',
    },
    [`.${page.filters} &`]: {
      paddingTop: '0',
      gap: '16px',
      gridTemplateColumns: '200px 200px 200px 200px',
    },
  },
})

export const input = style({
  position: 'relative',
  fontSize: '18px',
  color: gray.old,
  display: 'flex',
  gap: '5px',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      alignItems: 'center',
    },
    [`.${page.new} &`]: {
      height: '66px',
      alignItems: 'flex-start',
      width: '100%',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      width: '100%',
    },
  },
})

export const searchInput = style([
  input,
  {
    transition,
    selectors: {
      [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        flexDirection: 'column',
        gap: 0,
        height: '114px',
      },
      [`.${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        position: 'relative',
      },
      [`.${page.filters} &`]: {
        width: '200px',
      },
    },
  },
])

export const label = style({
  overflow: 'hidden',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      color: gray.old,
      fontSize: '18px',
    },
    [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      color: '#4c5a76',
      fontWeight: 500,
      fontSize: '16px',
    },
    [`.${page.filters} &`]: {
      color: '#4c5a76',
      fontWeight: 500,
      fontSize: '14px',
      height: '17px',
    },
  },
})

export const newLabel = style([
  label,
  {
    transition,
    selectors: {
      [`.${page.old} &`]: {
        height: 0,
        width: 0,
      },
      [`.${page.new} &`]: {
        height: '20px',
      },
      [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        fontSize: '28px',
        height: '34px',
      },
      [`.${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        height: '0',
      },
      [`.${page.filters} &`]: {
        fontSize: '14px',
        height: '17px',
      },
    },
  },
])

export const selectLabel = style([
  label,
  {
    height: 0,
    selectors: {
      [`.${page.old} &`]: {
        width: 0,
      },
      [`.${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        fontSize: '28px',
        height: '34px',
      },
      [`.${page.filters} &`]: {
        fontSize: 0,
      },
    },
  },
])

export const placeholderToLabel = style({
  overflow: 'hidden',
  transition,
  selectors: {
    [`.${page.old} &`]: {},
    [`.${page.new} &`]: {
      color: '#4c5a76',
      fontWeight: 500,
      fontSize: '16px',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      height: '0',
    },
    [`.${page.filters} &`]: {
      color: '#4c5a76',
      fontWeight: 500,
      fontSize: '14px',
      height: '17px',
    },
  },
})

export const inputContent = style({
  overflow: 'hidden',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      height: 0,
      overflow: 'hidden',
    },
    [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      boxSizing: 'border-box',
      width: ' 100%',
      height: '36px',
      border: '1px solid #dfe5f2',
      borderRadius: '8px',
      boxShadow: '0px 1px 2px 0px #1018280D',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      border: 'none',
      boxShadow: 'none',
      height: '0',
    },
    [`.${page.filters} &`]: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      top: '21px',
      fontSize: '16px',
      height: '36px',
      padding: '0 10px',
      gap: '10px',
      border: '1px solid #dfe5f2',
      borderRadius: '8px',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
  },
})

export const select = style([
  inputContent,
  {
    transition,
    selectors: {
      [`.${page.new} &`]: {
        position: 'absolute',
        top: '28px',
      },
      [`.${page.search} &, .${page.filters} &`]: { height: 0 },
      [`.${page.filters} &`]: {
        height: '36px',
      },
    },
  },
])

export const date = style([
  inputContent,
  {
    transition,
    selectors: {
      [`.${page.new} &`]: {
        position: 'absolute',
        padding: '6px 10px',
        top: '28px',
      },
    },
  },
])

export const search = style([
  inputContent,
  {
    transition,
    selectors: {
      [`.${page.old} &`]: {
        height: 34,
      },
      [`.${page.new} &`]: {
        display: 'flex',
        gap: 4,
      },
      [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        position: 'absolute',
        padding: '6px 10px',
        top: '28px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
      [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        top: '42px',
        fontSize: '32px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        gap: '20px',
        border: '2px solid #dfe5f2',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(16, 24, 40, 0.05)',
      },
      [`.${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        color: 'white',
      },
      [`.${page.filters} &`]: {
        top: '21px',
        fontSize: '16px',
        height: '36px',
        padding: '0 10px',
        gap: '10px',
        border: '1px solid #dfe5f2',
        borderRadius: '8px',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
  },
])

export const autocompleteContent = style({
  position: 'absolute',
  color: 'transparent',
  transition,
  selectors: {
    [`.${page.autocomplete} &, .${page.filteredSelect} &`]: {
      color: gray.new,
    },
  },
})

export const inputIcon = style({
  fontSize: '27px',
  color: darkgray.old,
  transition,
  selectors: {
    [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      width: '0',
      overflow: 'hidden',
    },
  },
})

export const searchIcon = style([
  inputIcon,
  {
    fontSize: '20px',
    transition,
    selectors: {
      [`.${page.old} &`]: {
        paddingRight: '10px',
        color: darkblue,
      },
      [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        width: '20px',
        paddingRight: '0px',
        color: darkgray.new,
      },
      [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        fontSize: '32px',
        width: '32px',
        height: '32px',
      },
      [`.${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
        color: 'white',
      },
      [`.${page.filters} &`]: {
        fontSize: '16px',
        width: '16px',
        height: '16px',
      },
    },
  },
])

export const statusChevron = style({
  position: 'absolute',
  fontSize: '7px',
  color: 'transparent',
  transform: 'rotate(-90deg)',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      color: gray.old,
      width: '12px',
      fontSize: '12px',
      right: '16px',
      top: '9px',
    },
    [`.${page.new} &`]: {
      color: darkgray.new,
      width: '12px',
      fontSize: '12px',
      right: '12px',
      top: '12px',
    },
  },
})

export const selectChevron = style({
  position: 'absolute',
  transform: 'rotate(-90deg)',
  fontSize: '24px',
  right: '24px',
  color: darkgray.new,
  width: '0',
  transition,
  selectors: {
    [`.${page.select} &, .${page.filteredSelect} &`]: {
      width: '24px',
    },
  },
})

export const dropdown = style({
  all: 'unset',
  listStyle: 'none',
  height: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 'calc(100% + 8px)',
  left: 0,
  width: '100%',
  transition,
  selectors: {
    [`.${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      fontSize: '32px',
      height: '261px',
      boxShadow: '0px 8px 8px -4px #1018280A, 0px 20px 24px -4px #1018281A',
      borderRadius: '16px',
    },
    [`.${page.autocomplete} &, .${page.filteredSelect} &`]: {
      height: '174px',
    },
  },
})

export const option = style({
  padding: '24px 32px',
})

export const optionFiltered = style([
  option,
  {
    overflow: 'hidden',
    height: '39px',
    transition,
    selectors: {
      [`.${page.autocomplete} &, .${page.filteredSelect} &`]: {
        height: '0',
        padding: '0 32px',
      },
    },
  },
])

// TABLE

export const table = style({
  marginTop: '22px',
  borderSpacing: 0,
  overflow: 'hidden',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      borderRadius: '4px',
      border: 'solid 1px #f0f0f0',
      width: '100%',
    },
    [`.${page.new} &`]: {
      borderRadius: '8px',
      border: 'solid 1px #dfe5f2',
      width: '690px',
      height: '397px',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      marginTop: '0',
      height: 0,
      borderColor: 'white',
    },
  },
})

export const tableHead = style({
  display: 'grid',
  overflow: 'hidden',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      background: 'white',
      fontSize: '16px',
      borderBottom: '0px solid #dfe5f2',
      width: '100%',
      gridTemplateColumns: '115px 130px 148px 280px 110px 145px 200px',
    },
    [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      background: lightgray.new,
      color: gray.new,
      fontSize: '13px',
      borderBottom: '1px solid #dfe5f2',
      width: '690px',
      gridTemplateColumns: '115px 130px 148px 330px 110px 145px 200px',
      height: '46px',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      height: 0,
      width: '0',
      borderBottomColor: 'white',
    },
  },
})

export const tableHeadCell = style({
  textAlign: 'left',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      fontWeight: 400,
      padding: '24px 18px',
    },
    [`.${page.new} &`]: {
      fontWeight: 500,
      padding: '15px 22px',
    },
  },
})

export const tableRow = style({
  display: 'grid',
  alignItems: 'center',
  overflow: 'hidden',
  transition,
  selectors: {
    [`.${page.old} &:nth-child(even)`]: {
      background: 'white',
      borderBottom: '0px solid #dfe5f2',
      width: '100%',
      gridTemplateColumns: '115px 130px 148px 280px 110px 145px 200px',
    },
    [`.${page.old} &:nth-child(odd)`]: {
      background: '#fafafc',
      borderBottom: '0px solid #dfe5f2',
      width: '100%',
      gridTemplateColumns: '115px 130px 148px 280px 110px 145px 200px',
    },
    [`.${page.new} &, .${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      background: 'white',
      borderBottom: '1px solid #dfe5f2',
      width: '690px',
      gridTemplateColumns: '115px 130px 148px 330px 110px 145px 200px',
      height: '92px',
    },
    [`.${page.search} &, .${page.filters} &, .${page.select} &, .${page.autocomplete} &, .${page.filteredSelect} &`]: {
      height: 0,
      width: '0',
      borderBottomColor: 'white',
    },
  },
})

export const tableCell = style({
  display: 'flex',
  gap: '1em',
  alignItems: 'center',
  lineHeight: '24px',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      color: darkgray.old,
      padding: '20px 18px',
    },
    [`.${page.new} &`]: {
      color: darkgray.new,
      padding: '10px 22px',
    },
  },
})

export const nowrap = style({
  whiteSpace: 'nowrap',
})

const chipBase = style({
  fontWeight: 500,
  width: 'fit-content',
  transition,
  selectors: {
    [`.${page.old} &`]: {
      fontSize: '12px',
      padding: '8px 16px',
      borderRadius: '19px',
      textTransform: 'uppercase',
    },
    [`.${page.new} &`]: {
      fontSize: '13px',
      lineHeight: '18px',
      padding: '2px 8px',
      borderRadius: '7px',
    },
  },
})

export const chip = styleVariants({
  gray: [
    chipBase,
    {
      transition,
      selectors: {
        [`.${page.old} &`]: {
          color: '#60616d',
          background: '#f0f0f0',
          border: `0px solid #dfe5f2`,
        },
        [`.${page.new} &`]: {
          color: gray.new,
          background: '#eff1f7',
          border: `1px solid #dfe5f2`,
        },
      },
    },
  ],
  green: [
    chipBase,
    {
      transition,
      selectors: {
        [`.${page.old} &`]: { color: '#23721d', background: '#f3fbf2' },
        [`.${page.new} &`]: {
          color: '#12abf4',
          background: '#e7f7ff',
          border: `1px solid #c0e9fd`,
        },
      },
    },
  ],
})

export const details = style({
  transition,
  selectors: {
    [`.${page.old} &`]: {
      color: lightgray.old,
    },
    [`.${page.new} &`]: {
      color: darkgray.new,
    },
  },
})
