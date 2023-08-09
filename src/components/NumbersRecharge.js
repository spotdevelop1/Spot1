import React, { useEffect, useState } from 'react';
import {Text,StyleSheet,View, Image, Modal, Pressable, ScrollView, FlatList, ImageBackground} from 'react-native';
import { getDataDB } from '../helpers/getDataDB';
import Icon from 'react-native-vector-icons/Ionicons';
import { PayRecharge } from '../components/PayRecharge';
import { globalStyle } from '../styles';
import { getDeviceApi } from '../api/devices';


export const NumbersRecharge = () => {
    const [modalPayRecharge, setModalPayRecharge] = useState(false)
    const [devices, setDevices] = useState([])
    const [numberRecharge, setNumeber] = useState(0)
    const [userId, setUserId] = useState(0)


    const onClick = async (number, user_id) => {
      await setNumeber(number)
      await setUserId(user_id)
      setModalPayRecharge(true)
      
    }

    const closeModal = () => {
        setModalPayRecharge(false)
    }

    useEffect(() => {
        ( async () =>{
            const device = await getDeviceApi()

            // const arrayDevice = JSON.parse(device)
            setDevices(device)
            // setIsLoading(false)
          })()  
    }, [])


    // console.log(typeof(devices))
    // return false;
  return (
    <View style={styles.contenedor}>

      {
        devices.length === 0 ? <Text>Aún no cuenta con dispositivos</Text> :    
        devices.map((number) =>{
          return  <View style={styles.ContainerNumber}>
                    <Text style ={styles.NumberRecharge}>{number.number}</Text>
                    <Pressable onPress={()=> onClick(number.number, number.user_id)} style={[styles.btnAddRecharge,]}>
                      <Icon style={styles.IconButtonsWhite} name='phone-portrait-outline'/>
                      <Text style ={styles.TextBtnRecharge}>Recarga</Text>
                    </Pressable>
                    <Modal transparent={true} visible={modalPayRecharge} >
                        <PayRecharge setModalPayRecharge={onClick} closeModal={closeModal} number={numberRecharge} userId={userId}/>
                    </Modal>
                  </View>
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{

    marginHorizontal:30
  },
  hearder: {
    backgroundColor: '#2D4C89',
    width: '100%',
    height: 90,
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },
  textHeader:{
    color: 'white',
    fontSize: 23
  },
  imgCel:{
    height: 200,
    width: 200,
    // marginTop: -50
  },
  numbersRecharge:{
    backgroundColor: 'yellow',
    width: '100%',
    height: 80,
    marginTop: '30%'
  },
  addDevice: {
    // backgroundColor: 'red',
    width: '100%',
    height: 80,
    marginTop: '10%',
    alignItems:'center'
  },
  btnAddDevice:{
    // padding: 11,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color:'black',
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 8,
    ...globalStyle.borderColorPrimary,
    alignItems:'center'
    // marginTop: 3
  },
  btnAddRecharge:{
    backgroundColor:'blue', 
    borderRadius: 8, 
    paddingHorizontal:10, 
    flexDirection: 'row',
    justifyContent:'space-between',
    padding:3,
    paddingHorizontal:30
  },
  IconButtonsWhite:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    marginRight:3
  },
  TextBtnRecharge:{
    color:'white',
    fontSize:17,
  },
  NumberRecharge:{
    color:'#4a3aa8',
    fontSize:20,
  },
  ContainerNumber:{
    flexDirection:'row',
    // backgroundColor:'red',
    justifyContent:'space-between',
    padding:15,
    borderTopWidth: 1, 
    borderBottomWidth: 2,
    borderColor:'#1b3f9e',
  },


})

export default NumbersRecharge