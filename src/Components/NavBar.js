import { Link } from 'react-router-dom'
import '../Styles/NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-special">
        <span className="logo-icon">🎪</span>
        <div className="logo-text">
          <span className="logo-khalil">Khalil</span>
          <span className="logo-hub">Hub Lebanon</span>
        </div>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
export default NavBar