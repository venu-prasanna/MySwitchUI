import React,{Component} from 'react';
import {View,Text,StyleSheet,Switch,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import light from '../Images/light.png';
class RoomCard extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row',marginBottom:10}}>
                    <Image 
                        source={light}
                        style={{height:30,width:30,marginLeft:20,marginRight:10}}
                    />
                    <Text>Light</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Icon name="heart" size={20} />
                    <Switch />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:'#3291a8',
        height:90,
        width:175,
        margin:10,
        justifyContent:'center'
    }
})

export default RoomCard;