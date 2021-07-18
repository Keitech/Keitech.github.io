import styled from 'styled-components';

export const TrainingContainer = styled.div`
  height: 89.4vh;
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const TrainingTitleContainer= styled.div`
  width: 100%;
  /* height: 50px; */
  z-index: 100;
  background: transparent;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TrainingTitle = styled.h1`
  color: black;
  font-size: 80px;
  font-family: "Centra No2",sans-serif;
  margin: unset;
`;

export const TrainingDesc = styled.p`
  font-size: 18px;
  width: 50%;
  color: black;
`;

export const TrainingLearnCard = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const CardContainer = styled.div`
  margin: 20px 0;
  width: 90%;
  height: auto;
  /* background: pink; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* padding: 10px 0; */
  > * {
    margin: 1em 5px;
  }
`;

export const Card = styled.div`
  width: 450px;
  height: 400px;
  background: whitesmoke;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* border: 1px solid grey; */
  border-radius: 5px;
  padding: 10px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CardImg = styled.img`
  height: 300px;
  width: 90%;
  margin-top: 10px;
  /* border: 2px solid black; */
  /* border-radius: 10px; */
  /* box-shadow: 1px 1px; */
`;

export const CardText = styled.p`
  font-size: 30px;
  color: black;
  font-family: "Centra No2",sans-serif;
  font-weight: bold;
  margin: 0;
  padding: 10px 0;
`;

export const CardLocation = styled.p`
  font-size: 20px;
  color: grey;
  font-family: "Centra No2",sans-serif;
  margin: 0;
  padding: 0;
`;