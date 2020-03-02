import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    Dimensions,    
    ActivityIndicator,
    Image as RNImage,
    KeyboardAvoidingView,
} from 'react-native'
import * as actions from '../../actions/loginActions'

import { Button, Icon, Input,Text } from 'react-native-elements'

import { useSelector, useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import whiteChoco from '../../assets/images/choco-wm.png'
import SplashScreen from 'react-native-splash-screen'
import colors from '../../constants/colors'

const window = Dimensions.get('window')

const LoginScreen = ({ navigation: { navigate } }) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.login.isloggedIn)
    const errorMsg = useSelector(state => state.login.error)
    const isLoading = useSelector(state => state.login.isLoading)
    useEffect(() => {
        SplashScreen.hide()  
        dispatch(actions.loginFromStorage())
    }, [])
    // useEffect(()=>{
    //     if (isLoggedIn) {
    //         navigate('Setting')
    //     }
    // })
    
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const loginVerify = () => {  
        dispatch(actions.login(username, password))
    }
    return(
        // <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>   
        <KeyboardAvoidingView style={styles.container}>         
          
            <RNImage source={whiteChoco} style={styles.logo} />               
            <Input
                placeholder='Username'
                leftIcon={
                    <Icon
                        name='account'
                        type='material-community'
                        size={24}
                        color='#00aced'
                    />
                }
                onChangeText={username=> setUsername(username)}
                    
            />
            <Input
                placeholder='Password'
                leftIcon={
                    <Icon
                        name='key'
                        type='material-community'
                        size={24}
                        color='#00aced'
                    />
                }
                secureTextEntry
                containerStyle={{ marginTop:10 }}
                onChangeText={psw => setPassword(psw)}
            />
            <Text style={{ color:colors.RED, marginTop:10 }}>{errorMsg}</Text>

            {isLoading ? <ActivityIndicator/> : <></>}

            <Button                    
                title="login"
                type="solid"
                containerStyle= {{ width: '96%', marginTop:30 }}
                onPress={()=>loginVerify()}
                disabled= {username === '' || password === ''}
            />   

            {/* <Button onPress={() => navigate('Home')} title="home" /> */}

            {/* <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                >
                    Login with Facebook
                </Icon.Button>   */}
           
        </KeyboardAvoidingView>
        // </KeyboardAwareScrollView>
        
    )
}
const IMAGE_HEIGHT = window.width / 2
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },

    logo: {
        height: IMAGE_HEIGHT,
        resizeMode:'contain',
        marginBottom: 20,
    },
})
export default LoginScreen
