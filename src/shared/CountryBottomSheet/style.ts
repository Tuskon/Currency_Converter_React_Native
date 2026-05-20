import Styled from 'styled-components/native';

export const Overlay = Styled.View`
  flex:1;
  background-color:rgba(0,0,0,0.35);
  justify-content:flex-end;
`;

export const BottomSheetContainer = Styled.View`
  width:100%;
  height:90%;
  background-color:white;

  border-top-left-radius:28px;
  border-top-right-radius:28px;

  overflow:hidden;
`;

export const HandleBar = Styled.View`
  width:60px;
  height:6px;
  border-radius:999px;
  background-color:#D9D9D9;

  align-self:center;
  margin-top:12px;
  margin-bottom:10px;
`;

export const GeralView = Styled.View`
  flex:1;
`;

export const HeaderView = Styled.View`
  width:100%;
  padding-horizontal:20px;

  flex-direction:row;
  align-items:center;
  justify-content:space-between;

  margin-top:10px;
`;

export const TitleText = Styled.Text`
  font-size:20px;
  color:black;
  font-weight:bold;
`;

export const CloseButton = Styled.View`
  width:36px;
  height:36px;

  align-items:center;
  justify-content:center;
`;

export const SearchInput = Styled.TextInput`
  width:auto;
  height:54px;

  background-color:#F1F1F1;

  border-radius:16px;

  padding-horizontal:16px;

  font-size:16px;
  color:black;

  margin-top:20px;
  margin-bottom:20px;
  margin-horizontal:20px;
`;

export const CountryRow = Styled.View`
  width:100%;
  padding-vertical:14px;
`;

export const CountryInfoView = Styled.View`
  flex-direction:row;
  align-items:center;
`;

export const CountryFlag = Styled.Image`
  width:38px;
  height:38px;
  border-radius:19px;
`;

export const CountryName = Styled.Text`
  font-size:18px;
  font-weight:600;
  color:black;
  margin-left:14px;
`;

export const Divider = Styled.View`
  width:100%;
  height:1px;
  background-color:#EAEAEA;
`;

export const LoadingView = Styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
`;

export const ErrorView = Styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
`;

export const ErrorTitle = Styled.Text`
  font-size:16px;
  font-weight:bold;
  color:black;
  margin-top:25px;
`;

export const ErrorSubtitle = Styled.Text`
  font-size:16px;
  color:black;
  margin-top:8px;
`;

export const RetryButton = Styled.View`
  width:200px;
  height:44px;

  background-color:red;

  border-radius:8px;

  align-items:center;
  justify-content:center;

  flex-direction:row;

  margin-top:25px;
`;

export const RetryButtonText = Styled.Text`
  color:white;
  font-size:16px;
  margin-left:10px;
`;