import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

import light from '../Images/light.png'

class  FavouriteCard extends Component{
    constructor (props){
        super(props);
    }
    render(){
        if(this.props.style){
            return(
                <View style={styles.first_container}>
                    <View style={styles.details}>
                        <View>
                            <Image 
                            source={light}
                            style={{height:30,width:30,marginTop:8}}
                            />
                        </View>
                        <View style={styles.textArea}>
                            <Text style={styles.favouriteCardSwitch}>{this.props.switch_name}</Text>
                            <Text style={styles.favouriteCardRoom}>{this.props.room_name}</Text>
                        </View>
                    </View>
                </View>
            )
        }
        else{
            return(
                <View style={styles.container}>
                    <View style={styles.details}>
                        <View>
                            <Image 
                            source={light}
                            style={{height:30,width:30,marginTop:8}}
                            />
                        </View>
                        <View style={styles.textArea}>
                            <Text style={styles.favouriteCardSwitch}>{this.props.switch_name}</Text>
                            <Text style={styles.favouriteCardRoom}>{this.props.room_name}</Text>
                        </View>
                        <View>
                        <Image 
                            source={require('../Images/line.png')}
                            style={{height:30,width:30,marginTop:8}}
                            />
                        </View>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:'#68a0cf',
        margin:5,
        width:130,
        height:45,
        flexDirection:'row',
        
    },
    first_container:{
        borderRadius:10,
        backgroundColor:'#062630',
        width:130,
        height:45,
        flexDirection:'row',
        marginLeft:25,
        marginRight:5,
        marginBottom:5,
        marginTop:5,
    },
    favouriteCardSwitch:{
        color:'white',
        fontSize:12,
        fontWeight:'bold'
    },
    favouriteCardRoom:{
        color:'white',
        fontSize:10
    },
    details:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around'
    },
    textArea:{
        justifyContent:'space-around',
        margin:5
    }
})

export default FavouriteCard;