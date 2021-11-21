import React, { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import { NavLink } from "react-router-dom";
import Logo from "assets/images/iconbot.png";

const Sidebar = ({active}) => {
    const { logoutUser } = useContext(AuthContext);
    const logout = () => {
        logoutUser();
    };
    return (
        <div className={ active ? "sidebar" : "sidebar active"}>
            <div className="logo mb-4">
                <img src={Logo} alt="" className="w-[100px]" />
            </div>
            <div className="menu_item flex flex-col flex-1 justify-start items-center">
                <NavLink
                    exact
                    to="/"
                    className="rounded-[5px] duration-300 p-2 flex m-3 w-full text-white"
                    activeClassName="active"
                >
                    <box-icon
                        name="chat"
                        type="solid"
                        color="#ffffff"
                        class="mr-[5px]"
                    ></box-icon>
                    Message
                </NavLink>
                <NavLink
                    exact
                    to="/intents"
                    className="rounded-[5px] duration-300 p-2 flex m-3 w-full text-white"
                    activeClassName="active"
                >
                    <box-icon
                        name="pencil"
                        type="solid"
                        color="#ffffff"
                        class="mr-[5px]"
                    ></box-icon>
                    Intents
                </NavLink>
            </div>
            <div className="logout">
                <button onClick={logout} className="hover:bg-white hover:text-black text-white p-[5px] rounded-[5px] flex items-center">
                    <box-icon name="log-out" class="fill-current"></box-icon>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
