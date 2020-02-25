
import React from 'react'
import {
    Platform,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native'

import { Provider } from 'react-redux'
import store from './store'
import AppNavigator from './navigation/AppNavigator'
import { ThemeProvider, colors } from 'react-native-elements'

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
                    <AppNavigator />
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
