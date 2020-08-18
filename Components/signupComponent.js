import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Alert, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import { Actions } from 'react-native-router-flux';
import Button from './buttonComponent';
import TextBox from './textboxComponent';


class SignUp extends Component{
  

  render(){
  return (
  	<View>
  		<View style={styles.view1}>
	  		<ScrollView>
	  			<View>
		  			<Text>Your Legal name</Text>
		  			<Text>as it appears on Driving Lisence</Text>  
		  			<TextBox placeholder="Alex Doe" name="name" hide_text="" value="" onChange=""/>			
	  			</View>
	  			<View>
		  			<Text>Your E-mail</Text>
		  			<Text>we will send you application notification, you will use it to login to your Account</Text>  
		  			<TextBox placeholder="driver@example.com" name="name" hide_text="" value="" onChange=""/>			
	  			</View>
	  			<View>
		  			<Text>Phone Number</Text>
		  			<Text>Your phone numberr will allow Dr. Transit passenger and coregivers to contact you if necessory.</Text>  
		  			<TextBox placeholder="XXX-XXX-XXXX" name="name" hide_text="" value="" onChange=""/>			
	  			</View>
	  			<View>
		  			<Text>Sin (Optional)</Text>
		  			<Text>Your social insurance number will help us conduct a background check more easily.</Text>  
		  			<TextBox placeholder="Alex Doe" name="name" hide_text="" value="" onChange=""/>			
	  			</View>
	  			<View>
		  			<Text>Driver Lisence Number (Optional)</Text>
		  			<Text>Your Driver License will help us conduct a traffic record check more easily.</Text>  
		  			<TextBox placeholder="XXX-XXX-XXXX" name="name" hide_text="" value="" onChange=""/>			
	  			</View>
	  		</ScrollView>
  		</View>
  		<View style={styles.view2}>
		  	<View>
		      <Button text="Continue" err="err" onPress={()=>{ Actions.signup() }}/>            
		    </View>
		    <View>
		      <Button text="Back" err="err" onPress={()=>{ Actions.signup() }}/>            
		    </View>
		</View>
  	</View>
  	)
}
}
const styles = StyleSheet.create({

  view1:{
    flex:3,
    alignItems: 'center',
    justifyContent: 'center',  
     
  },
  view2:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',  
      
  },
});
export default SignUp;