import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './Login'

export default class vibe extends Component {

  renderScene(route, navigator) {

    return <route.component navigator={navigator} props={route.passProps} />
  }

  render() {
    return (
      <Navigator
        initialRoute={{component: Login}}
        renderScene={this.renderScene}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('vibe', () => vibe);
