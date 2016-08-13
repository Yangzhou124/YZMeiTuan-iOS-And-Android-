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
  View
} from 'react-native';

var Home_D4 = require("../../LocalData/XMG_Home_D4");
var CommonView = require("./YZMiddleCommonView");

var YZBttomView = React.createClass({

    render(){
      return(

          <View style={styles.container}>
            {/*上部分*/}
            <View style={styles.topViewStyle}></View>
            {/*下部分*/}
            <View style={styles.BottomViewStyle}>
                {this.renderBottomItem()}
            </View>
          </View>
      );
    },

    //下部分的所有的子组件
    renderBottomItem(){
        //组件数组
        var itemArr = [];
        // 拿到对应的数据
        var dataArr = Home_D4.data;
        for (var i = 0; i < dataArr.length; i++) {
          //取出单独的数据
          var itemData = dataArr[i];
          //创建组件，装入数组
          itemArr.push(

              <CommonView
                title = {itemData.maintitle}
                subTitle = {itemData.deputytitle}
                rightIcon = {this.dealWithImageUrl(itemData.imageurl)}
                titleColor = {itemData.typeface_color}
                tpl={itemData.tplurl}
                key = {i}
                callBackClickCell = {(data)=>this.popToTopView(data)}
              />

          );
        }

        return itemArr;
    },

    //处理头像的尺寸
    dealWithImageUrl(url){
      if (url.search('w.h') === -1) {
        return url;
      }else{
        return url.replace('w.h','120.120');
      }
    }


});

const styles = StyleSheet.create({
  container: {
    marginTop:15,
  },
  topViewStyle: {

  },
  BottomViewStyle: {
      flexDirection:'row',
      flexWrap:'wrap'
  }
});

module.exports = YZBttomView;
