import immutable from 'immutable';
import { COUNTADD, COUNTDESC ,CHANGECITY, CHANGEWORD} from '../actions';


const defaultState = immutable.Map({
    count: 1906,
    city: '苏州',
    word: ['daydayup']

})



export const data = (state = defaultState, action) => {
    switch (action.type) {
        case COUNTADD:
          return state.update('count',(n)=>{
              return n+1;
          });
          break;

          case COUNTDESC:
              return state.update('count',(n)=>{
                  return n-action.num;
              });
              break;
              case CHANGECITY :
                  return state.update('city',()=>{
                      return action.city;
                  });
                  break;

        case CHANGEWORD:
            return state.update('word',()=>{
                return action.word;
            });
            break;

        default:
            return state;
            break;
    }
}