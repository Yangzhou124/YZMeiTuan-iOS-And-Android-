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
  ScrollView
} from 'react-native';

//引入外部的组件
var TopListView = require('./YZTopListView');

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get("window");

//引入外部的json数据
var TopMenu = require('../../LocalData/TopMenu.json');


var TopView = React.createClass({

    getInitialState(){

      return{
        selectPage:0
      }

    },

    render(){
      return(

          <View style={styles.container}>
          {/*内容部分*/}
            <ScrollView
              horizontal = {true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd = {this.onScrollAnimationEnd}

            >
              {this.renderScrollViewItem()}
            </ScrollView>
          {/*页码部分*/}
            <View style={styles.IndicatorStyle}>
              {this.rednerIndicator()}
            </View>
          </View>
      );
    },
   renderScrollViewItem(){
      //组件数组
      var itemArr = [];
      //颜色数组
      var dataArr = TopMenu.data;

      //遍历创建数组
      for (var i = 0; i < dataArr.length; i++) {
        itemArr.push(

            <TopListView
              key = {i}
              dataArr = {dataArr[i]}
            />
        );

      }
      //返回组件数组
      return itemArr;

   },

   //页码指示器
   rednerIndicator(){
     //指示器数组
     var IndicatorArr = [];
     var style = "";
     //遍历创建组件
     for (var i = 0; i <2; i++) {
       style = (i===this.state.selectPage) ? {"color":'orange'} :{"color":"gray"},
          IndicatorArr.push(
            <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
          );
      }
        return IndicatorArr;
   },

   onScrollAnimationEnd(e){
     var CurrentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
     this.setState({
       selectPage: CurrentPage
     })
   }

});

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },

  IndicatorStyle:{
      //改变主轴的方向
      flexDirection:'row',
      justifyContent:'center'
  },
});

module.exports = TopView;
