import colors from '../components/colors.json'

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors
  }
}
