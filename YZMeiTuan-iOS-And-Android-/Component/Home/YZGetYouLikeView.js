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
  ListView,
  Image
} from 'react-native';

var BottomCommonCell = require("./YZBottomCommonView");
var youLikeData = require('../../LocalData/HomeGeustYouLike.json');

var GetYouLike = React.createClass({

    getInitialState(){

      var ds = new ListView.DataSource({rowHasChanged:(row1,row2) => row1!==row2 })
      //初始化数据源
      return{
        dataSource:ds
      }
    },
    render(){
      return(

          <View style={styles.container}>
          <BottomCommonCell
            leftIcon="cnxh"
            leftTitle='购物中心'
          />
          {/*列表*/}
          <ListView
             dataSource={this.state.dataSource}
             renderRow={this.renderRow}
          />
          </View>
      );
    },
    renderRow(rowData){
      return(
          <TouchableOpacity onPress={()=>alert(0)}>
             <View style={styles.listViewStyle}>
                 {/*左边*/}
                  <Image source={{uri:this.dealWithImgUrl(rowData.imageUrl)}} style={styles.imageViewStyle}/>
                 {/*右边*/}
                 <View style={styles.rightViewStyle}>
                    <View style={styles.rightTopViewStyle}>
                      <Text>{rowData.title}</Text>
                      <Text>{rowData.topRightInfo}</Text>
                    </View>
                     <Text style={{color:'gray'}}>{rowData.subTitle}</Text>
                     <View  style={styles.rightBottomViewStyle}>
                         <Text style={{color:'red'}}>{rowData.subMessage}</Text>
                         <Text>{rowData.bottomRightInfo}</Text>
                     </View>
                 </View>
             </View>
          </TouchableOpacity>
      )
  },
  // 处理图像的尺寸
  dealWithImgUrl(url){
      if (url.search('w.h') == -1){ // 没有找到,正常返回
          return url;
      }else{
          return url.replace('w.h', '120.90');
      }
  },

    componentDidMount(){
      this.loadDataFromNet()
    },
    loadDataFromNet(){
           fetch(this.props.api_url)
               .then((response) => response.json()) // 下一步
               .then((responseData) => {
                  // 更新数据源
                   this.setState({
                       dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                   });
               })
               .catch((error)=>{
                   // 更新数据源
                   this.setState({
                       dataSource: this.state.dataSource.cloneWithRows(youLikeData.data)
                   });
               })
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

    listViewStyle:{
       backgroundColor:'white',
       padding:10,
       borderBottomColor:'#e8e8e8',
       borderBottomWidth:0.5,

       flexDirection:'row'
    },

    imageViewStyle:{
        width:120,
        height:90
    },

    rightViewStyle:{
        marginLeft:8,
        width:220,
        justifyContent:'center'
    },

    rightTopViewStyle:{
        flexDirection:'row',
        marginBottom:7,
        justifyContent:'space-between'
    },

    rightBottomViewStyle:{
        flexDirection:'row',
        marginTop:7,
        justifyContent:'space-between'
    }

});

module.exports = GetYouLike;
