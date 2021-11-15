import React, { useState, useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import Modal from "components/Modal";
import AlertMessage from "components/AlertMessage";

const FormLogin = () => {
    const [isShowing, setIsShowing] = useState(false);
    function toggle() {
        setIsShowing(!isShowing);
    }
    //context
    const { loginUser } = useContext(AuthContext);

    //route
    const history = useHistory();

    //state
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const [alert, setAlert] = useState(null);

    const { username, password } = loginForm;

    const onChangeLoginForm = (event) =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

    const onSubmitLoginForm = async (event) => {
        event.preventDefault();
        try {
            const loginData = await loginUser(loginForm);
            if (loginData.success) {
                // history.push("/");
            } else {
                setAlert({ message: loginData.message, type: "danger" });
                toggle();
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <Modal isShowing={isShowing}>
                <AlertMessage hide={toggle} info={alert} />
            </Modal>
            <h3 className="heading">Login</h3>
            <p className="desc">❤️❤️❤️</p>
            <div className="spacer"></div>
            <div className="form-group">
                <label className="form-label">Username</label>
                <input
                    id="username"
                    name="username"
                    rules="required"
                    type="text"
                    placeholder="Enter username"
                    className="form-control"
                    value={username}
                    onChange={onChangeLoginForm}
                />
                <span className="form-message"></span>
            </div>

            <div className="form-group">
                <label className="form-label">Password</label>
                <input
                    id="password"
                    name="password"
                    rules="required|min:3"
                    type="password"
                    placeholder="Enter password"
                    className="form-control"
                    value={password}
                    onChange={onChangeLoginForm}
                />
                <span className="form-message"></span>
            </div>
            <button className="form-submit" onClick={onSubmitLoginForm}>
                Login
            </button>
        </div>
    );
};

export default FormLogin;
