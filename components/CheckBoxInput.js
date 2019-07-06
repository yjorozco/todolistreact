import React from "react";
import { CheckBox, StyleSheet  } from "react-native";
import { connect } from 'react-redux'
import { updateItem } from '../redux/actions/actions'
const styles = StyleSheet.create({

})



class CheckBoxInput extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
           checked:this.props.value
        }


        this.ChangeCheckbox = this.ChangeCheckbox.bind(this);
        
    }

    ChangeCheckbox(){        
        this.setState({
            checked: !this.state.checked
        })     
        let item = this.props.items.filter((item) => {
            if(item.id==this.props.id)            
                return item;
        });
        this.props.updateItem(item.id);
        this.props.onPressButton();
     
    }

    render(){ 
        return(
        
            <CheckBox value={this.state.checked} onValueChange={this.ChangeCheckbox} />
          
        )
    }
}

const mapStateToProps = state =>({ 
    items: state.items
})

const mapDispatchToProps = (dispatch,item)=>({
    updateItem: ()=> dispatch(updateItem(item.id))
})



export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxInput);