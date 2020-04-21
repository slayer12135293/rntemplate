import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    Dimensions,    
    ActivityIndicator,
    Image as RNImage,
    KeyboardAvoidingView,
    Alert,
} from 'react-native'
import * as actions from '../../actions/loginActions'

import { Button, Icon, Input,Text } from 'react-native-elements'

import { useSelector, useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import whiteChoco from '../../assets/images/choco-wm.png'
import SplashScreen from 'react-native-splash-screen'
import colors from '../../constants/colors'
import { LoginButton, AccessToken, LoginManager, GraphRequestManager, GraphRequest } from 'react-native-fbsdk'

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

    const fbAuth = async () => {     
        try {
            const response = await LoginManager.logInWithPermissions([ 'public_profile', 'email', 'user_location' ])
            if (response.isCancelled) {
                console.log('Login cancelled')
            } else {
                console.log(
                    'Login success with permissions: ' +
                    response.grantedPermissions.toString()
                )
                    
                const tokenResponse = await AccessToken.getCurrentAccessToken()
                 
                const responseInfoCallback = (error, result) => {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log(result)
                    }
                }
                
                const infoRequest = new GraphRequest(
                    '/me',
                    {
                        accessToken: tokenResponse.accessToken,
                        parameters: {
                            fields: {
                                string: 'email,name,first_name,middle_name,last_name, birthday, link, location',
                            },
                        },
                    },
                    responseInfoCallback
                )
      
                // Start the graph request.
                new GraphRequestManager().addRequest(infoRequest).start()

            }
        } catch (error) {
            console.log('Login fail with error: ' + error)
        }
        
    }

    const fbLogout = () => {
        LoginManager.logOut()
        console.log('logged out now')
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

            <LoginButton
                //onLoginFinished={ (error, data) => fbLoginFinished(error, data)}
               
                onLogoutFinished={() => console.log('logout.')}/>

            <Button                    
                title="login with facebook"
                type="solid"
                containerStyle= {{ width: '96%', marginTop:30 }}
                onPress={()=>fbAuth()}
            />  
            <Button
                title="logout"
                type="solid"
                containerStyle= {{ width: '96%', marginTop:30 }}
                onPress={()=>fbLogout()}
            />

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
