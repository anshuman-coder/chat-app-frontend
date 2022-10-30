import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Logo from '../assets/logo.svg';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { formReducer, handleValidation } from '../Utils/form';

const toastOptions = {
  position: "top-right",
  autoClose: 4000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};


function Login() {
  const [state, dispatch] = useReducer(formReducer, {});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleValidation(state, "login")
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        toast.error(err, toastOptions)
      })
  };


  const handleFormChange = (e) => {
    dispatch({
      type: e.target.id,
      value: e.target.value
    });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleFormSubmit}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Friends</h1>
          </div>
          <input
            id='email'
            type="email"
            name="email"
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
            autoComplete="true"
          />
          <button type='submit' onSubmit={handleFormSubmit} >
            Login
          </button>
          <span>Create an Account! <Link to="/register">Register</Link></span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

export default Login


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
        padding: 5rem;
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