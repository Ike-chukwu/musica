import React, { useState } from "react";
import "./Signup.scss";
import Input from "../Input/Input";

const Signup = () => {
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

  const submit = (e) => {
    e.preventDefault();
    console.log("yes");
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
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
