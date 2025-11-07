import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <section style={{ 
        textAlign: 'center', 
        padding: '3rem 1rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '12px',
        marginBottom: '3rem'
      }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: 0 }}>
          GoChile
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', marginTop: '1rem' }}>
          Descubre las mejores rutas de trekking y destinos turísticos de Chile
        </p>
      </section>

      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <Link to="/blog" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            border: '2px solid #e0e0e0'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥾</div>
            <h2 style={{ color: '#333', marginBottom: '0.5rem' }}>Blog de Trekking</h2>
            <p style={{ color: '#666' }}>Rutas cerca de Santiago y Región Metropolitana</p>
          </div>
        </Link>

        <Link to="/destinos" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            border: '2px solid #e0e0e0'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏔️</div>
            <h2 style={{ color: '#333', marginBottom: '0.5rem' }}>Destinos por Región</h2>
            <p style={{ color: '#666' }}>Top 10 lugares de cada región de Chile</p>
          </div>
        </Link>

        <Link to="/hospedajes" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            border: '2px solid #e0e0e0'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏕️</div>
            <h2 style={{ color: '#333', marginBottom: '0.5rem' }}>Hospedajes</h2>
            <p style={{ color: '#666' }}>Camping, cabañas y alojamientos</p>
          </div>
        </Link>

        <Link to="/guias" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            border: '2px solid #e0e0e0'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
            <h2 style={{ color: '#333', marginBottom: '0.5rem' }}>Guías de Trekking</h2>
            <p style={{ color: '#666' }}>Información detallada de cada destino</p>
          </div>
        </Link>
      </section>
    </div>
  )
}

export default Home
