import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const SubmissionContainer = styled.div`
  height: 89.4vh;
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const SubmissionTitleContainer= styled.div`
  width: 100%;
  /* height: 50px; */
  z-index: 100;
  background: transparent;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmissionTitle = styled.h1`
  color: black;
  font-size: 80px;
  font-family: "Centra No2",sans-serif;
  margin: unset;
`;

export const SubmissionDesc = styled.p`
  font-size: 25px;
  width: 50%;
  color: black;
`;

export const FormContainer = styled.div`
  width: 1000px;
  height: 750px;
  /* background: pink; */
  border: 1px solid black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

export const ErrorsP = styled.p`
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 18px;
  color: red;
`;

export const LeftContainer = styled.div`
 /* background: lightblue; */
 width: 500px;
 height: 500px;
 padding: 15px;
`;

export const RightContainer = styled.div`
 /* background: lightsalmon; */
 padding: 15px;
 width: 650px;
 height: 525px;
 display: flex;
 flex-direction: column;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const InnerRightLeftContainer = styled.div`
  width: 50%;
`;

export const InnerRightRightContainer = styled.div`
  width: 50%;
`;

export const RadioDiv = styled.div`
  margin: 10px 0;
`;

export const RadioText = styled.label`
  font-size: 20px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const TextLabel = styled.label`
  margin-bottom: 5px;
  font-size: 20px;
  font-family: "Centra No2",sans-serif;
`;

export const TextInput = styled(InputMask)`
  font-family: "Centra No2",sans-serif;
  display: block;
  width: 300px;
  height: calc(2.25rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export const ButtonDiv = styled.div`
  margin-top: auto;
  margin-left: auto;
  font-size: 30px;
  /* background: pink; */
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ButtonText = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const EmailBoxText = styled.label`
  font-size: 13px;
  width: 100px;
`