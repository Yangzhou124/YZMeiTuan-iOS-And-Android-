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
var {width} = Dimensions.get('window');


var CommonView = require("./YZMiddleCommonView");

//引入外部数据
var TopMiddleData = require("../../LocalData/HomeTopMiddleLeft.json")



var YZHomeMiddlView = React.createClass({

    render(){
      return(

          <View style={styles.container}>
            {/*左边*/}
            {this.renderLeftView()}
            {/*右边*/}
            <View>
              {this.renderRightView()}
            </View>
          </View>
      );
    },

      renderLeftView(){
        var data = TopMiddleData.dataLeft[0];
        return(
        <TouchableOpacity onPress={()=>{alert(0)}}>
          <View style={styles.leftViewStyle}>
            <Image source={{uri:data.img1}} style={styles.leftImageStyle} />
            <Image source={{uri:data.img2}} style={styles.leftImageStyle} />
            <Text style={{color:'gray'}}>{data.title}</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'green',marginRight:5,marginTop:5}}>{data.price}</Text>
              <Text style={{color:'orange', backgroundColor:'yellow', marginRight:5,marginTop:5}}>{data.sale}</Text>
            </View>
          </View>
        </TouchableOpacity>

        );
      },
      renderRightView(){

        //组件数据
        var itemArr = [];
        var rightData = TopMiddleData.dataRight;
        // 遍历
        for (var i = 0; i < rightData.length; i++) {
          var data = rightData[i];
          itemArr.push(
            <CommonView
              key={i}
              title={data.title}
              subTitle={data.subTitle}
              rightIcon={data.rightImage}
              titleColor={data.titleColor}
             />
          );
        }
          return itemArr;
      },
    });

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginTop:15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  leftViewStyle:{
    width:width * 0.5,
    height:119,
    backgroundColor:'white',
    marginRight:1,

    //水平居中
    alignItems:'center',
    justifyContent:'center',
  },
  leftImageStyle:{
    width:120,
    height:30,
    //内容模式
    resizeMode:'contain'
  }
});

module.exports = YZHomeMiddlView;
