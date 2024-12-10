import React, { ReactNode, FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../helpers/Cookies';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface RouteProps {
    children: JSX.Element;
}

export const ProtectedRoute: FunctionComponent<RouteProps> = ({ children }) => {
    const checkAuthentication = (): boolean => {
        try {
            const token = getCookie("authToken") as string;
            const decoded = jwtDecode<JwtPayload>(token);
            console.log(decoded);
            if(!decoded || !decoded.exp) return false;

            const expiration = decoded.exp * 1000;
            const now = Date.now();

            return now < expiration;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    if (!checkAuthentication()) {
        return <Navigate to="/login" />;
    }
    return children;
};
