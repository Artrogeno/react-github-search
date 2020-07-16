import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primaty: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      light: string
      dark: string
      white: string
      black: string
      bgBody: string
      fgBody: string
      theme100: string
      theme200: string
      theme300: string
      theme400: string
      theme500: string
    }
  }
}
