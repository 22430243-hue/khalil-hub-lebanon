import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../Styles/NavBar.css'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="logo-special">
        <span className="logo-icon">🎪</span>
        <div className="logo-text">
          <span className="logo-khalil">Khalil</span>
          <span className="logo-hub">Hub Lebanon</span>
        </div>
      </Link>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={menuOpen ? "links active" : "links"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar