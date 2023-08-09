import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, View, Image, Button, Pressable, Modal} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { getDeviceApi } from '../api/devices';
import Icon from 'react-native-vector-icons/FontAwesome'


function NumberPicker({ selectedValue, setSelectedValue }) {
    const [devices, setDevices] = useState([])

    var numbers = [];

    const searchDivice = async () => {
        const device = await getDeviceApi()
        setDevices(device)
    };
    
    useEffect(() => {
        searchDivice();
    }, [])

    {for (let index = 0; index < devices.length; index++) {
        numbers.push(
            <Picker.Item style={styles.textNumber} label={devices[index].number} value={devices[index].number} />
        )
    }}

    return (
        <Picker
            style={styles.pickerNumber}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
            }>
            {numbers}
        </Picker>
    );

}


const styles = StyleSheet.create({
    textNumber:{
        fontSize:20,
        alignSelf:'center',
        color:'#767bf5',
    }
})

export default NumberPicker