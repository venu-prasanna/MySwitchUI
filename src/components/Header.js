import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.continer}>
                <ImageBackground
                    source={{uri:'https://2.bp.blogspot.com/-pNxkzbzuzRM/WV6Ek8PAqSI/AAAAAAAAAUQ/3Xj30HBeJ6kxu0Q4Y3czSN-XwgDS1q9kgCLcBGAs/s1600/Sunset%2Bvector%2Btutorial%2Bby%2Bladalidi.jpg'}}
                    style={{width:"100%",height:"100%"}}
                >
                    <View style={styles.headerStyle}>
                        <Text style={styles.greetingsTextStyle}>Good Evening,</Text>
                        <Text style={styles.userNameStyle}>Venu Prasanna </Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    continer:{
        flex:1,
    },  
    headerStyle:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        marginLeft:25,
        marginBottom:20
    },
    greetingsTextStyle:{
        color:'white',
        fontSize:18,
        fontFamily:'Cochin'
    },
    userNameStyle:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'Cochin'
    }
})

export default Header;