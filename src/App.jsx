import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Destinos from './pages/Destinos'
import Hospedajes from './pages/Hospedajes'
import Guias from './pages/Guias'
import './App.css'

function App() {
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#f5f5f5'
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/hospedajes" element={<Hospedajes />} />
            <Route path="/guias" element={<Guias />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
