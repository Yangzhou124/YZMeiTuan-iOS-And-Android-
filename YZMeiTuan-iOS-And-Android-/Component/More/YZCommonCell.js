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
  Platform,
  Image,
  TouchableOpacity,
  Switch
} from 'react-native';

var CommonCell = React.createClass({

    getDefaultProps(){
      return{
        titleIconName:'',
        title:'', //标题
        isSwitch: false, //是否
        rightTitle:''
      }
    },

    getInitialState(){
      return{
          isOn:false,

      }
    },

    render(){
      return(
        <TouchableOpacity activeOpacity={0.4} onPress={()=>{alert('点了')}}>
          <View style={styles.container}>
            {/**左边**/}
            {this.renderLeftView()}
            {/**右边**/}
            {this.renderRightView()}
          </View>


          </TouchableOpacity>
      );
    },



    //cell左边显示的内容
    renderLeftView()
    {
      return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            {this.renderLeftImage()}
            <Text style={{marginLeft:10}}>{this.props.title}</Text>
        </View>
      )
    },

    renderLeftImage()
    {
      if (this.props.titleIconName.length>0) {
        return(

          <Image style={{marginLeft:10,width:24,height:24,borderRadius:12}} source={{uri:this.props.titleIconName}}/>
        )
      }
    },

    //cell右边显示的内容
    renderRightView()
    {
      if (this.props.isSwitch) {
        return(

          <Switch value={this.state.isOn==true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} style={{marginRight:10}}/>
        )
      }else {
        return(
          <View style={{flexDirection:'row'}}>
          {this.rightTitle()}
          <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:10}}/>
          </View>
        )
      }

    },

    rightTitle()
    {
        if (this.props.rightTitle.length > 0) {
           return (

              <Text style={{color:'gray',marginRight:6,alignItems:'center'}}>{this.props.rightTitle}</Text>

           )
        }
    }


});

const styles = StyleSheet.create({
container:{
  height:40,
  backgroundColor:'white',
  borderBottomColor:'#dddddd',
  borderBottomWidth:0.5,
  height:Platform.OS == 'ios' ? 40 :30,

  //主轴对齐方式
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
},

});

module.exports = CommonCell;
