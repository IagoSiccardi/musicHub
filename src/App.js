import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import "./App.css";
import Home from "./components/Home";
import { useStateProvider } from "./utils/StateProvider";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [{ token, loading }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const token = hash.split("access_token")[1].split("&")[0].substring(1);

      dispatch({
        type: "access_token",
        payload: token,
        loading: false,
      });
    }
  }, [token, dispatch]);

  return (
    <div>
      {loading ? (
        <Loading>
          <AiOutlineLoading3Quarters />
        </Loading>
      ) : token ? (
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        <Login />
      )}
    </div>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg);
  }
  
  `;

const Loading = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  svg {
    color: white;
    font-size: 7rem;
    animation: ${rotate} infinite 2s;
  }
`;

export default App;
