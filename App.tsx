import 'react-native-gesture-handler';
import Navigator from './src/navigation/navigation';
import store from '@redux';
import { Provider } from 'react-redux';
import { RequestContextProvider } from './src/contexts/RequestContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <RequestContextProvider>
          <Navigator />
        </RequestContextProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}