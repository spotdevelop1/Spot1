import React, { useState } from 'react'
import { Button, StyleSheet, View ,Text, Alert, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export function Loading ({closeModal}){
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator color="red" size={ 100 } style={styles.indicator}/>
        </View>     
    );
}

const styles = StyleSheet.create({
    loadingContainer:{
        position: 'absolute', top: 60, left: 0, right: 0, bottom: 60, justifyContent: 'center', alignItems: 'center'
    }
})