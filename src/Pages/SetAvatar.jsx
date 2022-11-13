import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import loader from "../assets/loader.gif";
import { Buffer } from "buffer";
import axios from 'axios';
import { getLocalData } from '../Utils/local.func';
import { useNavigate } from 'react-router-dom';

function SetAvatar() {
  const [isLoading, setIsLoading] = useState(false);
  const [avatars, setAvatars] = useState([]);
  const navigate = useNavigate();
  useEffect(() => { 
    const isLocalValue = getLocalData();

    if (!isLocalValue)  navigate("/login");
    if (isLocalValue.profileImage !== null)  navigate("/");
  })

  const getAvatars = async () => {
    setIsLoading(true);
    let data = [];
    for (let i = 0; i < 2; i++) {
      const image = await axios.get(`${process.env.REACT_APP_AVATAR_API}/${Math.round(Math.random() * 1000)}`);
      const buffer = new Buffer(image.data);
      data.push(buffer.toString("base64"));
    }

    setAvatars(data);
    setIsLoading(false);

    console.log(avatars)
  };

  useEffect(() => { 
    getAvatars()
  });
  

  return (
    <>
      {isLoading && (
        <Container>
          <img src={loader} alt="loader" className='loader' />
        </Container>
      ) }
    </>
  )
};

export default SetAvatar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;
  .loader {
    max-inline-size: 100%;
  }
  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
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
`;