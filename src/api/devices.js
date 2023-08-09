import AsyncStorage from "@react-native-async-storage/async-storage"

export async function setDeviceApi(device){
    try {
        await AsyncStorage.setItem("device", JSON.stringify(device))
        return true;
    } catch (error) {
        return null;
    }
}

export async function getDeviceApi(){
    try {
        const device = JSON.parse(await AsyncStorage.getItem("device"))
        return device
    } catch (error) {
        return null;
    }
}