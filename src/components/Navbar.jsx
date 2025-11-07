import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  const location = useLocation()
  const [menuAbierto, setMenuAbierto] = useState(false)

  const navLinks = [
    { path: '/', label: 'Inicio', icono: '🏠' },
    { path: '/blog', label: 'Blog', icono: '🥾' },
    { path: '/destinos', label: 'Destinos', icono: '🏔️' },
    { path: '/hospedajes', label: 'Hospedajes', icono: '🏕️' },
    { path: '/guias', label: 'Guías', icono: '📍' }
  ]

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #2C5F8D 0%, #1A3A52 100%)',
      color: 'white',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(26, 58, 82, 0.3)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid rgba(74, 144, 226, 0.2)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          transition: 'transform 0.3s ease'
        }}>
          <img 
            src={logo} 
            alt="GoChile Logo" 
            className="logo-animated"
            style={{ 
              height: '55px',
              width: '55px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))'
            }} 
          />
          <span style={{
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: '700',
            letterSpacing: '0.5px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            GoChile
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="desktop-menu" style={{ 
          display: 'flex', 
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: location.pathname === link.path ? '700' : '500',
                paddingBottom: '0.5rem',
                transition: 'all 0.3s ease',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.textShadow = '0 2px 8px rgba(255,255,255,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.textShadow = 'none'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{link.icono}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <button 
          className="hamburger-menu"
          onClick={() => setMenuAbierto(!menuAbierto)}
          style={{
            display: 'none',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.3)',
            color: 'white',
            fontSize: '1.8rem',
            cursor: 'pointer',
            padding: '0.5rem 0.8rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuAbierto && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '2px solid rgba(255,255,255,0.2)',
          animation: 'slideIn 0.3s ease'
        }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuAbierto(false)}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: location.pathname === link.path ? '700' : '500',
                fontSize: '1.1rem',
                padding: '0.8rem',
                borderRadius: '8px',
                backgroundColor: location.pathname === link.path ? 'rgba(74, 144, 226, 0.3)' : 'transparent',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(74, 144, 226, 0.2)'
                e.currentTarget.style.transform = 'translateX(5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = location.pathname === link.path ? 'rgba(74, 144, 226, 0.3)' : 'transparent'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>{link.icono}</span>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
