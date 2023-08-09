import {PermissionsAndroid} from 'react-native'

export const askPermission = () => {
    async function requestExternalWritePermission() {
        try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
            title: 'Permisos para descargas dentro del la app',
            message:
                'Para descargar este archivo necesitas conder permiso.',
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //true 
        } else {
            alert('WRITE_EXTERNAL_STORAGE permission denied');
        }
        } catch (err) {
        alert('Write permission err', err);
        console.warn(err);
        }
    }
    if (Platform.OS === 'android') {
        requestExternalWritePermission();
    } else {
        //true 
    }
}
