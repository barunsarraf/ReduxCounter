import React,{Component} from 'react';
import { Button,Text, View, AppRegistry } from 'react-native';
import {connect} from 'react-redux';


 class Home extends Component
{
 constructor(props)
 {
     super(props);
 }

 increase()
 {
   this.props.dispatch({type:'increase'});
 }
 decrease()
 {
   this.props.dispatch({type:'decrease'});
 }

 render()
 {
     return(
         <View style={{marginTop:300,marginLeft:50}}>
             <Button title='Increase' onPress={()=>{this.increase()}} />
             <Text>{this.props.count}</Text> 
             <Button title='Decrease' onPress={()=>{this.decrease()}} /> 
                  
         </View>
     );
 }
 
}

const mapStatetoProps = state =>
{
   return {count:state.count};
};
    


export default connect(mapStatetoProps)(Home);

AppRegistry.registerComponent('redux_app',() => Home);