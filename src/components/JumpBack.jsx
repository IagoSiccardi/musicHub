import axios from "axios";
import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Tracks from "./Tracks";

const JumpBack = ({ darkMode }) => {
  const [{ token, recentlyPlayed }, dispatch] = useStateProvider();

  useEffect(() => {
    const getRecentlyPlayed = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/player/recently-played?limit=10",
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        const { data } = response;

        return dispatch({
          type: "recentlyPlayed_info",
          payload: data,
        });
      } catch (error) {
        return console.log(error);
      }
    };
    getRecentlyPlayed();
  }, [token, dispatch]);

  console.table(recentlyPlayed);

  return (
    <Main darkMode={darkMode}>
    <h1 className="h1">Volver a escuchar</h1>
    <Container >
      {recentlyPlayed ? (
        recentlyPlayed.items.map(({ track }, i) => {
          return (
            <Tracks
              key={i + 1}
              name={track.name}
              img={track.album.images[0].url}
              darkMode={darkMode}
            />
          );
        })
      ) : (
        <Loading>
          <AiOutlineLoading3Quarters />
        </Loading>
      )}
    </Container>
    </Main>
  );
};

const Main = styled.main`
  h1 {
    margin: 2rem 0px;
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  }
`

const Container = styled.section`
display: grid;
place-items: center;
grid-template-columns: repeat(2, 1fr);
row-gap: 25px;
margin-top: 2rem;
width: 90%;
margin: 0px 5%;
padding-bottom: 20px;

@media (min-width: 748px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(5, 1fr);
    row-gap: 20px;
  }


`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg);
  }
  
  `;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  min-height: 45vh;
  width: 90vw;
  svg {
    color: white;
    width: 100%;
    font-size: 7rem;
    animation: ${rotate} infinite 2s;
  }
`;

export default JumpBack;
