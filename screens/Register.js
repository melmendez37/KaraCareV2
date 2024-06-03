import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";

const Register = () => {
    const nav = useNavigation();

    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isUserFocused, setIsUserFocused] = useState(false);
    const [isConfEmailFocused, setIsConfEmailFocused] = useState(false);
    const [isPassFocused, setIsPassFocused] = useState(false);
    const [isConfPassFocused, setIsConfPassFocused] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confEmail, setConfEmail] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [confPass, setConfPass] = useState('');

    const backScreen = () => {
        nav.navigate('Welcome')
    }

    const handleSubmit = () => {
        if(!name || !email || !confEmail || !user || !pass || !confPass){
            ToastAndroid.show('Complete all fields!', ToastAndroid.SHORT);
        } else if (email != confEmail){
            ToastAndroid.show('Email does not match!', ToastAndroid.SHORT);
        }else if (pass != confPass){
            ToastAndroid.show('Password does not match!', ToastAndroid.SHORT);
        } else{
            ToastAndroid.show('Loading', ToastAndroid.SHORT);
        }
    }

    const handleFocus = (field) => {
        switch(field){
            case 'name':
                setIsNameFocused(true);
                break;
            case 'email':
                setIsEmailFocused(true);
                break;
            case 'confEmail':
                setIsConfEmailFocused(true);
                break;
            case 'user':
                setIsUserFocused(true);
                break;
            case 'pass':
                setIsPassFocused(true);
                break;
            case 'confPass':
                setIsConfPassFocused(true);
                break;
            default:
                break;
        }
    }
    const handleBlur = (field) => {
        switch(field){
            case 'name':
                setIsNameFocused(false);
                break;
            case 'email':
                setIsEmailFocused(false);
                break;
            case 'confEmail':
                setIsConfEmailFocused(false);
                break;
            case 'user':
                setIsUserFocused(false);
                break;
            case 'pass':
                setIsPassFocused(false);
                break;
            case 'confPass':
                setIsConfPassFocused(false);
                break;
            default:
                break;
        }
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.recOne}>
                <Text style = {styles.headOne}>REGISTER</Text>
            </View>

            <TextInput  style={styles.textField}
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholder = {(isNameFocused || name) ? '': 'Name'}
                            placeholderColor = "#888"
                            textAlign= "center"
                            onFocus = {() => handleFocus('name')}
                            onBlur = {() => handleBlur('name')}
                            />
            
            <TextInput  style={styles.textField}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder = {(isEmailFocused || email) ? '': 'Email address'}
                            placeholderColor = "#888"
                            textAlign= "center"
                            onFocus = {() => handleFocus('email')}
                            onBlur = {() => handleBlur('email')}
                            />
            <TextInput  style={styles.textField}
                            value={confEmail}
                            textAlign= "center"
                            onFocus = {() => handleFocus('confEmail')}
                            onBlur = {() => handleBlur('confEmail')}
                            onChangeText={(text) => setConfEmail(text)}
                            placeholder = {(isConfEmailFocused || confEmail) ? '': 'Confirm email'}
                            placeholderColor = "#888" />

            <TextInput  style={styles.textField}
                            value={user}
                            textAlign= "center"
                            onFocus = {() => handleFocus('user')}
                            onBlur = {() => handleBlur('user')}
                            onChangeText={(text) => setUser(text)}
                            placeholder = {(isUserFocused || user) ? '': 'Username'}
                            placeholderColor = "#888"/>
            
            <TextInput  style={styles.textField}
                            value={pass}
                            textAlign= "center"
                            onFocus = {() => handleFocus('pass')}
                            onBlur = {() => handleBlur('pass')}
                            onChangeText={(text) => setPass(text)}
                            placeholder = {(isPassFocused || pass) ? '': 'Enter password'}
                            placeholderColor = "#888"/>

            <TextInput  style={styles.textField}
                            value={confPass}
                            textAlign= "center"
                            onFocus = {() => handleFocus('confPass')}
                            onBlur = {() => handleBlur('confPass')}
                            onChangeText={(text) => setConfPass(text)}
                            placeholder = {(isConfPassFocused || confPass) ? '': 'Confirm password'}
                            placeholderColor = "#888"/>
            
            <TouchableOpacity style = {styles.sendButton} onPress={handleSubmit}>
                <Text style={styles.sendButtonText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.backButton} onPress={backScreen}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {alignItems:'center', width: '100%', height: '100%', backgroundColor: '#f2f2f2', zIndex: -1, flex: 1, position:'relative'},
    recOne: {width:'100%', height:'20%', backgroundColor: '#00609E', zIndex: -1},
    headOne: {width: '100%', height: 45, top:85, textAlign: 'center', fontSize:34, color:'white'},
    textField: {width: '80%', height: 40 , top:60, backgroundColor: 'white', borderWidth:1, borderRadius: 5, marginBottom:10},
    sendButton: {width: 100, height: 40, top:100,backgroundColor: '#00609E', borderWidth:1, borderRadius: 5},
    backButton: {width: 100, height: 40 , top:100, backgroundColor: '#f2f2f2', borderWidth:1, borderRadius: 5},
    
    sendButtonText:{color:'#f2f2f2', textAlign: 'center', fontSize:14, fontWeight:'bold'},
    backButtonText:{ textAlign: 'center', fontSize:14, fontWeight:'bold'},
});

export default Register;
