import {SET_DATA, DEL_POST, CHECK_INPUT, SHOW_ALERT, HIDE_ALERT, SHOW_DEL_POST, HIDE_DEL_POST} from './types';

export function createPosts(post) {
    return {
        type: SET_DATA,
        payload: post
    }
}

export function deletePost(id) {
    return {
        type:DEL_POST,
        payload: id
    }
}

export function emptyInput() {
    return {
        type: CHECK_INPUT
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload:text
        })

        const time = setTimeout( ()=> {
            dispatch(hideAlert())
            clearTimeout(time)
        },2000)
    } 
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function showAlertDeletPost(text) {
    return dispatch => {
        dispatch({
            type: SHOW_DEL_POST,
            payload:text
        })

        const time = setTimeout( ()=> {
            dispatch(hideAlertDeletPost())
            clearTimeout(time)
        },2000)
    } 
}

export function hideAlertDeletPost() {
    return {
        type: HIDE_DEL_POST
    }
}