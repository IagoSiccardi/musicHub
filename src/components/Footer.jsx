import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const Footer = ({darkMode}) => {
  return (
    <Container darkMode={darkMode}>
      <section className="footer-section">
        <a
          href="https://www.linkedin.com/in/iago-siccardi-329076235/"
          target="blank"
        >
          <FaLinkedin size="2rem" color={darkMode ? 'black' : 'white'} />
        </a>
        <a href="https://github.com/IagoSiccardi/musicHub" target="blank">
          <FaGithub size="2rem" color={darkMode ? 'black' : 'white'} />
        </a>
        <a
          href="mailto:iago.siccardi@gmail.com?subject=Hi%Iago!"
          target="blank"
        >
          <FaEnvelope size="2rem" color={darkMode ? 'black' : 'white'} />
        </a>
      </section>
    </Container>
  );
};

const Container = styled.footer`
  padding: 25px;
  
  background-color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(#df8908,#ca6008)"
      : "linear-gradient(#2f0549,#190029)"};

  .footer-section {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 15px;

    a {
      display: grid;
      place-content: center;
      transition: 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export default Footer;
