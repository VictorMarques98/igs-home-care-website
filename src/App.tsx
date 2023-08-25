import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from "./pages/Home";
import Redirecting from "./pages/Redirecting";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="redirecting" element={<Redirecting />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
