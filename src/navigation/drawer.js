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
          width: 240,
        }}
      >
        <Drawer.Screen
          name="Hindi"
          component={Hindi}
          options={{
            drawerLabel: 'Hindi Quotes',
            //    drawerIcon: ({ tintColor }) => (
            //  <Icon name={'heart'} size={25} />),
          }}
        />
        <Drawer.Screen
          name="Gujrati"
          component={Gujrati}
          options={{drawerLabel: 'Gujrati Quotes'}}
        />
      </Drawer.Navigator>
    );
  }
  export default DrawerNav