export async function getDevice(clientId){
    try {
        const response = await fetch('https://apps-ws.spot1.mx/devices?clientId='+clientId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        return data = await response.json()
    } catch (error) {
        console.log(error)
        return 
    }
}