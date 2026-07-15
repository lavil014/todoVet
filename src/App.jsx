import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/home'

import NavBar from './components/NavBar'
import Patient from './pages/Patient'



import './stylesheets/styles.css'

function App() {
 

  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/consulta' element={<Patient/>}/>
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App
