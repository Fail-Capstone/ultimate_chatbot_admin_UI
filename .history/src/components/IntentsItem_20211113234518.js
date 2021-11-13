import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "components/Modal";
import DeleteItem from "components/DeleteItem";
const IntentsItem = (props) => {
    const [isShowing, setIsShowing] = useState(false);
    function toggle() {
        setIsShowing(!isShowing);
    }
    return (
        <div className="border-b-[1px] border-[#dadada] border-solid mb-[10px] pb-[10px] flex justify-between">
            {props.value.name}
            <div className="flex justify-between min-w-[100px]">
                <span className="text-[#1000ff] font-bold mx-2">Train</span>
                <NavLink to={`intents/edit/${props.value._id}`}>
                    <box-icon
                        name="edit"
                        type="solid"
                        color="#00d44c"
                        class="mx-2"
                    ></box-icon>
                </NavLink>
                <button onClick={toggle}>
                    <box-icon
                        name="trash"
                        type="solid"
                        color="#ff0000"
                        class="mx-2"
                    ></box-icon>
                </button>
                <Modal isShowing={isShowing}>
                    <DeleteItem hide={toggle} props={props}/>
                </Modal>
            </div>
        </div>
    );
};

export default IntentsItem;
