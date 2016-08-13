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
  ScrollView,
  Platform,
} from 'react-native';

var MyCell = require('../More/YZCommonCell');
var MinemiddleView = require('./YZMinemiddleView');
var MineHeaderView = require('./YZMineHeaderView')

/**--------引入外部的组件----------**/

var Mine = React.createClass({

    render(){
      return(
          <ScrollView
          style={styles.ScrollViewStyle}
          contentInset={{top:-200}}
          contentOffset={{y:200}}
          >
          <MineHeaderView />
          <View style={{marginTop:20}}>
            <MyCell
              titleIconName = 'collect'
              title = "我的订单"
              rightTitle = "查看全部订单"
            />
            <MinemiddleView

                ViewHeight="50"
            />
          </View>

            <View style={{marginTop:20}}>
              <MyCell
                titleIconName = 'draft'
                title = "我的钱包"
                rightTitle = "账户余额:¥100"
              />
            </View>
            <View>
              <MyCell
                titleIconName = 'like'
                title = "抵用卷"
                rightTitle = "10张"
              />
            </View>

            <View style={{marginTop:20}}>
              <MyCell
                titleIconName = 'card'
                title = "积分商城"
              />
            </View>

            <View style={{marginTop:20}}>
              <MyCell
                titleIconName = 'new_friend'
                title = "今日推荐"
              />
            </View>

            <View style={{marginTop:20}}>
              <MyCell
                titleIconName = 'pay'
                title = "我要合作"
                rightTitle = "轻松开店招财进宝"
              />
            </View>


          </ScrollView>

      );
    },


});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  ScrollViewStyle:{
    backgroundColor:'#e8e8e8',
  }
});

module.exports = Mine;
