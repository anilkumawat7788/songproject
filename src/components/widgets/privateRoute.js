import { Route, Navigate } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute({ children }) {
    const auth = localStorage.getItem('apiToken');
    return auth ? children : <Navigate to="/login" />;
  } 