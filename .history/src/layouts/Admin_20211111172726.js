import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "boxicons";

import AuthContextProvider from "contexts/AuthContext";
import Auth from "views/Auth";
import ProtectedRoute from "components/routing/ProtectedRoute";

const Admin = () => {
    return (
        <AuthContextProvider>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        render={(props) => (
                            <Auth {...props} authRoute="login" />
                        )}
                    />
                    <ProtectedRoute />
                </Switch>
            </Router>
        </AuthContextProvider>
    );
};

export default Admin;
