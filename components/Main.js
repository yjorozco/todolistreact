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
        height: '10%'
    },
    text:{
        height: '10%'
    },
    list:{
        height:'70%'
    },
    footer: {
        height:'10%'
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
            <Header style={styles.header}/>       
            <TextList sytle={styles.text} onSubmitEditing = {this.onSubmitEditing}  />
            <List style={styles.list} items = {this.props.items}/>
            <Footer style={styles.footer}/>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    items: state.items,
  })

export default connect(mapStateToProps, {updateList: updateList})(Main)