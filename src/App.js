import React, { useEffect } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import './scss/style.scss';

// Pages
import {
  Login,
  Page404,
  Page500,
  ResetPassword,
  ChangePassword,
  TripsView
} from './pages';

// Containers
import TheLayout from './containers/TheLayout';

import profileActions from './pages/Auth/Profile/store/actions';
import { authTokenSync, getAuthToken } from './helpers/authToken';
import { checkLoggedPath } from './helpers/routesHelper';
import history from './utils/history';

const App = props => {
  useEffect(() => {
    const { getUserProfile, authTokenSync } = props;
    authTokenSync();

    const token = getAuthToken();

    if (token) {
      getUserProfile();
      checkLoggedPath();
    }
  }, []);

  return (
    <Router history={history}>
        <Switch>
          <Route path="/login" name="Login Page" render={() => <Login />} />
          <Route path="/forgot-password" ame="Reset Password" render={() => <ResetPassword />} />
          <Route path="/change-password" name="Change Password" render={props => <ChangePassword {...props} />} />
          <Route path="/404" name="Page 404" render={() => <Page404 />} />
          <Route path="/500" name="Page 500" render={() => <Page500 />} />
          <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
        </Switch>
    </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: () => dispatch(profileActions.getProfileInfo()),
    authTokenSync: () => dispatch(authTokenSync())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
