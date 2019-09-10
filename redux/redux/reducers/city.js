import {CHANGECITY,CHANGEMSG} from '../actions'


const defaultState = '武汉';


export const  city = (state=defaultState,action)=>{
    switch(action.type){
        case CHANGECITY :
            return action.city;
            break;

        case CHANGEMSG :
            return action.msg;
            break;


            
            default:
                return state;
                break;
    }
}