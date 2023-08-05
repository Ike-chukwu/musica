import React, { useState, useContext } from "react";
import "./Signup.scss";
import Input from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

const Signup = (props) => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
  });

  const [error, setError] = useState("");

  const onChangeHandler = (e, id) => {
    const name = e.target.name;
    setData({
      ...data,
      [name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    const email = data.email;
    const password = data.password;
    try {
      await createUser(email, password);
      navigate('/profile')
    } catch (e) {
      setError(e.message);
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
    {
      placeholder: "Enter your password",
      required: true,
      name: "confirm password",
      type: "password",
      errorMessage: "The password you entered is different from what is above",
      pattern: data.password,
    },
  ];

  return (
    <div className="container">
      <div className="signin">
        <h2 className="heading">create account</h2>
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
          <button>Sign Up</button>
        </form>
        <span>
          Already have an account?{" "}
          <Link to="/" style={{ color: "white" }}>
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
