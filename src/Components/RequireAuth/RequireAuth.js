import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const RequireAuth = ({children}) => {
  const [user, loading, error] =useAuthState(auth);
  console.log(user);
  let location = useLocation();

  if (loading) {
    return <Spinner animation='border' variant='primary'></Spinner>
      
  }
  if (!user) {
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}


export default RequireAuth;