import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/home'

import EvaluacionClinica from './components/EvaluacionClinica'
import Diagnostico from './components/Dianostico'
import NavBar from './components/NavBar'

import './stylesheets/styles.css'

function App() {
 

  
  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
    
  )
}

export default App
