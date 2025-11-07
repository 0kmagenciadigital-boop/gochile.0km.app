function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1e1e1e',
      color: 'white',
      padding: '2rem',
      marginTop: '4rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>GoChile 🇨🇱</h3>
          <p style={{ color: '#aaa', fontSize: '0.95rem' }}>
            Tu guía para descubrir Chile a través del trekking y la naturaleza
          </p>
        </div>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#667eea' }}>Secciones</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/blog" style={{ color: '#aaa', textDecoration: 'none' }}>Blog de Trekking</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/destinos" style={{ color: '#aaa', textDecoration: 'none' }}>Destinos</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/hospedajes" style={{ color: '#aaa', textDecoration: 'none' }}>Hospedajes</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/guias" style={{ color: '#aaa', textDecoration: 'none' }}>Guías</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', color: '#667eea' }}>Contacto</h4>
            <p style={{ color: '#aaa', margin: '0.5rem 0' }}>📧 contacto@gochile.cl</p>
            <p style={{ color: '#aaa', margin: '0.5rem 0' }}>📱 +56 9 XXXX XXXX</p>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', color: '#667eea' }}>Síguenos</h4>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.8rem' }}>
              <a 
                href="https://web.facebook.com/grupooutdoorchile" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', transition: 'transform 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                📘
              </a>
              <a 
                href="https://www.instagram.com/grupooutdoorchile/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', transition: 'transform 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                �
              </a>
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid #333',
          paddingTop: '1.5rem',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <p style={{ margin: 0 }}>© 2025 GoChile - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
