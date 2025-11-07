import { useState } from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const [posts] = useState([
    {
      id: 1,
      titulo: 'Cerro Manquehue: Trekking con vistas a Santiago',
      descripcion: 'Una de las rutas más populares de la Región Metropolitana con impresionantes vistas de la ciudad.',
      dificultad: 'Media',
      distancia: '5.2 km',
      duracion: '2-3 horas',
      imagen: '🏔️'
    },
    {
      id: 2,
      titulo: 'Cajón del Maipo: Ruta del Glaciar San Francisco',
      descripcion: 'Trekking de alta montaña con vista al glaciar y lagunas de altura.',
      dificultad: 'Alta',
      distancia: '12 km',
      duracion: '6-7 horas',
      imagen: '🏔️'
    },
    {
      id: 3,
      titulo: 'Parque Metropolitano: Sendero La Pirámide',
      descripcion: 'Ruta urbana perfecta para principiantes en el corazón de Santiago.',
      dificultad: 'Baja',
      distancia: '3 km',
      duracion: '1-2 horas',
      imagen: '🌲'
    },
    {
      id: 4,
      titulo: 'Alto del Naranjo: Trekking en La Dehesa',
      descripcion: 'Sendero con vistas panorámicas del valle de Santiago y la cordillera.',
      dificultad: 'Media',
      distancia: '7 km',
      duracion: '3-4 horas',
      imagen: '⛰️'
    },
    {
      id: 5,
      titulo: 'Cerro Pochoco: Clásico de fin de semana',
      descripcion: 'Ruta tradicional con excelentes vistas de la precordillera.',
      dificultad: 'Media-Alta',
      distancia: '6.5 km',
      duracion: '3-4 horas',
      imagen: '🗻'
    }
  ])

  const getDificultadColor = (dificultad) => {
    switch(dificultad) {
      case 'Baja': return '#4caf50'
      case 'Media': return '#ff9800'
      case 'Media-Alta': return '#ff6b35'
      case 'Alta': return '#f44336'
      default: return '#757575'
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#333', marginBottom: '0.5rem' }}>
          Blog de Trekking
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#666' }}>
          Las mejores rutas de senderismo cerca de Santiago y Región Metropolitana
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {posts.map(post => (
          <article key={post.id} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              fontSize: '5rem',
              textAlign: 'center',
              padding: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
              {post.imagen}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', 
                color: '#333', 
                marginBottom: '0.8rem' 
              }}>
                {post.titulo}
              </h2>
              <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                {post.descripcion}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <span style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  backgroundColor: getDificultadColor(post.dificultad),
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {post.dificultad}
                </span>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>
                  📏 {post.distancia}
                </span>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>
                  ⏱️ {post.duracion}
                </span>
              </div>
              <Link to={`/blog/${post.id}`} style={{
                display: 'inline-block',
                padding: '0.6rem 1.5rem',
                backgroundColor: '#667eea',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                Leer más →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog
