/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Main from './src/main';

export default class navigationExample extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

AppRegistry.registerComponent('navigationExample', () => navigationExample);
