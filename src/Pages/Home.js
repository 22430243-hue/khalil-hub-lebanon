import { Link } from 'react-router-dom'
import '../Styles/Home.css'

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Discover the Best Events in Lebanon</h1>
        <p>Find and join exciting events across Lebanon — from concerts to workshops and more.</p>
        <Link to="/events" className="btn">Browse Events →</Link>
      </section>

      <section className="stats">
        <div className="card"><h2>500+</h2><p>Events Hosted</p></div>
        <div className="card"><h2>50K+</h2><p>Attendees</p></div>
        <div className="card"><h2>100+</h2><p>Trusted Partners</p></div>
      </section>

      <h2 className="section-title">Our Features</h2>
<div className="features-grid">
  <div className="feature-card">
    <div className="feature-icon">🎟️</div>
    <h3>Easy Registration</h3>
    <p>Register for any event in one click, no complicated forms.</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">📍</div>
    <h3>Discover Events Near You</h3>
    <p>Find concerts, workshops and festivals in Beirut, Tripoli and all Lebanon.</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">🤝</div>
    <h3>Connect & Network</h3>
    <p>Meet new people who share the same interests as you.</p>
  </div>
</div>

<h2 className="section-title">Our Services</h2>
<div className="features-grid">
  <div className="feature-card">
    <div className="feature-icon">🎤</div>
    <h3>For Organizers</h3>
    <p>Create and manage your own events easily, and track registrations.</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">🔔</div>
    <h3>Smart Reminders</h3>
    <p>Get notified before your favorite events start, never miss one.</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">💳</div>
    <h3>Secure Booking</h3>
    <p>Safe and fast ticket booking with instant confirmation.</p>
  </div>
 </div>
</div>
  )
}
export default Home