import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Alert, Dimensions, KeyboardAvoidingView } from "react-native";
import { Actions } from 'react-native-router-flux';
import Button from './buttonComponent';


class Agreement extends Component{
  

  render(){
  return (
		<View>
			<View style={styles.view1}>
				<Text>Driver Registration</Text>
				<Text>
					https://www.figma.com/proto/ljvz78DMAcJV9yKA1DBTxE/Dr-Transit?node-id=177%3A1092&viewport=421%2C411%2C0.15103396773338318&scaling=scale-down
					--
					Regards, 
					Sharjeel Alam
					Sr. Web and Mobile APP Developer

					 +971 55  6163066
					 +92 333  3979808

					LinkedIN      :  https://www.linkedin.com/in/sharjeelalam
					Skype         :  Sharjeel_devep@hotmail.com
					MSN           :  Sharjeel_devep@hotmail.com 
				</Text>
			</View>
			<View style={styles.view2}>
				<View>
		        <Button text="Continue" err="err" onPress={()=>{ Actions.signup() }}/>            
		      	</View>
		      	<View>
		        <Button text="Do not Agree" err="err" onPress={()=>{ Actions.home() }}/>            
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
     
  },
  view2:{
    flex:1,
    alignItems: 'center',
      
  },

  maincontainer:{
  flexDirection:'column',
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  },
});

export default Agreement;