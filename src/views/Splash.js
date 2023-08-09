import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import InputsRegister from '../components/InputsRegister';

const Splash = () => {
  return (
    <View style={{flex: 1}} >
        <ImageBackground style={styles.img} source={require('../../assets/img/INICIAL.jpg')}></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
      flex: 1
    }
})

export default Splash;
