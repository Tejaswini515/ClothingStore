import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import measurements from './reducer';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

// const store = createStore(measurements);

// ReactDOM.render(
// <Provider store={store}>
// <App />
// </Provider>,
// document.getElementById('root') as HTMLElement
// );

registerServiceWorker();
