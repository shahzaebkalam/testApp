import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, Alert, Dimensions, KeyboardAvoidingView } from "react-native";
import Button from './buttonComponent';
import { Actions } from 'react-native-router-flux';


class Home extends Component{
  

  render(){
  return (
		<View>
			<ImageBackground source={require('../assets/image.jpeg')} style={styles.image}>
				<View style={styles.view1}>
					<Image
			          source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLand_Transportation_Office_(Philippines)&psig=AOvVaw27h_LGsJfHi90gwLJH5Eu3&ust=1597837582679000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjJyYbXpOsCFQAAAAAdAAAAABAE',}}
			          //borderRadius style will help us make the Round Shape Image
			          style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
			        />
			        <Text>Welcome to Dr. Transit</Text>
					<Text>Login to your account to begin driving for Dr. Transit</Text>
				</View>
				<View style={styles.view2}>
					<View>
			        <Button text="Sign In" err="err" onPress={()=>{ Actions.signin() }}/>            
			      	</View>
			      	<View>
			        <Button text="Register to Drive" err="err" onPress={()=>{ Actions.agreement() }}/>            
			      	</View>
				</View>
			</ImageBackground>   
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

  maincontainer:{
  flexDirection:'column',
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  },
});

export default Home;