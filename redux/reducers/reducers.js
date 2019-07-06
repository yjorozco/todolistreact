import { combineReducers } from 'redux';
import { UPDATE_LIST, UPDATE_ITEM, DELETE_ITEM, REMOVE_ALL_ITEMS } from '../actions/actions'



const updateItemReducer = (state = [], action) => {
  
  if (action.type == UPDATE_LIST)  return  [...state, action.payload];
  if (action.type == UPDATE_ITEM)  {
     state.map((item) => {
      if(item.id==action.payload) {           
        item.value = !item.value
        return item;
      }
    });   
  }
  if( action.type == DELETE_ITEM){

    return state.filter(item => item.id !=action.payload)
     
  }
  if(action.type == REMOVE_ALL_ITEMS) return state.filter(item => item.value == false)
 
  return state
}




const reducer = combineReducers({
    items: updateItemReducer

  })
  
  export default reducer
  