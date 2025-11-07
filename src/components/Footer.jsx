function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1A3A52 0%, #2C5F8D 100%)',
      color: 'white',
      padding: '3rem 2rem',
      marginTop: '5rem',
      textAlign: 'center',
      borderTop: '4px solid #4A90E2',
      boxShadow: '0 -4px 20px rgba(26, 58, 82, 0.2)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ 
            fontSize: '2rem', 
            marginBottom: '0.8rem',
            fontWeight: '700',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>GoChile 🇨🇱</h3>
          <p style={{ 
            color: '#B8D4E8', 
            fontSize: '1.05rem',
            lineHeight: '1.6'
          }}>
            Tu guía para descubrir Chile a través del trekking y la naturaleza
          </p>
        </div>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{ 
              marginBottom: '1.2rem', 
              color: '#4A90E2',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>Secciones</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.7rem' }}>
                <a 
                  href="/blog" 
                  style={{ 
                    color: '#B8D4E8', 
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B8D4E8'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  🥾 Blog de Trekking
                </a>
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                <a 
                  href="/destinos" 
                  style={{ 
                    color: '#B8D4E8', 
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B8D4E8'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  🏔️ Destinos
                </a>
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                <a 
                  href="/hospedajes" 
                  style={{ 
                    color: '#B8D4E8', 
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B8D4E8'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  🏕️ Hospedajes
                </a>
              </li>
              <li style={{ marginBottom: '0.7rem' }}>
                <a 
                  href="/guias" 
                  style={{ 
                    color: '#B8D4E8', 
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B8D4E8'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  📍 Guías
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ 
              marginBottom: '1.2rem', 
              color: '#4A90E2',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>Contacto</h4>
            <p style={{ color: '#B8D4E8', margin: '0.7rem 0', fontSize: '1.05rem' }}>
              📧 contacto@gochile.cl
            </p>
            <p style={{ color: '#B8D4E8', margin: '0.7rem 0', fontSize: '1.05rem' }}>
              📱 +56 9 XXXX XXXX
            </p>
          </div>

          <div>
            <h4 style={{ 
              marginBottom: '1.2rem', 
              color: '#4A90E2',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>Síguenos</h4>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '2.2rem' }}>
              <a 
                href="https://web.facebook.com/grupooutdoorchile" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  textDecoration: 'none', 
                  transition: 'all 0.3s ease',
                  filter: 'grayscale(0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.3) rotate(5deg)'
                  e.currentTarget.style.filter = 'grayscale(0) drop-shadow(0 0 10px rgba(74, 144, 226, 0.5))'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                  e.currentTarget.style.filter = 'grayscale(0.3)'
                }}
              >
                📘
              </a>
              <a 
                href="https://www.instagram.com/grupooutdoorchile/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  textDecoration: 'none', 
                  transition: 'all 0.3s ease',
                  filter: 'grayscale(0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.3) rotate(-5deg)'
                  e.currentTarget.style.filter = 'grayscale(0) drop-shadow(0 0 10px rgba(74, 144, 226, 0.5))'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                  e.currentTarget.style.filter = 'grayscale(0.3)'
                }}
              >
                �
              </a>
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '2px solid rgba(74, 144, 226, 0.3)',
          paddingTop: '2rem',
          color: '#B8D4E8',
          fontSize: '1rem'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            © 2025 GoChile - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
