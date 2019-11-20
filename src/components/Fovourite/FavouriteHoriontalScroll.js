import React,{Component} from 'react';
import {ScrollView,View,Text,StyleSheet} from 'react-native';
import { thisExpression } from '@babel/types';

class FavouriteHorizontalScroll extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const scroll_content = [];
        if(this.props.scroll_content){
            var content = this.props.scroll_content;
        }
        else{
            var i = 0;
            for(var i=0;i<10;i++){
                const sw_name = "switch "+i.toString();
                    if(i===0){
                        scroll_content.push(
                            <View key={i}>
                                <View>
                                    <this.props.component
                                    key={i}
                                    switch_name={sw_name}
                                    room_name="room 1"
                                    style={{marginLeft:20}}
                                    />
                                </View>
                                <View>
                                    <this.props.component
                                    key={i}
                                    switch_name={sw_name}
                                    room_name="room 1"
                                    style={{marginLeft:20}}
                                    />
                                </View>
                            </View>
                            );
                    }
                    else{
                        scroll_content.push(
                            <View key={i}>
                                <View>
                                    <this.props.component
                                    key={i}
                                    switch_name={sw_name}
                                    room_name="room 1"
                                    />
                                </View>
                                <View>
                                    <this.props.component
                                    key={i}
                                    switch_name={sw_name}
                                    room_name="room 1"
                                    />
                                </View>
                            </View>
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

export default FavouriteHorizontalScroll;