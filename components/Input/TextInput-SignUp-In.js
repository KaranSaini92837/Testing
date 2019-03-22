import React, {Component} from 'react'

import {View, StyleSheet, TextInput} from 'react-native'
import {Text, Icons, Icon} from "react-native-elements";

class TextInputSignUpIn extends Component{
    render()
    {
        return(
            <View style={styles.input}>
               <Icon containerStyle={styles.icon} name='lock' type='font-awesome'/>
            <TextInput placeholder="Password"
                       placeholderTextColor="white"
                       style={styles.textInput}
                       secureTextEntry={true}/>

            </View>

        )
    }
}

const styles={
    input:{
      flexDirection: 'row',
        alignSelf: 'stretch',
        height:40,
        borderBottomColor: "#f9f9f9",
        borderBottomWidth: 1,
    },
    icon:{
        paddingLeft:7,
        paddingRight: 10,
        paddingTop:7,
    },

    textInput:{
        color:'#fff',

    }
}

export default TextInputSignUpIn