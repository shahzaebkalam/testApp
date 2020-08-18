import React from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
 
export default function TextBox({ name, value, hide_text, placeholder, onChange }) {

  return (
    <View >
      <TextInput       
        onChangeText= {(e)=> onChange(e,name)}
        value= { value }
        secureTextEntry={ hide_text ? true : false }
        // Adding hint in Text Input using Place holder.
        placeholder={ placeholder }       
        // Calling the custom TextInputStyleClass.
        style={styles.TextInputStyleClass}/>
    </View>            
    ); 
}
const styles = StyleSheet.create({
TextInputStyleClass:{
textAlign: 'center',
backgroundColor: 'blue'
// Set border Radius.
borderRadius: 10 ,
width: Dimensions.get('window').width/1.3,
height: Dimensions.get('window').height/12,
color: "white",
fontFamily: "serif",
fontSize: 16,
fontWeight: "bold"
}
});