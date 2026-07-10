import { NavLink } from "react-router-dom"
import { useState } from "react"

import '../stylesheets/navBar.css'

const NavBar = () => {

  const [displayDropDownMenu, setDisplayDropDownMenu] = useState(false)

  const toDisplayMenu = ()=>{
    
    if(displayDropDownMenu === false){
       setDisplayDropDownMenu(true) 
    } else if (displayDropDownMenu === true){
        setDisplayDropDownMenu(false)
    }
    
  }

  return (

    <nav>
      <div className="drop-down">    
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className="icons-container">
        <div className="add-menu">
          <i class="fa-solid fa-plus" onClick={toDisplayMenu}></i>
          <div className="add-menu-drop-down" style={{display: displayDropDownMenu === true ?'flex' : 'none' }}>
            <NavLink className="links">Nuevo paciente</NavLink>
            <NavLink className="links">Nueva tarea</NavLink>
          </div>
        </div>
        
        <div className="">
          <i class="fa-regular fa-bell"></i>
          <NavLink>
            <i class="fa-solid fa-user"></i>
          </NavLink>
        </div>
                
      </div>
    </nav>

  )
}

export default NavBar
