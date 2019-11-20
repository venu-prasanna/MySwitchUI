import React,{Component} from 'react';
import {ScrollView,View,Text,StyleSheet} from 'react-native';

import HorizontalScroll from '../HorizontalScroll';

import RoomsCard from './RoomsCard';

class Rooms extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <HorizontalScroll 
                    title="Rooms"
                    component={RoomsCard}
                    onChangeScreen={()=>this.props.onChangeScreen()}
                />
            </View>
        )
    }
}

export default Rooms;