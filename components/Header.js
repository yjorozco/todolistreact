import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        height: 60,
        backgroundColor: 'powderblue',
        width: '100%'
    },
    texttitle:{
        textAlign: 'center',
        color: 'white',
        padding:20
    }
})

const Header = props => (
    <View style = {styles.container}>
       <Text style={styles.texttitle}>
            Todo List 
        </Text>       
    </View>
)


export default Header;