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

var BottomCommonCell = React.createClass({

  getDefaultProps(){
     return{

       leftIcon: "",
       leftTitle: "",
       rightTitle:""
     }
  },

    render(){
      return(
        <TouchableOpacity style={{height:44}} onPress={()=>{alert('ssss')}}>
          <View style={styles.container}>
            {/*左边*/}
              <View style={styles.leftViewStyle}>
                <Image source={{uri:this.props.leftIcon}} style={{width:23,height:23}}/>
                <Text style={{marginLeft:8}}>{this.props.leftTitle}</Text>
              </View>
            {/*右边*/}
              <View style={styles.rightViewStyle}>
                <Text style={{marginRight:8}}>{this.props.rightTitle}</Text>
                <Image source={{uri:"icon_cell_rightArrow"}} style={{width:8,height:13,marginRight:8}}/>
              </View>
          </View>
          </TouchableOpacity>
      );
    },


});

const styles = StyleSheet.create({
  container: {
    height:44,
    flexDirection:'row',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomWidth:0.5,
    borderBottomColor:'#e8e8e8'
  },
  leftViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:8
  },
  rightViewStyle:{
    flexDirection:'row',
    alignItems:'center'
  }
});

module.exports = BottomCommonCell;
