import React from 'react';
import ReactDOM from 'react-dom';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//persistence
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { PersistGate } from "redux-persist/integration/react";
//alert
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
//custom
import rootReducer from './reducers';
import App from './App';
import './index.css';


//configureStore
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['driver']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

// export default {store, persistor};

const options = {
    
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    offset: '50px',
    transition: transitions.SCALE
}

// Option effect for AlertProvider

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
