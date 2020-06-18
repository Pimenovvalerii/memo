import {DEL_POST} from '../types';
import {showAlertDeletPost} from '../actions';


function animeteMiddleware(state) {
  return function(next) {
    return function(action) {
      if(action.type === DEL_POST) {
        const {data:{posts}} = state.getState();
        const elem = posts.filter( el => el.id === action.payload );

        if(elem[0].title === 'php') {
            return state.dispatch(showAlertDeletPost('PHP A GOD LANGUIG'));
        };
      };

      return next(action);
    };
  };
};

export default animeteMiddleware;