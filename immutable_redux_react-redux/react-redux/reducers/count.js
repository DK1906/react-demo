import { ADDCOUNT, COUNTDESC } from "../actions";






export const count = (state=1906,action)=>{
console.log(action)
switch(action.type){
    case ADDCOUNT:
            return state+=action.num;
            break;
    case COUNTDESC:
        return state-=action.num;
        break;

    default:
        return state;
        break;
}
}