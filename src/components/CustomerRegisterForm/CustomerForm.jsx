import React from 'react'
import FormInputs from '../RegistrationForm/FormInputs';
import '../RegistrationForm/Form.scss'
import img from '../../RecycleComponent/images/FormImage.svg'
import DropDownList from '../RegistrationForm/DropDownList';
const CustomerForm = () => {
    //seller
    const [values,setValues] = React.useState({
        firstName:"",
        lastName:"",
        Gender:"",
        PhoneNumber:"",
        Street:"",
        Address:"",
        email:"",
        password:"",
        confirmPassword:""
      });
    

      const inputs = [
        {
          id:1,
          name:"firstName",
          type:"text",
          placeholder:"First Name",
          errorMessage:"UserName should be 3-16 character and shouldn't include any special character!",
          label:"First Name",
          pattern:"^[A-Za-z0-9]{3,16}$",
          required:true
        },
        {
          id:2,
          name:"lastName",
          type:"text",
          placeholder:"Last Name",
          errorMessage:"UserName should be 3-16 character and shouldn't include any special character!",
          label:"Last Name",
          pattern:"^[A-Za-z0-9]{3,16}$",
          required:true
        },
        {
          id:3,
          name:"Gender",
          type:"text",
          placeholder:"Gender",
          errorMessage:"UserName should be 3-16 character and shouldn't include any special character!",
          label:"Gender",
          pattern:"^[A-Za-z0-9]{3,16}$",
          required:true
        },
        {
          id:4,
          name:"email",
          type:"email",
          placeholder:"Email",
          errorMessage:"It should be a valid email address",
          label:"Email",
          required:true
        },
        {
          id:5,
          name:"PhoneNumber",
          type:"tel",
          placeholder:"PhoneNumber",
          errorMessage:"Invalid Phone Number",
          label:"PhoneNumber",
          pattern:"^[0-9]{10}$",
          required:true
        },
        {
          id:6,
          name:"Street",
          type:"text",
          placeholder:"Street",
          errorMessage:"",
          label:"Street"
        },
        {
          id:7,
          name:"Address",
          type:"text",
          placeholder:"Address",
          errorMessage:"",
          label:"Address"
        },
        {
          id:8,
          name:"state",
          type:"select",
          options:["Mahrashtra","Delhi"],
          errorMessage:"",
          label:"Address"
        },
        {
          id:9,
          name:"password",
          type:"password",
          placeholder:"password",
          errorMessage:"Password should be 8-20 characters and include at least 1 letter,1 number and 1 special character",
          label:"password",
          patterm:"^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$",
          required:true
        },
        {
          id:10,
          name:"confirmPassword",
          type:"password",
          placeholder:"confirmPassword",
          errorMessage:"Password don't match",
          label:"confirmPassword",
          pattern:values.password,
          required:true
        },
      ]
    
      const handleSubmit = (e) =>{
          e.preventDefault();
          const data = new FormData(e.target);
          // console.log(Object.fromEntries(data.entries()));
      }
    
      const onChange = (e) =>{
        setValues({...values,[e.target.name]:e.target.value});
      }    
  return (
    <div className='Form'>
      <div>
        <img src={img} />
      </div>
      <form onSubmit={handleSubmit} className="registration">
        <h1>Form Registration</h1>
        <div className='formContainer'>
          {inputs.map((input)=>{
                      if(input.name == "state"){
                        return (
                            <DropDownList key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                        )
                    }else{
                      return (
                        <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                      )
            }})}
        </div>
        {/* <FormInputs name="username" placeholder = "Username" /> */}
        <button className='RegisterButton'>Submit</button>
      </form>
    </div>
  )
}

export default CustomerForm
