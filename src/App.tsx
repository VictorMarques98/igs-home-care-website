import { Header } from './components/Header'
import { Gallery, Introduction, Summary } from './modules'

function App() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Summary />
        <Gallery />
      </main>
    </>
  )
}

export default App
