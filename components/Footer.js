import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { connect } from 'react-redux';
import  { removeItems } from '../redux/actions/actions'



const styles = StyleSheet.create({
    container: {
        height: 30,
        width: "100%"
    },
    textfooter:{
        color: 'red',
        textAlign:'center'
    }
})



class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    onRemoveAll = (e) =>{
        this.props.removeItems();
    }
    
    render(){
        return (

            <TouchableOpacity onPress={this.onRemoveAll}>
                <View style={styles.container}>
                    <Text style={styles.textfooter} >
                        Remove all items
                    </Text>
                </View>
            </TouchableOpacity>

        )}
}


const mapDispatchToProps = (dispatch) =>({
    removeItems: () => dispatch(removeItems())
})

export default connect(null, mapDispatchToProps)(Footer);