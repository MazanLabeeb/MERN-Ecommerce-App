import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";




const middlewares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);

const ChromeDevTools = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancedCompose = ChromeDevTools(applyMiddleware(...middlewares));


const initialState = {};

export const store = createStore(rootReducer, initialState, enhancedCompose);