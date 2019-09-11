
import { combineReducers } from 'redux';

import {count} from './count'
import {city} from './city'
import {data} from './data'








export const reducers = combineReducers({
    count:count,
    city:city,
    data,data
})