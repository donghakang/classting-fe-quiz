import { Theme } from '@emotion/react'

const colors = {
  white: '#ffffff',
  gray: 'hsl(240,11%,98%)',
  black: '#1a1a1a',
  green: {
    '050': 'rgb(239, 255, 251)',
    '100': 'rgb(199, 240, 221)',
    '300': 'rgb(98, 241, 189)',
    '500': 'rgb(0, 200, 150)',
    '700': 'rgb(23, 162, 126)',
    '900': 'rgb(12, 141, 109)',
  },
  orange: '#fcae1e',
  red: {
    '100': '#ff8a80',
    '200': '#ff5252',
    '400': '#ff1744',
    '700': '#d50000',
  },
}

const screen = {
  web: '@media only screen and (max-width: 768px)',
}

const theme: Theme = {
  colors,
  screen,
}

export default theme
