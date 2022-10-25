import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';


import storage from "redux-persist/lib/storage";
	const persistConfig = {
    key:"root",
    storage,
    blacklist: ["productsStore", "productDetailStore"]
}





const middlewares = [process.env.NODE_ENV === "developmen" && logger, thunk].filter(Boolean);

const ChromeDevTools = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancedCompose = ChromeDevTools(applyMiddleware(...middlewares));


const initialState = {};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, initialState, enhancedCompose);

export const persistor = persistStore(store);
