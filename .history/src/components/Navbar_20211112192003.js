import { AuthContext } from "contexts/AuthContext";
import { useContext } from "react";
import Logo from "assets/images/iconbot.png";
const Navbar = () => {
    const {
        authState: {
            user: { username },
        },
    } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="navbar-left flex items-center">
                <box-icon name="menu" color="#ffffff"></box-icon>
                <div className="search-form flex relative items-center ml-3">
                    <input
                        type="search"
                        name=""
                        className="bg-transparent text-white border-[1px] border-solid border-[#4C4C4C] rounded-[10px] outline-none py-3 pl-10 pr-3 "
                    />
                    <box-icon
                        name="search-alt"
                        rotate="90"
                        color="#ffffff"
                        class="absolute ml-3"
                    ></box-icon>
                </div>
                <div className="notify ml-3">
                    <box-icon
                        type="solid"
                        name="bell"
                        color="#ffffff"
                    ></box-icon>
                </div>
            </div>
            <div className="navbar-right flex items-center">
                <div className="user_name text-white font-medium">{username}</div>
                <div className="avatar flex items-center ml-3">
                    <img
                        className="w-12 h-12 border rounded-full border-gray-200"
                        src="https://via.placeholder.com/50x50"
                        alt=""
                    />
                    <box-icon
                        name="chevron-down"
                        color="#ffffff"
                        class="ml-1"
                    ></box-icon>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
