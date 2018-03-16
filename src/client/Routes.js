import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import RouterStore from 'stores/RouterStore'
import App from 'views/App'
import Home from 'views/Home'
import Applications from 'views/Applications'
import { syncHistoryWithStore } from 'mobx-react-router'

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, RouterStore)

const Routes = () =>
  <Router history={history}>
    <App>
      <Route path='/home' component={Home} />
      <Route path='/applications' component={Applications} />
    </App>
  </Router>

export default Routes
