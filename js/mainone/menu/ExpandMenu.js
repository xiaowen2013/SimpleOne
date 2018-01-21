/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,

} from 'react-native';
import constants from '../../Constants';
var {width, height} = constants.ScreenWH;
var Panel = require('./Panel');
var MenuItem=require('./MenuItem');


var ExpandMenu = React.createClass({
    getDefaultProps() {
        return {
            menu: null,
            date:'',
            todayRadio:null,
        }
    },

    render() {
        return (
            <ScrollView style={styles.container}>
                <Panel title={this.getTitle()}>
                    {this.renderList()}
                </Panel>
            </ScrollView>
        );
    },


    /**
     * 获取菜单标题
     * @returns {string}
     */
    getTitle(){
        var title="一个VOL.";
        return title+this.props.menu.vol;
    },

    /**
     * 渲染菜单列表
     * @returns {Array}
     */
    renderList(){
        var itemArr=[];
        for(var i=0;i<this.props.menu.list.length;i++){
            var data=this.props.menu.list[i];
            itemArr.push(
                <MenuItem key={i} category={this.getCategory(data)} title={data.title} data={data} date={this.props.date} todayRadio={this.props.todayRadio} navigator={this.props.navigator}/>
            );
        }
        
        return itemArr;
    },

    /**
     * 获取分类
     */
    getCategory(data){
        if(data.tag!=null){
            return data.tag.title;
        }
        else if(data.content_type==1){
            return '阅读';
        }
        else if(data.content_type==3){
            return '问答';
        }
        else if(data.content_type==1){
            return '阅读';
        }
        else if(data.content_type==2){
            return '连载';
        }
        else if(data.content_type==4){
            return '音乐';
        }
        else if(data.content_type==5){
            return '影视';
        }
        else if(data.content_type==8){
            return '电台';
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
});

module.exports = ExpandMenu;
