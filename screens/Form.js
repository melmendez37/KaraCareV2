import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Form = () => {
    const nav = useNavigation();
    /** set all text fields to be not usable until tapped */
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

    const handleExternalResponder = () => {
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
            <View style = {styles.recOne}/>
            <Text style = {styles.headOne}>EMERGNECY ALERT</Text>
            <TouchableOpacity style = {styles.next} onPress={handleExternalResponder}>

            </TouchableOpacity>

            <TouchableOpacity style = {styles.back} onPress={backScreen}>

            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {width: '100%', height: '100%', backgroundColor: '#00609E'},
    recOne: {width:'100%', height:'100%', left: 0, top:182, backgroundColor: 'white'},
    headOne: {width: '100%', height: 45, textAlign: 'center', top:100, fontFamily:'Montserrat-SemiBold', fontSize:40, color:'white'},
    fieldOne: {width: 250, height: 40, left: -35, top: 0, position: 'absolute', backgroundColor: 'white', borderWidth:1, borderRadius: 5},
    fieldTwo: {width: 250, height: 40, left: -35, top: 0, position: 'absolute', backgroundColor: 'white', borderWidth:1, borderRadius: 5},
    fieldThr: {width: 250, height: 40, left: -35, top: 0, position: 'absolute', backgroundColor: 'white', borderWidth:1, borderRadius: 5},
    fieldFour: {width: 250, height: 40, left: -35, top: 0, position: 'absolute', backgroundColor: 'white', borderWidth:1, borderRadius: 5},
    next: {width: 130, height: 44, left:41, top: 417, backgroundColor:'#B8B7B7', borderWidth:1, borderRadius: 5},
    back: {width: 130, height: 44, left:189, top: 417, backgroundColor:'#B8B7B7', borderWidth:1, borderRadius: 5, color:'white'},

})