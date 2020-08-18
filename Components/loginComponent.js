import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, ImageBackground,, Text, View, Alert, Dimensions, KeyboardAvoidingView } from "react-native";
import { Actions } from 'react-native-router-flux';
import Button from './buttonComponent';
import TextBox from './textboxComponent';


class Login extends Component{
  

  render(){
  return (
    <View style={styles.maincontainer}>
    <View style={styles.view1}>
      <ImageBackground source={require('../assets/image.jpeg')} style={styles.image}>
      <Text>Sign in to you Account</Text>
    </ImageBackground>   
    </View>
    <View style={styles.view2}>
      <View>
        <Text>E-mail*</Text>
        <TextBox placeholder="driver@example.com" name="email" hide_text="" value="" onChange=""/>
      </View>
      <View>        
        <Text>Password*</Text>
        <TextBox placeholder="driver@example.com" name="password" hide_text="" value="" onChange=""/>
      </View>        
      <View>
        <Button text="Continue" err="err" onPress={()=>{ Actions.signup() }}/>            
      </View>
      <View>
        <Button text="Do not have an Account" err="err" onPress={()=>{ Actions.signup() }}/>            
      </View>
    </View>
    </View>
  );
  }
}
const styles = StyleSheet.create({

  view1:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  view2:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center"
  },

  maincontainer:{
  flexDirection:'column',
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  },
});

export default Login;