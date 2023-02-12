import React from 'react'
import styled from 'styled-components'
import {AiFillPlayCircle} from 'react-icons/ai'

const Tracks = ({name,img,darkMode}) => {
  return (
    <Container darkMode={darkMode}>
        <div className='img-container'>
          <img src={img} alt="" />
        </div>
        <div className="trackName">
          {name}
        </div>
        <AiFillPlayCircle/>
    </Container>
  )
}

const Container = styled.article`
position: relative;
overflow: hidden;
cursor: pointer;
border-radius: 10px;
transition: .5s ease ;

&:hover{
  transform: scale(1.05);
}

svg {
  position: absolute;
  font-size: 4rem;
  top: calc(50% - 2rem);
  left: calc(50% - 2rem);
  color: #ffffffc1;
  transition: .5s ease;

  @media (min-width: 748px) {
    font-size: 5rem;
    top: calc(50% - 2.5rem);
    left: calc(50% - 2.5rem);
  }


  &:hover{
    transform: scale(1.05);
    color: black;
  }
  
}

.img-container {
  width: 80vw;
  
  height: 75px;

  @media (min-width: 500px) {
    width: 40vw;
    height: 100px;
  }

  @media (min-width: 748px) {
    width: 28vw;
  }

  @media (min-width: 1080px) {
    width: 15vw;
  }
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.trackName {
  color: white;
  padding: 5px;
  background-color: #00000075;
  font-size: .8rem;
  text-transform: uppercase;
  font-weight:600;
  position: absolute;
  bottom: calc(.8rem / 2);
  text-align: left;

}

`


export default Tracks