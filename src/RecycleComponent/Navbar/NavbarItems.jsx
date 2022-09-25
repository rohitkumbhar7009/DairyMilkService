import React from 'react'
import {Link} from 'react-router-dom'
const NavbarItems = (props) => {
  return (
    <li className='nav-item'>
      <Link to={props.to} className='nav-element'>
        {props.value}
      </Link>
    </li>
  )
}

export default NavbarItems