import { CHANGEWORD, GETMVASYNC ,CHANGEWORDASYNC} from "../actions";

const defaultState = {
    word:'hello',
    mv:[]
}

export const data = (state=defaultState,action)=>{
    switch(action.type){
        case CHANGEWORD :
            return {...state,word:action.word};
            break;
        case CHANGEWORDASYNC:
                return {...state,word:action.word};
           break;

           case  'changeMvAsync' :
               return {...state,mv:action.mv}
               break;

            default:
                return state;
            break;
    }
}