import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import * as Speech from 'expo-speech';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      text: ''
    }
  }
  render(){
    return(
      <View>
        <Text style={styles.container}>Please type in the text you want as speech.</Text>
        <TextInput 
        value= {this.state.text}
        onChangeText={(text)=>{
          this.setState({text: text})
        }}
        style={{width:200, height:50, borderWidth:1}}
        placeholder="Type Here"
        />
        <TouchableOpacity onPress={()=>{
          this.speak(this.state.text)
        }}>
          <Text style={styles.container}> Text to speech </Text>
        </TouchableOpacity>
      </View>
    )
  }
  speak=()=>{
    Speech.speak(this.state.text);
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    fontSize:18,
    marginTop:150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 24,
    textDecorationLine: 'underline',
    justifyContent: 'center'
  }
})
