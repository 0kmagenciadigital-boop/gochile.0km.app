import { useState } from 'react'

function Guias() {
  const [guias] = useState([
    {
      id: 1,
      titulo: 'Guía completa: Cajón del Maipo',
      destino: 'Cajón del Maipo',
      descripcion: 'Todo lo que necesitas saber para visitar este impresionante valle cordillerano.',
      contenido: [
        'Cómo llegar desde Santiago',
        'Mejores épocas para visitar',
        'Rutas de trekking imperdibles',
        'Dónde alojarse',
        'Qué llevar',
        'Consejos de seguridad'
      ],
      icono: '🏔️',
      dificultad: 'Variada',
      temporada: 'Todo el año'
    },
    {
      id: 2,
      titulo: 'Trekking al Cerro Manquehue',
      destino: 'Santiago',
      descripcion: 'Guía paso a paso para conquistar uno de los cerros más emblemáticos de Santiago.',
      contenido: [
        'Punto de inicio y acceso',
        'Descripción detallada del sendero',
        'Tiempo estimado de ascenso',
        'Equipamiento recomendado',
        'Puntos de agua',
        'Vistas panorámicas'
      ],
      icono: '⛰️',
      dificultad: 'Media',
      temporada: 'Primavera - Otoño'
    },
    {
      id: 3,
      titulo: 'Ruta del Glaciar San Francisco',
      destino: 'El Morado',
      descripcion: 'Trekking de alta montaña hacia uno de los glaciares más accesibles de la zona central.',
      contenido: [
        'Acceso y permisos necesarios',
        'Descripción de la ruta',
        'Aclimatación a la altura',
        'Equipo técnico necesario',
        'Campamento base',
        'Fotografía del glaciar'
      ],
      icono: '🧊',
      dificultad: 'Alta',
      temporada: 'Verano'
    },
    {
      id: 4,
      titulo: 'Santuario Yerba Loca',
      destino: 'Santuario de la Naturaleza',
      descripcion: 'Explora este santuario natural con glaciares, cascadas y fauna silvestre.',
      contenido: [
        'Inscripción y horarios',
        'Senderos disponibles',
        'Flora y fauna del lugar',
        'Mejores miradores',
        'Normas del santuario',
        'Fotografía de naturaleza'
      ],
      icono: '💧',
      dificultad: 'Baja-Media',
      temporada: 'Primavera - Otoño'
    },
    {
      id: 5,
      titulo: 'Parque Nacional La Campana',
      destino: 'Valparaíso',
      descripcion: 'Descubre las palmas chilenas y los senderos que Darwin exploró.',
      contenido: [
        'Sectores del parque',
        'Sendero Andinista vs Las Palmas',
        'Observación de palmas chilenas',
        'Cumbre La Campana',
        'Camping en el parque',
        'Historia de Charles Darwin'
      ],
      icono: '🌴',
      dificultad: 'Media-Alta',
      temporada: 'Todo el año'
    },
    {
      id: 6,
      titulo: 'Embalse El Yeso',
      destino: 'Cajón del Maipo',
      descripcion: 'Visita este impresionante lago turquesa de montaña.',
      contenido: [
        'Cómo llegar (ruta y transporte)',
        'Mejor hora para fotografiar',
        'Actividades en el embalse',
        'Clima y condiciones',
        'Qué llevar',
        'Tours disponibles'
      ],
      icono: '🏞️',
      dificultad: 'Baja',
      temporada: 'Primavera - Verano'
    }
  ])

  const getDificultadColor = (dificultad) => {
    if (dificultad.includes('Baja')) return '#4caf50'
    if (dificultad.includes('Media')) return '#ff9800'
    if (dificultad.includes('Alta')) return '#f44336'
    return '#757575'
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#333', marginBottom: '0.5rem' }}>
          Guías de Trekking
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#666' }}>
          Información detallada para planificar tu próxima aventura
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {guias.map(guia => (
          <article key={guia.id} style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s'
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
              {guia.icono}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.2rem, 2vw, 1.4rem)', 
                color: '#333', 
                marginBottom: '0.5rem' 
              }}>
                {guia.titulo}
              </h2>
              <p style={{ 
                color: '#667eea', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                fontSize: '0.95rem'
              }}>
                📍 {guia.destino}
              </p>
              <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                {guia.descripcion}
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '0.8rem', 
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  backgroundColor: getDificultadColor(guia.dificultad),
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {guia.dificultad}
                </span>
                <span style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  backgroundColor: '#e0e0e0',
                  color: '#333'
                }}>
                  🗓️ {guia.temporada}
                </span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.8rem' }}>
                  Esta guía incluye:
                </p>
                <ul style={{ 
                  margin: 0, 
                  paddingLeft: '1.2rem',
                  color: '#666',
                  lineHeight: '2'
                }}>
                  {guia.contenido.map((item, index) => (
                    <li key={index} style={{ fontSize: '0.9rem' }}>{item}</li>
                  ))}
                </ul>
              </div>

              <button style={{
                width: '100%',
                padding: '0.8rem',
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5568d3'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#667eea'}>
                Ver guía completa →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Guias
