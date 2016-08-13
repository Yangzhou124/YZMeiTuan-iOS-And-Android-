/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Main = require('./YZMain')

var Launch = React.createClass({

    render(){
      return(

        <Image source={{uri:'launchimage'}} style={styles.lauchImageStyle} />

      );
    },

componentDidMount(){
   //定时:隔2秒切换到Main
   setTimeOut(()=>{
     //
    this.props.navigator.replace({
      component:Main,//具体路由的板块
    })
   },2000);
}

});

const styles = StyleSheet.create({
  lauchImageStyle:{
    flex:1
  }

});


module.exports = Launch;
