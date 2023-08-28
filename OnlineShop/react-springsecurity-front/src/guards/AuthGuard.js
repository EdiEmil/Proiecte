import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const AuthGuard = (props) => {
  const children = props.children;
  const roles = props.roles; 

  const currentUser = useSelector(state => state.user);

  const authorize = () => {
    if(!currentUser) {
        return (<Navigate to={{pathname:'/login'}}/>);
    }

    if(roles?.indexOf(currentUser.role) === -1) { // Admin are indexul 0 si User are 1, pentru ca in ordinea asta sunt date ca parametrii in App.js
        return (<Navigate to={{pathname:'/401'}}/>);
    }

    return (children);
  };


  return (authorize());
};

