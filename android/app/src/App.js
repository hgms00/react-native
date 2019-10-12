// src/Page1.js

import React from 'react';
import { View, Button, Text, StatusBar, StyleSheet, Image} from 'react-native';
import {Input} from 'native-base';
import { TouchableHighlight, TextInput } from 'react-native-gesture-handler';


const App = ({ navigation }) => (
  <View style={ styles.container}>
    <View style = {styles.post}>
    <StatusBar barStyle='dark-content' backgroundColor="#f5f5f5"/>

    <Image
    style={{ alignSelf: 'center', width: 150, height: 110}}
    source={{uri: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_82290822-e1492536097660.png?auto=format&q=60&fit=max&w=930'}}
    />
    <TextInput value = {'           Login           '} style = {{textDecorationLine: 'underline', alignSelf: 'center', color: '#666', marginTop: 80, color: 'brown'}}/>
    <TextInput value = {'           Password           '} style = {{textDecorationLine: 'underline', alignSelf: 'center', color: '#666', marginTop: 5, color: 'brown'}}/>
    

    <View Press={() => navigation.navigate('About')} style = {{ alignSelf: 'center',  paddingVertical: 0,  alignItems: 'center', marginTop: 20, borderWidth: 1 ,borderColor:"brown",  backgroundColor: "white", height: 20, width: 80, borderRadius: 15, }}>
      <Text style = {{color: 'brown'}}>Entrar</Text>
    </View>

    </View>

    <Text style = {{marginTop: 60, color:"brown", fontSize: 12}}>Cadastrar</Text>
    <Text style = {{marginTop: 5, color:"brown", fontSize: 12}}>Esqueci minha senha</Text>
    
  </View>
  

  
);

App.navigationOptions = {
  title: 'Inicio',
}
const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' , 
    backgroundColor: 'white',
  },
  texto:{
    
  },
  post:{  
    height: 400,
    width: 300,
    marginTop: 0,
    padding: 60,
    backgroundColor: "white",
    borderRadius: 3,
  },
  botao:{
    backgroundColor: "#FFF",
    borderRadius: 30,
  }, 
});

export default App;

