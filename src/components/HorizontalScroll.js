import React,{Component} from 'react';
import {ScrollView,View,Text,StyleSheet} from 'react-native';

import FavouriteCard from './Fovourite/FavouriteCard';

class HorizontalScroll extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const scroll_content = [];
        if(this.props.scroll_content){
            var content = this.props.scroll_content;
        }
        else{
            for(var i=0;i<10;i++){
                const sw_name = "switch "+i.toString();
                if(i===0){
                    scroll_content.push(
                        <this.props.component
                            key={i}
                            switch_name={sw_name}
                            room_name="room 1"
                            style={{marginLeft:20}}
                            onChangeScreen={()=>this.props.onChangeScreen()}
                        />
                        );
                }
                else{
                    scroll_content.push(
                        <this.props.component
                            key={i}
                            switch_name={sw_name}
                            room_name="room 1"
                            onChangeScreen={()=>this.props.onChangeScreen()}
                        />
                        );
                }
                
            }
        }
        return(
            <View>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
                <ScrollView 
                horizontal={true}>
                    {scroll_content}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        color:'white',
        marginTop:10,
        marginLeft:30
    }
})

export default HorizontalScroll;