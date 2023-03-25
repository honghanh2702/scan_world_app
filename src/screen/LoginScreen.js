import { View, Text, Dimensions,StyleSheet,Image } from 'react-native';
import React from 'react';
import { Box, Button } from "@react-native-material/core";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Welcome back,</Text>
                <Image
                source={require('../image/Ảnh_chụp_màn_hình_2023-03-12_212657-removebg-preview2.gif')}
                style={{ width:533,height:298,marginLeft:30 }}
                resizeMode="stretch"/>
                <Text style={styles.text}> What can I do for you?</Text>
                <Button style={styles.button} title="SIGN IN" color="#33CCCC" />
            </View>
          
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#3366FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  title: {
      color: 'white',
      fontSize: 28,
      fontWeight: 'normal',
      marginTop:60,
      width:228,
      height:57,
      marginLeft:20
      
  },
  text: {
      color: 'white',
      marginTop:5,
      fontWeight: 'bold',
      width:290,
      height:123,
      fontSize: 41,
      textAlign:"center"
  },
  button: {
    width:161,
    height:51,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
       variant:"outlined"
  },
  signIn: {
    
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});