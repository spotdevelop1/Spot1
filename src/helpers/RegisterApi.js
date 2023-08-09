export const RegisterApi = async({name, email, phone, password, passwordConfirm}) => {
    try {
        const response = await fetch('https://apps-ws.spot1.mx/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                password,
                passwordConfirm
            })
        }) 

        const {nombre, correo, telefono, contrasenia, status} = await response.json()

        return response = {
            nombre, correo, telefono, contrasenia, status
        }

    }catch(error){
        console.log(error)
    }
}
