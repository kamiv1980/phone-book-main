import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selAuth } from '../services/profile/selectors';

// export const PrivateRoute = ({ component:Component, auth, ...routeProps }) => {
//
// return (
// <Route {...routeProps}
//   { auth ? <Component/> : <Redirect to="/" /> }
//   />
// )
// }
