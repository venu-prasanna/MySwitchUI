import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';

import RoomCard from './RoomCard';

class RoomLayout extends Component{
    render(){
        const switchs = [];

        for(var i=0;i<3;i++){
            switchs.push(
                <View
                key={i}
                style={{flexDirection:'row',justifyContent:'center'}}
                >
                    <RoomCard />
                    <RoomCard />
                </View>
            );
        }
        switchs.push(
            <View
            key={i}
            style={{flexDirection:'row',marginLeft:12}}
            >
                <RoomCard />
            </View>
        )
        return(
            <View>
                <ScrollView
                >
                    {switchs}
                </ScrollView>
            </View>
        )
    }
}

export default RoomLayout;