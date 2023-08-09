import React, { useEffect, useState } from 'react';
import {Text,StyleSheet,View, Image, Modal, Pressable, ScrollView, FlatList, ImageBackground} from 'react-native';
import { getDataDB } from '../helpers/getDataDB';
import Icon from 'react-native-vector-icons/Ionicons';
import { PayRecharge } from '../components/PayRecharge';

const diccionarioServicio = {
  MIFI: require('../../assets/img/INTERNET-1.png'),
  MOV: require('../../assets/img/MOV-2.png'),

}

const diccionarioLogo = {
  MIFI: require('../../assets/img/MODEM-2.png'),
  MOV: require('../../assets/img/CEL-2.png'),
}




export const Recargas = () => {

  const {useGetDevice} = getDataDB();
  console.log(useGetDevice)
  const [modalPayRecharge, setModalPayRecharge] = useState(false)

  const onClick = () => {
    setModalPayRecharge(true)
  }
  
  const closeModal = () => {
    setModalPayRecharge(false)
  }

  return (
    <View style={styles.contenedor}>
      <ImageBackground source={require('../../assets/img/Circulos-01.png')} style={styles.image}>
        <View style={styles.headerDevice}>
          <Text style={styles.tituloNumero}>Mis números</Text>
        </View>
        <ScrollView>
          {
            useGetDevice.length === 0 ? <Text></Text> :

            <FlatList
              data={useGetDevice}
              keyExtractor={(item) => item.compay}
              renderItem={({item}) => {return(

                <View>
                  <View style={styles.card}>
                    <View style={styles.content}>
                      <View style={styles.infoPlan}>
                        <View style={styles.mtText}>
                          <Text style={[styles.text, styles.infoCenter]}>{item.number}</Text>
                          { item.service == 'MOV' &&
                          (
                            <View>
                              <View>
                                <Image style={styles.servicioMov} source={diccionarioServicio[item.service]}/>
                              </View>
                              <View>
                                <Image style={styles.logoMov} source={diccionarioLogo[item.service]}/>
                              </View>
                            </View>
                          )}

                          { item.service == 'MIFI' &&
                          (
                            <View>
                              <View>
                                <Image style={styles.servicioMifi} source={diccionarioServicio[item.service]}/>
                              </View>
                              <View>
                                <Image style={styles.logoMifi} source={diccionarioLogo[item.service]}/>
                              </View>
                            </View>
                          )}

                          { item.service == 'HBB' &&
                          (
                            <View>
                              <View>
                                <Image style={styles.servicioHbb} source={diccionarioServicio[item.service]}/>
                              </View>
                              <View>
                                <Image style={styles.logoHbb} source={diccionarioLogo[item.service]}/>
                              </View>
                            </View>
                          )}

                          {/* <Image style={styles.servicios} source={diccionarioServicio[item.service]}/> */}
                        </View>
                        {/* <View> 
                          <Image style={styles.mifiDevice} source={diccionarioLogo[item.service]}/>
                        </View> */}
                      </View>
                    </View>
                    <Pressable onPress={()=> onClick(onClick)} style={styles.btnRecargar}><Text style={styles.textoRecargar}><Icon name="cart-outline" size={30} />Recargar</Text></Pressable>
                    <Modal transparent={true} visible={modalPayRecharge} >
                        <PayRecharge setModalPayRecharge={onClick} closeModal={closeModal} />
                    </Modal>
                  </View>
                </View>

              )}}
            />
          }
          </ScrollView>

      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  card:{
      alignItems:'center',
      justifyContent:'center',
      width: '70%',
      marginVertical: 40,
      marginHorizontal: 60,
      marginBottom: 1,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 15,
      borderColor: '#2D4C89',
      backgroundColor: '#FFF'
  },

  headerDevice:{
      borderColor: '#fff',
      alignItems: 'center'
  },
  tituloNumero:{
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color:'black'
  },
  btnRecargar:{

      backgroundColor: '#001b54',
      paddingVertical: 5,
      paddingHorizontal: 70,
      borderRadius: 5,
      marginVertical: 10

  },
  textoRecargar:{
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  infoPlan:{
      alignItems: 'center'
  },
  mifiDevice:{
      height: 140,
      width: 150,
      marginVertical: 30,
      marginHorizontal: 50,
  },
  mtText:{
      marginTop:10,
      alignItems:'center'
  },
  infoCenter:{
      color: '#000',
      fontWeight: 'bold',
      alignItems:'center',
      fontSize: 25
  },
  servicioMifi:{
    width: 140,
    height: 45,
    // marginVertical: 15,
    // marginHorizontal: 8
    marginLeft:40
  },
  servicioMov:{
    marginLeft: 70,
    width: 140,
    height: 55,
  },
  logoMov:{
    width: 160,
    height: 110,
    marginRight:70
  },
  logo:{
    width: 100,
    height: 80,
  },
  logoMifi:{
    width: 150,
    height: 140,
    marginLeft: 10
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

})

export default Recargas