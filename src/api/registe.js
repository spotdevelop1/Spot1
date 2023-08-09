export async function registerApi(cellphone, password, passwordConfirm){
    try {
        const response = await fetch('https://apps-ws.spot1.mx/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cellphone,
                password,
                passwordConfirm
            })
        }) 
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}