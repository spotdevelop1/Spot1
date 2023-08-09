import React from 'react';
import { Linking } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import Profile from "../views/Profile";
import MyTabs from "./BottomNavigation";
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    return (
    <Drawer.Navigator
    useLegacyImplementation={false} 
    //   drawerType={ width >= 768 ? 'permanent' : 'front' }
      drawerContent={ () => <MenuInterno/> }
    >
      <Drawer.Screen name="MyTabs" options={{title: 'SpotMobile', headerStyle:{backgroundColor:'blue'}, headerTitleStyle: {
      color: 'white'
      }, headerTintColor: 'white'}} component={MyTabs} />
      <Drawer.Screen name="Profile" options={{title: 'SpotMobile',headerStyle:{backgroundColor:'blue'}, headerTitleStyle: {
      color: 'white'
      }, headerTintColor: 'white'}} component={Profile} />
    </Drawer.Navigator>
  );
}

const MenuInterno = () => {
    const navigation = useNavigation(); 
    return (
      <DrawerContentScrollView>
        <View style={ styles.logoContainer }>
          {/* <ImageBackground style={styles.imgHeader} source={require('../../assets/img/FONDO-PERFIL.png')}/> */}
          <Image 
            source={require('../../assets/img/logotipo-01.png')}
            style={ styles.logo}
          />
        </View>
  
  
        {/* Opciones de menú */}
        <View style={styles.conteiner}>
  
            <TouchableOpacity 
            //   style={ styles.menuBoton }
            onPress={() => navigation.navigate('MyTabs')}
            >
              <Text style={styles.text}><Icon color={'black'} name={'home-outline'} size={20}/> Inicio </Text>
            </TouchableOpacity>
  
            <TouchableOpacity 
            //   style={ styles.menuBoton }
            onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.text}><Icon color={'black'} name={'person-outline'} size={20}/> Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            //   style={ styles.menuBoton }
            onPress={() =>{
              Linking.openURL('https://spot1mobile.com/aviso-privacidad')
            }}
            >
              <Text style={styles.text}><Icon color={'black'} name={'document-text-outline'} size={20}/> Politicas de privacidad</Text>
            </TouchableOpacity>
  
        </View>
  
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({
    logoContainer:{
        alignItems:'center',
    },
    logo:{
        height:100,
        width:250,
        marginTop: 10,
        marginBottom: 40
      },
    text:{
        color: 'black',
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 8
    },
    conteiner:{
        // backgroundColor: 'red'
    },
    imgHeader:{
      flex:1
  },
  })