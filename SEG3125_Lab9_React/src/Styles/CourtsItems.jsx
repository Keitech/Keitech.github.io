import styled from 'styled-components'

export const CourtsContainer = styled.div`
  height: 89.4vh;
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const CourtsTitleContainer= styled.div`
  width: 100%;
  z-index: 100;
  background: transparent;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CourtsTitle = styled.h1`
  color: black;
  font-size: 80px;
  font-family: "Centra No2",sans-serif;
  margin: unset;
`;

export const CourtsDesc = styled.p`
  font-size: 18px;
  width: 50%;
  color: black;
`;

export const CourtsCardText = styled.p`
  font-weight: bold;
  font-size: 18px;
`

export const CardContainer = styled.div`
  margin: 10px 0;
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

export const ModalTitle = styled.h2`
  font-size: 30px;
  margin: none;
  font-family: "Centra No2",sans-serif;
`;

export const ModalDescription = styled.p`
  font-size: 18px;
  max-width: 95%;
  font-family: "Poppins",sans-serif;
`