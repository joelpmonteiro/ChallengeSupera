import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import UserContextProvider from './src/context-Api/usersContext';

import store from './src/redux/index';
import Initial from './src/initial/Initial';
export default () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <NavigationContainer>
          <Initial />
        </NavigationContainer>
      </UserContextProvider>
    </Provider>
  );
};
