import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './assets/base.css';
import './assets/style.css';
import Main from './Pages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import Landing from './Pages/Landing/Landing'
const store = configureStore();
const rootElement = document.getElementById('root');



const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Component />
        </Switch>
      </HashRouter>
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

