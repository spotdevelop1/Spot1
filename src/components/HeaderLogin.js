import React from 'react'
import {Text,StyleSheet,View, SafeAreaView,TextInput, Pressable, Image, ScrollView} from 'react-native'

const HeaderLogin = () => {
    return (  
        <View style={styles.logo}>
            <View>
                {/* <Image style={styles.burbuja} source={require('../../assets/img/Onda.png')}/> */}
            </View>
            {/* <View style={{backgroundColor: 'red'}}>
                <Text style={styles.colorPlaceHolder}>Hola Mundo</Text>
                <Image  source={require('../../assets/img/logo.png')}/>
            </View> */}
            {/* <Image source={require('../../assets/img/logo.png')}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:300,
        width: '100%',
        flexDirection:'row',
    },
    burbuja:{
        height:'100%',
        width:'100%',
        transform: [{ rotate: '20deg' }],
        marginTop: -130,
        marginLeft: 80
    },
    logo:{
        backgroundColor:'red',
        height: 50,
        padding: 20,
        marginBottom:60,
        flexDirection:'row',
        flex: 1
      },
      altcel:{
        height: 130,
        width:'100%',
        marginTop: 70,
        marginLeft: 120
      },
      network:{

        height: 30,
        width: 30,
        // marginTop: -20,
        // marginLeft: 50
      },
})

export default HeaderLogin;