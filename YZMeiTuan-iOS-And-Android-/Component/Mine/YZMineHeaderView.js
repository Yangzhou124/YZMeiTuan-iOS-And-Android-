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
  Platform,
  TouchableOpacity
} from 'react-native';

var Dimensions =require("Dimensions");
var {width}= Dimensions.get('window');

var YZMineHeaderView = React.createClass({

    render(){
      return(

          <View style={styles.container}>
            {this.renderTop()}
            {this.renderBottom()}
          </View>
      );
    },

  renderTop(){
    return(

          <View style={styles.topViewStyle}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={{uri:'See'}} style={styles.leftIconStyle} />
              <Text style={{fontSize:18,fontWeight:'bold',marginLeft:8}}>YZ电商</Text>
              <Image source ={{uri:'avatar_vip'}} style={{width:17,height:17}} />
            </View>
              <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
          </View>
    )
  },

  renderBottom(){
    return (
      <View style={styles.ViewBottomStyle}>
       {this.renderBottomItem()}
      </View>
    )
  },

  renderBottomItem(){
    var itemArr= [];
    //数据数组
    var data = [{'number':'100','title':'金劵'},{'number':'12','title':'评价'},{'number':'50','title':'收藏'}];

    //遍历创建组件装入数组
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      itemArr.push(
      <TouchableOpacity key = {i}>
        <View style={styles.ContentStyle}>
          <Text style={{color:'white'}}>{item.number}</Text>
          <Text style={{color:'white'}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
      );
    }
    return itemArr;
  }

});

const styles = StyleSheet.create({
  container: {
    height:Platform.OS =="ios" ? 400 : 200,
    backgroundColor:'rgba(0,198,185,1.0)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  topViewStyle:{
    flexDirection:'row',
    marginTop:Platform.OS =="ios" ? 260 : 60,
    alignItems:'center',
    justifyContent:'space-between'
  },
  leftIconStyle:{
      width:70,
      height:70,
      borderRadius:35,
      borderWidth:3,
      borderColor:'rgba(0,0,0,0.2)',
      marginLeft:10,
  },
  ViewBottomStyle:{
    flexDirection:'row',
    position:'absolute',
    bottom:0,
  },
  ContentStyle:{
    width:width/3 + 1,
    alignItems:'center',
    justifyContent:'center',
    height:44,
    backgroundColor:'rgba(0,0,0,0.1)',
    borderRightWidth:1,
    borderRightColor:'rgba(255,255,255,0.3)'

  }
});

module.exports = YZMineHeaderView;
