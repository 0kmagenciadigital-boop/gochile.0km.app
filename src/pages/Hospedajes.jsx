import { useState } from 'react'

function Hospedajes() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('todos')

  const hospedajes = [
    {
      nombre: 'Camping El Morado',
      tipo: 'camping',
      ubicacion: 'Cajón del Maipo',
      descripcion: 'Camping con vista al Glaciar San Francisco y Cerro El Morado.',
      precio: '$8.000 - $12.000 por persona',
      servicios: ['Baños', 'Agua potable', 'Fogones', 'Estacionamiento'],
      icono: '⛺'
    },
    {
      nombre: 'Cabañas Los Boldos',
      tipo: 'cabañas',
      ubicacion: 'San Alfonso',
      descripcion: 'Cabañas acogedoras en el corazón del Cajón del Maipo.',
      precio: '$45.000 - $80.000 por noche',
      servicios: ['Cocina equipada', 'Calefacción', 'Wi-Fi', 'Estacionamiento'],
      icono: '🏡'
    },
    {
      nombre: 'Camping Lagunillas',
      tipo: 'camping',
      ubicacion: 'Santuario Yerba Loca',
      descripcion: 'Zona de camping junto a lagunas de alta montaña.',
      precio: '$5.000 por persona',
      servicios: ['Área para carpas', 'Senderos', 'Miradores'],
      icono: '🏕️'
    },
    {
      nombre: 'Lodge Andino',
      tipo: 'lodge',
      ubicacion: 'Valle Nevado',
      descripcion: 'Alojamiento de montaña con todas las comodidades.',
      precio: '$120.000 - $200.000 por noche',
      servicios: ['Restaurant', 'SPA', 'Piscina', 'Ski-in/Ski-out'],
      icono: '🏔️'
    },
    {
      nombre: 'Camping Río Olivares',
      tipo: 'camping',
      ubicacion: 'El Volcán',
      descripcion: 'Camping silvestre con río para pesca y trekking.',
      precio: '$6.000 por persona',
      servicios: ['Baños básicos', 'Áreas verdes', 'Río'],
      icono: '🎣'
    },
    {
      nombre: 'Cabañas El Mirador',
      tipo: 'cabañas',
      ubicacion: 'La Parva',
      descripcion: 'Cabañas con vista panorámica a la cordillera.',
      precio: '$60.000 - $100.000 por noche',
      servicios: ['Chimenea', 'Terraza', 'BBQ', 'Wi-Fi'],
      icono: '🌄'
    },
    {
      nombre: 'Refugio Piedra Numerada',
      tipo: 'refugio',
      ubicacion: 'Parque Nacional La Campana',
      descripcion: 'Refugio de montaña para trekkers.',
      precio: '$15.000 por persona',
      servicios: ['Literas', 'Cocina compartida', 'Agua'],
      icono: '🏚️'
    },
    {
      nombre: 'Glamping Valle Secreto',
      tipo: 'glamping',
      ubicacion: 'Cajón del Maipo',
      descripcion: 'Camping de lujo con domos y carpas equipadas.',
      precio: '$80.000 - $150.000 por noche',
      servicios: ['Camas confortables', 'Baño privado', 'Desayuno', 'Tours'],
      icono: '✨'
    }
  ]

  const tipos = [
    { id: 'todos', nombre: 'Todos', icono: '🏕️' },
    { id: 'camping', nombre: 'Camping', icono: '⛺' },
    { id: 'cabañas', nombre: 'Cabañas', icono: '🏡' },
    { id: 'lodge', nombre: 'Lodges', icono: '🏔️' },
    { id: 'refugio', nombre: 'Refugios', icono: '🏚️' },
    { id: 'glamping', nombre: 'Glamping', icono: '✨' }
  ]

  const hospedajesFiltrados = tipoSeleccionado === 'todos' 
    ? hospedajes 
    : hospedajes.filter(h => h.tipo === tipoSeleccionado)

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#333', marginBottom: '0.5rem' }}>
          Hospedajes
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#666' }}>
          Encuentra el alojamiento perfecto para tu aventura
        </p>
      </header>

      <div style={{ 
        marginBottom: '2rem', 
        display: 'flex', 
        gap: '1rem', 
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {tipos.map(tipo => (
          <button
            key={tipo.id}
            onClick={() => setTipoSeleccionado(tipo.id)}
            style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: tipoSeleccionado === tipo.id ? '#667eea' : '#e0e0e0',
              color: tipoSeleccionado === tipo.id ? 'white' : '#333',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>{tipo.icono}</span>
            <span>{tipo.nombre}</span>
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {hospedajesFiltrados.map((hospedaje, index) => (
          <div key={index} style={{
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
              fontSize: '4rem',
              textAlign: 'center',
              padding: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
              {hospedaje.icono}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#333', marginBottom: '0.5rem', fontSize: '1.3rem' }}>
                {hospedaje.nombre}
              </h3>
              <p style={{ 
                color: '#667eea', 
                fontWeight: 'bold', 
                marginBottom: '0.8rem',
                fontSize: '0.9rem'
              }}>
                📍 {hospedaje.ubicacion}
              </p>
              <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                {hospedaje.descripcion}
              </p>
              <p style={{ 
                color: '#333', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                fontSize: '1.1rem'
              }}>
                💰 {hospedaje.precio}
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
                  Servicios:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {hospedaje.servicios.map((servicio, i) => (
                    <span key={i} style={{
                      padding: '0.3rem 0.8rem',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: '#555'
                    }}>
                      ✓ {servicio}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hospedajes
