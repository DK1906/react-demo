import { INCREMENT, DECREMENT ,ADD} from "../actions";




// 初始化的state 值 
const defaultState = 1906;

export const count = (state=defaultState,action)=>{
    switch(action.type){
        case 'COUNTADD' :
            return ++state;
            break;

       case 'countDesc' :
                return state-=action.count;
                break;

        case INCREMENT :
            return state+=action.num;
            break;

        case DECREMENT:
            return state-=action.payload;
            break;

            case ADD:
                return ++state;
                break;

                default:
                        return state;
                        break;
    }
}