import Navigator from './src/navigation/navigation';
import store from './src/redux';
import { Provider } from 'react-redux';
import { RequestContextProvider } from './src/contexts/RequestContext';

export default function App() {

  return (
    <Provider store={store}>
      <RequestContextProvider>
        <Navigator />
      </RequestContextProvider>
    </Provider>
  );
}


