import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import React from 'react'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export function ComponentProvider({
  children,
}: {
  children: React.ReactChildren
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
