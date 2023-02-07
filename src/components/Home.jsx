import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import CurrentlyPlaylist from "./CurrentlyPlaylist";
import JumpBack from "./JumpBack";

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} />
      <Container darkMode={darkMode}>
        <Switch onClick={() => setDarkMode(!darkMode)} darkMode={darkMode}>
          <input type="checkbox" />
          <span>{darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}</span>
        </Switch>

        <CurrentlyPlaylist darkMode={darkMode} />
        <JumpBack darkMode={darkMode} />
      </Container>
    </>
  );
};

const Container = styled.section`
  background-color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  min-height: 100vh;
  width: 100%;
  position: relative;
  transition: 0.3s ease;
  background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(#df8908, rgba(255, 255, 255, 1))"
      : "linear-gradient(black, #220038)"};
`;

const Switch = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  top: 40px;
  right: 15px;

  @media (min-width: 500px) {
    top: 40px;
    right: 25px;
  }

  @media (min-width: 748px) {
    right: 65px;
  }

  input {
    left: -9999px;
    position: absolute;
    top: -9999px;
  }

  span {
    background-color: #bfbfbf;
    border-radius: 20px;
    display: flex;
    height: 28px;
    position: relative;
    width: 60px;

    &:before {
      position: absolute;
      content: " ";
      height: 20px;
      width: 20px;
      background-color: ${({ darkMode }) => (darkMode ? "#ffbb00" : "#440aca")};
      border-radius: 50%;
      top: 4px;
      left: ${({ darkMode }) => (darkMode ? "4px" : "36px")};
      transition: 0.2s ease;
    }
  }

  svg {
    position: absolute;
    top: 6px;
    left: ${({ darkMode }) => (darkMode ? "38px" : "6px")};
    color: ${({ darkMode }) => (darkMode ? "#a59b0b" : "white")};
    transition: 0.5s ease;
  }
`;

export default Home;
