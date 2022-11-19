import { globalStyle, style } from '@vanilla-extract/css'

export const background = style({
  backgroundColor: '#e2e8ed',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

globalStyle('body, #__next', {
  margin: 0,
  width: '100%',
  height: '100vh',
})
