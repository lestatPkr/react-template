import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger"
// import catalog from './modules/catalog';
// import cart from './modules/cart';
// import order from './modules/order';

export default function store(){
  const appReducer = combineReducers({
        // catalog,
        // cart,
        // order
    });
    let enhancer;
    if(process.env.NODE_ENV === 'development'){
        enhancer = compose(
        applyMiddleware(thunk, logger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
    }else{
        enhancer = applyMiddleware(thunk);
    }
   
    return createStore(appReducer, enhancer);
}
