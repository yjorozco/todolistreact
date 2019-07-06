import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';
import List from './List';
import { connect } from 'react-redux'
import Header from './Header';
import TextList from './TextList';
import { updateList } from '../redux/actions/actions'

const styles = StyleSheet.create({
    header:{
        height: '10%',
        justifyContent: 'flex-start'
    },
    text:{
        height: '10%',
        justifyContent: 'flex-start'
    },
    list:{
        height:'70%',
        justifyContent: 'center'
    },
    footer: {
        height:'10%',
        justifyContent: 'flex-end'
    }
})



class  Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {count: 0, items:this.props.items}
        this.onSubmitEditing = this.onSubmitEditing.bind(this)
    }

    componentDidUpdate() {
        if(JSON.stringify(this.props.items) != JSON.stringify(this.state.items))
            this.setState({
                items:this.props.items
            })
    }   
    
    onSubmitEditing(event){
        let arrayItem = this.props.items;
        let item  = {};
        if((arrayItem.length-1) >= 0 && event.nativeEvent.text!=""){      
          item = arrayItem[arrayItem.length-1];
          this.props.updateList({id:item.id+1, name: event.nativeEvent.text, value:false});          
        } else if(event.nativeEvent.text!=""){
           item = {id:1, name: event.nativeEvent.text, value:false};
           this.props.updateList(item);

        }

    }

    render () {
        
        return (    
            
            <View>
                <View style={styles.header}><Header /></View>
                <View sytle={styles.text}><TextList onSubmitEditing = {this.onSubmitEditing}  /></View>
                <View style={styles.list}><List items = {this.props.items}/></View>
                <View style={styles.footer}><Footer /></View>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    items: state.items,
  })

export default connect(mapStateToProps, {updateList: updateList})(Main)