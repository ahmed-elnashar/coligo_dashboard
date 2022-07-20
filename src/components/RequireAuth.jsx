import React from 'react';
import { useSelector } from 'react-redux';
import LogIn from '../pages/LogIn';

export default function RequireAuth(WrappedComponent) {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  return function (props) {
    if (loggedIn) {
      return <WrappedComponent {...props} />;
    }
    return <LogIn />;
  };
}