import { NavLink } from "react-router-dom"
import { useState } from "react"

import '../stylesheets/navBar.css'

const NavBar = () => {

  const [displayDropDownMenu, setDisplayDropDownMenu] = useState(false)

  const [displaySideBar, setDisplaySideBar] = useState(false)


  const toDisplaySideBar = ()=>{
    if(displaySideBar === false){
      setDisplaySideBar(true)
    } else if(displaySideBar === true){
      setDisplaySideBar(false)
    }
  }

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

        <i class="fa-solid fa-bars" onClick={toDisplaySideBar}></i>
        <aside className="side-bar" style={{display: displaySideBar === true ?'inline' : 'none' }}>
          <p>TodoVet app</p>
          <ul className="menu-panel">
            <p>MENU</p>
            <li><NavLink className="menu-items">Panel</NavLink></li>
            <li><NavLink className="menu-items">Panel</NavLink></li>
            <li><NavLink className="menu-items">Panel</NavLink></li>
            <li><NavLink className="menu-items">Panel</NavLink></li>
          </ul>
        </aside>
      </div>
      <div className="icons-container">
        <div className="add-menu">
          <i class="fa-solid fa-plus" onClick={toDisplayMenu}></i>
          <div className="add-menu-drop-down" style={{display: displayDropDownMenu === true ?'flex' : 'none' }}>
            <NavLink className="links">Consulta</NavLink>
            <NavLink className="links">Venta</NavLink>
            <NavLink className="links">Evento</NavLink>
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
