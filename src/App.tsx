import './App.css'
import { Routes, Route } from 'react-router-dom'
import Websitelayout from './pages/layout/Websitelayout'
import Signup from './pages/layout/Signup'
import 'tw-elements';
import Adminlayout from './pages/layout/Adminlayout';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Websitelayout />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Adminlayout />} />

      </Routes>

      
    </div>
  )
}

export default App
