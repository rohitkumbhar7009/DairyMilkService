import React from 'react'
import Logo from './Logo'
import NavbarItems from './NavbarItems'
const NavbarContainer = (props) => {
  return (
    <nav className="navbarContainer">
         <Logo />
         <div className='navbar-padding'>
            <ul className='navbar-ul'>
            {props.children}
            </ul>
         </div>
        <NavbarItems value={"Login"} to={"/login"}/>
    </nav>
  )
}

export default NavbarContainer
