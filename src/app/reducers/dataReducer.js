import {SET_DATA,DEL_POST} from '../types';

const initialState = {
    posts : []
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA :
            return {...state, posts: state.posts.concat([action.payload])}
        case DEL_POST :
            return {...state, posts: state.posts.filter( el => el.id !== action.payload)}
        default: return state
    }
}