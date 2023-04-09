import { Box } from '@mui/material'
import { Header } from './components/Header'
import { Introduction, Summary } from './modules'

function App() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Summary />
      </main>
    </>
  )
}

export default App
