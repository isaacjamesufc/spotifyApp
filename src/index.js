import React from 'react';
import '~/config/ReactotronConfig';
import '~/config/statusBarConfig';
import { Provider } from 'react-redux';
import Routes from '~/Routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
