import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Modal from 'react-modal';
import { createStore , applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux'; 
import reducer from './Redux/reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
 
Modal.setAppElement('#root');
 ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
