import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator , TabNavigator } from 'react-navigation';
import {
  LoginScreen,
  Tab1,
  Tab2,
  Tab3,
  Page2,
  Page3
} from './Screens';
import CustomDrawer from './Screens/customDrawer';

const LoginStack = StackNavigator({
  LoginScreen : {screen : LoginScreen}
});

const TabPage = TabNavigator({
  Tab1 : {screen : Tab1},
  Tab2 : {screen : Tab2},
  Tab3 : {screen : Tab3}
})

const HomePage = DrawerNavigator({
  TabPage : {screen:TabPage},
  Page2 : {screen : Page2},
  Page3 : {screen: Page3}
},{
  contentComponent:CustomDrawer
})

const Routes = StackNavigator({
  Login : {screen : LoginStack},
  Home : {screen : HomePage}
},{
  headerMode : 'none',
});

export default Routes;
