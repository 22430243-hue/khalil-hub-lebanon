import { useState } from 'react'
import '../Styles/Contact.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!name || !email || !message) {
      alert('Fill in all the fields first!')
      return
    }
    if (!email.includes('@') || !email.includes('.') || email.length < 5) {
      setEmailError('It must contain @: name@gmail.com ❌')
      return
    }
    setEmailError('')
    setSent(true)
  }

  const handleAnother = () => {
    setName('')
    setEmail('')
    setMessage('')
    setEmailError('')
    setSent(false)
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-card">
          <h2>Send us a Message</h2>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '50px' }}>✅</div>
              <h3>Done! Thank you. {name} 🎉</h3>
              <p>We’ve received your message; we’ll get back to you within 24 hours!</p>
              <button onClick={handleAnother} className="btn-small" style={{ marginTop: '15px' }}>
                Send Another Message ↩️
              </button>
            </div>
          ) : (
            <form onSubmit={handleSend}>
              <input
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              />
              <input
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError('')
                }}
                className="input"
                style={{ border: emailError ? '2px solid red' : '' }}
              />
              {emailError && <p style={{ color: 'red', fontSize: '13px', marginTop: '-8px' }}>{emailError}</p>}
              <textarea
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input"
              />
              <button type="submit" className="btn-small">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="contact-info-side">
          <p className="info-subtitle">We're here to assist you with any questions, concerns, or feedback. Whether you need support, more information.</p>

          <div className="circles-container">

  <div className="circle-card circle-blue">
    <span className="circle-emoji">📍</span>
    <b>Address</b>
    <p>Bekaa, Lebanon</p>
  </div>

  <div className="circle-card circle-blue">
    <span className="circle-emoji">📞</span>
    <b>Contact</b>
    <p>71 072 256</p>
  </div>

  <div className="circle-card circle-blue">
    <span className="circle-emoji">✉️</span>
    <b>Email</b>
    <p>khalil2007@gmail.com</p>
  </div>

</div>     
        </div>
      </div>
    </div>
  )
}

export default Contact