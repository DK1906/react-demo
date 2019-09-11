import {combineReducers} from 'redux-immutable';




import {data} from './data'
import {my} from './my'

export const reducers = combineReducers({ // immutable 对象 
   data,
   my
})

