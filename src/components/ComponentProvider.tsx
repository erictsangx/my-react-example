import {ThemeProvider} from '@emotion/react'
import React from 'react'
import {createTheme} from '@mui/material'

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
})

export const ComponentProvider: React.FC = ({children}) => {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}
