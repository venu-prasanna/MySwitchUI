import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Asset} from 'expo-asset';

import bg from "../Images/bg.jpg";
import { AppLoading } from 'expo';

function cacheImages(images){
    return images.map(images => {
        if(typeof image === 'string'){
            return Image.prefetch(image);
        }else{
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

class Login extends Component{
    constructor(prosp){
        super(prosp);
        
        this.state = {isReady:false}
    }

    async _loadAssetsAsync(){
        const imageAssets = cacheImages([
            require('../Images/bg.jpg'),
        ]);
        await Promise.all([...imageAssets,])
    }

    render(){
        if(!this.state.isReady){
            return(
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={()=>this.setState({isReady:true})}
                    onError={alert('error while loading')}
                />
            )
        }
        return(
            <View style={styles.container}>
                <Text>Login Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})

export default Login;