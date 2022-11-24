import * as React from 'react';
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image, Text, SafeAreaView, StyleSheet, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { gmail, facebook, twitter } from '../../assets'
import { PrimaryButton } from '../../Componets'
import { setId, setEmail, setNama } from '../../reducer/UserReducer'
import { useDispatch } from 'react-redux'

export default LoginScreen = ({ navigation }) => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [IsLoading, onChangeLoading] = React.useState(false);
    const [isError, onError] = React.useState(false);
    const [message, onSetMessage] = React.useState(null);
    const dispatch = useDispatch()

    const onCheckLogin = () => {
        onChangeLoading(true)
        onError(false)
        axios.post('https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/findOne', {
            "dataSource": "Cluster0",
            "database": "app_taskita",
            "collection": "member",
            "filter": { "email": email, "password": password }
        }, {
            headers: {
                'api-key': 'zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC'
            }
        }).then(res => {
            if(res.data.document != null){
                onError(false)
                dispatch(setId(res.data.document._id))
                dispatch(setNama(res.data.document.name))
                dispatch(setEmail(res.data.document.email))

                navigation.replace('MainScreen')
            }else{
                onSetMessage('invalid username and password')
                onError(true)
            }
        }).catch(err => {
            onError(true)
            onSetMessage(err.message)
            console.log(err)
        }).finally(() => {
            onChangeLoading(false)
        })
    }

    const ErrorMessage=()=>{
        if(isError){
            return <Text style={{color:'red', marginTop:10, textAlign:'center'}}>{message}</Text>
        }else{
            return null
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                animated={true}
                backgroundColor="#131B63" />

            <Text style={styles.HeaderText}>Login</Text>
            <Text style={styles.BodyText}>Please login to your account</Text>

            <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                value={email}
                onChangeText={onChangeEmail} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={onChangePassword} />

            <PrimaryButton
                isLoading={IsLoading}
                customeStyle={styles.btnLoginStyle}
                title="LOGIN"
                onPress={() => onCheckLogin()} />

            <ErrorMessage/>    

            <Text style={styles.BodyText1}>Forgot Password?</Text>
            <Text style={styles.BodyText2}>or login with</Text>

            <View style={styles.containericon}>
                <Image style={styles.gmailicon} source={gmail} />
                <Image style={styles.gmailicon} source={facebook} />
                <Image style={styles.gmailicon} source={twitter} />
            </View>

            <View style={styles.footherText}>
                <Text style={styles.BodyText3}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.BodyText3b}> Create new now</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footherText2}>
                <Text style={styles.BodyText4}>By signing up, you are agree with out</Text>
                <Text style={styles.BodyText4b}> Terms & Conditions</Text>
            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        alignContent: 'center',
        backgroundColor: '#131B63'
    },
    HeaderText: {
        marginTop: 10,
        fontSize: 73,
        fontFamily: 'Roboto-Light',
        color: 'white'
    },
    BodyText: {
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'Roboto-Light',
        color: 'white'
    },
    inputStyle: {
        height: 50,
        marginTop: 20,
        borderWidth: 1,
        paddingLeft: 30,
        borderRadius: 50,
        borderColor: '#695D91',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#695D91'
    },
    btnLoginStyle: {
        marginTop: 40,
    },
    BodyText1: {
        marginTop: 10,
        fontSize: 13,
        textAlign: 'right',
        fontFamily: 'Roboto-Light',
        color: 'white'
    },
    BodyText2: {
        marginTop: 30,
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        color: 'white'
    },
    containericon: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: 'center',
        marginRight: -15
    },
    gmailicon: {
        marginRight: 15
    },
    footherText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    BodyText3: {
        marginTop: 30,
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        color: 'white'
    },
    BodyText3b: {
        marginTop: 30,
        fontSize: 10,
        textDecorationLine: "underline",
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        color: 'white'
    },
    footherText2: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 1
    },
    BodyText4: {
        marginTop: 5,
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        color: 'white'
    },
    BodyText4b: {
        marginTop: 5,
        fontSize: 10,
        textDecorationLine: "underline",
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        color: 'white'
    },
});