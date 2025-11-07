import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Home() {
  return (
    <div style={{ padding: '2rem', minHeight: 'calc(100vh - 200px)' }}>
      {/* Hero Section con efecto de montañas */}
      <section className="mountain-bg" style={{ 
        textAlign: 'center', 
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #4A90E2 0%, #2C5F8D 50%, #1A3A52 100%)',
        color: 'white',
        borderRadius: '20px',
        marginBottom: '4rem',
        boxShadow: '0 10px 40px rgba(42, 90, 142, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img 
          src={logo} 
          alt="GoChile Logo" 
          style={{ 
            width: 'clamp(140px, 22vw, 220px)',
            height: 'auto',
            marginBottom: '2rem',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
            animation: 'float 4s ease-in-out infinite'
          }} 
        />
        <h1 style={{ 
          fontSize: 'clamp(2.2rem, 6vw, 4rem)', 
          margin: 0,
          fontWeight: '800',
          letterSpacing: '1px',
          textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
          marginBottom: '1rem'
        }}>
          Grupo Outdoor Chile
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 1.8rem)', 
          marginTop: '1rem',
          fontWeight: '300',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Descubre las mejores rutas de trekking y destinos turísticos de Chile
        </p>
        
        {/* Decoración de montañas */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 100%)',
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* Tarjetas de secciones */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2.5rem',
        marginBottom: '4rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link to="/blog" style={{ textDecoration: 'none' }}>
          <div className="card-hover" style={{
            background: 'linear-gradient(135deg, #F0F7FF 0%, #ffffff 100%)',
            padding: '2.5rem',
            borderRadius: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            border: '3px solid #B8D4E8',
            boxShadow: '0 8px 25px rgba(42, 90, 142, 0.15)',
            height: '100%'
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 4px 8px rgba(42, 90, 142, 0.2))'
            }}>🥾</div>
            <h2 style={{ 
              color: '#2C5F8D', 
              marginBottom: '1rem',
              fontSize: '1.8rem',
              fontWeight: '700'
            }}>Blog de Trekking</h2>
            <p style={{ 
              color: '#1A3A52',
              fontSize: '1.05rem',
              lineHeight: '1.6'
            }}>Rutas cerca de Santiago y Región Metropolitana</p>
          </div>
        </Link>

        <Link to="/destinos" style={{ textDecoration: 'none' }}>
          <div className="card-hover" style={{
            background: 'linear-gradient(135deg, #F0F7FF 0%, #ffffff 100%)',
            padding: '2.5rem',
            borderRadius: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            border: '3px solid #B8D4E8',
            boxShadow: '0 8px 25px rgba(42, 90, 142, 0.15)',
            height: '100%'
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 4px 8px rgba(42, 90, 142, 0.2))'
            }}>🏔️</div>
            <h2 style={{ 
              color: '#2C5F8D', 
              marginBottom: '1rem',
              fontSize: '1.8rem',
              fontWeight: '700'
            }}>Destinos por Región</h2>
            <p style={{ 
              color: '#1A3A52',
              fontSize: '1.05rem',
              lineHeight: '1.6'
            }}>Top 10 lugares de cada región de Chile</p>
          </div>
        </Link>

        <Link to="/hospedajes" style={{ textDecoration: 'none' }}>
          <div className="card-hover" style={{
            background: 'linear-gradient(135deg, #F0F7FF 0%, #ffffff 100%)',
            padding: '2.5rem',
            borderRadius: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            border: '3px solid #B8D4E8',
            boxShadow: '0 8px 25px rgba(42, 90, 142, 0.15)',
            height: '100%'
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 4px 8px rgba(42, 90, 142, 0.2))'
            }}>🏕️</div>
            <h2 style={{ 
              color: '#2C5F8D', 
              marginBottom: '1rem',
              fontSize: '1.8rem',
              fontWeight: '700'
            }}>Hospedajes</h2>
            <p style={{ 
              color: '#1A3A52',
              fontSize: '1.05rem',
              lineHeight: '1.6'
            }}>Camping, cabañas y alojamientos</p>
          </div>
        </Link>

        <Link to="/guias" style={{ textDecoration: 'none' }}>
          <div className="card-hover" style={{
            background: 'linear-gradient(135deg, #F0F7FF 0%, #ffffff 100%)',
            padding: '2.5rem',
            borderRadius: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            border: '3px solid #B8D4E8',
            boxShadow: '0 8px 25px rgba(42, 90, 142, 0.15)',
            height: '100%'
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 4px 8px rgba(42, 90, 142, 0.2))'
            }}>📍</div>
            <h2 style={{ 
              color: '#2C5F8D', 
              marginBottom: '1rem',
              fontSize: '1.8rem',
              fontWeight: '700'
            }}>Guías de Trekking</h2>
            <p style={{ 
              color: '#1A3A52',
              fontSize: '1.05rem',
              lineHeight: '1.6'
            }}>Información detallada de cada destino</p>
          </div>
        </Link>
      </section>
    </div>
  )
}

export default Home
