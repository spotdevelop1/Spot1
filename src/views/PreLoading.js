import React from 'react'
import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const PreLoading = () => {
    const navigation = useNavigation();
  return (
        <View style={{flex: 1}} >
            <View style={[styles.header,{flex:1, alignItems: 'center', backgroundColor: 'red'}]}>
                <Image style={styles.header} source={require('../../assets/img/girl.jpg')}/>
            </View>
            <View style={[styles.formulario,{flex:2, alignItems: 'center'}]}>
                <Text style= {styles.textBIenvenida}>Bienvenido a</Text>
                <View>
                    <Image style={styles.logo} source={require('../../assets/img/logotipo-01.png')}/>
                </View>
                <View>
                    <View style={{marginTop:15}}>
                        <Pressable style={[styles.btn,{backgroundColor:'#2D4C89', alignContent:'center'}]} onPress={() => navigation.navigate('Login')}>
                            <Text style={{color:'white', alignItems:'center', fontSize:18}}>Iniciar sesión </Text>
                        </Pressable>
                    </View>
                    <View style={{marginTop:15}}>
                        <Text style={{color: 'black'}}>¿Aún no tienes una cuenta?</Text>
                    </View>
                    <View style={{marginTop:15}}>
                        <Pressable style={styles.btnRegister} onPress={() => navigation.navigate('Registro')}>
                            <Text style={{color:'black', alignItems:'center', fontSize:18}}>Regístrate</Text>
                        </Pressable>
                    </View>
                
                </View>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    textBIenvenida: {
        color: '#2D4C89',
        fontSize: 30,
        marginVertical: 30
    },
    logo:{
        width: 200,
        height: 70,
        marginBottom:40
    },
    btn:{
        paddingHorizontal: 20,
        paddingVertical:5,
        borderRadius: 8,
        alignItems:'center'
    },
    btnRegister:{
        paddingHorizontal: 20,
        paddingVertical:5,
        borderRadius: 8,
        alignItems:'center',
        borderWidth: 1,
        color:'orange'
    },
    header:{
        width:' 100%',
        height: '100%'
    }
})

export default PreLoading
