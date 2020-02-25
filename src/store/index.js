import {
    createStore, combineReducers, compose, applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import  loginReducer  from '../reducers/loginReducer'

const rootReducer = combineReducers({
    login: loginReducer,
})

const initialState = {}

const appliedMiddleWares = __DEV__ ? applyMiddleware(thunk, logger) : applyMiddleware(thunk) //eslint-disable-line
const store = createStore(rootReducer, initialState, compose(appliedMiddleWares))

export default store
