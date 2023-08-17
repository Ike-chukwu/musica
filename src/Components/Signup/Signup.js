import React, { useState, useContext } from "react";
import "./Signup.scss";
import Input from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import AnimateFromRight from "../AnimateFromRight/AnimateFromRight";

const Signup = (props) => {
  const { createUser, setUsername } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let errorTag;

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    c_password: "",
  });
  const int = <p>int</p>;

  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState(false);

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
    setLoading(true);
    const email = data.email;
    const password = data.password;
    const username = data.username;
    console.log(username);
    try {
      await createUser(email, password);
      setUsername(username);
      navigate("/");
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setErrorDisplay(true);
      setLoading(false);
    }
  };

  const inputFields = [
    {
      placeholder: "Enter your preferred username",
      required: true,
      name: "username",
      type: "text",
      errorMessage: "Name is too short",
    },
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
    <AnimateFromRight>
      <div className="s-container">
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
            <button>
              {loading ? "Sigining Up" : "Sign Up"}{" "}
              {loading ? <i className="fa fa-refresh fa-spin"></i> : null}
            </button>
            {error && (
              <p style={{ color: "red", fontSize: "1.4rem" }}>{error}</p>
            )}
          </form>
          <span>
            Already have an account?{" "}
            <Link to="/" style={{ color: "white" }}>
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </AnimateFromRight>
  );
};

export default Signup;
