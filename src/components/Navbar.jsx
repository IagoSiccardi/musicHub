import axios from "axios";
import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

const Navbar = ({ darkMode }) => {
  const [{ token, user }, dispatch] = useStateProvider();

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
              user.images
                ? user.images[0].url
                : "https://aaahockey.org/wp-content/uploads/2017/06/default-avatar.png"
            }
            alt=""
          />
        </div>
      </section>
    </Nav>
  );
};

const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: center;
  padding: 20px;
  position: relative;
  width: 100%;
  background-color: ${({ darkMode }) => (darkMode ? "#fffdfd26" : "#9900ff2b")};
  section {
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
    font-weight: 700;
    font-size: 1.2rem;
  }

  .icon {
    position: absolute;
    left: 20px;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  .user-section {
    position: absolute;
    right: 30px;
    top: 8px;
    .user {
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

  .ul-section ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

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
`;

export default Navbar;
