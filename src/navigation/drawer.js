import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideMenu from './sideMenu'
import Hindi from '../screen/HindiQuotes';
import Gujrati from '../screen/GujratiQuotes';

const Drawer = createDrawerNavigator();

function DrawerNav() {
    return (
      <Drawer.Navigator
        initialRouteName="Hindi"
        drawerContent={props => <SideMenu  props={props}/>}
        drawerStyle={{
          width: 270,
        }}
      >
        <Drawer.Screen
          name="Hindi"
          component={Hindi}
        />
        <Drawer.Screen
          name="Gujrati"
          component={Gujrati}
        />
      </Drawer.Navigator>
    );
  }
  export default DrawerNav