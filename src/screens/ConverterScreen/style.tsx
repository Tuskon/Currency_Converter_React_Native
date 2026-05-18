import Styled from 'styled-components/native';
import { ScrollViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

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


export const Text = Styled.Text`
  font-size: 18px;
  color: #000;
`;