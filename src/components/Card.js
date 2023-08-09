
import React, {useState, useEffect} from 'react'
import {Text,StyleSheet,View, Image, Button, Pressable, Modal, ActivityIndicator} from 'react-native'
import {globalStyle} from '../styles';
import  {ModalConsumo}  from '../components/ModalConsumos';
import { consultUF } from '../api/altan';

function Card({device}) {
    const {number, rate, service, user_email, created_at, id} = device;
    const [modalConsumo, setModalConsumo] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState('')
    const [dateActivate, setDateActivate] = useState('')
    const [datosTotal, setDatosTotal] = useState('')
    const [datosConsumidos, setDatosConsumidos] = useState('')
    const [datosRestantes, setDatosRestantes] = useState('')
    const [datos, setDatos] = useState([])
    
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={ 100 } style={styles.indicator}/>
            </View>
        )
    }

    const onClick = async() => {
        setIsLoading(true)
        const data = await consultUF(service, number)
            setStatus(data.status)
            setDateActivate(data.date_activation)
            setDatosTotal(data.datosTotal)
            setDatosConsumidos(data.datosConsumido)
            setDatosRestantes(data.datosRestantes)
            setDatos(data.consultUF.freeUnits.nacionales)
            setModalConsumo(true)
            setIsLoading(false)

    }

    const closeModal = () => {
        setModalConsumo(false)
    }
    // console.log(device)
    return ( 
        <View style={styles.card}>
            <View style={[styles.headerDevice,{flex:1, backgroundColor: '#2D4C89', flexDirection: 'row', justifyContent: 'space-between'}]}>
                <Image style={styles.mifiLetra} source={require('../../assets/img/MOV-2.png')}/>
                <View style={{flex:1}}>
                    <Image style={styles.mifiDevice} source={require('../../assets/img/CEL-2.png')}/>
                </View>
            </View>
            <View style={[styles.content,{flex:3}]}>
                <View style={[styles.infoPlan,{flex:2}]}>
                    <View style={[styles.textFirst]}>
                        <Text style={styles.text}>Activado desde:</Text> 
                        <Text style={styles.infoCenter}>{created_at}</Text> 
                        {/* <Text style={styles.infoCenter}>08-12-2022</Text> */}
                    </View>
                    <View style={[styles.textFirst]}>
                        <Text style={styles.text}>Paquete:</Text>
                        <Text style={styles.infoCenter}>{rate}</Text>
                    </View>
                    <View style={styles.mtText}>
                        <Text style={styles.text}>Número</Text>
                        <Text style={styles.infoCenter}>{number}</Text>
                        {/* <Text style={styles.infoCenter}>9613601404</Text> */}
                    </View>
                    {/* <View style={[styles.mtText,{ flexDirection:'row'}]}>
                        <Text style={styles.text}>Estado de servicio: </Text>
                        <Text style={styles.infoCenter}>Activo</Text>
                    </View> */}
                    <View style={styles.mtText}>
                        <Text style={styles.text}>Correo electrónico:</Text>
                        <Text style={styles.infoCenter}>{user_email}</Text>
                        {/* <Text style={styles.infoCenter}>c.banda07@gmail.com</Text> */}
                    </View>
                </View>
                
            </View>
            <Pressable style={styles.btnConsumos} onPress={()=> onClick(onClick)}><Text style={styles.textBtn}>Consumos de datos</Text></Pressable>
            <Modal transparent={true}  visible={modalConsumo}>
                <ModalConsumo setModalConsumo={onClick} closeModal={closeModal}  service={service} status={status} dateActivate={dateActivate} datosTotal={datosTotal} datosConsumidos={datosConsumidos} datosRestantes={datosRestantes} datos={datos}/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        width:'100%',
        // marginVertical: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#2D4C89',
        backgroundColor:'#FFFFFF'
        // marginTop: 60
    },
    headerDevice:{
        width: '100%',
        borderColor: '#fff',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderTopStartRadius:10
        // justifyContent: 'center'
    },
    content:{
        width: '100%',
        borderColor: '#fff',
        height: 800
    },
    text:{
        ...globalStyle.text
    },
    mifiLetra:{
        height: 100,
        width: 200,
        // marginVertical: 30,
        marginLeft: 30,
        marginTop: 20
    },
    dateActivation:{
        marginTop: -10,
        fontSize: 15,
        color:'black'
    },
    btnConsumos:{
        color:'white',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        borderColor: '#2D4C89',
        padding: 3,
        backgroundColor: '#2D4C89'
    },
    infoPlan:{
        alignItems: 'center'
    },
    mifiDevice:{
        height: 110,
        width: 160,
        // marginHorizontal: 80,
        // marginTop: -20,
        marginLeft: -100
    },
    mtText:{
        marginTop:10,
        alignItems:'center'
    },
    infoCenter:{
        fontWeight: 'bold',
        alignItems:'center',
        color:'#2D4C89'
    },
    textFirst:{
        marginTop: 40,
        alignItems:'center'
    },
    indicator:{
        flex: 1
    },
    textBtn:{
        color:'white'
    }
    
})
export default Card;