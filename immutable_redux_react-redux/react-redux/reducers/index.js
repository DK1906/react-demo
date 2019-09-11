import {combineReducers} from 'redux'

import {count} from './count'
import {city} from './city'
import {msg } from './msg'


export const reducers = combineReducers({
    count,
    city,
    msg
})