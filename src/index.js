import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/base.css';
import './assets/style.css';
import Main from './Pages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import Landing from './Pages/Landing/Landing'
import Login from './Pages/Login'
const store = configureStore();
const rootElement = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route path="/login" component={Login}/>
          <Component />
        </Switch>
      </BrowserRouter>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept('./Pages/Main', () => {
    const NextApp = require('./Pages/Main').default;
    renderApp(NextApp);
  });
}

serviceWorker.register();

