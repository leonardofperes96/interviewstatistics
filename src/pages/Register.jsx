import React, { useEffect, useState } from "react";
import logo from "../assets/favicon.ico";
import styled from "styled-components";
import { FormInput } from "../components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  loginUser,
  registerUser,
  toggleRegister,
} from "../store/user/userSlice";

const Wrapper = styled.div`
  background: var(--lightest-purple);
  display: grid;
  align-items: center;
  h2 {
    margin-top: 0;
    margin-bottom: 0.5em;
    text-align: center;
  }

  p {
    text-align: center;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    margin: 0 auto;
  }

  .options-btn {
    border: none;
    background: var(--primary-white);
    letter-spacing: var(--letter-spacing);
    color: var(--light-purple);
    cursor: pointer;
  }

  .logo-title {
    font-size: 1.5rem;
    color: var(--light-purple);
    font-weight: 700;
  }
`;

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegister, isLoading, user } = useSelector((store) => store.user);

  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formValues;

    if ((!name && isRegister) || !email || !password) {
      toast.error("Please fill out all values");
      return;
    }

    if (isRegister) {
      dispatch(registerUser({ name, email, password }));
      return;
    }

    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <div className="logo">
          <img src={logo} alt="Logo Image" />
          <p className="logo-title">InterviewStatistics</p>
        </div>

        <h2>{isRegister ? "Register" : "Login"}</h2>
        {isRegister && (
          <FormInput name="name" type="text" onChange={handleChange} />
        )}
        <FormInput name="email" type="email" onChange={handleChange} />
        <FormInput name="password" type="password" onChange={handleChange} />
        <button disabled={isLoading} className="btn btn-form">
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <p>
          {isRegister ? "Already a member?" : "Not a member yet?"}
          <button
            className="options-btn"
            type="button"
            onClick={() => dispatch(toggleRegister())}
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
