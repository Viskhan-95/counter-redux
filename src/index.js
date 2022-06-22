import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  number: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment' : 
    return {
      ...state,
      number: state.number + 1
    }
    case 'decrement' : 
    return {
      ...state,
      number: state.number - 1
    }
    default: return state;
  }
}

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

