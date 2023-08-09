import React from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native'
import InputsLogi from '../components/InputsLogin';
import HeaderLogin from '../components/HeaderLogin';

const Login = () => {
    const onLogin = () => {
        console.log(first)
        Keyboard.dismiss(); 
    }
  return (
        <View style={{flex: 1}} >
                <View style={[styles.header,{flex:1, alignItems: 'center'}]}>
                    <View style={styles.gif}>
                        {/* <Image style={styles.burbuja} source={require('../../assets/img/Onda.png')}/> */}
                        <Image style={styles.logo} source={require('../../assets/img/pre-logo.png')}/>
                        {/* <Image style={styles.network} source={require('../../assets/img/Social-network.gif')}/> */}
                    </View>
                </View>
                <View style={[styles.formulario,{flex:1}]}>
                    <InputsLogi/>
                </View>
        </View>
  )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        flexDirection:'row',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    formulario:{
        height: 400,
        width: '100%',
        // backgroundColor: '#1E40AF',
        marginHorizontal:10,
        padding: 20,
        // paddingVertical: 40,
        paddingHorizontal: 20,
    },
    cont2:{
        height: 50,
        width: '100%',
        position: 'absolute'
        // justifyContent:'center',
        // alignItems:'center',
    },
    gif:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 400,
        position:'absolute',
        // backgroundColor:'green',
        height: '100%',
        width:'100%',
        shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    },
    network:{
        marginTop: -30,
        marginLeft:20,
        height: 170,
        width: 360,
      },
      logo:{
        height:130,
        width:200,
        marginTop: 10,
        marginBottom: 40
      },
      burbuja:{
        height: 300,
        width:'100%',
        transform: [{ rotate: '20deg' }],
        marginTop: -150,
        marginLeft: 200
    },
})

export default Login
