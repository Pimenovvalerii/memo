import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { thunk, animeteMiddleware} from './middleware';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk,animeteMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;