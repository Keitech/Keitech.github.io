import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction:column;
  /* padding: 0  30px; */
  height: 89.4vh;
  position: relative;
  z-index: 1;
`;

export const SkillsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SkillsHeroBg = styled.img`
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

export const BreadcrumbContainer = styled.div`
  width: 100%;
  height: 100px;
  z-index: 100;
  /* top: 100px; */
  margin-left: 100px;
  background: transparent;
  /* position: absolute; */
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const BreadcrumbText = styled.p`
  font-size: 40px;
  /* color: white; */
`;

export const SkillsTextContainer = styled.div`
  z-index: 3;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background: grey;
  border: 1px solid black;
  width: 80%;
  height: 65vh;
  padding: 0 40px;
    /* #f9c852	(249,200,82)
    #981717	(152,23,23)
    #dfbb85	(223,187,133)
    #bbbbbb	(187,187,187)
    #ffffff	(255,255,255) */
  border-radius: 30px;
`;

export const SkillsImg = styled.div`
  height: 60%;
  width: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  border: 1px solid black;
`;

export const SkillsInnerTextContainer = styled.div`
  /* background: pink; */
  width: 60%;
  height: 95%;
  margin-left: 60px;
  font-family: "Centra No2",sans-serif;
`

export const SkillsTitle = styled.h2`
  font-size: 50px;
  color: black;
`;

export const SkillsDesc = styled.p`
  font-size: 20px;
  color: black;
`;

export const SkillsListContainer = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  flex-direction: row;
  /* background: blue; */
`;

export const SkillsList = styled.li`
  font-size: 20px;
  color: black;
`;

export const BookButton = styled.button`
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
`