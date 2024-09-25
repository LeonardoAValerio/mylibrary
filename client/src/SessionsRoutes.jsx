import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthSession from "./AuthSession";

export default function SessionsProtecterRoutes({ resource, children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const authSession = new AuthSession(resource);

    useEffect(() => {
        const checkAuthentication = async () => {
            const auth = await authSession.checkAuth();
            setIsAuthenticated(auth); 
        };

        checkAuthentication();
    }, []); 

    if(isAuthenticated === null) {
        return <div> Carregando... </div>
    }else if(isAuthenticated) {
        return children;
    }else {
        return <Navigate to="/entrar"></Navigate>
    }
}