import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export class LoginScreen extends Component {
  static navigationOptions = {
  title: 'Login',

  };

  render() {
    return (
      <View style={styles.container}>
        <Button title='Login' onPress={()=>{this.props.navigation.navigate('Home')}}/>
      </View>
    );
  }
}

export class Page2 extends Component {
  static navigationOptions={
    gesturesEnabled:false,
    drawerLabel:'Notifications',
    drawerIcon:({ tintColor })=><Text style={{color:tintColor,fontSize:30}}>@</Text>
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Open Drawer' onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}/>
        <Text>Page2</Text>
      </View>
    );
  }
}

export class Page3 extends Component {
  static navigationOptions={
    gesturesEnabled:false
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Open Drawer' onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}/>
        <Text>Page3</Text>
      </View>
    );
  }
}

export class Tab1 extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon : ({tintColor})=><Text style={{color:tintColor,fontSize:30}}>$</Text>
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Open Drawer' onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}/>
        <Text>Tab1</Text>
      </View>
    );
  }
}

export class Tab2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Open Drawer' onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}/>
        <Text>Tab2</Text>
      </View>
    );
  }
}

export class Tab3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Open Drawer' onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}/>
        <Text>Tab3</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
