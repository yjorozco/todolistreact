import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import CheckBoxInput from "./CheckBoxInput";
import { deleteItem  } from '../redux/actions/actions'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding:10
    },
    name: {    
        width: "80%",        
    },
    value: {
     
        width: "10%",
    },
    delete: {
        
        width: "10%",
  
    },
    textdelete:{
        color:'red',
        padding:6
    }


})


class Row extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
            'value' : this.props.value
        }
    }

    onPressButton = (e) =>{
        let item = this.props.items.filter( item => item.id == this.props.id)[0];
        this.setState({
           value:item.value
        });

    }
    onDelete = (e) =>{
      
      this.props.deleteItem(this.props.id);
   
    }
    render (){
        
        return (
            <View style={{ 'backgroundColor': this.state.value?'blue':'white'}}>
                <View style={styles.container}>
                    <View style={styles.name}><Text>{this.props.name}</Text></View>
                    <View style={styles.value}><CheckBoxInput onPressButton={this.onPressButton}  value={this.props.value} id={this.props.id}/></View>
                    <View style={styles.delete}><TouchableOpacity onPress={this.onDelete} ><Text style={styles.textdelete}>x</Text></TouchableOpacity></View>
                </View>
            </View>

        )

    }
};


const mapStateToProps = state =>({
    items: state.items
})

const mapDispatchToProps = (dispatch, item) =>({
    deleteItem: () => dispatch(deleteItem(item.id)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(Row);