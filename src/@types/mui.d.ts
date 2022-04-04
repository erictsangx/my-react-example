import colors from '../components/colors.json'

declare module '@mui/material/styles' {
  interface Theme {
    colors: typeof colors
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: typeof colors
  }
}
