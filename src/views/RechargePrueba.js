import React, { useEffect, useState } from 'react';
import {Text,StyleSheet,View, Image, Modal, Pressable, ScrollView, FlatList, ImageBackground} from 'react-native';
import { getDataDB } from '../helpers/getDataDB';
import Icon from 'react-native-vector-icons/Ionicons';
import { PayRecharge } from '../components/PayRecharge';
import { globalStyle } from '../styles';
import {NumbersRecharge} from '../components/NumbersRecharge'

export const RechargePrueba = () => {

  return (
    <View style={styles.contenedor}>
        <View style={styles.hearder}>
            <View>
              <Text style={styles.textHeader}>Mis números</Text>
            </View>
            <View>
              <Image style={styles.imgCel} source={require('../../assets/img/CEL-2.png')}/>
            </View>
        </View>
        <View style={styles.numbersRecharge}>
            <NumbersRecharge/>
        </View>
        {/* <View style={styles.addDevice}>
            <Pressable style={styles.btnAddDevice}  onPress={() => {}}>
                <Text style={styles.textBtn}>Agregar Dispositivo</Text>
                <Icon name='add-outline' style={styles.IconBtn}/>
            </Pressable>
        </View> */}
    </View>

  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  hearder: {
    backgroundColor: '#2f3541',
    width: '100%',
    height: 90,
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
  textHeader:{
    color: 'white',
    fontSize: 23,
    fontWeight:'bold'
  },
  imgCel:{
    height: 200,
    width: 200,
    // marginTop: -50
  },
  numbersRecharge:{
    width: '100%',
    height: 80,
    marginTop: '20%',
    justifyContent:'space-between'
  },
  addDevice: {
    // backgroundColor: 'red',
    width: '100%',
    height: 80,
    marginTop: '35%',
    alignItems:'center'
  },
  btnAddDevice:{
    // padding: 11,
    paddingHorizontal: 40,
    paddingVertical: 10,
    color:'black',
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10,
    ...globalStyle.borderColorPrimary,
    alignItems:'center',
    position:'relative',
    borderColor:'#4a3aa8',
  },
  textBtn:{
    fontSize:20,
    color:'blue'
  },
  IconBtn:{
    color:"white",
    fontSize:20,
    backgroundColor:'blue',
    borderRadius:100,
    position:'absolute',
    top:-8,
    right:-8
  },

})

export default RechargePrueba