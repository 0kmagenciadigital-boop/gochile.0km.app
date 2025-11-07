import { useState } from 'react'

function Destinos() {
  const [regionSeleccionada, setRegionSeleccionada] = useState('metropolitana')

  const regiones = {
    metropolitana: {
      nombre: 'Región Metropolitana',
      destinos: [
        { nombre: 'Cajón del Maipo', descripcion: 'Valle cordillerano con termas, glaciares y lagunas', icono: '🏔️' },
        { nombre: 'Parque Nacional La Campana', descripcion: 'Hogar de la palma chilena y senderos históricos', icono: '🌴' },
        { nombre: 'Cerro Manquehue', descripcion: 'Trekking urbano con vistas panorámicas', icono: '⛰️' },
        { nombre: 'Santuario de la Naturaleza Yerba Loca', descripcion: 'Reserva natural con glaciares y cascadas', icono: '💧' },
        { nombre: 'Embalse El Yeso', descripcion: 'Lago turquesa de alta montaña', icono: '🏞️' },
        { nombre: 'Valle Nevado', descripcion: 'Centro de ski y montañismo', icono: '⛷️' },
        { nombre: 'Cerro Pochoco', descripcion: 'Clásica ruta de trekking santiaguino', icono: '🗻' },
        { nombre: 'Lagunillas', descripcion: 'Lagunas de altura en la precordillera', icono: '🏔️' },
        { nombre: 'San Alfonso del Mar', descripcion: 'Piscina gigante y balneario', icono: '🏊' },
        { nombre: 'Pomaire', descripcion: 'Pueblo artesanal y gastronómico', icono: '🍲' }
      ]
    },
    valparaiso: {
      nombre: 'Región de Valparaíso',
      destinos: [
        { nombre: 'Valparaíso', descripcion: 'Ciudad patrimonio con cerros y arte urbano', icono: '🎨' },
        { nombre: 'Viña del Mar', descripcion: 'Ciudad jardín y playas', icono: '🏖️' },
        { nombre: 'Isla de Pascua', descripcion: 'Moais y cultura Rapa Nui', icono: '🗿' },
        { nombre: 'Portillo', descripcion: 'Centro de ski internacional', icono: '⛷️' },
        { nombre: 'Parque La Campana', descripcion: 'Palmas chilenas milenarias', icono: '🌴' },
        { nombre: 'Quintay', descripcion: 'Caleta de pescadores y buceo', icono: '🐟' },
        { nombre: 'Laguna Verde', descripcion: 'Playa y acantilados', icono: '🌊' },
        { nombre: 'Zapallar', descripcion: 'Balneario exclusivo', icono: '🏝️' },
        { nombre: 'Los Andes', descripcion: 'Ciudad cordillerana y viñedos', icono: '🍇' },
        { nombre: 'Olmué', descripcion: 'Festival folclórico y naturaleza', icono: '🎵' }
      ]
    },
    ohiggins: {
      nombre: "Región de O'Higgins",
      destinos: [
        { nombre: 'Pichilemu', descripcion: 'Capital del surf chileno', icono: '🏄' },
        { nombre: 'Termas del Flaco', descripcion: 'Aguas termales en la cordillera', icono: '♨️' },
        { nombre: 'Laguna de Aculeo', descripcion: 'Lago para deportes acuáticos', icono: '🚤' },
        { nombre: 'Valle de Colchagua', descripcion: 'Ruta del vino y viñedos', icono: '🍷' },
        { nombre: 'Navidad', descripcion: 'Playas vírgenes y caletas', icono: '🏖️' },
        { nombre: 'Punta de Lobos', descripcion: 'Olas de clase mundial', icono: '🌊' },
        { nombre: 'Matanzas', descripcion: 'Pueblo costero tranquilo', icono: '🐚' },
        { nombre: 'Hacienda Los Lingues', descripcion: 'Patrimonio histórico colonial', icono: '🏛️' },
        { nombre: 'Rapel', descripcion: 'Lago artificial y deportes náuticos', icono: '⛵' },
        { nombre: 'Sewell', descripcion: 'Ciudad minera patrimonio UNESCO', icono: '⛏️' }
      ]
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#333', marginBottom: '0.5rem' }}>
          Destinos por Región
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#666' }}>
          Los 10 mejores lugares para visitar en cada región de Chile
        </p>
      </header>

      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {Object.keys(regiones).map(region => (
          <button
            key={region}
            onClick={() => setRegionSeleccionada(region)}
            style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: regionSeleccionada === region ? '#667eea' : '#e0e0e0',
              color: regionSeleccionada === region ? 'white' : '#333',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              transition: 'all 0.3s'
            }}
          >
            {regiones[region].nombre}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {regiones[regionSeleccionada].destinos.map((destino, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {destino.icono}
            </div>
            <h3 style={{ color: '#333', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
              {destino.nombre}
            </h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>
              {destino.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinos
