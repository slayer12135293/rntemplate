import React from 'react'
import { useSelector } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen  from '../screens/home'
import SettingScreen  from '../screens/setting'
import LoginScreen from '../screens/login'
import DrawerContent from '../components/DrawerContent'

import colors from '../constants/colors'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    const isLoggedIn = useSelector(state => state.login.isloggedIn)
    return(
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Home"
                drawerStyle={{
                    backgroundColor:colors.WHITE,
                }}
                drawerContent={DrawerContent}
            >
                {isLoggedIn ? 
                    <> 
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="Setting" component={SettingScreen} />
                    </> : 
                    <Drawer.Screen name="Login" component={LoginScreen} /> }                
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
  
export default DrawerNavigator
