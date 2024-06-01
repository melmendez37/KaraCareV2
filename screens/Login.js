import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = () => {

    const nav = useNavigation();

    const [isUserFocused, setIsUserFocused] = useState(false);
    const [isPassFocused, setIsPassFocused] = useState(false);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const backScreen = () => {
        nav.navigate('Welcome');
    }

    const handleSubmit = () => {
        if(!user || !pass){
            ToastAndroid.show('Complete all fields!', ToastAndroid.SHORT);
        }
        else if(user && pass){
            ToastAndroid.show('Loading...', ToastAndroid.SHORT);
        }
    }

    const handleFocus = (field) => {
        if(field === 'user'){
            setIsUserFocused(true);
        }
        else if(field === 'pass'){
            setIsPassFocused(true);
        }
    }

    const handleBlur = (field) => {
        if(field === 'user'){
            setIsUserFocused(false);
        }
        else if(field === 'pass'){
            setIsPassFocused(false);
        }
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.recOne}>
                <Text style = {styles.headOne}>LOG IN</Text>
            </View>

            <TextInput  style={styles.textField}
                            value={user}
                            onChangeText={(text) => setUser(text)}
                            placeholder = {(isUserFocused || user) ? '': 'Username'}
                            placeholderTextColor = "#888"
                            textAlign= "center"
                            onFocus = {() => handleFocus('user')}
                            onBlur = {() => handleBlur('user')}
                            />
            
            <TextInput  style={styles.textField}
                            value={pass}
                            onChangeText={(text) => setPass(text)}
                            placeholder = {(isPassFocused || pass) ? '': 'Password'}
                            placeholderTextColor = "#888"
                            textAlign= "center"
                            onFocus = {() => handleFocus('pass')}
                            onBlur = {() => handleBlur('pass')}
                            secureTextEntry
                            />

            
            
            <TouchableOpacity style = {styles.sendButton} onPress={handleSubmit} >
                <Text style={styles.sendButtonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bodyText}>
                <Text style={styles.bodyText}>Not registered yet? SIGN UP</Text>
            </TouchableOpacity>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {width: '100%', height: '100%', alignItems:'center' ,backgroundColor: '#f2f2f2', zIndex: -1, flex: 1, position:'relative'},
    recOne: {width:'100%', height:'20%', backgroundColor: '#00609E', zIndex: -1},
    headOne: {width: '100%', height: 45, top:85, textAlign: 'center', fontSize:34, color:'white'},
    textField: {width: '80%', height: 50, top:50, backgroundColor: 'white', borderWidth:1, borderRadius: 5, marginBottom:10},
    sendButton: {width: 100, height: 40, top:100,backgroundColor: '#00609E', borderWidth:1, borderRadius: 5},
    backButton: {width: '60%', height: 40, top:100, backgroundColor: '#f2f2f2', borderWidth:1, borderRadius: 5},
    sendButtonText:{marginVertical:'auto', color:'#f2f2f2', textAlign: 'center', fontSize:14, fontWeight:'bold'},
    bodyText: {top:10, textAlign: 'center', fontSize:14, fontWeight:'bold',}
});

export default Login;