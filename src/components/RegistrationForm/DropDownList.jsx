import React from 'react'

const DropDownList = (props) => {
    const {label,errorMessage,options,onChange,id,...inputProps} = props;
  return (
    <div className='formInput'>
        <h1 className='DropHeader'>Select State</h1>
      <select name={props.name} value={props.value} onChange={onChange} >
        {/* {
            options.forEach((element) => {
                console.log(element);
              <option value={element}>{element}</option>  
            })
        } */}
        <option value="Maharashtra">Maharashtra</option>
      </select>
    </div>
  )
}

export default DropDownList
