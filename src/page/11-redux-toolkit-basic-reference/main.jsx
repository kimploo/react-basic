// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import store from './app/store';
// import { Provider } from 'react-redux';

// ReactDOM.render(
// <Provider store={store}>
//   <App />
// </Provider>,
//   document.getElementById('root')
// );

// store: redux state "유일한 하나의 상태"

import { Provider } from 'react-redux';
import store from './store';
import App from './App'

export default function Page() {
  return <>
    {/* React Context */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
}
