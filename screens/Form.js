import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Form = () => {
    const nav = useNavigation();
    
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isAddFocused, setIsAddFoucsed] = useState(false);
    const [isNumFocused, setIsNumFocused] = useState(false);
    const [isNatureFocused, setIsNatureFocued] = useState(false);

    /** */
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [nature, setNature] = useState('');


    const backScreen = () => {
        nav.navigate('Welcome');
    }

    const handleSubmit = () => {
        if(!name || !address || !number || !nature){
            Alert.alert('INCOMPLETE FORM', 'Please fill up the missing fields')
        }
        else if(!/^\d+$/.test(number) || !number.startsWith('09')){
            Alert.alert('INPUT ERROR', 'Please enter a valid phone number')
        }
        else if(number.toString().length != 11){
            Alert.alert('INPUT ERROR', 'Phone number must be 11 digits')
        }
        else{
            Alert.alert('CONFIRM', 'Do you wish to proceed?',
            [
                {type:'Cancel', style: 'cancel'},
                {
                    text: 'Confirm',
                    onPress: () => {
                        Alert.alert('FORM SENT', 'Emergency alert sent successfully')
                    },
                },
            ],
            {cancelable:false}
            );
        }
    };

    const handleFocus = (field) => {
        switch(field){
            case 'name':
                setIsNameFocused(true);
                break;
            case 'address':
                setIsAddFoucsed(true);
                break;
            case 'number':
                setIsNumFocused(true);
                break;
            case 'nature':
                setIsNatureFocued(true);
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
            case 'address':
                setIsAddFoucsed(false);
                break;
            case 'number':
                setIsNumFocused(false);
                break;
            case 'nature':
                setIsNatureFocued(false);
                break;
            default:
                break;
        }
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.recOne}>
                <Text style = {styles.headOne}>EMERGENCY ALERT</Text>
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
                            value={address}
                            onChangeText={(text) => setAddress(text)}
                            placeholder = {(isAddFocused || address) ? '': 'Address'}
                            placeholderColor = "#888"
                            textAlign= "center"
                            onFocus = {() => handleFocus('address')}
                            onBlur = {() => handleBlur('address')}
                            />
            <TextInput  style={styles.textField}
                            value={number}
                            textAlign= "center"
                            onFocus = {() => handleFocus('number')}
                            onBlur = {() => handleBlur('number')}
                            onChangeText={(text) => setNumber(text)}
                            placeholder = {(isNumFocused || number) ? '': 'Phone Number'}
                            placeholderColor = "#888" />

            <TextInput  style={styles.textField}
                            value={nature}
                            textAlign= "center"
                            onFocus = {() => handleFocus('nature')}
                            onBlur = {() => handleBlur('nature')}
                            onChangeText={(text) => setNature(text)}
                            placeholder = {(isNatureFocused || nature) ? '': 'Nature'}
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
})

export default Form;