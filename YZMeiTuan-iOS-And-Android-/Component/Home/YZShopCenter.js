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
  Image,
  TouchableOpacity
} from 'react-native';

var BottomCommonCell = require("./YZBottomCommonView");

//引入外部的json数据
var Home_D5 = require("../../LocalData/XMG_Home_D5")

var ShopCenter = React.createClass({

  getDefaultProps(){
    return{
      popToHomeView:null
    }
  },

    render(){

      return(

          <View style={styles.container}>
            <BottomCommonCell
              leftIcon="gw"
              leftTitle='购物中心'
              rightTitle={Home_D5.tips}
            />

            <ScrollView
              horizontal = {true}
              style={styles.ScrollViewStyle}
              showsHorizontalScrollIndicator = {false}
            >
              {this.renderAllItem()}
            </ScrollView>
          </View>
      );
    },

    renderAllItem(){
      //定义组件数组
      var itemArr = [];
      //取出数据
      var shopData = Home_D5.data;
      for (var i = 0; i < shopData.length; i++) {
          //取出单个数据
          var  data = shopData[i];
          itemArr.push(
            <ShopCenterItem
              shopImage = {data.img}
              shopSale = {data.showtext.text}
              shopName = {data.name}
              detailurl = {data.detailurl}
              key = {i}
              poptoShopCenter = {(url)=>this.popToHome(url)}
            />

          );
      }

       return itemArr;
    },

    popToHome(url){
      if (this.props.popToHomeView == null) return;

      //执行回调函数
      this.props.popToHomeView(url);

    },

});

//每一个商场
var ShopCenterItem = React.createClass({

    getDefaultProps(){
      return{
        showImage: '' ,
        shopSale : '',
        shopNmae: '',
        detailurl: '',
        poptoShopCenter: null
      }
    },

    render(){
      return(

          <TouchableOpacity onPress = {()=>this.clickItem(this.props.detailurl)}>
            <View style={styles.itemViewStyle}>
              <Image source={{uri:this.props.shopImage}} style={styles.imageStyle} />
              <Text style={styles.shopsaleStyle}>{this.props.shopSale}</Text>
              <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
            </View>
          </TouchableOpacity>

      );
    },
    clickItem(url){
      if (this.props.detailurl == null) return;

      //执行回调函数
      this.props.poptoShopCenter(url);

    }

});

const styles = StyleSheet.create({
  container: {
    marginTop:15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  imageStyle:{
    borderRadius:5,
    width:120,
    height:80
  },
  ScrollViewStyle:{
    flexDirection:'row',
    backgroundColor:'white',
    padding:10
  },
  itemViewStyle:{
    margin:8
  },
  shopsaleStyle:{
    position:'absolute',
    left:0,
    bottom:30,
    backgroundColor:'orange',
    color:'white',
    padding:3
  },
  shopNameStyle:{
    textAlign:'center',
    color :'#333',
    fontSize:14,
    marginTop:8,
  }
});

module.exports = ShopCenter;
