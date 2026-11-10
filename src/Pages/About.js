import '../Styles/About.css'

function About() {
  return (
    <div className="page">
      <h1>Our Story</h1>
      <div className="grid">
        <div className="card">
          <h2>🎯 Our Mission</h2>
        <p>To empower Lebanese communities by making it easier to discover, organize, and attend events.</p>
        </div>
        <div className="card">
          <h2>👁️ Our Vision</h2>
          <p>To become Lebanon's most trusted hub for events, fostering a vibrant and inclusive environment.</p>
          </div>
      </div>
      <h2>Meet the Founder</h2>

<div className="founder-card">
  <div className="founder-info">
    <h3>Ghaydaa Khalil</h3>
    <span className="title">Founder & CEO</span>

    <p>
      Holds a Bachelor's degree in Information Technology (IT)
      and a Master's degree in Business Administration (MBA).
    </p>

    <p>
      Passionate about building community through events and
      combining technology with business to create memorable
      experiences in Lebanon.
    </p>
  </div>
</div>
    </div>
  )
}
export default About