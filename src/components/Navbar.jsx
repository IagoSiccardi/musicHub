import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

const Navbar = ({ darkMode }) => {
  const [{ token, user }, dispatch] = useStateProvider();

  const [burgerButton, setBurgerButton] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: "user_info",
        payload: data,
      });
    };
    getUser();
  }, [token, dispatch]);

  return (
    <>
    <Nav darkMode={darkMode}>
      <section className="icon">
        <span>MusicHub</span>
      </section>
      <section className="ul-section">
        <ul>
          <li>Principal</li>
          <li className="input-search">
            <FaSearch />
            <input type="search" placeholder="Buscar..." />
          </li>
          <li>Explorar</li>
        </ul>
      </section>
      <section className="user-section">
        <div className="user">
          <img
            src={
              user.images === undefined
                ? "https://aaahockey.org/wp-content/uploads/2017/06/default-avatar.png"
                : user.images[0].url 
            }
            alt=""
          />
        </div>
      </section>

      <FaBars className="burgerButton" onClick={() => setBurgerButton(!burgerButton)} />
      {burgerButton ? (
        <section className="burgerSection">
          <ul>
            <li>Principal</li>
            <li>Explorar</li>
            <li className="input-search">
            <FaSearch />
            <input type="search" placeholder="Buscar..." />
            </li>
          </ul>
          <div className="user">
          <img
            src={
              user.images
                ? user.images[0].url
                : "https://aaahockey.org/wp-content/uploads/2017/06/default-avatar.png"
            }
            alt=""
          />
        </div>
        </section>
      ) : null}
    </Nav>
    </>

  );
};

const Nav = styled.nav`
  align-items: center;
  height: auto;
  justify-content: center;
  padding: 30px;
  position: relative;
  width: 100%;
  background-color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(#df8908, #ee7c12)"
      : "linear-gradient(black, #24033a)"};


  @media (min-width:748px){
  padding: 20px;
  height: 4rem;
  display: flex;
  

  }

  .burgerSection {
    margin-top: 20px;
    width: 100%;
    font-size: 1.1rem;
    user-select: none;

    @media (min-width: 748px) {
      display: none;
    }

    ul li {
      margin-bottom: 10px ;
      cursor: pointer;
    }

    .input-search {
      position: relative;

      svg {
        color: black;
        position: absolute;
        top: 10px;
        left: 170px;
        z-index: 1;
        background-color: white;
      }

      input {
        padding: 10px;
        border-radius: 20px;
        border: none;
        transition: 0.5s ease;
        font-size: 0.9rem;

        &:focus {
          outline: none;
          transform: scale(1.02);
        }
      }
    }

    .user {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid white;
      position: absolute;
      right: 20px;
      bottom: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

  }



  

  section {
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
    font-weight: 700;
    font-size: 1.2rem;
  }

  .icon {
    left: 20px;
    transition: 0.5s ease;
    cursor: pointer;

    @media (min-width: 748px) {
      position: absolute;
      &:hover {
        transform: scale(1.1);
      }
    }

  }

  .ul-section ul {
    display: none;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media (min-width: 748px) {
      display: flex;
    }

    li {
      transition: 0.5s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }

    .input-search {
      position: relative;

      svg {
        color: black;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
        background-color: white;

      }

      input {
        padding: 10px;
        border-radius: 20px;
        border: none;
        transition: 0.5s ease;
        font-size: 0.9rem;

        &:focus {
          outline: none;
          transform: scale(1.02);
        }
      }
    }
  }

  .user-section {
    display: none;
    position: absolute;
    right: 30px;
    top: 8px;

    @media (min-width: 748px) {
      display: flex;
    }

    .user {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid white;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .burgerButton {
    position: absolute;
    top: 25px;
    right: 20px;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;

    @media (min-width: 748px) {
      display: none;
    }
  }
`;

export default Navbar;
