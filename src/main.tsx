import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss';
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme/material'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
