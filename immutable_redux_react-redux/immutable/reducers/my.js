import immutable from 'immutable';
import { DELSAY } from '../actions';


const defaultState = immutable.fromJS({
    say: '中秋节快乐'

})


export const my = (state = defaultState, action) => {
    switch (action.type) {
        case DELSAY:
            return state.delete('say' )

        default:
            return state;
            break;
    }
}