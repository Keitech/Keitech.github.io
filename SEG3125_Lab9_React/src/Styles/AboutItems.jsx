import styled from 'styled-components';
import Teampic from '../assets/ball4.jpeg'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  /* padding: 0  30px; */
  height: 91.8vh;
  position: relative;
  z-index: 1;
`;

export const AboutBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const AboutHeroBg = styled.img`
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

export const AboutBar = styled.div`
  width: 100%;
  color: grey;
  height:80px;
  z-index: 100;
  background: transparent;
  top:20px;
  position: absolute;
  text-align: center;
`;

export const AboutTitle = styled.h1`
  color: white;
  font-size: 80px;
  font-family: "Centra No2",sans-serif;
`

export const TextContainer = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: grey;
  border: 1px solid black;
  width: 80%;
  height: 50vh;
  padding: 0 40px;
  background-color: rgba(223,187,133,0.6);
    /* #f9c852	(249,200,82)
    #981717	(152,23,23)
    #dfbb85	(223,187,133)
    #bbbbbb	(187,187,187)
    #ffffff	(255,255,255) */
  border-radius: 30px;
`;

export const TeamImg = styled.div`
  height: 70%;
  width: 400px;
  background-image: url(${Teampic});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
`;

export const AboutTextContainer = styled.div`
  /* background: pink; */
  width: 700px;
  height: 60%;
  margin-right: 200px;
`

export const AboutText = styled.p`
  font-size: 20px;
`;