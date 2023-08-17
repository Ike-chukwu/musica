import React, { useState, useContext } from "react";
import "./Signin.scss";
import Input from "../Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import AnimateFromRight from "../AnimateFromRight/AnimateFromRight";


const Signin = (props) => {
  const { signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    street: "",
    password: "",
    c_password: "",
  });

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

    try {
      await signIn(email, password);
      props.setLog(true);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("status", "signedIn");
      navigate("/");
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
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
    <AnimateFromRight>
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
            <button>
              {loading ? "Sigining in" : "Sign in"}
              {loading ? <i className="fa fa-refresh fa-spin"></i> : null}
            </button>
            {error && (
              <p style={{ color: "red", fontSize: "1.4rem" }}>{error}</p>
            )}
          </form>
          <span>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "white" }}>
              {" "}
              Sign Up
            </Link>{" "}
          </span>
        </div>
      </div>
    </AnimateFromRight>
  );
};

export default Signin;
