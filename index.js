import React from 'react';
import {AppRegistry,StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {name as appName} from './app.json';

import colors from './src/config/colors'
import AppStack from './src/navigation';
import {store,persistor} from './src/store';

const wrapRedux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={colors.primary_color} barStyle={'light-content'}/>
        <AppStack />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => wrapRedux);
