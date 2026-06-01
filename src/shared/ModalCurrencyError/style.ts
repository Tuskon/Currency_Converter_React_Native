import Styled from 'styled-components/native';

export const Overlay = Styled.View`
  flex:1;
  background-color:rgba(0,0,0,0.35);
  justify-content:center;
  align-items:center;
`;

export const ModalContainer = Styled.View`
  width:90%;
  height:240px;
  align-items:center;
  justify-content:flex-start;
  background-color:white;
  border-radius:20px;
  overflow:hidden;
`;

export const CloseView = Styled.View`
  margin-top:15px;
  align-items:flex-end;
  justify-content:center;
  width:92%
`;


export const TextErrorBold = Styled.Text`
  font-size:18px;
  color:black;
  font-weight:bold
  margin-top:20px;
`;

export const TextError = Styled.Text`
  font-size:16px;
  color:black;
  margin-top:4px;
`;

export const RetryView = Styled.View`
  margin-top:20px;
  align-items:center;
  justify-content:center;
  background-color:red;
  border-radius:8px;
  width:200px;
  height:40px
`;
