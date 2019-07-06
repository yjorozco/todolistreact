import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/config/store';
import { PersistGate } from 'redux-persist/integration/react';


export default class App extends React.Component {

  constructor(props){
    super(props)
   
  }

  render(){
      return (
        <Provider store = { store }>
          <PersistGate loading={null} persistor={persistor}>
              <Main />
          </PersistGate>
        </Provider>      
      );
  }
};



