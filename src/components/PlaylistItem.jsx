import React from "react";
import styled from "styled-components";

const PlaylistItem = ({ name, images, owner, darkMode }) => {
  return (
    <Playlist darkMode={darkMode}>
      <ImageContainer>
        <img src={images[0].url} alt="" />
      </ImageContainer>
      <Description>
        <span>{name}</span>
        <p className="owner">{owner.display_name}</p>
      </Description>
    </Playlist>
  );
};

const Playlist = styled.article`
  background-color: ${({ darkMode }) => (darkMode ? "#0000001d" : "#ffffff1d")};
  padding: 10px;
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  border-radius: 15px;
  overflow: hidden;
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  overflow: hidden;

  @media (min-width: 500px) {
    height: 202px;
    width: 202px;
  }

  @media (min-width: 748px) {
    width: 14rem;
    height: 14rem;
  }

  @media (min-width: 1080px) {
    width: 9.5rem;
    height: 9.5rem;
  }

  @media (min-width: 1080px) {
    width: 9.5rem;
    height: 9.5rem;
  }

  
  @media (min-width: 1400px) {
    width: 13.5rem;
    height: 13.5rem;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
  display: flex;
  padding: 10px;
  font-size: 1.2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: 700;

  p {
    font-size: 1rem;
    width: 100%;
  }

  .owner {
    text-align: center;
    margin-top: 10px;
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

export default PlaylistItem;
