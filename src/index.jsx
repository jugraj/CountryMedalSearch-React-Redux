// react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// hot reload for development
import { AppContainer } from 'react-hot-loader';

import App from './App';

import './assets/scss/style.scss';

import rootReducer from './reducers';

// const store = createStore(rootReducer);
const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
