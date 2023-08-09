import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, Pressable, Alert, PermissionsAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { consultCdrs } from "../api/consultCdrs"
import { PdfConsumption } from "../api/PdfConsumption"
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';

function DownloadDailyConsumption({type, phone, dateStart, dateEnd}) {
    const [Consumos, setConsumos] = useState([]);  

    useEffect(() => {
        searchConsumo()
    }, [type, phone, dateStart, dateEnd])

    function searchConsumo() {
        consultCdrs(type, phone, dateStart, dateEnd).then((res) => {
            setConsumos(res)
        })
        .catch((e) => {
            console.log(e.message)
        })
    }
 
    const createPdf = async () => {     
        await searchConsumo()
        const pdfHtml = await PdfConsumption(Consumos, phone)
        console.log('====================================');
        console.log(pdfHtml);
        console.log('====================================');
        const options = {
            html: pdfHtml,
            fileName: 'Consumos',
            directory: 'Documents'
        }

        let fileDownload = await RNHTMLtoPDF.convert(options)
        // Alert.alert('Guardado exitoso!!', 'Ubicacion:' + fileDownload.filePath, [
        Alert.alert('Guardado exitoso!!', 'Puede descargar el archivo en la vista previa', [
            { text: 'Cerrar', style: 'cancel' },
            { text: 'Abrir!', onPress: () => openFile(fileDownload.filePath) }
        ], { cancelable: true });
    }


    const askPermission = () => {
        async function requestExternalWritePermission() {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Permisos para descargas dentro del la app',
                message:
                  'Para descargar este archivo necesitas conder permiso.',
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                createPdf();
            } else {
              alert('WRITE_EXTERNAL_STORAGE permission denied');
            }
          } catch (err) {
            alert('Write permission err', err);
            console.warn(err);
          }
        }
        if (Platform.OS === 'android') {
          requestExternalWritePermission();
        } else {
            createPdf();
        }
    }

    const openFile = (filepath) => {
        const path = filepath;// absolute-path-to-my-local-file.
        FileViewer.open(path)
        .then(() => {
            console.log('true');
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <Pressable style={styles.PressableButton} onPress={()=>askPermission()}>
            <Icon style={[styles.IconWhitText, styles.IconButtons, styles.contentOptionsText]} name='download'/>
            <Text style={[styles.TextWhitIcon, styles.contentOptionsIcons]}>Descargar PDF</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({
    PressableButton:{
        zIndex: 3,
        // backgroundColor:'blue',
    },
    TextWhitIcon:{        
        alignItems:'center',
        fontSize:13,
        textAlign:'center'
    },
    IconWhitText:{
        alignSelf: 'center',
        alignItems:'center',
        fontSize:30
    },
    IconButtons:{        
        fontSize:30,
    },
    contentOptionsText:{
        color:'#818181', 
    },
    contentOptionsIcons:{
        color:'#818181', 
    },
})

export default DownloadDailyConsumption