import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';

import RoomHeader from './RoomHeader';
import RoomLayout from './RoomLayout';

class Room extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <RoomHeader 
                        room_name={this.props.room_name}
                        number_of_devices = {this.props.number_of_devices}
                        image={this.props.image}
                        onChangeScreen={()=>this.props.onChangeScreen()}
                    />
                    <RoomLayout />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#06203d',
        flex:3
    }
})

export default Room;