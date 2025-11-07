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
      backgroundColor: '#667eea',
      color: 'white',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
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
          gap: '1rem'
        }}>
          <img 
            src={logo} 
            alt="GoChile Logo" 
            style={{ 
              height: '50px',
              width: '50px',
              objectFit: 'contain'
            }} 
          />
          <span style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: 'bold'
          }}>
            GoChile
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="desktop-menu" style={{ 
          display: 'flex', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: location.pathname === link.path ? 'bold' : 'normal',
                borderBottom: location.pathname === link.path ? '2px solid white' : 'none',
                paddingBottom: '0.3rem',
                transition: 'all 0.3s',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
              }}
            >
              <span style={{ marginRight: '0.3rem' }}>{link.icono}</span>
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
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '2rem',
            cursor: 'pointer'
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
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.3)'
        }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuAbierto(false)}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: location.pathname === link.path ? 'bold' : 'normal',
                fontSize: '1.1rem',
                padding: '0.5rem'
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>{link.icono}</span>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
