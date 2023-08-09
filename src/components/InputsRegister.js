import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable,TouchableOpacity } from 'react-native';
import { registerApi } from '../api/registe';

const InputsRegister = () => {
    const navigation = useNavigation(); 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [loading, setLoading] = useState(false)
    const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handRegistro = async () => {
        if([name, email, phone, password, passwordConfirm].includes('')){
            Alert.alert(
                "Error",
                "Todos los campos son obligatorios"
              )
            return
        }

        if(password != passwordConfirm){
            Alert.alert(
                "Error",
                "La contraseña debe coincidir"
              )
            return
        }
        if(password.length < 8 || password.length > 8){
            Alert.alert(
                "Error",
                "La contraseña debe tener 8 caracteres"
              )
            return
        }

        if (!isValidEmail.test(email)) {
            Alert.alert(
                "Error",
                "Ingresa un correo electrónico válido"
              )
            return
          }
          const data = await registerApi(name, email, phone, password, passwordConfirm)
          console.log(data.dataDB)
          setName(nombre)
          setEmail(correo)
          setPhone(telefono)
          setPassword(contrasenia)
          return false
    }
  return (
    <View style={styles.contenido}>
            <View style={styles.title}>
                <Text style={styles.textSesion}>Crear Cuenta</Text>
                <Text style={styles.subText}>Estamos contentos de verte.</Text>
            </View>
        <ScrollView>
        
            <View style={styles.campo}>
                <Text style={styles.label}>Nombre completo</Text>
                <TextInput style={styles.input} placeholderTextColor="#000" keyboardType='default'
                             placeholder='Nombre Completo' value={name} onChangeText={setName} />
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput style={styles.input} placeholderTextColor="#000" keyboardType='email-address'
                             placeholder='Correo Electrónico' value={email} onChangeText={setEmail} />
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Teléfeno</Text>
                <TextInput style={styles.input} placeholderTextColor="#000" keyboardType='numeric' maxLength={10}
                             placeholder='Teléfono' value={phone} onChangeText={setPhone} />
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput style={styles.input} placeholderTextColor="#000" keyboardType='default'
                             placeholder='Nombre Completo' value={password} onChangeText={setPassword} secureTextEntry/>
            </View>
            <View style={styles.campo}>
                <Text style={styles.label}>Confirmar contraseña</Text>
                <TextInput style={styles.input} placeholderTextColor="#000" keyboardType='default'
                             placeholder='Nombre Completo' value={passwordConfirm} onChangeText={setPasswordConfirm} secureTextEntry/>
            </View>
            {/* <Pressable style={styles.submitBtn} onPress={() => navigation.replace('Panel')}> */}
            <Pressable style={styles.submitBtn} onPress={handRegistro} >
                <Text style={styles.submitBtnTexto}>Registrarse</Text>
            </Pressable>
            <View style={{flexDirection:'row', marginHorizontal: 20}}>
                <Text style={styles.registrarse}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.registrarse , styles.colorResgistrar]}> Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    contenido: {
        flex:1,
    //    backgroundColor: '#F5F8F9',
    //    borderRadius: 20,
    //    shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 10,
    //     },
    //     shadowOpacity: 0.53,
    //     shadowRadius: 13.97,

    //     elevation: 21,
    },
    title:{
        alignItems: 'center',
        color: '#000'
    },
    textSesion:{
        marginTop: -50,
        color:'#2D4C89',
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subText:{
        color:'#000',
        textAlign:'center',
        fontSize: 18
    },
    submitBtn:{
        backgroundColor: '#2D4C89',
        padding: 11,
        marginVertical: 20,
        marginHorizontal: 11,
        marginLeft: -2,
        borderRadius: 20
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        fontSize: 20
    },
    registrarse:{
        color: '#000',
        textAlign: 'center',
        fontSize: 17
    },
    textSesion:{
        color:'#2D4C89',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    label: {
        color: '#434345',
        marginBottom: 5,
        marginTop: 15,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '600',
   },
   input:{
       backgroundColor: '#d0d3d4',
    //    backgroundColor: '#ECEFF0',
    //    backgroundColor: '#F5F8F9',

       padding: 10,
        borderRadius: 20,
        color: '#000',
        marginTop: 10,
        fontSize: 16
    },
    colorResgistrar:{
        color:'#2D4C89'
    }
})

export default InputsRegister
