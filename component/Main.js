import React from 'react';
import { Text, View,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Home';
import Setting from './Setting';
import {connect} from 'react-redux';


class Tab1 extends React.Component { 
  render() {
    return (
     
        <Home/>
     
    );
  }
}

class Tab2 extends React.Component {
  render() {
    return (
   <Setting/>
    );
  }
}

const Main = createBottomTabNavigator({
  Tab1: Tab1,
  Tab2: Tab2,
});

export default createAppContainer(Main);

