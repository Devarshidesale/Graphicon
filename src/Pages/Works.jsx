import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const Works = () => {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: 'var(--blue-mid)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Same grid background as homepage */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      <Nav />

      <main style={{
        flex: 1,
        position: 'relative',
        zIndex: 20,
        padding: '48px',
      }}>
        <h1 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '64px', marginBottom: '20px' }}>
          Our Works
        </h1>
        <p style={{ fontFamily: 'var(--sans)', color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>
          Coming soon...
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Works
