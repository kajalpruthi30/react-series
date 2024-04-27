import React, {useState} from 'react'
import "./FormInput.css"

const FormInput = (props) => {

  const {label, errorMessage, id, onChange , ...inputProps} = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  // onBlur works on click and leave
  // Need to handle the last input because after that we'll click on submit itself using onFocus

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}
        onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)}/>
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput

// Used for validation
/* Condition 1 - input as invalid */
/* Condition 2 - focused is true */

// input:invalid[focused="true"] ~span{
//   display: block;
// }