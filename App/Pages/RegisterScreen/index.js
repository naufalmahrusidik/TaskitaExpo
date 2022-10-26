import *  as React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { PrimaryButton } from '../../Componets'

export default RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                animated={true}
                backgroundColor="#131B63" />

            <Text style={styles.headerText}>Register</Text>
            <Text style={styles.BodyText}>Please input your valid data.</Text>

            <TextInput style={[styles.inputStyle, { marginTop: 80 }]}
                placeholder="Full Name" />
            <TextInput style={[styles.inputStyle]}
                placeholder="Email" />
            <TextInput style={[styles.inputStyle]}
                placeholder="Password"
                secureTextEntry={true} />

            <PrimaryButton
                customeStyle={styles.btnRegisterStyle}
                title="REGISTER"
                onPress={() => navigation.navigate("RegisterSuccessScreen")} />

            <View style={styles.footherText}>
                <Text style={styles.smallFootherText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.smallFootherTextRight}>Login here!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footherText2}>
                <Text style={styles.smallFootherText}>By signing up, you are agree with our </Text>
                <Text style={styles.smallFootherTextRight}>Terms & Conditions</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        alignContent: 'center',
        backgroundColor: '#131B63'
    },
    headerText: {
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
        marginTop: 15,
        borderWidth: 1,
        paddingLeft: 30,
        borderRadius: 50,
        borderColor: '#695D91',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#695D91'
    },
    btnRegisterStyle: {
        marginTop: 40
    },
    footherText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 35
    },
    smallFootherText: {
        fontFamily: 'Roboto-Light',
        fontSize: 10,
        color: 'white',
    },
    smallFootherTextRight: {
        fontFamily: 'Roboto-Light',
        fontSize: 10,
        color: 'white',
        marginLeft: 5,
        textDecorationLine: 'underline'
    },
    footherText2: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 3
    }
})