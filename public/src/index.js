import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';

import App from './App';
import Splash from './components/Splash';
import Timelapses from './components/Timelapses';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store} history={hashHistory}>
      <Router>
        <Route path="/" component={App}>
          <Route path="splash" component={Splash} />
          <Route path="timelapses" component={Timelapses} />
        </Route>
      </Router>
    </Provider>,
  document.getElementById('root')
);
