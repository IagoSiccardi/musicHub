import axios from "axios";
import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import PlaylistItem from "./PlaylistItem";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CurrentlyPlaylist = ({ darkMode }) => {
  const [{ token, playlist }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylists = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/playlists?limit=5",
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        const { data } = response;

        return dispatch({
          type: "playlist_info",
          payload: data,
        });
      } catch (error) {
        return console.log(error);
      }
    };
    getPlaylists();
  }, [dispatch, token]);

  return (
    <Container darkMode={darkMode}>
      <h1 className="h1">Mis Playlists</h1>
      <PlaylistContainer>
        {playlist ? (
          playlist.items.map(({ id, name, images, owner, tracks }) => (
            <PlaylistItem
              darkMode={darkMode}
              key={id}
              name={name}
              images={images}
              owner={owner}
              tracks={tracks}
            />
          ))
        ) : (
          <Loading>
            <AiOutlineLoading3Quarters />
          </Loading>
        )}
      </PlaylistContainer>
    </Container>
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

const Container = styled.main`
  display: grid;
  place-items: center;
  padding: 0 5%;
  h1 {
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
    margin-top: 4rem;

    @media (min-width: 748px) {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 500px) {
    padding: 0 5%;
  }

  @media (min-width: 748px) {
    padding: 0 0;
  }
`;

const PlaylistContainer = styled.section`
  display: grid;
  height: auto;
  place-items: center;
  width: 100%;
  margin-top: 10px;
  row-gap: 10px;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }

  @media (min-width: 748px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1080px) {
    width: 85%;
    grid-template-columns: repeat(5, 1fr);
  }
`;
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: 45vh;
  width: 85vw;
  svg {
    color: white;
    width: 100%;
    font-size: 7rem;
    animation: ${rotate} infinite 2s;
  }
`;

export default CurrentlyPlaylist;
