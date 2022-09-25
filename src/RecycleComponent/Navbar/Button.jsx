import open from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"
import React from 'react'

const Button = ({isOpen,setIsOpen}) => {
    const [isClicked,setIsClicked] = React.useState(true);
    function onChange(){
        setIsOpen(!isOpen)
        setIsClicked(!isClicked);
    }
  return (
    <>
     <button onClick={onChange} className="hamburger">
        {isClicked ? <img src={open} /> : <img src={close}/>}
    </button> 
    </>
  )
}

export default Button
