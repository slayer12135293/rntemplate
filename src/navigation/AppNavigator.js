import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginScreen from '../screens/login'

export default createAppContainer(
    createSwitchNavigator({
        Login: LoginScreen,
    }, { headerMode: 'none' })
)
