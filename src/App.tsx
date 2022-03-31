import './App.css'
import { Routes, Route } from 'react-router-dom'
import Websitelayout from './pages/layout/Websitelayout'
import Signup from './pages/layout/Signup'
import 'tw-elements';
import Sile from './commpents/Sile';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Websitelayout />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/a' element={<Sile />} />

      </Routes>

      
    </div>
  )
}

export default App
