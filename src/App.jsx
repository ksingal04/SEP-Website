import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Recruitment from './pages/Recruitment'
import Brothers from './pages/Brothers'
import About from './pages/About'
import Alumni from './pages/Alumni'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/brothers" element={<Brothers />} />
        <Route path="/about" element={<About />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
