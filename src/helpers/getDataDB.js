import { useEffect, useState } from "react"
import { Alert } from "react-native";
// import Panel from "../components/panel";

export const getDataDB = () => {
    const [useGetDevice, setUseGetDevice] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getDevices = async () => { 
        setIsLoading(true)
        const userId = 41;
        try {
            const response = await fetch('https://apps-ws.spot1.mx/devices?userid='+userId, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }) 
    
            if(response.status == 200){
                const {message, http_code, devices} = await response.json()
                setUseGetDevice(devices)
                setIsLoading(false)
            }
            // console.log(devices)
    
        }catch(error){
            console.log(error)
        }
    }

    const addDevice = async (dn) =>{
        const user_id = 41;
        setIsLoading(true)
        try {
            const response = await fetch('https://apps-ws.spot1.mx/addDevice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id,
                    dn
                })
            }) 

            if(response.status == 200){
                setIsLoading(false)

                const {message, http_code, deviceNew} = await response.json()
                if (response.status == 200) {
                    setUseGetDevice([...useGetDevice, deviceNew[0]])
                }else if (response.status == 400) {
                    console.log(response.status)
                }
            }else if (response.status == 400 || response.status == 500) {
                setIsLoading(false)
                console.log('REVISAR DATOS')
                return Alert.alert(
                    'Error',
                    'Favor de ingresar un número correcto.',
                    [{text: 'Ok'}]
                )
            }
    
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getDevices()
    }, [])
    

    return {
        useGetDevice,
        addDevice,
        isLoading
    }
}
