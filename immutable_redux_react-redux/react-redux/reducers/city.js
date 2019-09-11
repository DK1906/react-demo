import { CHANGECITY } from "../actions";



export const city = (state='武汉',action)=>{
    switch(action.type){
        case CHANGECITY:
            return action.city;
            break;



        default:
            return state;
            break;
    }
}