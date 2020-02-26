// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import LoginScreen from '../screens/login'
// import DrawerNavigator from './MainDrawerNavigator'

// import { createStackNavigator } from '@react-navigation/stack'
// import { NavigationContainer } from '@react-navigation/native'

// const Stack = createStackNavigator()

// const AppNavigator = () => {
//     const isLoggedIn = useSelector(state => state.login.isloggedIn)

//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Navigator>
//                     {isLoggedIn ? (
//                         <>
//                             <Stack.Screen name="Main" component={DrawerNavigator} />
//                         </>
//                     ) : (
//                         <Stack.Screen name="Login" component={LoginScreen} />
//                     )}
//                 </Stack.Navigator>
//             </Stack.Navigator>
//         </NavigationContainer>
       
//     )
// }

// export default AppNavigator
