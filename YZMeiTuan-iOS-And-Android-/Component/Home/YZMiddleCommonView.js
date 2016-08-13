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
  TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var CommonView = React.createClass({


    getDefaultProps(){

       return{
         title: '',
         subTitle: '',
         titleColor: '',
         rightIcon: '',
         tplurl:'',
         //回调函数
         callBackClickCell:null
       }
    },



    render(){
      return(
        <TouchableOpacity style={{height:59}} onPress={()=>this.clickCell(this.props.tplurl)}>
          <View style={styles.container}>
            {/*左边*/}
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:this.props.titleColor,fontSize:18,fontWeight:'bold'}}>{this.props.title}</Text>
              <Text style={styles.subTitle}>{this.props.subTitle}</Text>
            </View>
            <Image  source={{uri:this.props.rightIcon}} style={{width:60,height:60}}/>
          </View>
          </TouchableOpacity>
      );
    },

    clickCell(data){
      if (this.props.callBackClickCell==null) return;

      this.props.callBackClickCell(data);
    }

});

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: 'white',
    width:width*0.5-1,
    height : 59,
    marginBottom:1,
    justifyContent:'space-around',
    marginRight:1,
    alignItems:'center'
  },
  titleStyle:{
    fontSize:18,
    fontWeight:'bold'
  },
  subTitle:{
    color:'gray'
  }
});

module.exports = CommonView;
