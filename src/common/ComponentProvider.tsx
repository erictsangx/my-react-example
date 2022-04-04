import './global.css'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'

import colors from './colors.json'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  colors,
})
export function ComponentProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
