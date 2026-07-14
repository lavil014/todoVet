import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/home'

import EvaluacionClinica from './components/EvaluacionClinica'
import Diagnostico from './components/Diagnostico'
import NavBar from './components/NavBar'

import './stylesheets/styles.css'

function App() {
 

  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/consulta' element={<Diagnostico/>}/>
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
