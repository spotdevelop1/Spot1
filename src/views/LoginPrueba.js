import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, Pressable, ScrollView, TextInput, ActivityIndicator, Alert } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {loginApi} from "../api/login"
import useAuth from '../hooks/useAuth';

const LoginPrueba = () => {
    const navigation = useNavigation();
    const [showPass, setShowPass] = useState(true)
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const [isLoading, setIsLoading] = useState(false)
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={ 100 } style={styles.indicator}/>
            </View>
        )
    }

    const handIngresar  = async () =>{
        setIsLoading(true)
        const data = await loginApi(phone, password)
        console.log(data)
        if (data.http_code == 200) {
            setIsLoading(false)
            login(data)
        }else{
            setIsLoading(false)
            Alert.alert(
                'Datos erroneos'
            )
        }
    } 

    const prueba = () =>{
        setShowPass(!showPass)
    }
  return (
        <View style={{flex: 1}} >
            <View style={[styles.header,{flex:1, alignItems: 'center', backgroundColor: 'red'}]}>
            <Image style={styles.header} source={require('../../assets/img/girl-oscura.jpg')}/>
            </View>
            <View style={{flex:2}}>
                <ScrollView>
                        <View style={{alignItems: 'center', marginBottom:20}}>
                            <View>
                                <Text style={styles.textBIenvenida}>Iniciar sesión</Text>
                            </View>
                            <View>
                                <Text style={styles.textBIenvenida2}>Estamos felices de volver a verte</Text>
                            </View>
                        </View>
                        
                        <View style={{marginHorizontal: 50, marginVertical: 20}}>
                            <View style={{marginBottom:30}}>
                                <Text style={{color: 'black'}}>Usuario</Text>
                                <TextInput style = {{borderBottomWidth : 1.0, borderBottomColor:'#2D4C89', color: 'grey'}} placeholderTextColor="grey" placeholder='9613601404' value={phone} onChangeText={setPhone} keyboardType='number-pad'                         maxLength={10}/>
                            </View>
                        </View >
                            <View style={{marginLeft:50 , marginRight: 30, marginBottom: 50}}>
                                <Text style={{color: 'black'}}>Contraseña</Text>
                                <View style={styles.passwordContainer}>
                                    <TextInput
                                        style={styles.inputStyle}
                                        secureTextEntry ={showPass}
                                        placeholder="Password"
                                        placeholderTextColor="grey"
                                        value={password} onChangeText={setPassword}
                                        />
                                    <Pressable onPress={() => prueba()}>
                                        <Icon
                                            name='eye-outline'
                                            color='#000'
                                            size={20}
                                        />
                                    </Pressable>
                                </View>
                            </View>
                            {
                                isLoading == true ?
                                <View style={{justifyContent: 'center', alignContent: 'center' }}>
                                    <ActivityIndicator color="red" size={ 50 } style={styles.indicator}/>
                                </View> : <View></View>
                            }
                        <View style={{marginTop:15, marginHorizontal: 70}}>
                            <Pressable style={[styles.btn,{backgroundColor:'#2D4C89', alignContent:'center'}]} onPress={handIngresar}>
                                <Text style={{color:'white', alignItems:'center', fontSize:18}}>Iniciar sesión </Text>
                            </Pressable>
                        </View>
                </ScrollView>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
      },
    inputStyle: {
        flex: 1,
        borderBottomWidth : 1.0, 
        borderBottomColor:'#2D4C89',
        color: 'grey'
    },
    textBIenvenida: {
        color: '#2D4C89',
        fontSize: 30,
        fontWeight: 'bold',
    },
    textBIenvenida2: {
        color: '#2D4C89',
        fontSize: 20,
    },
    logo:{
        width: 190,
        height: 105,
        marginBottom:40
    },
    btn:{
        paddingHorizontal: 4,
        paddingVertical:5,
        borderRadius: 20,
        alignItems:'center',
    },
    header:{
        width:' 100%',
        height: '100%'
    }
})

export default LoginPrueba
