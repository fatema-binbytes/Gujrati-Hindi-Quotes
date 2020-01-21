import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/routers';

import colors from '../config/colors';
import SearchScreen from '../screen/Search';
import DrawerNav from './drawer';

import Search from '../component/Search';
import HeaderIcon from '../component/HeaderIcon';

const Stack = createStackNavigator();
let drawer = true;

function click(navigation) {
  if (drawer) navigation.dispatch(DrawerActions.openDrawer());
  else navigation.dispatch(DrawerActions.closeDrawer());
  drawer = !drawer;
}


function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={DrawerNav}
          options={({navigation, route}) => ({
            title: 'Quotes',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {backgroundColor: colors.primary_color},
            headerLeft: props => (
              <HeaderIcon onPress={() => click(navigation)} icon={'menu'} />
            ),
            // headerRight: props => (
            //   <HeaderIcon
            //     onPress={() => navigation.navigate('Search')}
            //     icon={'magnify'}
            //   />
            // ),
          })}
        />
        <Stack.Screen
          component={SearchScreen}
          name={'Search'}
          options={({navigation, route}) => ({
            header: props => <Search navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
export default App;
