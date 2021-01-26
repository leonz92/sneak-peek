import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
// import fbConfig from '../config/fbConfig';

const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(rootReducer, middleware);

export default store;
