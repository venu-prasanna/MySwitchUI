import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

import Header from './components/Header';
import FavouriteDevices from './components/Fovourite/FavouriteDevices';
import Rooms from './components/Rooms/Rooms';
import Room from './components/Room/Room';
import Login from "./components/Login/Login";

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            view:'Login',
            room_name:'Room',
            number_of_devices:'7 Devices',
            image:"https://www.karbelsun.com/wp-content/uploads/2019/07/DSC1745-Edit-2.jpg"};
        this.onChangeScreen = this.onChangeScreen.bind(this);
        this.onClickBack = this.onClickBack.bind(this);
    }

    onChangeScreen(rname,ndevices,img){
        if(this.state.view === 'Home'){
            this.setState({view:'Room'});
        }
        else{
            this.setState({view:'Home'});
        }
    }

    onClickBack(){
        this.setState({view:'Home'});
    }

    render(){
        if(this.state.view === 'Home'){
            return(
                <View style={{flex:1,backgroundColor:'#070842'}}>
                    <View style={styles.Container}>
                        <Header />
                        <View>
                            <FavouriteDevices />
                            <Rooms 
                                onChangeScreen={()=>this.onChangeScreen()}
                            />
                        </View>
                    </View>
                </View>
            )
        }
        else if(this.state.view === 'Login'){
            return(
                <Login />
            )
        }
        else{
            return(
                <Room 
                    room_name={this.state.room_name}
                    number_of_devices = {this.state.number_of_devices}
                    image={this.state.image}
                    onChangeScreen={()=>this.onChangeScreen()}
                />
            )
        }
        
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:3,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'#070842',
        marginBottom:20,
    },
})

export default App;