import React, { useEffect, useState } from "react"
import { Alert, View, Text } from "react-native";
import { getDataDB } from "./getDataDB";

export const getDataAltan = () => {
    // const [useGetDevice, setUseGetDevice] = useState([]);
    useEffect(() => {
        consultUF()
    }, [])


    const consultUF = async (accessToken) => { 
        console.log(token, 'PETITION ALTAN')
        // generateTokenAltan()
        const userid = 41;
        try {
            const response = await fetch('https://altanredes-prod.apigee.net/cm/v1/subscribers/3339064244/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                }
            }) 
            const {detail} = await response.json()
            console.log(detail)
            // addDevice()
    
        }catch(error){
            console.log(error)
        }
    }
    

    return (
        <View><Text>HELLO</Text></View>
    )
}
