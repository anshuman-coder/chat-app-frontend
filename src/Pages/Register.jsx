import React, { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { formReducer, handleValidation } from '../Utils/form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Logo from "../assets/logo.svg"
import { register } from '../Utils/apiRequests';

function Register() {
  const [state, dispatch] = useReducer(formReducer, {});
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(state);
    handleValidation(state, "register")
      .then(res => {
        // console.log(res);

        register(state)
          .then(res => {
            toast.success(`Welcome ${res.data.userName}!`, {
              position: "top-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "dark"
            });
            localStorage.setItem("chatAppAuth", res.data);
            navigate("/login");
          })
          .catch(err => {
            toast.error(err)
          });
      })
      .catch(err => {
        // console.log(err);
        toast.error(err, {
          position: "top-right",
          autoClose: 4000,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      })
  };

  const handleFormChange = (e) => { 
    dispatch({ type: e.target.id, value: e.target.value });
  }

  return (
    <>
      <FormContainer >
        <form onSubmit={handleFormSubmit} >
          <div className='brand'>
            <img src={Logo} alt="" />
            <h1>Friends</h1>
          </div>
          <input
            id='userName'
            type="text"
            name="username"
            placeholder='Username'
            onChange={handleFormChange}
            value={state?.userName || ""}
          />
          <input
            id='email'
            type="email"
            name='email'
            placeholder='Email'
            onChange={handleFormChange}
            value={state?.email || ""}
          />
          <input
            id='password'
            type="password"
            name='password'
            placeholder='Password'
            onChange={handleFormChange}
            value={state?.password || ""}
          />
          <input
            id='confirmPassword'
            type="password"
            name="confirmPassword"
            placeholder='Confirm Password'
            onChange={handleFormChange}
            value={state?.confirmPassword || ""}
          />
          <button type='submit' onSubmit={handleFormSubmit}>Register</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register;