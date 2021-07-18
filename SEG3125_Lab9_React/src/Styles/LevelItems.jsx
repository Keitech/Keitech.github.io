import styled from 'styled-components';

export const LevelContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`

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

export const LevelDescContainer = styled.p`
  width: 60%;
  /* background: pink; */
  text-align: center;
  font-size: 20px;
  font-family: "Centra No2",sans-serif;
`;

export const LevelCardsContainer = styled.div`
  width: 100%;
  height: auto;
  /* background: pink; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 10px 0;
  > * {
    margin: 1em 5px;
  }
`;

export const LearnCardText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;
