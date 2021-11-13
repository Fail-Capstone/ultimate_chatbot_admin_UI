// import FormLogin from "components/FormLogin";
import { AuthContext } from "contexts/AuthContext";
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import Spinner from "components/Spinner";
import Routers from "Routers";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);
    if (authLoading) return <Spinner />;
    return (
        <Route
            render={(props) =>
                isAuthenticated ? (
                    <div className={`layout`}>
                        <Sidebar {...props} />
                        <div className="main">
                            <Navbar />
                            <div className="main-content mt-4 h-auto overflow-auto">
                                <Routers />
                            </div>
                        </div>
                    </div>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
