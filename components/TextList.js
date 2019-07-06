import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        height: 30,
        width: '100%',
    },
    textlist:{


    }
})



class  TextList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            'text' : ""
        }
      }

    clearText =(e)=>{
        this.props.onSubmitEditing(e);
        this.setState({'text':''});
    }

    render(){
        return (
        <View style={styles.container}>
            <TextInput  
 
            placeholder={'Introduzca el texto..'}
            style={styles.textlist}
            blurOnSubmit={false}
            onSubmitEditing= {this.clearText} 
            onChangeText= {(text) => {this.setState({text})}}
            value = {this.state.text}
    
    
            />
            
        </View>
        )
    }


}

export default TextList;