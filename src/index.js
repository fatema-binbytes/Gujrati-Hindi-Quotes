import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import LinearGradient from 'react-native-linear-gradient';
import OneSignal from 'react-native-onesignal';

import colors from './config/colors';
import AppStack from './navigation';
import {store, persistor} from './store';

class App extends React.Component {
  
    constructor(props) {
      super(props); 
        OneSignal.init('82684884-df4d-432d-a793-ea00ad59cb00');
    }
    render() {
      return(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LinearGradient colors={colors.linear_gradient_color}>
              <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle={'light-content'}
              />
            </LinearGradient>
            <AppStack />
          </PersistGate>
        </Provider>
      )
    }
  };

export default App;