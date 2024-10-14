import React, { ReactNode, FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../helpers/Cookies';

interface RouteProps {
    children: JSX.Element;
}

export const ProtectedRoute: FunctionComponent<RouteProps> = ({ children }) => {
    const checkAuthentication = (): boolean => {
        return getCookie("tokenLibrary") !== null;
    }

    if (!checkAuthentication()) {
        return <Navigate to="/login" />;
    }
    return children;
};
