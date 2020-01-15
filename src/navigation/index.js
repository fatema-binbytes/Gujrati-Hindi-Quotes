import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import colors from '../config/colors';
import Hindi from '../screen/HindiQuotes';
import Gujrati from '../screen/GujratiQuotes';
const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator
        lazy={true}
        swipeEnabled={true}
        tabBarOptions={{
          upperCaseLabel: false,
          activeTintColor: '#FFF',
          style: {backgroundColor: colors.primary_color},
          indicatorStyle: {
            borderBottomColor: '#ffffff',
            borderBottomWidth: 2,
          },
        }}>
        <Tab.Screen
          name="Hindi"
          component={Hindi}
          options={{tabBarLabel: 'Hindi'}}
        />
        <Tab.Screen
          name="Gujrati"
          component={Gujrati}
          options={{tabBarLabel: 'Gujrati'}}
        />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;
