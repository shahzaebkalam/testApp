import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Dimensions } from "react-native";

export default function Button({ text, onPress, err }) {

	return(
			<View>
				<TouchableHighlight style={styles.button} onPress={ onPress }>
				    <Text style={styles.textColor}> {text} </Text>
				 </TouchableHighlight>
			</View>
		);
}


const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#FE5957",
    padding: 10,
    width: Dimensions.get('window').width/1.3,
    height: Dimensions.get('window').height/12,
    borderRadius:10,
    //IOS
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
	//android
		elevation: 10,
    
  },
  textColor: {
    color: "Black",
    fontFamily: "serif",
    fontSize: 20,
  	fontWeight: "bold"
  }
  });