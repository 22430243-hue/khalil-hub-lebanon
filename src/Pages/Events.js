import { useState } from 'react'
import '../Styles/Events.css'

const allEvents = [
  { id: 1, title: 'Wael kfoury Concert', category: 'Music', date: 'Fri, Oct 25 • 7:00 PM', location: 'Waterfront Arena, Beirut', price: '$25', spots: 42 },
  { id: 2, title: 'Beirut Marathon', category: 'Sports', date: 'Sun, Nov 3 • 8:00 AM', location: 'Beirut Corniche', price: 'Free', spots: 120 },
  { id: 3, title: 'Photography Workshop Kasrouane', category: 'Workshop', date: 'Sat, Oct 26 • 10:00 AM', location: 'Kasrouane Hills', price: '$40', spots: 15 },
  { id: 4, title: 'Jbeil Food Festival', category: 'Festivals', date: 'Sat, Nov 2 • 12:00 PM', location: 'Jbeil Old Port', price: '$10', spots: 42 },
  { id: 5, title: 'AI Lecture', category: 'Education', date: 'Tue, Oct 29 • 5:30 PM', location: 'USJ Campus, Beirut', price: '$5', spots: 35 },
  { id: 6, title: 'Art Workshop', category: 'Workshop', date: 'Sun, Oct 27 • 2:00 PM', location: 'Sursock Museum, Beirut', price: '$20', spots: 22 },
  { id: 7, title: 'English Lecture', category: 'Education', date: 'Thu, Mar 10 • 12:00 PM', location: 'LIU Khyara, Bekaa', price: 'Free', spots: 10 },
  { id: 8, title: 'Baalbak Festival', category: 'Festivals', date: 'Sat, Nov 2 • 10:00 AM - 11:00 PM', location: 'Baalbek Citadel, Baalbek', price: '$15', spots: '∞' },
  { id: 9, title: 'Melhem Zein Concert', category: 'Music', date: 'Sun, June 5 • 9:00 PM', location: 'Cascada Mall, Bekaa', price: '$15', spots: 50 }
]

function Events() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [registered, setRegistered] = useState([])
  const [showPayMsg, setShowPayMsg] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const filtered = allEvents.filter(e => {
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) || e.location.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'All' || e.category === filter
    return matchSearch && matchFilter
  })

  const handleRegister = (event) => {
    if (registered.includes(event.id)) {
      setRegistered(registered.filter(r => r !== event.id))
      return
    }

    if (event.price.toLowerCase() === 'free') {
      setRegistered([...registered, event.id])
      alert('Successfully Registered! 🎉')
      return
    }

    setSelectedEvent(event)
    setShowPayMsg(true)
  }

  return (
    <div className="page">
      <h1>Events</h1>
      <input
        placeholder="🔍 Search events, locations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
      <div className="filters">
        {['All', 'Music', 'Sports', 'Workshop', 'Education', 'Festivals'].map(c => (
          <button key={c} onClick={() => setFilter(c)} className={filter === c ? 'active' : ''}>{c}</button>
        ))}
      </div>
      <div className="grid">
        {filtered.map(e => (
          <div key={e.id} className="event-card">
            <span className="badge">{e.category}</span>
            <h3>{e.title}</h3>
            <p>📅 {e.date}</p>
            <p>📍 {e.location}</p>
            <p><b>{e.price}</b> • {e.spots} spots left</p>
            <button onClick={() => handleRegister(e)} className="btn-small">
              {registered.includes(e.id) ? '✅ Registered' : 'Register'}
            </button>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p>No events found 😕</p>}

      {showPayMsg && (
        <div style={{
          position: 'fixed',
          top: '0', left: '0', right: '0', bottom: '0',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '25px',
            width: '90%',
            maxWidth: '350px',
            textAlign: 'center'
          }}>
            <h3>⚠️</h3>
            <p><b>{selectedEvent?.price}</b></p>
            <p>You can't register without paying😕</p>
            <button onClick={() => setShowPayMsg(false)} className="btn-small" style={{ marginTop: '10px' }}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
export default Events