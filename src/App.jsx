import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Recruitment from './pages/Recruitment'
import Brothers from './pages/Brothers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/brothers" element={<Brothers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
