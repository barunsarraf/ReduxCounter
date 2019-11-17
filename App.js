import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './component/Home';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const initialstate = {
  count:42
}

const reducer = (state=initialstate,action) =>
{
  switch(action.type)
  {
    case "increase":
      return {count:state.count+1};
    
    case "decrease":
      return {count:state.count-1};
  }
  return state;
    
  
}

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
        <Home/>
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