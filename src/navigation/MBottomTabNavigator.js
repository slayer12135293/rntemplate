import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen  from '../screens/home'
import SettingScreen  from '../screens/setting'
import LoginScreen from '../screens/login'
import LottieScreen from '../screens/lottie'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import colors  from '../constants/colors'

const Tab = createMaterialBottomTabNavigator()

const MBottomTabNavigator = () =>{
    const isLoggedIn = useSelector(state => state.login.isloggedIn)
    return (
        <NavigationContainer>       
            <Tab.Navigator
                initialRouteName="Home"
                activeColor={colors.BLACK}
                inactiveColor={colors.WHITE}
                barStyle={{ backgroundColor: colors.BLUE }}
            >
                {
                    isLoggedIn ? 
                        <>
                            <Tab.Screen 
                                name="Home" 
                                component={HomeScreen}
                                options={{
                                    tabBarLabel: 'Home',
                                    tabBarIcon: () => (
                                        <Icon name="home" color={colors.YELLOW} size={24} />
                                    ),
                                }}
                                
                            />
                            <Tab.Screen 
                                name="Setting" 
                                component={SettingScreen}  
                                options={{
                                    tabBarLabel: 'Settimg',
                                    tabBarIcon: () => (
                                        <Icon name="gear" color={colors.YELLOW} size={24} />
                                    ),
                                }}
                            /> 
                            <Tab.Screen 
                                name="Lottie" 
                                component={LottieScreen}  
                                options={{
                                    tabBarLabel: 'Lottie',
                                    tabBarIcon: () => (
                                        <Icon name="birthday-cake" color={colors.YELLOW} size={24} />
                                    ),
                                }}
                            /> 
                        </> :
                        <Tab.Screen name="Login" component={LoginScreen} />
                }
            
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MBottomTabNavigator
