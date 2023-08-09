import AsyncStorage from "@react-native-async-storage/async-storage"

export async function setUserIdApi(userId){
    try {
        await AsyncStorage.setItem("userId", toString(userId))
        return true;
    } catch (error) {
        return null;
    }
}

export async function getUserIdApi(){
    try {
        const userId = parseInt(await AsyncStorage.getItem("userId"))
        return userId
    } catch (error) {
        return null;
    }
}