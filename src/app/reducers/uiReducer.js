import {TOGGLE_MENU, SHOW_ALERT, HIDE_ALERT, SHOW_DEL_POST,HIDE_DEL_POST} from '../types';

const initialState = {
    toggleMenu: false,
    alert: null,
    delePost: null
}

export const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MENU :
            return {state, toggleMenu: true}
        case SHOW_ALERT :
            return {state, alert: action.payload}
        case HIDE_ALERT :
            return {state, alert: null}
        case SHOW_DEL_POST :
            return {state, delePost: action.payload}
        case HIDE_DEL_POST :
            return {state, alert: null}
        default: return state
    }
}