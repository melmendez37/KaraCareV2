import * as Font from 'expo-font';

export default async function loadFonts(){
    await Font.loadAsync({
        'Montserrat-SemiBold': require('../assets/Montserrat-SemiBold.ttf'),
    });
}

