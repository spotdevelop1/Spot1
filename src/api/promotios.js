export async function consultWin(number){
    let url = "https://apps-ws.spot1.mx/winersCheck";
    // let url = "https://apps-ws-test.spot1.mx/winersCheck";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "number": number
            })
        }) 

        return await response.json();
    } catch (error) {
        console.log(error)
        return 0;
    }
}

export async function appliedWin(number){
    let url = "https://apps-ws.spot1.mx/winerProduct";
    // let url = "https://apps-ws-test.spot1.mx/winerProduct";
    // return url;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "number": number
            })
        }) 

        return await response.json() ;
    } catch (error) {
        console.log("aa")
        return error;
    }
}

