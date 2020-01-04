import React,{Component} from 'react';
import { Button,Text, View, AppRegistry } from 'react-native';
import {connect} from 'react-redux';


 class Setting extends Component
{
 constructor(props)
 {
     super(props);
 }


     changeValueFromOtherTab()
 {
   this.props.dispatch({type:'changetabvalue'});
 }
 


 render()
 {
     return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title='change in home value' onPress={()=>{this.changeValueFromOtherTab()}}/> 
      </View>
     );
 }
 
}

const mapStatetoProps = state =>
{
   return {s:state};
};
    


export default connect(mapStatetoProps)(Setting);

AppRegistry.registerComponent('redux_app',() => Setting);