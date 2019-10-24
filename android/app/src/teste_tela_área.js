import React from 'react';
import { View, Button, Text, StatusBar, StyleSheet, Image} from 'react-native';
import {Input} from 'native-base';
import { TouchableHighlight, TextInput } from 'react-native-gesture-handler';


const App = ({ navigation }) => (
	<View style={ styles.container}>
		<View Press={() => navigation.navigate('About')} style = {styles.text_button, {marginTop:100}} >
      		<Text style = {{color: 'brown'}}>Rotina de Estudos</Text>
    	</View>

    	<View Press={() => navigation.navigate('About')} style = {styles.text_button} >
      		<Text style = {{color: 'brown'}}>Área do Mestrando/Text>
    	</View>

    	<View Press={() => navigation.navigate('About')} style = {styles.text_button} >
      		<Text style = {{color: 'brown'}}>Área do Residente</Text>
    	</View>

    	<View Press={() => navigation.navigate('About')} style = {styles.text_button} >
      		<Text style = {{color: 'brown'}}>Área do Concurseiro</Text>
    	</View>
	</View>
	
);

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' , 
    backgroundColor: 'white',
  },
  texto:{
    
  },
  text_button:{
  		alignSelf: 'center', 
  		paddingVertical: 0,  
  		alignItems: 'center', 
  		marginTop: 20, 
  	 	borderWidth: 1 ,
  		borderColor:"brown",
  		backgroundColor: "white", 	
  		height: 35, 
  		width: 180, 
  		borderRadius: 15, 
  }
  botao:{
    backgroundColor: "#FFF",
    borderRadius: 30,
  }, 
});
