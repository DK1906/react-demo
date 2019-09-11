import { statement } from "@babel/template";
import { CHANGEMSG } from "../actions";


export const msg =(state='ososososso',action)=>{
    switch(action.type){

        case CHANGEMSG:
            return action.msg;
            break;


        default:
            return state;
            break;
    }
}