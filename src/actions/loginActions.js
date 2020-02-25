import { LOGIN } from '../actionTypes/loginTypes'

const login = (userName, password) => dispatch => {
    dispatch({
        type: LOGIN,
        payload: { userName, token:'asdfasdf', user: { userName,password } },
    })
}

export { login }
