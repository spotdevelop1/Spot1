import React, { useState, useEffect } from 'react'
import { TextInput, StyleSheet, View ,Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {Picker} from '@react-native-picker/picker';
import { globalStyle } from '../styles/'
import { Loading } from '../components/Loading';
import { getAllRates } from "../api/rates";
import { rechargeStripe } from "../api/recharge";
import { STRIPE_PUBLIC_KEY} from "../../env.js"
const stripe = require("stripe-client")(STRIPE_PUBLIC_KEY)


export function PayRecharge ({closeModal, number, userId}){
    const [selectedValue, setSelectedValue] = useState("Planes Disponibles");
    const [loader, setLoader] = useState([]);
    const [button, setButton] = useState(false);
    const [rates, setRates] = useState([]);
    // const [numberRecharge, setNumberRecharge] = useState(number);
    const [name, setName] = useState("");
    const [card, setCard] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");
    
    var offerts = [];
    var information = {};
    var tarjeta = {};

    const searchRates = async () => {
        const offert = await getAllRates()
        setRates(offert)
    };

    {
        if (rates['offers'] != undefined) {
            for (let index = 0; index < rates['offers'].length; index++) {
                offerts.push(
                    <Picker.Item label={`${rates['offers'][index].name } $${rates['offers'][index].price_sale }.00`} value={rates['offers'][index].offerID} />
                )
            }
        }
    }
   
    useEffect(() => {
        searchRates();
    }, [selectedValue])
    
    const createPay = async () => {
        setButton(true);
        information = {
            card: {
              number: card,
              exp_month: month,
              exp_year: year,
              cvc: cvc,
              name: name
            }
        }

        tarjeta = await stripe.createToken(information);

        Alert.alert('Info', 'Desea realizar su compra?', [
        { text: 'Cancelar', style: 'cancel',},
        { text: 'Comprar', onPress: () => sellRate(tarjeta)},
        ]);
        
        setButton(false);
    }

    const sellRate = async (tarjeta) =>{
        setLoader(<Loading/>)
        if(tarjeta?.error){
            setLoader()
            Alert.alert('Error!!', 'Los datos no correponde a ninguna tarjeta validad, verifique sus datos.');       
        }else{
            const response = await rechargeStripe(number, tarjeta.id, selectedValue, userId);
            setLoader()
            if (response.http_code == 1) {
                Alert.alert('Info', response.message);       
            }if(response.http_code == 0){
                Alert.alert('Info', response.message);       
            }else{
                Alert.alert('Info', response.message);       
            }
            setButton(false);
        }
    }

    return (
        <View style={styles.modalPaymentRecharge}>
            <View style={styles.ContentBanner}>
                <Text style={styles.textBanner}>Planes Disponibles</Text>
            </View>
            <View style={styles.containerPayment}>
                <View style={styles.container}>
                    <Picker
                        style={[styles.text, styles.select]}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedValue(itemValue)
                        }>

                        {offerts}
                    </Picker>
                </View>
            </View>
            <Text style={styles.textCenter}>Datos de la tarjeta</Text>
            <View style={styles.containerCreditCard}>
                <TextInput maxLength={16} style={[styles.input, styles.bordersInputs]} placeholderTextColor="#000" keyboardType='default'
                             placeholder='Nombre del propietario' value={name} onChangeText={setName}/>
            </View>

            <View style={styles.containerCreditCard}>
                <TextInput maxLength={16} style={[styles.input, styles.bordersInputs]} placeholderTextColor="#000" keyboardType='default'
                             placeholder='0000-0000-0000-0000' value={card} onChangeText={setCard}/>
            </View>
            <View  style={styles.containerCreditCard}>
                <TextInput maxLength={2} style={[styles.input, styles.bordersInputs]} placeholderTextColor="#000" keyboardType='default'
                            placeholder='mes'  value={month} onChangeText={setMonth}/>
                <TextInput maxLength={2} style={[styles.input, styles.bordersInputs]} placeholderTextColor="#000" keyboardType='default'
                            placeholder='año'  value={year} onChangeText={setYear}/>
                <TextInput maxLength={3} style={[styles.input, styles.bordersInputs]} placeholderTextColor="#000" keyboardType='default'
                            placeholder='cvc'  value={cvc} onChangeText={setCvc}/>
            </View>
            <View style={styles.btns}>
                <Icon.Button style={[styles.btnsPay, styles.btnsPayDanger]} name='arrow-back-outline' onPress={() => closeModal()}>Regresar</Icon.Button>
                <Icon.Button disabled={button} style={[styles.btnsPay, styles.btnsPayPrimary]} name='cart-outline' onPress={() => createPay()}>Recargar</Icon.Button>
            </View>   
            {loader}
        </View>
    );
}

const styles = StyleSheet.create({
    containerCreditCard:{
        marginHorizontal: 40,
        marginVertical:20,
        marginTop:0,
        flexDirection:'row',
        justifyContent:'center',

    },
    input:{
        padding: 10,
        paddingHorizontal:30,
        color: '#000',
        marginTop: 10,
        fontSize: 16
    },
    textCenter:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',

    },
    ContentBanner:{
        backgroundColor:'#2f3541',
        height:80,
        justifyContent:'center',
        paddingHorizontal:20,
        position:'relative',
        marginTop:60
    },
    textBanner:{
        color:'white',
        fontSize:22,
        textAlign:'center',
        fontWeight:'bold',
    },
    containerPayment:{
        marginHorizontal: 40,
        marginVertical:10,
    },
    container:{
        marginVertical:10,
        borderColor: '#7b6cc8',
        borderWidth: 3,
        borderRadius: 20,        
    },
    text:{
        color: 'black'
    },
    modalPaymentRecharge:{
        flex: 1,
        alignContent:'center',
        backgroundColor:'white'
    },
    btns:{
        ...globalStyle.btnsModal,
        justifyContent:'space-around'
    },
    btnsPay:{
        width:150,
        justifyContent:'center'
    },
    btnsPayDanger:{
        backgroundColor:'red',
    },
    btnsPayPrimary:{
        backgroundColor:'blue'
    },
    select:{
        borderColor: '#7b6cc8',
        borderWidth: 1,
        color:'#506a7b',
    },
    bordersInputs:{
        borderColor: '#7b6cc8',
        borderWidth: 2,
        color:'#506a7b',
        margin: 3,
        borderRadius: 7
    }
})