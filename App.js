import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './component/Home';
import Main from './component/Main'
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const initialstate = {
  count:0,
  name:'barun'
}

const reducer = (state=initialstate,action) =>
{
  switch(action.type)
  {
    case "increase":
      
      return {...state,count:state.count+1,name:'plus'};

    case "decrease":
      return {...state,count:state.count-1,name:'minus'};
    
    case "changetabvalue":
      return {...state,name:'value changed from other tab'};

    default:
      return {...state};
  }
}

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
       
        <Main/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});