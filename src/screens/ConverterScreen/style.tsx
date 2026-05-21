import Styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get("window")

interface EmptySelectionCountryTextProps {
  marginTop?: number;
  marginBottom?: number
}

interface ViewAmoutProps {
  marginTop?: number;
  marginBottom?: number
}


export const GeralView = Styled(LinearGradient).attrs({
  colors: ['#D7E3FC', '#F4F5F7'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const GeralContentView = Styled(SafeAreaView)`
  flex: 1;
`;

export const ScrollContent = Styled.ScrollView`
  flex: 1;
`;

export const TitleView = Styled.View`
  width:${width * 0.8}px;
  margin-top:${height * 0.08}px;
  align-items:center;
  justify-content:center
`

export const TitleText = Styled.Text`
  font-size: 32px;
  font-weight:bold;
  color: #1F2261;
`;

export const TitleSloganText = Styled.Text`
  margin-top:4px;
  font-size: 18px;
  color: #808080;
  text-align:center
`;

export const CardSelectionView = Styled.View`
  width:${width * 0.8}px;
  height:${height * 0.3}px;
  margin-top:${height * 0.05}px;
  background-color:white;
  align-items:center;
  border-radius:20px;
  justify-content:center
`

export const InnerCardSelectionView = Styled.View`
  width:${width * 0.7}px;
  height:${height * 0.2}px;
  align-items:flex-start;
  justify-content:center
`

export const EmptySelectionCountryText = Styled.Text<EmptySelectionCountryTextProps>`
  font-size: 20px;
  font-weight:bold;
  color: #1F2261;
  margin-top:${((props: EmptySelectionCountryTextProps) => props.marginTop ? props.marginTop : 0)}px;
  margin-bottom:${((props: EmptySelectionCountryTextProps) => props.marginBottom ? props.marginBottom : 0)}px;
`

export const LineRowView = Styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:center
`

export const Line = Styled.View`
  width:${width * 0.3}px;
  background-color:#E7E7EE;
  height:1px
`

export const Circle = Styled.View`
  width:${width * 0.1}px;
  background-color:#26278D;
  border-radius:100px;
  height:40px;
  align-items:center;
  justify-content:center
`

export const ViewAmout = Styled.View<ViewAmoutProps>`
  width:${width * 0.7}px;
  align-items:flex-start;
  margin-top:${((props: ViewAmoutProps) => props.marginTop ? props.marginTop : 0)}px;
  margin-bottom:${((props: ViewAmoutProps) => props.marginBottom ? props.marginBottom : 0)}px;
`

export const AmountTitleText = Styled.Text`
  font-size: 15px;
  color:#989898
`

export const RowView = Styled.View`
  margin-top:7px;
  width:${width * 0.7}px;
  flex-direction:row;
`

export const SelectionRowView = Styled.View`
  width:${width * 0.3}px;
  justify-content:space-between;
  align-items:center;
  flex-direction:row
`

export const CountryFlag = Styled.Image`
  width:38px;
  height:38px;
  border-radius:19px;
`;

export const SelectionCountryTextView = Styled.View`
  justify-conten:center;
  flex-direction:row;
`

export const SelectionCountryText = Styled.Text`
  font-size: 20px;
  color: #1F2261;
  font-weight:bold
`

export const InputRowView = Styled.View`
  width:${width * 0.4}px;
  justify-content:flex-end;
  align-items:center;
  flex-direction:row
`
export const TextInputCountry = Styled.TextInput`
  width:${width * 0.36}px;
  background-color:#EFEFEF;
  border-radius:8px
`


export const ExchangeView = Styled.View`
  width:${width * 0.8}px;
  margin-top:${height * 0.04}px;
  align-items:flex-start;
`
export const ExchangeRow = Styled.View`
  flex-direction:row;
  align-items:center;
`

export const ExchangeText = Styled.Text`
  font-size: 15px;
  color:#989898
`

export const ExchangeBoldText = Styled.Text`
  font-size: 15px;
  font-weight:bold;
  color:black
`
