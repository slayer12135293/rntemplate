import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginScreen from '../screens/login'
//import DrawerNavigator from '../navigation/MainDrawerNavigator'

export default createAppContainer(
    createSwitchNavigator({
        //Main: DrawerNavigator,
        Login: LoginScreen,
    }, { headerMode: 'none' })
)
