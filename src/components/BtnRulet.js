import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, View, Alert, Pressable, Modal, ImageBackground} from 'react-native'
import {globalStyle} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { consultWin, appliedWin } from "../api/promotios"


function BtnRulet({device}) {
  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState("Participa");
  const [number, setNumber] = useState(device.number);
  const [winer, setWiner] = useState(0);
  const [disable, setDisable] = React.useState(false);
  const [disableWin, setDisableWin] = React.useState(false);

  let results = ["0mb", "10mb","50mb", "100mb"]

  const delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))

  const Spin = async function () {     
    await setDisable(true)
    const data = await consultWin(number)
    let datos = 0
    for (let i = 0; i < 40; i++) {
      setResult(results[datos])
      datos == 3 ? datos=0 : datos++
      await delay(20)
    }

    if (data) {
      await setResult("Ganaste")
      setWiner(1)
    } else {
      await setResult("Perdiste")
      setWiner(2)
    }
  };

  const Claim = async function () {     
    await setDisable(true)
    const win = await appliedWin(number)
    // console.log(win);
    Alert.alert('Info', win["message"]);     
    setWiner(2)
  };

  return (
    <View style={styles.btnRuletContainer}>
        {
          winer !== 2? 
          <Pressable onPress={()=>{setModalShow(true)}}>
            <ImageBackground source={require('../../assets/img/rulet.gif')}  style={styles.image} >
              <View style={styles.btnRuletContentText}>
                <Text style={styles.btnRuleText}>Participa</Text>
              </View>
            </ImageBackground>
          </Pressable>:null
        }

        <Modal transparent={true} visible={modalShow} style={modal.background} >
          <ImageBackground source={require('../../assets/img/1.jpg')}  style={modal.background} >
            <View style={modal.modalContainer}>
              <View style={modal.contenTitle}>
                <Text style={modal.titleStart}> 🎉 ¡Gira la Ruleta y Gana Megas! 🎉</Text>
                <Text  style={modal.descriptionStart}>
                  Te invitamos a un juego que te dará la oportunidad de ganar megas y de seguir disfrutando de tu redes. {"\n"} {"\n"}
                  ¿Estás listo para girar la ruleta y descubrir qué premios te esperan?{"\n"}
                </Text>
              </View>
      
                <View style={modal.rulet}>
                  <Pressable onPress={()=>Spin()} disabled={disable}>
                    <Text style={modal.result} >{result}</Text>
                  </Pressable>
                </View>

                {
                  winer == 1? 
                    <Pressable disabled={disableWin} style={modal.btnClaim} onPress={()=>Claim()}>
                      <Text style={modal.claim} >Reclama tu premio</Text>
                    </Pressable>:null
                }

              <Pressable style={modal.buttonClose} onPress={()=>setModalShow(false)}>
                  <Text style={[modal.btn]}>x</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </Modal>
    </View>

    
  );

}

const styles = StyleSheet.create({
  btnRuletContainer:{
    position: 'absolute',
    top: '75%',
    left:-10,
    backgroundColor:'#FAF6F0',
    borderBottomEndRadius:10,
    width:110,
  },
  btnRuletContent:{
    position:'relative',
  },
  btnRuletContentText:{
    width:110,
    marginTop:-20,
    paddingLeft:18,
    backgroundColor:'#FAF6F0',
    borderTopEndRadius:10,
  },
  btnRuleText:{
    fontSize:17,
    color:'black',
    alignSelf:'center',
  },
  image: {
    width:130,
    height:85,
  },
})

const modal = StyleSheet.create({
  
  btnClaim:{
    width:'60%',
    height:40,
    backgroundColor:'#2980B9',
    marginHorizontal:30,
    alignSelf:'center',
    borderRadius:50,
    justifyContent:'center',
    alignContent:'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  claim:{
    alignSelf:'center',
    color:'black'
  },
  rulet:{
    width:'90%',
    height:150,
    marginHorizontal:20,
    backgroundColor:'#EBF5FB',
    justifyContent:'center',
    alignContent:'center',
    borderWidth: 10,
    borderBottomColor:'#2980B9',
    borderLeftColor:'#7FB3D5',
    borderTopColor:'#1F618D',
    borderRightColor:'#154360',
  },
  result:{
    alignSelf:'center',
    color:'#2874A6',
    fontSize:60,
    fontWeight:'bold',
  },
  contenTitle:{
    alignSelf:'center',
    marginVertical:20,
  },
  titleStart:{
    alignSelf:'center',
    fontSize:25,
    marginVertical:50,
    fontWeight:'bold'
  },
  descriptionStart:{
    alignSelf:'center',
    fontSize:20,
    // textTransform:'capitalize',
    fontStyle:'italic',
    marginHorizontal:50,
    fontWeight:'bold'
  },
  btn:{
    alignSelf:'center',
    color:'#EBF5FB',
    fontSize:20,
    marginVertical:20,
    padding:10,
    paddingHorizontal:20,
    borderRadius:10,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    
    shadowOpacity: 0.41,
    shadowRadius: 11,
    elevation: 20,
    // backgroundColor:'#2D4C89',
  },
  background:{
    flex:1
  },
  modalContainer:{
      // backgroundColor:'white',
      flex:1,
      justifyContent:'space-between'
      // paddingBottom: (Platform.OS === 'ios') ? 10 :50
  },
  containerDates:{
      alignSelf:'center',
      alignItems:'center',
      // paddingVertical:(Platform.OS === 'ios') ? 10 :40
  },
  textTitle:{
      // paddingVertical:(Platform.OS === 'ios') ? 10 :20,
      fontSize:30,
      color:'black',
  }
})

export default BtnRulet