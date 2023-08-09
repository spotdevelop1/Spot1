import React, { useState } from 'react'
import { Button, StyleSheet, View ,Text, ScrollView} from 'react-native';
// import CircularProgress from 'react-native-circular-progress-indicator';
import { globalStyle } from '../styles/'
import Icon from 'react-native-vector-icons/Ionicons'

export function ModalConsumo ({datosConsumidos, datosRestantes, closeModal, status, dateActivate,datosTotal, datos})  {
    console.log(datos +' MODAL')
    // const [imeiDis, setImeiDis] = useState(imei)
    // useState
  return (
    <View style={styles.modalConsumos}>
        <View style={styles.contentConsumos}>
            <ScrollView>
                <View style={styles.devicePlan}>
                    {/* <View style={{marginBottom:10}}>
                        <Text style={[styles.text, styles.textplanDevice]}>Dispositivo</Text>
                        <Text style={styles.text}>MIFI HOSPOT INTERNET CASA HOGAR</Text>
                    </View> */}
                    {/* <View>
                        <Text style={[styles.text, styles.textplanDevice]}>Plan</Text>
                        <Text style={styles.text}>{imei}</Text>
                    </View> */}
                </View>
                <View style={styles.bodyConsumos}>
                    <View style={styles.infodateStatus}>
                        <View>
                            <Text style={styles.textBody}>Fecha de Activación</Text>
                            <Text style={styles.text}>{dateActivate}</Text>
                        </View>
                        <View>
                            <Text style={styles.textBody}>Estado</Text>
                            <Text style={styles.text}>{status}</Text>
                        </View>
                        {/* <View>
                            <Text style={styles.textBody}>Velocidad</Text>
                            <Text style={styles.text}>10 mbs</Text>
                        </View> */}

                    </View>
                    {/* <View style={[styles.dataConsumo]}>
                        
                                    <Text style={[styles.textBody, {fontSize:25}]}>Consumos: </Text>
                                <View style={{alignContent: 'space-between', flexDirection:'column', marginTop:20, alignItems: 'center'}}>

                                    {
                                        datos.map((dato) =>{
                                            return  <View style={{marginBottom:10}}>
                                            <CircularProgress
                                            value={dato.freePercentage}
                                            radius={80}
                                            duration={100}
                                            progressValueColor={'#2D4C89'}
                                            maxValue={100}
                                            title={dato.name}
                                            titleColor={'#2D4C89'}
                                            titleStyle={{fontWeight: 'bold', fontSize:11}}
                                            />
                                        </View>
                                          })
                                    }
                                </View>
                        <View style={styles.infodateStatus}>
                        
                            <View>
                                <Text style={styles.textBody}>Contratado</Text>
                                <Text style={styles.text}>{datosTotal.toFixed(2)} Gb</Text>
                            </View>
                            <View>
                                <Text style={styles.textBody}>Consumo</Text>
                                <Text style={styles.text}>{datosConsumidos.toFixed(2)} GB</Text>
                            </View>
                            <View>
                                <Text style={styles.textBody}>Restante </Text>
                                <Text style={styles.text}>{datosRestantes.toFixed(2)} GB</Text>
                            </View>
                        </View>
                    </View> */}
                </View>
            </ScrollView>
        </View>
        <View style={styles.btns}>
            <Icon.Button style={{backgroundColor:'red', height:40}} name='arrow-back-outline' onPress={() => closeModal()}>Regresar</Icon.Button>
            {/* <Icon.Button name='cart-outline' onPress={() => setModalConsumo()}>Recargar</Icon.Button> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    btns:{
        ...globalStyle.btnsModal
    },
    text:{
        ...globalStyle.text
    },
    contentConsumos:{
        borderRadius: 10,
        backgroundColor: '#F4F6F7',
        marginHorizontal: 20,
        width: '90%',
        height:'70%',
        marginTop: 80,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    modalConsumos:{
        alignContent:'center',
        flex: 1,
        backgroundColor:'white'
    },
    devicePlan:{
        marginHorizontal: 20,
        marginTop:20,
        flex: 2,
        // backgroundColor: 'blue',
    },
    bodyConsumos:{
        marginHorizontal: 20,
        flex:7,
        // backgroundColor:'pink'
    },
    textplanDevice:{
        fontSize: 20,
        color: '#2D4C89',
        fontWeight: 'bold'
    },
    infodateStatus:{
        flex: 1,
        flexDirection:'row',
        // backgroundColor: 'red',
        justifyContent:'space-between', 
        marginTop:10,
        marginBottom: 20
    },
    dataConsumo: {
        flex: 5
    },
    textBody:{
        color:'#2D4C89',
        fontWeight: 'bold',
        fontSize: 16
    }
})

// export default ModalConsumo;