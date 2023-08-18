import React, {useState} from 'react'
import styles from './Input.module.css'


const Input = (props) => {

    const [focus, setFocus] = useState(false)
 

    const blurFlunc = () =>{
        setFocus(true)
    }

  return (
    <div className={styles.div}>
        <label htmlFor="">{props.name}</label>
        <input type={props.type} {...props} onBlur={blurFlunc} focused={focus.toString()} onChange={(e) => props.inputTrigger(e, props.name)}  />
        <p className={styles.paragraph}>{props.errorMessage}</p>
    </div>
  )
}

export default Input