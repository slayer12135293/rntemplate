import * as actionTypes from '../actionTypes/loginTypes'

const login = (userName, password) => dispatch => {
    
    if (userName == 'Homer' || password === 'Qwertyui') {
        dispatch({
            type: actionTypes.LOGIN,
            payload: { userName, token:'asdfasdf', user: { userName,password } },
        })
        return ''
    } else {
        return 'wrong password'
    }
   
}
const logout = () => dispatch => {
    dispatch({
        type: actionTypes.LOGOUT,
    })
}

export { login, logout }
