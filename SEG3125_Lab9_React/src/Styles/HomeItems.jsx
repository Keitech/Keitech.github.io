import styled from 'styled-components';
import BallImg from "../assets/ball1.jpeg";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  padding: 0  30px;
  height: 89.4vh;
  position: relative;
  z-index: 1;
  /* background-image: url(${BallImg});
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const TextContainer = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HomeHeroBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  filter: brightness(35%);
  /* opacity: 0.7; */
`;

export const HomeText = styled.p`
  font-size: 125px;
  width: 50%;
  text-align: center;
  color: white;
  z-index: 999;
  font-family: "Centra No2",sans-serif;
  margin: 20px;
`;

export const LearnButton = styled.button`
  border-radius: 30px; 
  font-size: 25px;
  display: inline-block;
  border: 1px solid white; 
  padding: 9px 35px; 
  background: transparent; 
  color: white;
  cursor: pointer;
  display: inline-block;
  transition: 0.5s;
  outline: none;
    :hover{
    background: white;
    color: #981717;
    }
    :focus {outline:0;}   
`;