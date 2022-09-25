import React from 'react'
import { Link } from 'react-router-dom';
import './LoginPage.scss'

const LoginPage = () => {
  const [consumer,setConsumer] = React.useState(true);
  const [supplier,setSupplier] = React.useState(false);
  //login info
  const [values,setValues] =React.useState({
    isConsumer:consumer, 
    isSeller:supplier, 
    email:"",
    password:"",
    // confirmPassword:""
  });
  const handleOnChange =() =>{
      setConsumer(prev =>!prev);
      setSupplier(prev=>!prev);
      setValues(prev =>{
        return {
          ...prev,
          isConsumer:consumer,
          isSeller:supplier,
        }
      })

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
  }
  return (
    <div className='loginContainer'>
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="options">
          <div className="customer" onClick={handleOnChange} style={consumer?{backgroundColor:"#3751FF"}:{}} >
            Customer
          </div>
          <div className="supplier" onClick={handleOnChange} style={supplier?{backgroundColor:"#3751FF"}:{}} >
            Supplier
          </div> 
        </div>
          <div className="top">
              <div className='header'>
                Login Detail
              </div>
          </div>
          <div className="elements">
              <div className="emailInput">
                <div>
                  <label>Email</label>
                </div>
                <input type="text" placeholder='Email' onChange={(e)=> setValues({...values,[e.target.email]:e.target.value})} />
              </div>
              <div className="password">
                <div> 
                  <label>Password</label>
                </div>
                <input type="password" placeholder='password' onChange={(e)=> setValues({...values,[e.target.password]:e.target.value})} />
              </div>
          </div>
        <button className='loginButton'>Submit</button>
        <div className='register'>
          <Link to={consumer?"/customerForm":"/form"}> Register Here?</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage