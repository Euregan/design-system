import { style } from '@vanilla-extract/css'

export const topBar = style({
  width: '100vw',
  height: '7vh',
  backgroundColor: '#22252B',
})

export const buttons = style({
  paddingTop: '3vh',
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '10vw',
  marginLeft: '10px',
})

export const redButtons = style({
  borderRadius: '50%',
  height: '12px',
  width: '12px',
  display: 'inline-block',
  position: 'relative',
  right: '0',
  backgroundColor: '#ED594A;',
})

export const greenButtons = style({
  borderRadius: '50%',
  height: '12px',
  width: '12px',
  display: 'inline-block',
  position: 'relative',
  right: '0',
  backgroundColor: '#5AC05A',
})

export const yellowButtons = style({
  borderRadius: '50%',
  height: '12px',
  width: '12px',
  display: 'inline-block',
  position: 'relative',
  right: '0',
  backgroundColor: '#FDD800',
})

export const url = style({
  position: 'absolute',
  top: '23px',
  left: '25%',
  width: '50%',
  padding: '5px',
  borderRadius: '40px',
  backgroundColor: '#3b4049',
  margin: '0',
})

export const paragraph = style({
  margin: '0',
  paddingLeft: '25px',
  top: '2px',
  position: 'relative',
  color: '#F8F8F8',
  fontWeight: '300',
  letterSpacing: '0.03em',
})
