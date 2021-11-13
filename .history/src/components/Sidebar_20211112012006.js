import React,{ useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import Logo from "assets/images/iconbot.png";

const Sidebar = () => {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    return (
        <div className="sidebar">
            <div className="logo mb-4">
                <img src={Logo} alt="" className="w-[100px]"/>
            </div>
            <div className="menu_item flex flex-col flex-1 justify-start items-center">
                <NavLink
                    exact
                    to='/'
                    className="rounded-[5px] duration-300 p-2 flex m-3 w-full text-white"
                    activeClassName="active"
                >
                    <box-icon
                        name="home"
                        type="solid"
                        color="#ffffff"
                        class="mr-[5px]"
                    ></box-icon>
                    Message
                </NavLink>
                <NavLink
                    exact
                    to='/intents'
                    className="rounded-[5px] duration-300 p-2 flex m-3 w-full text-white"
                    activeClassName="active"
                >
                    <box-icon
                        name="home"
                        type="solid"
                        color="#ffffff"
                        class="mr-[5px]"
                    ></box-icon>
                    Intents
                </NavLink>
            </div>
            <div className="logout">
                <box-icon name="log-out" color="#ffffff"></box-icon>
            </div>
        </div>
    );
};

export default Sidebar;