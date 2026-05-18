import Styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

const {width,height} = Dimensions.get("window")

export const GeralView = Styled(LinearGradient).attrs({
  colors: ['#D7E3FC', '#F4F5F7'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const GeralContentView = Styled(SafeAreaView)`
  flex: 1;
  align-items:center;
`;

export const TitleView = Styled.View`
  width:${width*0.7}px;
  margin-top:${height*0.15}px;
  align-items:center;
  justify-content:center
`

export const TitleText = Styled.Text`
  font-size: 32px;
  font-weight:bold;
  color: #1F2261;
`;

export const TitleSloganText = Styled.Text`
  font-size: 18px;
  color: #808080;
`;

export const ImageConvy = Styled.Image`
  width:350px;
  height:350px;
  margin-top:${height*0.02}
`

export const ButtonView = Styled.View`
  margin-top:${height*0.02}
`

export const Button = Styled.View`
  background-color:#6750A4;
  width:${width*0.6}px;
  height:40px;
  align-items:center;
  justify-content:center;
  border-radius:20px
`

export const ButtonText = Styled.Text`
  font-size: 14px;
  color: white;
`;


