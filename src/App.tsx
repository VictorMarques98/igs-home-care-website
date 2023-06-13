import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Header } from './components/Header'
import { Footer } from './components/Footer'
// import Home from "./pages/Home";
import Redirecting from "./pages/Redirecting";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Redirecting />} />
        {/* <Route path="redirecting" element={<Redirecting />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
