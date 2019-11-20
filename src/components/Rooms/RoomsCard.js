import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

import Room from '../Room/Room';

class  RoomsCard extends Component{
    constructor (props){
        super(props);
    }

    render(){
        if(this.props.style){
            return(
                <TouchableOpacity onPress={()=>this.props.onChangeScreen(this.props.switch_name,this.props.room_name,"https://www.karbelsun.com/wp-content/uploads/2019/07/DSC1745-Edit-2.jpg")}>
                    <View style={styles.first_container}>
                        
                        <View style={styles.details}>
                            <View style={styles.ImageArea}>
                                <Image
                                    source={{uri:"https://www.karbelsun.com/wp-content/uploads/2019/07/DSC1745-Edit-2.jpg"}}
                                    style={{height:"100%",width:"100%",borderRadius:10}}
                                />
                            </View>
                            <View style={styles.textArea}>
                                <Text style={styles.favouriteCardSwitch}>{this.props.switch_name}</Text>
                                <Text style={styles.favouriteCardRoom}>{this.props.room_name}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        else{
            return(
                <TouchableOpacity onPress={()=>this.props.onChangeScreen(this.props.switch_name,this.props.room_name,"https://www.karbelsun.com/wp-content/uploads/2019/07/DSC1745-Edit-2.jpg")}>
                    <View style={styles.container}>
                        <View style={styles.details}>
                            <View style={styles.ImageArea}>
                                <Image
                                    source={{uri:"https://www.karbelsun.com/wp-content/uploads/2019/07/DSC1745-Edit-2.jpg"}}
                                    style={{height:"100%",width:"100%",borderRadius:10}}
                                />
                            </View>
                            <View style={styles.textArea}>
                                <Text style={styles.favouriteCardRoom}>{this.props.room_name}</Text>
                                <Text style={styles.favouriteCardSwitch}>{this.props.switch_name}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:'#1475c4',
        margin:5,
        width:120,
        height:160,
        flexDirection:'row',
        
    },
    first_container:{
        borderRadius:10,
        backgroundColor:'#1475c4',
        marginLeft:25,
        marginRight:5,
        marginBottom:5,
        marginTop:5,
        width:120,
        height:160,
        flexDirection:'row',
        
    },
    favouriteCardSwitch:{
        color:'white',
        fontSize:12
    },
    favouriteCardRoom:{
        color:'white',
        fontSize:15,
    },
    details:{
        flexDirection:'column',
        flex:2
    },
    textArea:{
        justifyContent:'space-around',
        margin:5
    },
    ImageArea:{
        height:110,
        borderRadius:10
    }
})

export default RoomsCard;