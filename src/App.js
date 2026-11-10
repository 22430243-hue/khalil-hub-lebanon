import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import Footer from './Components/footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Events from './Pages/Events'
import Contact from './Pages/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App