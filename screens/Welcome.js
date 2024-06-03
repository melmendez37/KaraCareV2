import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Welcome = () => {

    const nav = useNavigation();


    const handleExternalResponder = () => {
        nav.navigate('Form')
    }

    const handleLogin = () => {
        nav.navigate('Login')
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.headOne}>WELCOME to</Text>
            <Text style = {styles.headTwo}>KaraCare</Text>
            <View style = {styles.recOne}></View>
            <TouchableOpacity style = {styles.buttonOne} onPress={handleExternalResponder}>
                <Text style = {styles.textButton}>EXTERNAL RESPONDER</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonTwo} onPress={handleLogin} /**</View>onPress:{where this button is redirected}'**/>
                <Text style = {styles.textButton}>MEDICAL STAFF</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonThr} /**</View>onPress:{where this button is redirected}'**/>
                <Text style = {styles.textButton}>EXIT</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width: '100%', height: '100%', backgroundColor: 'white', zIndex: -1, flex: 1},
    recOne: {width:'100%', height:'30%', left: 0, top:-125, backgroundColor: '#00609E', zIndex: -2},
    headOne: {width: '100%', height: 45, textAlign: 'center', top:100, fontFamily:'Roboto   ', fontSize:40, color:'white', zIndex: 1},
    headTwo: {width: '100%', height: 80, textAlign: 'center', top:100, fontFamily:'Roboto', fontSize:60, color:'white', zIndex: 1},
    buttonOne:{width: '60%', height: 70, left:'20%', top:'-25%', backgroundColor:'white', borderRadius:10, borderWidth:1, alignItems:'center', zIndex: 1},
    buttonTwo:{width:'60%', height: 70, left:'20%', top: '0%', backgroundColor: 'white', borderRadius:10, borderWidth:1, alignItems:'center',zIndex: 1},
    buttonThr:{width: '60%', height:70, left:'20%', top:'25%', backgroundColor:'white', borderRadius:10, borderWidth:1, alignItems:'center', zIndex: 1},
    textButton:{width: '100%', height: 70, top:'31%', textAlign: 'center',fontFamily:'Roboto', fontWeight: '600', fontSize:16}
})

export default Welcome;