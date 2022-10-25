import React from 'react';
import ReactDOM from 'react-dom/client';
import "./bootstrap.min.css";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>

      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
