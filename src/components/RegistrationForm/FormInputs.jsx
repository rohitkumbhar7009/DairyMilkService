import React from "react";
import "./formInput.scss"

const FormInputs =(props) => {
    const {label,errorMessage,onChange,id,...inputProps} = props;
    const [focused,setFocused] = React.useState(false);
    const handleFocus =(e) =>{
        setFocused(true)
    }
  return (
    <div className="formInput">
        <label className="RegisterLabel">{label}</label>
        {/* <input placeholder={props.placeholder} onChange ={(e)=>props.setUsername(e.target.value)} /> */}
        <input 
            {...inputProps} onChange={onChange}
            onBlur={handleFocus} 
            onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
            focused={focused.toString()}
            className="RegisterInput"
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInputs