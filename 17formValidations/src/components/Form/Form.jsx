import React, {useState} from 'react'
import "./Form.css"
import FormInput from '../FormInput/FormInput'

function Form() {

  const[values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Username should be 3-16 characters",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "email",
      required: true,
      errorMessage: "It should be a valid email address"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      errorMessage: "Password should be atleast 8 characters with atleast 1 Capital letter, 1 number and 1 special character",
      pattern: "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$"  
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Passwords don't match",
      required: true,
      pattern: values.password
    },

  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  return (
    <div className='form'>

        <form onSubmit={handleSubmit}>
          {inputs.map(input => (
            <FormInput key={input.id } {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
