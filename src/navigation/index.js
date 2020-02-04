import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/routers';

import colors from '../config/colors';
import Login from '../screen/Login';
import DrawerNav from './drawer';
import LinearGradient from 'react-native-linear-gradient';
import HeaderIcon from '../component/HeaderIcon';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontFamily: 'OpenSans-Bold',
          },
          headerBackground: () => (
            <LinearGradient
              colors={colors.linear_gradient_color}
              style={{flex: 1}}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            />
          ),
        })}>
        <Stack.Screen
          component={DrawerNav}
          options={({navigation, route, props}) => ({
            title: route.state
              ? `${route.state.routes[route.state.index].name} Quotes`
              : 'Hindi Quotes',
            headerLeft: props => (
              <HeaderIcon
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
                icon={'menu'}
              />
            ),
          })}
        />
        <Stack.Screen
          component={Login}
          name={'Login'}
          options={({navigation, route, props}) => ({
            title: '',
            headerLeft: props => <HeaderIcon onPress={null} icon={null} />,
          })}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
export default App;
