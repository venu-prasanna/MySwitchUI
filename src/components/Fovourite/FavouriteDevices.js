import React,{Component} from 'react';
import {View,Text} from 'react-native';

import HorizontalScroll from '../HorizontalScroll';
import FavouriteCard from './FavouriteCard';
import FavouriteHorizontalScroll from './FavouriteHoriontalScroll';

class FavouriteDevices extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <FavouriteHorizontalScroll
                    title="Favourite Devices"
                    component={FavouriteCard}
                />
            </View>
        )
    }
}

export default FavouriteDevices;