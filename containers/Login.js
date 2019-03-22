import React, {Component} from 'react'
import {Button, Text} from 'react-native-elements'
import {ImageBackground, StyleSheet} from 'react-native'
import TextInputSignUpIn from "../components/Input/TextInput-SignUp-In";


class Login extends Component{
    render(){
        return (
            <ImageBackground
                source={require('../assets/bg_login.jpg')}
                style={styles.container}>
                <TextInputSignUpIn/>
                <Button containerStyle={styles.btnJoin} title="Join"/>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnJoin:{
        position: 'absolute',
        width:'100%',
        bottom: 30,
    },

});

export default Login