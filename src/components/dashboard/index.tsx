import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from '../404'
import Header from './Header'
// import Background from './Background'
import Loading from './Loading'

import paths from '@constants/paths';
import Login from '@containers/login';

import './styles.less';

export default function Dashboard() {
  return (
    <Router>
      <div className="h-screen">
        <Suspense fallback={<Loading />}>
          {/* <Switch> */}
          <Route
            path="/login"
            component={React.lazy(() => import('../../containers/login'))}
          />
          {/* </Switch> */}
        </Suspense>

        {location.pathname === '/login' ? null : <Header />}

        {location.pathname === '/login' ? null : (
          <div className="app-content overflow-auto">
            {/* <Background /> */}

            <div className="mx-auto w-root">
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route
                    path="/user"
                    component={React.lazy(
                      () => import('../../containers/user')
                    )}
                  />

                  <Route
                    path="/bbs"
                    component={lazy(() => import('../../containers/bbs'))}
                  />
                  <Route
                    path="/index"
                    component={React.lazy(() => import('../../containers/bbs'))}
                  />

                  <Route
                    path="/say"
                    component={lazy(() => import('../../containers/say'))}
                  />

                  <Route
                    path="/new"
                    component={lazy(() => import('../../containers/new'))}
                  />

                  <Route
                    path="/backstage"
                    component={lazy(() => import('../../containers/backstage'))}
                  />

                  <Route path="/" render={() => <NotFound />} />
                </Switch>
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}
