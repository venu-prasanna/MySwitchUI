import React,{Component} from 'react';
import {View,Text,ImageBackground,Image,StyleSheet,Switch,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/FontAwesome';

class RoomHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <LinearGradient
                    start={{x:0,y:1.75}}
                    end={{x:0,y:0}}
                    colors={['transparent', '#06203d','#ffffff']}
                    style={styles.linearGradient}>
                    <ImageBackground
                        source={{uri:this.props.image}}
                        style={{width:"100%",opacity:0.2,height:210}}
                    >
                        <TouchableOpacity onPress={()=>this.props.onChangeScreen()}>
                            <View style={{margin:10}}>
                                <Icons name="chevron-left" size={20} />
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </LinearGradient>
                <View style={styles.content}>
                    <View>
                        <View style={{flexDirection:'row',marginLeft:20}}>
                                <View style={{marginRight:20}}>
                                    <Text style={{color:'white',fontWeight:'bold'}}>{this.props.room_name}</Text>
                                    <Text style={{color:'white'}}>{this.props.number_of_devices}</Text>
                                </View>
                                <View style={{marginLeft:'65%'}}>
                                    <Switch />
                                </View>
                            </View>
                        </View>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#06203d',
        marginBottom:20
    },
    content:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        backgroundColor:'#06203d'
    },
    linearGradient: {
        
    }
})

export default RoomHeader;