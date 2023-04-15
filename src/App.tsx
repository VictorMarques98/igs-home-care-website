import { Header } from './components/Header'
import { Gallery, Introduction, Summary, About } from './modules'
import { FloatingActionButton } from './components/FloatingButton'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Summary />
        <Gallery />
        <About />
        <FloatingActionButton />
      </main>
      <Footer />
    </>
  )
}

export default App
