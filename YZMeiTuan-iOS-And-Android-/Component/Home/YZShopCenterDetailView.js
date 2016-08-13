
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
    TouchableOpacity,
    Platform,
    Image,
    WebView
} from 'react-native';

var ShopCenterDetail = React.createClass({

  getInitialState(){
    return{
      detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'

    }
  },


    render() {
        return (
            <View style={styles.container}>
            {this.renderNavBar()}
            <WebView
              automaticallyAdjustContentInsets={true}
              source={{uri:this.state.detailUrl}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              decelerationRate="normal"
              startInLoadingState={true}
            />
            </View>
        );
    },
    renderNavBar(){
      return (
        <View style={styles.navOutViewStyle}>
          <TouchableOpacity onPress={()=>{this.popTopHome()}} style={styles.leftViewStyle}>
          <Image source={{uri:'navigationbar_arrow_up'}} style={styles.ImageStyle} />
          </TouchableOpacity>
          <Text  style={styles.TitelStyle}>更多</Text>
          <Image source={{uri:'icon_mine_setting'}}  style = {styles.navImageStyle} />
        </View>
      )
    },
    popTopHome(){
        this.props.navigator.pop();
    }
});


const styles = StyleSheet.create({
  navImageStyle:{
    width:Platform.OS == 'ios' ? 28 : 24,
    height:Platform.OS == 'ios' ? 28 : 24,
    position:'absolute',
    right:10,
    bottom:20
  },
  ImageStyle:{
    width:Platform.OS == 'ios' ? 20 : 20,
    height:Platform.OS == 'ios' ? 20 : 20,
  },
  navOutViewStyle:{
     height:Platform.OS == 'ios' ? 64 :44,
     backgroundColor : 'rgba(0,198,185,1.0)',
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  TitelStyle:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',

  },
  leftViewStyle:{
    position:'absolute',
    left:10,
    bottom:Platform.OS == 'ios'? 20 : 13
  }
});

// 输出组件类
module.exports = ShopCenterDetail;
