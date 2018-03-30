import {SET_FILTER} from './ActionTypes';
import {FilterTypes} from '../Constants';

export default (state = FilterTypes.All, action) => {
    switch (action.type) {
        case SET_FILTER : {
            return action.filter;
        }
        default :
            return state;
    }
}