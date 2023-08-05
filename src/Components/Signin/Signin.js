import React, { useState, useContext } from "react";
import "./Signin.scss";
import Input from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";


const Signin = (props) => {

  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [data, setData] = useState({
    name: "",
    email: "",
    street: "",
    password: "",
    c_password: "",
  });

  const onChangeHandler = (e, id) => {
    const name = e.target.name;
    console.log(name);
    setData({
      ...data,
      [name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError('')
    const email = data.email
    const password = data.password
    
    try {
      await signIn(email, password)
      props.setLog(true)
      localStorage.setItem('loggedIn', true)
      localStorage.setItem('status', "signedIn")
      navigate('/')

    } catch (e) {
      setError(e.message)
      console.log(error);
    }
  };

  const inputFields = [
    {
      placeholder: "Enter your email",
      required: true,
      name: "email",
      type: "email",
      errorMessage: "Invalid email!",
    },
    {
      placeholder: "Enter your password",
      required: true,
      name: "password",
      type: "password",
      errorMessage: "This password is too weak",
      pattern: "^.{6,}$",
    },
  ];

  return (
    <div className="container">
      <div className="signin">
        <h2 className="heading">Sign In</h2>
        <form action="" onSubmit={submit}>
          {inputFields.map((item, index) => {
            return (
              <Input
                key={index}
                placeholder={item.placeholder}
                required={item.required}
                name={item.name}
                pattern={item.pattern}
                errorMessage={item.errorMessage}
                type={item.type}
                value={data[item.name]}
                inputTrigger={onChangeHandler}
              />
            );
          })}
          <button>Sign in</button>
        </form>
        <span>
          Don't have an account? <Link to='/signup' style={{color:'white'}}> Sign Up</Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Signin;
