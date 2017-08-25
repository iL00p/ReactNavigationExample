import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { DrawerItems } from 'react-navigation';

const CustomDrawer = (props) =>{
  return(
    <View style={{backgroundColor:'red',height:'100%'}}>
      <View style={{height:100,justifyContent:'center',alignItems:'center'}}>
        <Text>PLACEHOLDER</Text>
      </View>
      <DrawerItems {...props}/>
    </View>
  )
}

export default CustomDrawer;
