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
  Image,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get("window");

var MiddleData = require('./MilddleData.json');

var MinemiddleView = React.createClass({

  getDefaultProps(){
    return{
      ViewHeight:''
    }
  },

    render(){
      return(

          <View style={styles.container}>
            {this.renderAllItem()}
          </View>
      );
    },
    renderAllItem()
    {
      var ContentArr = [];
      var viewW = width /  MiddleData.length;
      //遍历
      for (var i = 0; i < MiddleData.length; i++) {
        // 取出单独的数据
        var data = MiddleData[i]

        // 创建组件装入数组
        ContentArr.push(
          <InnerView key={i}  iconName={data.iconName} title={data.title} />
        );
      }
      return ContentArr;
    }

});

var InnerView = React.createClass({

  getDefaultProps(){
    return{
      iconName:'',
      title:''
    }
  },

  render(){
    return(
      <View style={styles.MiddlStyles}>
      <Image source={{uri:this.props.iconName }} style={{width:33,height:24}}/>
      <Text style={{fontSize:12,marginTop:5}}>{this.props.title}</Text>
      </View>
    );
  }

});

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent:'space-between',
    height:50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  MiddlStyles:{
    width:width/4,
    alignItems:'center',
    justifyContent:'center',
    height:50,
  }
});

module.exports = MinemiddleView;
