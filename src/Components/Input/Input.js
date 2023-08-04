import React, {useState} from 'react'
import './Input.css'

const Input = (props) => {

    const [focus, setFocus] = useState(false)
 

    const blurFlunc = () =>{
        setFocus(true)
    }

  return (
    <div key={props.key}>
        <label htmlFor="">{props.name}</label>
        <input type={props.type} {...props} onBlur={blurFlunc} focused={focus.toString()} onChange={(e) => props.inputTrigger(e, props.name)}  />
        <p>{props.errorMessage}</p>
    </div>
  )
}

export default Input