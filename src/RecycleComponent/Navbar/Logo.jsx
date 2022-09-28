import React from 'react'
import logo from '../images/logo.svg'
const Logo = () => {
  return (
    <div className='logoContainer'>
      <div className="resizeImg">
        <img src={logo} className='logo' />
      </div>
    </div>
  )
}

export default Logo
