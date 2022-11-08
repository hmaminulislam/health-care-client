import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader) {
        return <div>Loading...</div>
    }
    if(!user) {
       return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default PrivateRoutes;