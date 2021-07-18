import styled from 'styled-components'

export const ReviewsContainer = styled.div`
  height: 89.4vh;
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const ReviewsTitleContainer= styled.div`
  width: 100%;
  /* height: 50px; */
  z-index: 100;
  background: transparent;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewsTitle = styled.h1`
  color: black;
  font-size: 80px;
  font-family: "Centra No2",sans-serif;
  margin: unset;
`;

export const ReviewsDesc = styled.p`
  font-size: 18px;
  width: 50%;
  color: black;
`;

export const CustomReviewsContainer = styled.div`
  width: 90%;
  /* background: pink; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    margin: 1em 5px;
  }
`;

export const CustomReviewCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  width: 660px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 10px;
`;

export const ReviewImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const ReviewTitle = styled.h3`
  margin: none;
`;

export const ReviewRating = styled.p`
  margin-top: none;
`;

export const RightContainer = styled.div`
  border-left: 1px solid black;
  padding: 10px;
  width: 90%;
`;

export const ReviewText = styled.p`
  font-size: 18px;
`;

export const DialogTitle = styled.h2`
  
`;

export const DialogDesc = styled.textarea`
 margin-top: 15px;
 resize: none;
 width: 500px;
 max-width: 100%;
 height: 200px;
 max-height: 300px;
 font-size: 20px;
 padding: 5px;
 font-family: "Centra No2",sans-serif
`;

