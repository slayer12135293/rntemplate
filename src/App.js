
import React from 'react'
import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native'

import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider, colors } from 'react-native-elements'
import DrawerNavigator from './navigation/MainDrawerNavigator'
import MBottomTabNavigator from './navigation/MBottomTabNavigator'

const theme = {
    colors: {
        ...Platform.select({
            default: colors.platform.android,
            ios: colors.platform.ios,
        }),
    },
}
const App = () => {
    return (       
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}                   
                    {/* <DrawerNavigator/> */}
                    <MBottomTabNavigator/>
                </View>
            </ThemeProvider>
        </Provider>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default App

// import * as React from 'react'
// import { Button, View } from 'react-native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { NavigationContainer } from '@react-navigation/native'
// import SettingScreen  from './screens/setting'

// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button
//                 onPress={() => navigation.navigate('Setting')}
//                 title="Go to notifications"
//             />
//         </View>
//     )
// }

// function NotificationsScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button onPress={() => navigation.goBack()} title="Go back home" />
//         </View>
//     )
// }

// const Drawer = createDrawerNavigator()

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={HomeScreen} />
//                 <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//                 <Drawer.Screen name="Setting" component={SettingScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }
