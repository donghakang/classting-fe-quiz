import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string
      gray: string
      black: string
      green: {
        '050': string
        '100': string
        '300': string
        '500': string
        '700': string
        '900': string
      }
      orange: string
      red: {
        '100': string
        '200': string
        '400': string
        '700': string
      }
    }
    screen: {
      web: string
    }
  }
}
