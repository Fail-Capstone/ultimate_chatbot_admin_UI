import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "boxicons";

import Routers from "Routers";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";

const Admin = () => {
    return (
        <Router>
            <Switch>
                <Route
                    render={(props) => (
                        <div className={`layout`}>
                            <Sidebar {...props} />
                            <div className="main">
                                <Navbar />
                                <div className="main-content mt-4">
                                    <Routers />
                                </div>
                            </div>
                        </div>
                    )}
                />
            </Switch>
        </Router>
    );
};

export default Admin;
