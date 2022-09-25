import React from 'react'
import NavbarContainer from './NavbarContainer'
import NavbarItems from './NavbarItems'
import './navbar.scss';
import Button from './Button.jsx'
const NavBar = () => {
    const [isOpen,setIsOpen] = React.useState(false);
    //for the hammburger menu
    const [isClose,setIsClose] = React.useState(true);

    // calculate the widht of the window
    React.useEffect(()=>{

        // function is call every time the screen is resize
        function watchWidth(){
            if(window.innerWidth > 600){
                setIsOpen(true);
                setIsClose(false);
            }else{
                setIsOpen(false);
                setIsClose(true);
            }    
        }
        window.addEventListener("resize",watchWidth)

        //check for the first instant
        if(window.innerWidth > 600){
            setIsOpen(true);
            setIsClose(false);
        }else{
            setIsOpen(false);
            setIsClose(true);
        }

        // cleanUp function
        return ()=>{
            window.removeEventListener("resize",watchWidth)
        }

    },[])

  return (
    <div className={""+(!isClose?"navbarFull":"navbarShrink")}>
        {(isClose )&& <Button isOpen={isOpen} setIsOpen={setIsOpen} />}        
        {isOpen &&
        <>
        <NavbarContainer>
        <NavbarItems value={"Home"}  to={"/home"}/>
        <NavbarItems value={"Products"} to={"/"}/>
        <NavbarItems value={"Consumer"} to={"/customerForm"}/>
        <NavbarItems value={"Seller"} to={"/form"}/>
        <NavbarItems value={"Contact Us"} to={"/contact"}/>
        {/* <NavbarItems value={"Contact Us"} to={"contact"}/> */}
      </NavbarContainer>
        </>
        }
    </div>
  )
}

export default NavBar